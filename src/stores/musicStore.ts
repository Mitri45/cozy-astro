import { atom } from 'nanostores';

export interface Track {
  title: string;
  src: string;
}

export const tracks: Track[] = [
  { title: 'Cozy Vibes', src: '/music/track1.opus' },
  { title: 'Night Chill', src: '/music/track2.opus' },
  { title: 'Morning Breeze', src: '/music/track3.opus' },
  { title: 'Urban Groove', src: '/music/track4.opus' },
  { title: 'Sunset Drive', src: '/music/track5.opus' },
  { title: 'Rainy Day', src: '/music/track6.opus' },
];

export const isPlaying = atom(false);
export const currentTrackIndex = atom(0);

export function togglePlay() {
  isPlaying.set(!isPlaying.get());
}

export function nextTrack() {
  const currentIndex = currentTrackIndex.get();
  const nextIndex = (currentIndex + 1) % tracks.length;
  currentTrackIndex.set(nextIndex);
}

export function prevTrack() {
  const currentIndex = currentTrackIndex.get();
  const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  currentTrackIndex.set(prevIndex);
}
