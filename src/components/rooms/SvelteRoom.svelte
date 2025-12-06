<script lang="ts">
  import { roomStates, toggleRoom } from '../../stores/themeStore';

  export let dayImage: string;
  export let nightImage: string;

  // Subscribe to the store
  $: isDay = $roomStates.svelte === 'day';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div 
  class="relative w-full h-full cursor-pointer overflow-hidden"
  on:click={() => toggleRoom('svelte')}
>
  <img 
    src={nightImage} 
    alt="Svelte Room Night" 
    class="absolute top-0 left-0 w-full h-full object-contain"
  />
  <img 
    src={dayImage} 
    alt="Svelte Room Day" 
    class="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out"
    style:opacity={isDay ? 1 : 0}
  />
</div>
