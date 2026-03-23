# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

# Feature-First structure

```sh
src/
├── assets/                      # Tailwind v4 globals + Imagens
├── common/                      # UI KIT + UTILS (O "Shared")
│   ├── components/              # Button.tsx, Modal.tsx
│   ├── types/                   # Tipos globais/compartilhados
│   └── services/                # API Client base
├── features/                    # DOMÍNIOS COMPLETOS
│   ├── auth/                    # Tudo de Auth (UI + Store + API)
│   └── video-player/            # Tudo do Player
│       ├── components/          # Player, Controls, List
│       ├── store/               # Slice do Redux (Estado + Actions)
│       ├── services/            # Chamadas de API específicas
│       └── hooks/               # usePlayerLogic.ts
├── store/                       # CENTRALIZADOR REDUX
│   ├── rootReducer.ts           # Importa slices de cada feature
│   └── index.ts                 # Store configurada
└── pages/                       # Rotas (Importam direto de features/)
```