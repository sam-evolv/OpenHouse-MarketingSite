import { create } from 'zustand';

interface RouteFxState {
  isTransitioning: boolean;
  start: () => void;
  done: () => void;
}

export const useRouteFx = create<RouteFxState>((set) => ({
  isTransitioning: false,
  start: () => set({ isTransitioning: true }),
  done: () => set({ isTransitioning: false }),
}));
