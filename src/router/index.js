import { createHashRouter } from "react-router";
import HelloReact from "../pages/HelloReact";
import LayoutComponent from "@/components/LayoutComponent";
import Counter from "@//components/Counter";

const router = createHashRouter([
  {
    path: "/",
    Component: LayoutComponent,
    children: [
      {
        name: "HelloReact",
        path: "/HelloReact",
        Component: HelloReact,
      },
      {
        name: "Counter",
        path: "/Counter",
        Component: Counter,
      },
    ],
  },
]);

export default router;
