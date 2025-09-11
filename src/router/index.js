import { createHashRouter } from "react-router";
import HelloReact from "@/pages/HelloReact";
import LayoutComponent from "@/components/LayoutComponent";
import Counter from "@//components/Counter";
import CreateComponent from "@/components/CreatingAndNestingComponents/createComponent";
import AddStyles from "@/components/CreatingAndNestingComponents/addStyles";
import DisplayData from "@/components/CreatingAndNestingComponents/displayData";
import ConditionalRendering from "@/components/CreatingAndNestingComponents/conditionalRendering";
import RenderLists from "@/components/CreatingAndNestingComponents/renderLists";
import RespondingEvents from "@/components/CreatingAndNestingComponents/respondingEvents";
import UpdatingScreen from "@/components/CreatingAndNestingComponents/updatingScreen";
import SharingDataBetweenComponents from "@/components/CreatingAndNestingComponents/sharingDataBetweenComponents";
import TicTacToe from "@/components/TicTacToe";
import FilterableProductTable from "../components/ThinkingInReact/FilterableProductTable";
import YourFirstComponent from "@/components/DescribingTheUI/YourFirstComponent ";
import ImportingAndExportingComponents from "@/components/DescribingTheUI/ImportingAndExportingComponents";
import WritingMarkupWithJSX from "@/components/DescribingTheUI/WritingMarkupWithJSX";
import JavascriptInJSXWithCurlyBraces from "../components/DescribingTheUI/JavaScriptInJSXWithCurlyBraces";
import PassingPropsToComponent from "../components/PassingPropsToComponent";
import ConditionalRender from "@/components/ConditionalRender";
import RenderingLists from "../components/DescribingTheUI/RenderingLists";
import KeepingComponentsPure from "../components/DescribingTheUI/KeepingComponentsPure";
import UIAsTree from "../components/DescribingTheUI/UIAsTree";

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
        label: "快速入门",
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
      {
        label: "井字棋游戏",
        name: "lesson02",
        path: "/lesson02",
        key: "/lesson02",
        children: [
          {
            label: "井字棋游戏",
            name: "TicTacToe",
            path: "/lesson02/ticTacToe",
            key: "/lesson02/ticTacToe",
            Component: TicTacToe,
          },
        ],
      },
      {
        label: "react哲学",
        name: "lesson03",
        path: "/lesson03",
        key: "/lesson03",
        children: [
          {
            label: "过滤产品表",
            name: "filterableProductTable",
            path: "/lesson03/filterableProductTable",
            key: "/lesson03/filterableProductTable",
            Component: FilterableProductTable,
          },
        ],
      },
      {
        label: "描述UI",
        name: "lesson04",
        path: "/lesson04",
        key: "/lesson04",
        children: [
          {
            label: "你的第一个组件",
            name: "yourFirstComponent",
            path: "/lesson04/yourFirstComponent",
            key: "/lesson04/yourFirstComponent",
            Component: YourFirstComponent,
          },
          {
            label: "组件的导入与导出",
            name: "importingAndExportingComponents",
            path: "/lesson04/importingAndExportingComponents",
            key: "/lesson04/importingAndExportingComponents",
            Component: ImportingAndExportingComponents,
          },
          {
            label: "使用JSX书写标签语言",
            name: "writingMarkupWithJSX",
            path: "/lesson04/writingMarkupWithJSX",
            key: "/lesson04/writingMarkupWithJSX",
            Component: WritingMarkupWithJSX,
          },
          {
            label: "在JSX中使用JS",
            name: "javascriptInJSXWithCurlyBraces",
            path: "/lesson04/javascriptInJSXWithCurlyBraces",
            key: "/lesson04/javascriptInJSXWithCurlyBraces",
            Component: JavascriptInJSXWithCurlyBraces,
          },
          {
            label: "将Props传递给组件",
            name: "passingPropsToComponent",
            path: "/lesson04/passingPropsToComponent",
            key: "/lesson04/passingPropsToComponent",
            Component: PassingPropsToComponent,
          },
          {
            label: "条件渲染",
            name: "conditionalRender",
            path: "/lesson04/conditionalRender",
            key: "/lesson04/conditionalRender",
            Component: ConditionalRender,
          },
          {
            label: "渲染列表",
            name: "renderingLists",
            path: "/lesson04/renderingLists",
            key: "/lesson04/renderingLists",
            Component: RenderingLists,
          },
          {
            label: "保持组件纯粹",
            name: "keepingComponentsPure",
            path: "/lesson04/keepingComponentsPure",
            key: "/lesson04/keepingComponentsPure",
            Component: KeepingComponentsPure,
          },
          {
            label: "将UI视为树",
            name: "uiAsTree",
            path: "/lesson04/uiAsTree",
            key: "/lesson04/uiAsTree",
            Component: UIAsTree,
          },
        ],
      },
    ],
  },
]);

export default router;
