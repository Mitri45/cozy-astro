/** @jsxImportSource solid-js */
import { useStore } from '@nanostores/solid';
import { roomStates, toggleRoom } from '../../stores/themeStore';
import { For } from 'solid-js';

interface Props {
  dayImage: string;
  nightImage: string;
}

export default function SolidRoom(props: Props) {
  const $roomStates = useStore(roomStates);

  const buttons = [
    { id: 'react', img: '/ui/switch-r.png' },
    { id: 'vue', img: '/ui/switch-v.png' },
    { id: 'svelte', img: '/ui/switch-s.png' },
    { id: 'solid', img: '/ui/switch-so.png' },
  ];

  return (
    <div class="relative w-full h-full overflow-hidden">
      <img 
        src={props.nightImage} 
        alt="Solid Room Night" 
        class="absolute top-0 left-0 w-full h-full object-contain scale-105"
      />
      <img 
        src={props.dayImage} 
        alt="Solid Room Day" 
        class="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out scale-105"
        style={{ opacity: $roomStates().solid === 'day' ? 1 : 0 }}
      />

      {/* Room Label */}
      <img 
        src="/ui/label-solid.png" 
        alt="Solid Label" 
        class="absolute top-8 right-2/3 transform -translate-x-1/2 z-10 w-32" 
      />

      {/* Control Bar */}
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        <For each={buttons}>
          {(btn) => (
            <img
              src={btn.img}
              alt={`${btn.id} switch`}
              onClick={(e) => {
                e.stopPropagation();
                toggleRoom(btn.id);
              }}
              class={`w-12 h-auto cursor-pointer transition-transform hover:scale-110
                ${$roomStates()[btn.id as keyof ReturnType<typeof $roomStates>] === 'day' 
                  ? 'opacity-100' 
                  : 'opacity-50 grayscale'
                }`}
            />
          )}
        </For>
      </div>
    </div>
  );
}
