import { create } from 'zustand';

interface Reservation {
  startDate: Date | undefined;
  endDate: Date | undefined;
  setStartDate: (startDate: Date) => void;
  setEndDate: (endDate: Date) => void;
  resetStartDate: () => void;
  resetEndDateDate: () => void;
}

export const useReservationStore = create<Reservation>((set) => ({
  startDate: undefined,
  endDate: undefined,
  setStartDate: (startDate: Date) => set(() => ({ startDate })),
  setEndDate: (endDate: Date) => set(() => ({ endDate })),
  resetStartDate: () => set({ startDate: undefined }),
  resetEndDateDate: () => set({ endDate: undefined }),
}));
