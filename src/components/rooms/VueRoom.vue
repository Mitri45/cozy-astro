<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { roomStates, toggleRoom } from '../../stores/themeStore';

const props = defineProps<{
  dayImage: string;
  nightImage: string;
}>();

const $roomStates = useStore(roomStates);

const buttons = [
  { id: 'react', img: '/ui/switch-r.webp' },
  { id: 'vue', img: '/ui/switch-v.webp' },
  { id: 'svelte', img: '/ui/switch-s.webp' },
  { id: 'solid', img: '/ui/switch-so.webp' },
];
</script>

<template>
  <div class="relative w-full h-full overflow-hidden">
    <img 
      :src="nightImage" 
      alt="Vue Room Night" 
      class="absolute top-0 left-0 w-full h-full object-contain "
    />
    <img 
      :src="dayImage" 
      alt="Vue Room Day" 
      class="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out "
      :style="{ opacity: $roomStates.vue === 'day' ? 1 : 0 }"
    />

    <!-- Room Label -->
    <img 
      src="/ui/label-vue.webp" 
      alt="Vue Label" 
      class="absolute top-8 right-2/3 transform -translate-x-1/2 z-10 w-32" 
    />

    <!-- Control Bar -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
      <img
        v-for="btn in buttons"
        :key="btn.id"
        :src="btn.img"
        :alt="`${btn.id} switch`"
        @click.stop="toggleRoom(btn.id)"
        class="w-12 h-auto cursor-pointer transition-transform hover:scale-110"
        :class="$roomStates[btn.id as keyof typeof $roomStates] === 'day' 
          ? 'opacity-100' 
          : 'opacity-50 grayscale'"
      />
    </div>
  </div>
</template>
