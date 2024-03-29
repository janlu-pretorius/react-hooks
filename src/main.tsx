import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { virtualizedData } from "./mocks/mockData";
import { Root } from "./Root";
import { UseContext } from "./useContext";
import { UseDebugValue } from "./useDebugValue";
import { UseDeferredValue } from "./useDeferredValue";
import { UseId } from "./UseId";
import { UseImperativeHandle } from "./useImperativeHandle";
import { UseLayoutEffect } from "./useLayoutEffect";
import { UseMemo } from "./useMemo";
import { UseReducer } from "./useReducer";
import { UseSyncExternalStore } from "./useSyncExternalStore";
import { UseTransition } from "./useTransition";
import { VirtualizedList } from "./virtualized_list/virtualList";
import { VirtualizedListLibrary } from "./virtualized_list/virualListLib";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "use-layout-effect",
        element: <UseLayoutEffect />,
      },
      {
        path: "use-context",
        element: <UseContext />,
      },
      {
        path: "use-reducer",
        element: <UseReducer />,
      },
      {
        path: "use-Id",
        element: <UseId />,
      },
      {
        path: "use-memo",
        element: <UseMemo />,
      },
      {
        path: "use-transition",
        element: <UseTransition />,
      },
      {
        path: "use-deferred-value",
        element: <UseDeferredValue />,
      },
      {
        path: "use-imperative-handle",
        element: <UseImperativeHandle />,
      },
      {
        path: "use-sync-external-store",
        element: <UseSyncExternalStore />,
      },
      {
        path: "use-debug-value",
        element: <UseDebugValue />,
      },
      {
        path: "virtualized-list",
        element: <VirtualizedList items={virtualizedData} />,
      },
      {
        path: "virtualized-list-library",
        element: <VirtualizedListLibrary items={virtualizedData} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
