import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div style={{ padding: "0 5%", width: "100%" }}>
      <div>
        <h1>Navigate to all the examples of react hooks</h1>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
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
        </div>
        <Outlet />
      </div>
    </div>
  );
};
