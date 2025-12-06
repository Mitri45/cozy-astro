import { map } from 'nanostores';

export type RoomTheme = 'day' | 'night';

export interface RoomStates {
  react: RoomTheme;
  vue: RoomTheme;
  svelte: RoomTheme;
  solid: RoomTheme;
}

export const roomStates = map<RoomStates>({
  react: 'day',
  vue: 'day',
  svelte: 'day',
  solid: 'day'
});

export function toggleRoom(framework: string) {
  const currentStore = roomStates.get();
  if (framework in currentStore) {
    const key = framework as keyof RoomStates;
    const current = currentStore[key];
    roomStates.setKey(key, current === 'day' ? 'night' : 'day');
  }
}
