import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

import { RentajView } from "../types"

type RentajState = {
  view: RentajView
  setView: (value: RentajView) => void
}

export const useRentaj = create<RentajState>()(
  persist(
    (set) => ({
      view: "explore",
      setView: (value) => set({ view: value }),
    }),
    {
      name: "user-rentaj",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
