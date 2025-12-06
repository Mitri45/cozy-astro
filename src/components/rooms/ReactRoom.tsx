import { useStore } from '@nanostores/react';
import { roomStates, toggleRoom } from '../../stores/themeStore';

interface Props {
  dayImage: string;
  nightImage: string;
}

export default function ReactRoom({ dayImage, nightImage }: Props) {
  const $roomStates = useStore(roomStates);
  const isDay = $roomStates.react === 'day';

  const buttons = [
    { id: 'react', img: '/ui/switch-r.webp' },
    { id: 'vue', img: '/ui/switch-v.webp' },
    { id: 'svelte', img: '/ui/switch-s.webp' },
    { id: 'solid', img: '/ui/switch-so.webp' },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img 
        src={nightImage} 
        alt="React Room Night" 
        className="absolute top-0 left-0 w-full h-full object-contain "
      />
      <img 
        src={dayImage} 
        alt="React Room Day" 
        className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out"
        style={{ opacity: isDay ? 1 : 0 }}
      />

      {/* Room Label */}
      <img 
        src="/ui/label-react.webp" 
        alt="React Label" 
        className={`absolute top-8 right-2/3 transform -translate-x-1/2 z-10 w-32 transition-all duration-500 ${isDay ? '' : 'brightness-125 drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]'}`}
      />

      {/* Control Bar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        {buttons.map((btn) => (
          <img
            key={btn.id}
            src={btn.img}
            alt={`${btn.id} switch`}
            onClick={(e) => {
              e.stopPropagation();
              toggleRoom(btn.id);
            }}
            className={`w-12 h-auto cursor-pointer transition-transform hover:scale-110
              ${$roomStates[btn.id as keyof typeof $roomStates] === 'day' 
                ? 'opacity-100' 
                : 'opacity-50 grayscale'
              }`}
          />
        ))}
      </div>
    </div>
  );
}
