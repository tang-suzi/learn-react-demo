import { createHashRouter } from "react-router";
import HelloReact from "../pages/HelloReact";
import LayoutComponent from "@/components/LayoutComponent";
import Counter from "@//components/Counter";
import CreateComponent from "@/components/CreatingAndNestingComponents/createComponent";
import AddStyles from "@/components/CreatingAndNestingComponents/addStyles";
import DisplayData from "@/components/CreatingAndNestingComponents/displayData";
import ConditionalRendering from "@/components/CreatingAndNestingComponents/conditionalRendering";
import RenderLists from "@/components/CreatingAndNestingComponents/renderLists";
import RespondingEvents from "@/components/CreatingAndNestingComponents/respondingEvents";
import UpdatingScreen from "../components/CreatingAndNestingComponents/updatingScreen";
import SharingDataBetweenComponents from "../components/CreatingAndNestingComponents/sharingDataBetweenComponents";

const router = createHashRouter([
  {
    path: "/",
    Component: LayoutComponent,
    children: [
      {
        label: "HelloReact",
        name: "HelloReact",
        path: "/HelloReact",
        key: "/HelloReact",
        Component: HelloReact,
      },
      {
        label: "Counter",
        name: "Counter",
        path: "/Counter",
        key: "/Counter",
        Component: Counter,
      },
      {
        label: "Lesson01",
        name: "lesson01",
        path: "/lesson01",
        key: "/lesson01",
        children: [
          {
            label: "创建组件",
            name: "createComponent",
            path: "/lesson01/createComponent",
            key: "/lesson01/createComponent",
            Component: CreateComponent,
          },
          {
            label: "添加样式",
            name: "addStyles",
            path: "/lesson01/addStyles",
            key: "/lesson01/addStyles",
            Component: AddStyles,
          },
          {
            label: "显示数据",
            name: "displayData",
            path: "/lesson01/displayData",
            key: "/lesson01/displayData",
            Component: DisplayData,
          },
          {
            label: "条件渲染",
            name: "conditionalRendering",
            path: "/lesson01/conditionalRendering",
            key: "/lesson01/conditionalRendering",
            Component: ConditionalRendering,
          },
          {
            label: "渲染列表",
            name: "renderLists",
            path: "/lesson01/renderLists",
            key: "/lesson01/renderLists",
            Component: RenderLists,
          },
          {
            label: "响应事件",
            name: "respondingEvents",
            path: "/lesson01/respondingEvents",
            key: "/lesson01/respondingEvents",
            Component: RespondingEvents,
          },
          {
            label: "更新界面",
            name: "updatingScreen",
            path: "/lesson01/updatingScreen",
            key: "/lesson01/updatingScreen",
            Component: UpdatingScreen,
          },
          {
            label: "组件共享数据",
            name: "sharingDataBetweenComponents",
            path: "/lesson01/sharingDataBetweenComponents",
            key: "/lesson01/sharingDataBetweenComponents",
            Component: SharingDataBetweenComponents,
          },
        ],
      },
    ],
  },
]);

export default router;
