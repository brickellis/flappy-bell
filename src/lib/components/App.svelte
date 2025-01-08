<script>
  import { Canvas } from "@threlte/core";
  import Scene from "./Scene.svelte";
  import ML from "./ML.svelte";

  let showVideo = true;
  let bottom = 0;
  let top = 0;
  let rightDistance = 0;
  let leftDistance = 0;
  let handBool = null;
  let step = "initialize";
  let timer = Date.now();
  let gameStarted = false;
  let normalizedDistance = 0;
  let score = 0;

  function handleScoreUpdate(event) {
    score = event.detail;
  }

  function handleKeypoints(event) {
    if (!Array.isArray(event.detail.value)) return;
    let keypoint_locs = {};
    if (step == "initialize") {
      let keypoints = "";
      for (let keypoint of event.detail.value) {
        keypoints += `${keypoint.name}: ${keypoint.score.toFixed(2)}<br>`;
        keypoint_locs[keypoint.name] = [keypoint.x, keypoint.y, keypoint.score];
      }
    } else {
      for (let keypoint of event.detail.value) {
        keypoint_locs[keypoint.name] = [keypoint.x, keypoint.y, keypoint.score];
      }
    }
    const distance = (point1, point2) => {
      const dx = point1[0] - point2[0];
      const dy = point1[1] - point2[1];
      return Math.sqrt(dx * dx + dy * dy);
    };

    const rightHand = keypoint_locs["right_wrist"];
    const rightShoulder = keypoint_locs["right_shoulder"];
    const leftHand = keypoint_locs["left_wrist"];
    const leftShoulder = keypoint_locs["left_shoulder"];
    rightDistance = distance(rightHand, rightShoulder);
    leftDistance = distance(leftHand, leftShoulder);

    if (step == "initialize") {
      const keypointsDiv = document.querySelector(".keypoints-display");
      if (keypointsDiv) {
        keypointsDiv.innerHTML = `Right Distance: ${rightDistance.toFixed(2)}<br>Left Distance: ${leftDistance.toFixed(2)}`;
      }
      if (rightDistance < 0.1 && rightShoulder[2] > 0.3 && rightHand[2] > 0.3) {
        step = "clean";
        handBool = "right";
        timer = Date.now();
      } else if (
        leftDistance < 0.1 &&
        leftShoulder[2] > 0.3 &&
        leftHand[2] > 0.3
      ) {
        step = "clean";
        handBool = "left";
        timer = Date.now();
      }
    }
    if (step == "clean" && Date.now() - timer > 1000) {
      const instructionsDiv = document.querySelector(".instructions-display");
      instructionsDiv.innerHTML = "Press the bell!";
      if (handBool == "right") {
        bottom = rightDistance;
      } else {
        bottom = leftDistance;
      }
      step = "press";
      timer = Date.now();
    }
    if (step == "press" && Date.now() - timer > 3000) {
      const instructionsDiv = document.querySelector(".instructions-display");
      instructionsDiv.innerHTML =
        "Press and Clean Distances Locked.<br>Game is starting.";
      if (handBool == "right") {
        top = rightDistance;
      } else {
        top = leftDistance;
      }
      step = "game";
      timer = Date.now();
    }
    if (step == "game" && Date.now() - timer > 1000) {
      const instructionsDiv = document.querySelector(".instructions-display");
      instructionsDiv.innerHTML = score;
      gameStarted = true;
      showVideo = false;
      if (handBool == "right") {
        normalizedDistance = Math.abs(rightDistance / (top - bottom));
      } else {
        normalizedDistance = Math.abs(rightDistance / (top - bottom));
      }
    }
  }
</script>

<ML {showVideo} on:keypoints={handleKeypoints} />
{#if gameStarted}
  <Canvas>
    <Scene {normalizedDistance} on:score={handleScoreUpdate} />
  </Canvas>
{/if}

{#if !gameStarted}
  <div
    class="keypoints-display"
    style="position: absolute; top: 20%; left: 83%; transform: translateX(-50%); color: white; font-size: 2em; text-align: left;"
  >
    Keypoints:
  </div>
{/if}
<div
  class="instructions-display"
  style="position: absolute; top: 3%; left: 50%; transform: translateX(-50%); color: white; font-size: 2em; text-align: center;"
>
  Clean the kettlebell with your preferred hand.
  <br />When the text turns green, press the bell.
  <br />Refresh the page to recalibrate.
</div>
