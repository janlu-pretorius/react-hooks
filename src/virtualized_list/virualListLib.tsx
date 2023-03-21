import { useVirtualizer } from "@tanstack/react-virtual";
import React from "react";
import { VirtualizedListProps } from "./virtualList";

export const VirtualizedListLibrary: React.FC<VirtualizedListProps> = ({
  items,
}) => {
  const parentRef = React.useRef();

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 8,
  });

  return (
    <>
      <div
        ref={parentRef}
        style={{
          height: `400px`,
          overflow: "auto",
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem) => {
            const data = items[virtualItem.index];
            return (
              <div
                key={virtualItem.key}
                style={{
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                Row {virtualItem.index + 1}-{data.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
