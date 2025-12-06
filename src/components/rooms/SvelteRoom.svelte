<script lang="ts">
  import { roomStates, toggleRoom } from '../../stores/themeStore';

  export let dayImage: string;
  export let nightImage: string;

  // Subscribe to the store
  $: isDay = $roomStates.svelte === 'day';

  const buttons = [
    { id: 'react', img: '/ui/switch-r.webp' },
    { id: 'vue', img: '/ui/switch-v.webp' },
    { id: 'svelte', img: '/ui/switch-s.webp' },
    { id: 'solid', img: '/ui/switch-so.webp' },
  ];
</script>

<div class="relative w-full h-full overflow-hidden">
  <img 
    src={nightImage} 
    alt="Svelte Room Night" 
    class="absolute top-0 left-0 w-full h-full object-contain scale-115"
  />
  <img 
    src={dayImage} 
    alt="Svelte Room Day" 
    class="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out scale-115"
    style:opacity={isDay ? 1 : 0}
  />

  <!-- Room Label -->
  <img 
    src="/ui/label-svelte.webp" 
    alt="Svelte Label" 
    class="absolute top-8 right-2/3 transform -translate-x-1/2 z-10 w-32" 
  />

  <!-- Control Bar -->
  <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
    {#each buttons as btn}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img
        src={btn.img}
        alt="{btn.id} switch"
        on:click|stopPropagation={() => toggleRoom(btn.id)}
        class="w-12 h-auto cursor-pointer transition-transform hover:scale-110
          {$roomStates[btn.id as keyof typeof $roomStates] === 'day' 
            ? 'opacity-100' 
            : 'opacity-50 grayscale'}"
      />
    {/each}
  </div>
</div>
