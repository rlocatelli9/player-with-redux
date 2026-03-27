### Custom Player Advanced (Vite + TypeScript + Redux toolkit)

This project, they was builded to focusing in how handle with a lot of data volumes and user experience.

### Feature-First structure

```sh
src/
├── assets/                      # Tailwind v4 globals + Imagens
├── common/                      # UI KIT + UTILS ("Shared")
│   ├── components/              # Button.tsx, Modal.tsx
│   ├── types/                   # Global types
│   └── services/                # API Client base
├── features/                    # DOMAIN
│   ├── auth/                    # All about Auth (UI + Store + API)
│   └── video-player/            # All about Player
│       ├── components/          # Player, Controls, List
│       ├── store/               # Redux slice (state + actions)
│       ├── services/            # API call specific
│       └── hooks/               # hook custom logic.ts
├── store/                       # REDUX
│   ├── rootReducer.ts           # Import the slices of each feature
│   └── index.ts                 # Store
└── pages/                       # Routes (import direct of features/)
```

### 🚀 Planing:

This timeline follow the logic of  **technical dependency**: first, easy visual base and functional, evolving to complex architecture and optimizations.

| Priority | Feature | Complexity | What the reason? | Status |
| :--- | :--- | :---: | :--- | :---: |
| **1** | **UI: Customized Player (Radix + Tailwind)** | Easy | **Visual Base:** Without the play/pause button, there aren't to dispatch to Redux. | [ ] |
| **2** | **Sync: Redux + React-Player** | Medium | **Functional Base:** Connect the UI with logic, allowing that the global state control the player. | [ ] |
| **3** | **Data Fetching: RTK Query (Metadata/Playlist)** | Medium | **Data flow:** Define how the videos into the app and allowing the content change. | [ ] |
| **4** | **History: Persistence (LocalStorage)** | Medium | **Inicial Persistence:** Easy way to validate the "Concluded Check" before of IndexedDB. | [ ] |
| **5** | **Performance: Memoized Selectors** | Medium | **Optimization:** Make sure that the UI don't freeze with the Player fast updates. | [ ] |
| **6** | **Analytics: Middleware to Intercept** | Hard | **Abstraction:** Should that the state actions (Play/Pause) already that they are already mature and mapped out. | [ ] |
| **7** | **Telemetry: Heartbeat of Analytics** | Hard | **Product Vision:** Depends of `onProgress` and of Middleware to process the frequently request. | [ ] |
| **8** | **Resilience: Offline-first (IndexedDB)** | Expert | **Hardiness:** Evolution of Step 4 to sync layer and data resilience. | [ ] |
