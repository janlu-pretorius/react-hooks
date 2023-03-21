import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div style={{ padding: "0 5%", width: "100%", height: "800px" }}>
      <div>
        <h1>Navigate to all the examples of react hooks</h1>
      </div>
      <div style={{ display: "flex", height: "750px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <hr
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "black",
            }}
          />
          <h2>React Hooks</h2>
          <Link to="use-layout-effect">useLayoutEffect</Link>
          <Link to="use-context">useContext</Link>
          <Link to="use-reducer">useReducer</Link>
          <Link to="use-id">useId</Link>
          <Link to="use-memo">useMemo & useCallBack</Link>
          <Link to="use-transition">useTransition</Link>
          <Link to="use-deferred-value">useDeferredValue</Link>
          <Link to="use-imperative-handle">useImperativeHandle</Link>
          <Link to="use-sync-external-store">useSyncExternalStore</Link>
          <Link to="use-debug-value">useDebugValue</Link>
          <hr
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "black",
            }}
          />
          <h2>Virtualized lists</h2>
          <Link to="virtualized-list">Virtualized List manual</Link>
          <Link to="virtualized-list-library">Virtualized List library</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
