## What I Did?

In this file two folders are worth visiting one is components where we created our two components and the other is App.jsx where we called the componenst

## Remember

=======

## What I Did?

In this file two folders are worth visiting one is components where we created our two components and the other is App.jsx where we called the componenst

## Remember

Use the Extension ES7+ React....

|not forget to use RAFCE (will setup a component)

|not forget to import in App.jsx

##Props

the above is use of the default objects (Props)

below is the use of objects by destructuring (Desturcturing Props)

below is the use of default of properties of objects (Default Prop)

### 1. yarn add react-router-dom

### Go to App.jsx

---

import {
Route,
createBrowserRouter,
createRoutesFromElements,
Router,
} from "react-router-dom";

---

### Create a folder Pages in src

Create Homepage file in pages import the components needed for that page

### Make sure that App.jsx has complete router setup

import {
Route,
createBrowserRouter,
createRoutesFromElements,
Router,
RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
createRoutesFromElements(<Route index element={<HomePage />} />)
);

const App = () => {
return (
<>
<RouterProvider router={router} />
</>
);
};

export default App;

---

if want to show a single component on every page do

1. create a folder layout
2. create a file as in layout/mainlayout
3. import {outlet} from "react-router-dom"
4. create a parent router in App.jsx

# Change the links to avoid that little refresh

1. import {Link} from "react-router-dom"
2. a => Link and href => to

# Setup a proxy

1. go to vite.config.js
2. add the below code from server

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
plugins: [react(), tailwindcss()],
server: {
proxy: {
"/api": {
target: "http://localhost:8000/",
changeOrigin: true,
rewrite: (path) => path.replace(/^\/api/, ""),
},
},
},
});

3. change the url in file
