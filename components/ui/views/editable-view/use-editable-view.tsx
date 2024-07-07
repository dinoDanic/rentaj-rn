import { create } from "zustand"

type State = {
  isEditMode: boolean
  setIsEditMode: (state: boolean) => void
  toggleEditMode: () => void
}

export const useEditableView = create<State>()((set, get) => ({
  isEditMode: false,
  setIsEditMode: (state) => set({ isEditMode: state }),
  toggleEditMode: () => set({ isEditMode: !get().isEditMode }),
}))
