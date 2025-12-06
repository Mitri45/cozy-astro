import { useStore } from '@nanostores/react';
import { roomStates, toggleRoom } from '../../stores/themeStore';

interface Props {
  dayImage: string;
  nightImage: string;
}

export default function ReactRoom({ dayImage, nightImage }: Props) {
  const $roomStates = useStore(roomStates);
  const isDay = $roomStates.react === 'day';

  return (
    <div 
      className="relative w-full h-full cursor-pointer overflow-hidden"
      onClick={() => toggleRoom('react')}
    >
      <img 
        src={nightImage} 
        alt="React Room Night" 
        className="absolute top-0 left-0 w-full h-full object-contain "
      />
      <img 
        src={dayImage} 
        alt="React Room Day" 
        className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out "
        style={{ opacity: isDay ? 1 : 0 }}
      />
    </div>
  );
}
