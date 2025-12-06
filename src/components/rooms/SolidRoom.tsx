/** @jsxImportSource solid-js */
import { useStore } from '@nanostores/solid';
import { roomStates, toggleRoom } from '../../stores/themeStore';

interface Props {
  dayImage: string;
  nightImage: string;
}

export default function SolidRoom(props: Props) {
  const $roomStates = useStore(roomStates);

  return (
    <div 
      class="relative w-full h-full cursor-pointer overflow-hidden"
      onClick={() => toggleRoom('solid')}
    >
      <img 
        src={props.nightImage} 
        alt="Solid Room Night" 
        class="absolute top-0 left-0 w-full h-full object-contain"
      />
      <img 
        src={props.dayImage} 
        alt="Solid Room Day" 
        class="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out"
        style={{ opacity: $roomStates().solid === 'day' ? 1 : 0 }}
      />
    </div>
  );
}
