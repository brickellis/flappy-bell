<script>
  import { onMount } from 'svelte';
  import { Canvas } from '@threlte/core';
  import Scene from './Scene.svelte';
  import Initialize from './Initialize.svelte';
  let score = 0;
  let sceneInitialized = false; 

  function handleScoreUpdate(event) {
    score = event.detail;
  }

  onMount(async () => {
    await new Promise(resolve => {
      sceneInitialized = false; 
      const unsubscribe = Initialize.subscribe(() => {
        sceneInitialized = true;
        unsubscribe(); 
        resolve(); 
      });
    });
  });
</script>

{#if sceneInitialized} 
  <div style="position: absolute; top: 0.5em; left: 0.5em; color: white; z-index: 1; font-size: 2em;">
    Score: {score}
  </div>

  <Canvas>
    <Scene on:score={handleScoreUpdate} /> 
  </Canvas>
{/if}

<Initialize />