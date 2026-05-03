# 🚀 Redux Toolkit Todo App

A powerful and efficient Todo application built using **React 19**, **Redux Toolkit (RTK)**, and **Tailwind CSS v4**. This project demonstrates centralized state management with local persistence.

## 🏗️ Project Architecture

### 1. The Store (`src/app/store.js`)
The "Single Source of Truth". It holds the entire state of the application.
- Uses `configureStore` to combine slices.
- Connected to the React app via `<Provider>` in `main.jsx`.

### 2. The Slice (`src/feature/todoSlice.js`)
Contains the initial state and the logic for updating it.
- **`initialState`**: Loads data from `localStorage` if available.
- **`reducers`**: 
  - `addTodo`: Generates a unique ID using `nanoid()` and pushes the payload to the state.
  - `removeTodo`: Filters out the todo based on the ID passed in the payload.

### 3. Persistence (`src/App.jsx`)
- Uses `useEffect` to listen for changes in the `todos` state.
- Automatically saves the updated list to `localStorage` whenever a todo is added or removed.

## 🪝 Key Hooks Explained

| Hook | Purpose | Usage in Project |
| :--- | :--- | :--- |
| `useDispatch` | Sends "Actions" to the store. | Used to trigger `addTodo` and `removeTodo`. |
| `useSelector` | Reads data from the store. | Used in `Todos.jsx` to display the list and in `App.jsx` for persistence. |

## 🧬 Action & Payload

- **Action**: An object that tells Redux *what* to do. (e.g., `dispatch(addTodo("Buy Milk"))`).
- **Payload**: The data attached to the action. In `addTodo`, the payload is the text string. In `removeTodo`, it's the `id`.

## 🎨 UI & Styling
- **Tailwind CSS v4**: High-performance, engine-driven styling.
- **Responsive Layout**: Centered forms and lists with smooth transitions.
- **Dynamic Gaps**: Implemented using `space-y` on container elements.

## 🛠️ How to run
1. `npm install`
2. `npm run dev`
