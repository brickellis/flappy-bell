<!-- <script>
    import { onMount } from 'svelte';
    import ml5 from 'ml5';

  
    let video;
    let bodyPose;
    let poses = [];
    let bodyParts = [];
  
    onMount(async () => {
      try {
        // Get user media (camera access)
        video = document.createElement('video');
        video.width = 640;
        video.height = 480;
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.play();
  
        // Initialize ml5.js bodyPose model
        bodyPose = ml5.bodyPose('MoveNet');
        bodyPose.on('pose', (results) => {
          poses = results;
        });
  
        // Start pose detection
        bodyPose.detect(video);
      } catch (error) {
        console.error('Error accessing camera or initializing model:', error);
      }
    });
  
  </script>
  
  <div>
    {#if poses.length > 0}
      <h2>Pose Data</h2>
      <ul>
        {#each poses[0].keypoints as keypoint}
          <li>
            console.log(keypoint);
            {keypoint.part}: 
            x: {keypoint.position.x.toFixed(2)}, 
            y: {keypoint.position.y.toFixed(2)}, 
            confidence: {keypoint.score.toFixed(2)}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
  
  <style>
    video {
      width: 640px;
      height: 480px;
    }
  </style> -->