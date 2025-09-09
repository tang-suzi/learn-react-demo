import { createHashRouter } from "react-router";
import HelloWorld from "../pages/HelloReact";

const router = createHashRouter([
  {
    path: "/",
    Component: HelloWorld,
  },
]);

export default router;
