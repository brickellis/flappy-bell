<script>
  import { T, useFrame } from '@threlte/core'
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';


  let blocks = []
  let frameCount = 0
  let cursorY = 0.5
  let score = 0 
  const BLOCK_SPAWN_INTERVAL = 300
  const FLOOR_Y = 0
  const CEILING_Y = 10
  const SPAWN_Z = -40
  const CAMERA_Z = 10
  const BLOCK_SPEED = 0.05
  const dispatch = createEventDispatcher();

  function handleMouseMove(event) {
    cursorY = 1 - 0.95 * (event.clientY / window.innerHeight) - 0.05
  }

  function checkCollision() {
    const cameraY = FLOOR_Y + cursorY * (CEILING_Y - FLOOR_Y)
    for (const block of blocks) {
      const gapCenter = block.y
      const gapSize = 2
      const gapTop = gapCenter + gapSize / 2
      const gapBottom = gapCenter - gapSize / 2

      if (block.z >= CAMERA_Z - 1 && block.z <= CAMERA_Z + 1) {
        if (cameraY < gapBottom || cameraY > gapTop) {
          score = 0 
          dispatch('score', score);
          return true
        }
      }
    }
    return false
  }

  useFrame(() => {
    frameCount++

    if (frameCount % BLOCK_SPAWN_INTERVAL === 0) {
      const blockY = FLOOR_Y + Math.random() * (CEILING_Y - FLOOR_Y)
      blocks = [...blocks, { x: 0, y: blockY, z: SPAWN_Z }]
    }

    blocks = blocks
      .map(block => ({ ...block, z: block.z + BLOCK_SPEED }))
      .filter(block => {
        if (block.z >= CAMERA_Z) {
          score += 1;
          dispatch('score', score);
          return false;
        }
        return true;
      });

    if (checkCollision()) {
      blocks = []
    }
  })

  onMount(() => {
    score = 0;
    dispatch('score', score);
  });
</script>

<svelte:window on:mousemove={handleMouseMove} />

<T.PerspectiveCamera
  makeDefault
  position={[0, FLOOR_Y + cursorY * (CEILING_Y - FLOOR_Y), CAMERA_Z]}
  fov={75}
  on:create={({ ref }) => {
    ref.lookAt(0, FLOOR_Y + 0.5 * (CEILING_Y - FLOOR_Y), 0)
  }}
/>

<T.DirectionalLight position={[5, 5, -15]} intensity={1.5} />
<T.DirectionalLight position={[-5, 5, -15]} intensity={1.5} />
<T.AmbientLight intensity={1.5} />

<T.Mesh position.y={FLOOR_Y} rotation.x={-Math.PI / 2}>
  <T.PlaneGeometry args={[20, 80]} />
  <T.MeshStandardMaterial color="#BB8888" />
</T.Mesh>

<T.Mesh position.y={CEILING_Y} rotation.x={Math.PI / 2}>
  <T.PlaneGeometry args={[20, 80]} />
  <T.MeshStandardMaterial color="#8888BB" />
</T.Mesh>

{#each blocks as block}
  {@const gapCenter = block.y}
  {@const gapSize = 2}
  {@const topHeight = CEILING_Y - (gapCenter + gapSize/2)}
  {@const bottomHeight = gapCenter - gapSize/2 - FLOOR_Y}
  
  <T.Mesh position={[block.x, CEILING_Y - topHeight/2, block.z]}>
    <T.BoxGeometry args={[20, topHeight, 1]}/>
    <T.MeshStandardMaterial color="#8888BB" />
  </T.Mesh>
  
  <T.Mesh position={[block.x, FLOOR_Y + bottomHeight/2, block.z]}>
    <T.BoxGeometry args={[20, bottomHeight, 1]}/>
    <T.MeshStandardMaterial color="#BB8888" />
  </T.Mesh>
{/each}