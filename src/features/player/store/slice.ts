// src/entities/video/model/slice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../core/store'
import type { Video } from '../../../shared/types'

export interface ModuleProps {
  modules: {
    id: string
    title: string
    lessons: {
      id: string
      title: string
      duration: number
    }[]
  }[]
}

export interface VideoState {
  currentVideo: Video | null
  status: 'idle' | 'loading' | 'error',
  course: ModuleProps
}

const initialState: VideoState = {
  currentVideo: null,
  status: 'idle',
  course: {
    modules: [
      {
        id: "0",
        title: "Fundamentos do React",
        lessons: [
          { id: "OxIDLMC7dcU", title: "O que é React?", duration: 600000 },
          { id: "Ke90Tje7VS0", title: "Criando o primeiro projeto", duration: 1200000 }
        ]
      },
      {
        id: "1",
        title: "Estado e Imutabilidade",
        lessons: [
          { id: "SqcY0GlETPk", title: "Entendendo o useState", duration: 900000 },
          { id: "KCn0uHELd64", title: "Trabalhando com Listas", duration: 750000 }
        ]
      },
      {
        id: "2",
        title: "Introdução ao Redux",
        lessons: [
          { id: "u99tNt3TZf8", title: "Arquitetura Flux e Redux", duration: 1800000 },
          { id: "Wf2V_6M-N7o", title: "Actions e Reducers", duration: 2100000 }
        ]
      },
      {
        id: "3",
        title: "Redux Toolkit (RTK)",
        lessons: [
          { id: "i9S_3HOn0U0", title: "Simplificando com RTK", duration: 2400000 },
          { id: "fXpE79atjTo", title: "Configurando o Store", duration: 1320000 }
        ]
      },
      {
        id: "4",
        title: "Chamadas Assíncronas",
        lessons: [
          { id: "8M5W_SMeXro", title: "Redux Thunk na prática", duration: 2700000 },
          { id: "VCo77mK6kXk", title: "Requisições HTTP com Axios", duration: 1980000 }
        ]
      }
    ]
  }
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setVideo: (state, action: PayloadAction<Video>) => {
      state.currentVideo = action.payload
    },
  },
})

export const { setVideo } = playerSlice.actions
export const selectPlayer = (state: RootState) => state.player
export const selectModule = (state: RootState) => state.player.course.modules
