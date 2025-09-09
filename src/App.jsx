import { RouterProvider, Outlet } from "react-router";
import router from "./router";
import "./App.css";

function App() {
  return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  );
}

export default App;
