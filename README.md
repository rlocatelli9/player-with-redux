### Custom Player Advanced (Vite + TypeScript + Redux toolkit)

This project, they was builded to focusing in how handle with a lot of data volumes and user experience.

### 🚀 Planing:

This timeline follow the logic of  **technical dependency**: first, easy visual base and functional, evolving to complex architecture and optimizations.

| Priority | Feature | Complexity | What the reason? | Status |
| :--- | :--- | :---: | :--- | :---: |
| **1** | **UI: Customized Player (Radix + Tailwind)** | Easy | **Visual Base:** Without the play/pause button, there aren't to dispatch to Redux. | [ ] |
| **2** | **Sync: Redux + React-Player** | Medium | **Functional Base:** Connect the UI with logic, allowing that the global state control the player. | [ ] |
| **3** | **Engagement: Tab Visibility Auto-Pause** | Medium | **Playback Integrity:** If the app tab becomes hidden (user switches to another browser tab), pause the video to avoid counting passive watch time. | [ ] |
| **4** | **Data Fetching: RTK Query (Metadata/Playlist)** | Medium | **Data flow:** Define how the videos into the app and allowing the content change. | [ ] |
| **5** | **History: Persistence (LocalStorage)** | Medium | **Inicial Persistence:** Easy way to validate the "Concluded Check" before of IndexedDB. | [ ] |
| **6** | **Performance: Memoized Selectors** | Medium | **Optimization:** Make sure that the UI don't freeze with the Player fast updates. | [ ] |
| **7** | **Analytics: Middleware to Intercept** | Hard | **Abstraction:** Should that the state actions (Play/Pause) already that they are already mature and mapped out. | [ ] |
| **8** | **Telemetry: Heartbeat of Analytics** | Hard | **Product Vision:** Depends of `onProgress` and of Middleware to process the frequently request. | [ ] |
| **9** | **Resilience: Offline-first (IndexedDB)** | Expert | **Hardiness:** Evolution of Step 5 to sync layer and data resilience. | [ ] |


### 📚 Learn more

For behavior changes, update relevant read the documentation  [README](./README.md), [ARCHITECTURE](./ARCHITECTURE.md)  and [CONTRIBUTING](./CONTRIBUTING.md).


### ©️ License

Learn more [LICENSE](./LICENSE.txt)
