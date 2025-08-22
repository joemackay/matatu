import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SearchTermState {
  fromDestination: string;
  toDestination: string;
  setStoreFromDestination: (fro: string) => void;
  setStoreToDestination: (to: string) => void;
  clearSelection: () => void;
}

export const useSearchSelectionStore = create<SearchTermState>()(
  persist(
    (set) => ({
      fromDestination: '',
      toDestination: '',
      setStoreFromDestination: (fro) => {
        set({ fromDestination: fro });
      },
      setStoreToDestination: (to) => {
        set({ toDestination: to });
      },
      clearSelection() {
        set({fromDestination: '', toDestination: ''})
      },
    }),
    { name: 'user-storage' }
  )
);