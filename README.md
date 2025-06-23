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
