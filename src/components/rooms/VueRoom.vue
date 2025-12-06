<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { roomStates, toggleRoom } from '../../stores/themeStore';

const props = defineProps<{
  dayImage: string;
  nightImage: string;
}>();

const $roomStates = useStore(roomStates);
</script>

<template>
  <div 
    class="relative w-full h-full cursor-pointer overflow-hidden"
    @click="toggleRoom('vue')"
  >
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
  </div>
</template>
