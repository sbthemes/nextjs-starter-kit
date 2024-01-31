import { create } from 'zustand'

type IState = {
    auth: any
    // updateAuth: (data: any) => void
}

export const useStore = create<IState>((set) => ({
    auth: null,
}))
