<script>
  import * as poseDetection from "@tensorflow-models/pose-detection";
  import * as tf from "@tensorflow/tfjs-core";
  import "@tensorflow/tfjs-backend-webgl";
  import { onMount, onDestroy } from "svelte";
  import { createEventDispatcher } from 'svelte';
  
  let videoElement;
  let canvasElement;
  let detector;
  let animationId;
  let isLoading = true;
  let error = null;

  export let modelType = "movenet";
  export let showSkeleton = true;
  export let showPoints = true;
  export let width = 640;
  export let height = 480;
  export let showVideo = true;
  const dispatch = createEventDispatcher();
  const color = "#00ff00";
  const lineWidth = 2;

  function dispatchKeypoints(value) {
    if (!value) return;
    const normalizedKeypoints = value.map((keypoint) => ({
      ...keypoint,
      x: keypoint.x / width,
      y: keypoint.y / height,
    }));
    dispatch('keypoints', { value: normalizedKeypoints });
  }

  async function initializeTensorFlow() {
    width = window.innerWidth * 0.5;
    height = window.innerHeight * 0.8;
    try {
      await tf.ready();
      await tf.setBackend("webgl");
    } catch (e) {
      throw new Error(
        "Failed to initialize TensorFlow.js backend: " + e.message,
      );
    }
  }

  async function initializeDetector() {
    switch (modelType) {
      case "movenet":
        const model = poseDetection.SupportedModels.MoveNet;
        const config = {
          modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
          enableSmoothing: true,
        };
        detector = await poseDetection.createDetector(model, config);
        break;
      default:
        throw new Error(`Unsupported model type: ${modelType}`);
    }
  }

  async function setupCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error(
        "Browser API navigator.mediaDevices.getUserMedia not available",
      );
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width, height },
    });
    videoElement.srcObject = stream;

    return new Promise((resolve) => {
      videoElement.onloadedmetadata = () => {
        resolve(videoElement);
      };
    });
  }

  function drawKeypoints(keypoints, ctx) {
    if (!showPoints) return;
    keypoints.forEach((keypoint) => {
      if (keypoint.score > 0.3) {
        const { x, y } = keypoint;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
      }
    });
  }

  function drawSkeleton(keypoints, ctx) {
    if (!showSkeleton) return;

    const connections = [
      ["left_shoulder", "right_shoulder"],
      ["left_shoulder", "left_elbow"],
      ["right_shoulder", "right_elbow"],
      ["left_elbow", "left_wrist"],
      ["right_elbow", "right_wrist"],
      ["left_shoulder", "left_hip"],
      ["right_shoulder", "right_hip"],
      ["left_hip", "right_hip"]
    ];
    connections.forEach(([first, second]) => {
      const firstKeypoint = keypoints.find((kp) => kp.name === first);
      const secondKeypoint = keypoints.find((kp) => kp.name === second);
      if (
        firstKeypoint &&
        secondKeypoint &&
        firstKeypoint.score > 0.3 &&
        secondKeypoint.score > 0.3
      ) {
        ctx.beginPath();
        ctx.moveTo(firstKeypoint.x, firstKeypoint.y);
        ctx.lineTo(secondKeypoint.x, secondKeypoint.y);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      }
    });
  }

  async function detectPose() {
    if (!detector) return;
    let ctx = null;
    if (showVideo) {
      ctx = canvasElement.getContext("2d");
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(videoElement, 0, 0, width, height);
    }

    let poses = await detector.estimatePoses(videoElement, {
      flipHorizontal: false,
    });
    const keypoint_names = [
      "left_shoulder",
      "right_shoulder",
      "left_wrist",
      "right_wrist",
    ];
    const keypoints = poses[0]?.keypoints.filter((kp) =>
      keypoint_names.includes(kp.name),
    );
    // dispatchKeypoints(2);
    dispatchKeypoints(keypoints);

    if (showVideo) {
        if (keypoints) {
          drawKeypoints(keypoints, ctx);
          drawSkeleton(poses[0]?.keypoints, ctx);
        }
    }

    animationId = requestAnimationFrame(detectPose);
  }

  onMount(async () => {
    try {
      isLoading = true;
      await initializeTensorFlow();
      await initializeDetector();
      await setupCamera();
      videoElement.play();
      isLoading = false;
      detectPose();
    } catch (e) {
      error = e.message;
      console.error("Error:", e);
    }
  });

  onDestroy(() => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    if (videoElement?.srcObject) {
      videoElement.srcObject.getTracks().forEach((track) => track.stop());
    }
  });
</script>

<div class="pose-detection">
  {#if error}
    <div class="error">Error: {error}</div>
  {/if}

  {#if isLoading}
    <div class="loading">Loading pose detection model...</div>
  {/if}

  <!-- svelte-ignore a11y-media-has-caption -->
  <video bind:this={videoElement} playsinline style="display: none;" />
  {#if showVideo}
  <canvas bind:this={canvasElement} {width} {height} />
  {/if}
</div>

<style>
  .pose-detection {
    position: fixed;
    top: 59%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }

  canvas {
    transform: scaleX(-1);
    max-width: 100%;
    max-height: 100vh;
  }

  .error {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: red;
    padding: 1em;
    border: 1px solid red;
    background: white;
    z-index: 100;
    border-radius: 4px;
  }

  .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 1em;
    border-radius: 4px;
    z-index: 100;
  }
</style>