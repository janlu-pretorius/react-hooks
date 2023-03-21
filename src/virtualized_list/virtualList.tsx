import React, { useState, useEffect, useRef } from "react";

// import "./VirtualizedList.css";

export interface Item {
  key: number;
  name: string;
  description: string;
}

export interface VirtualizedListProps {
  items: Item[];
}

const styles = {
  container: {
    height: "400px",
    width: "300px",
    "overflow-y": "scroll",
    border: "1px solid #ccc",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid #ccc",
  },
};

export const VirtualizedList: React.FC<VirtualizedListProps> = ({ items }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(31);
  const [itemHeight, setItemHeight] = useState(50);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listHeight = listRef.current?.clientHeight || 0;
    setEndIndex(Math.ceil(listHeight / itemHeight) + startIndex);
  }, [startIndex, itemHeight]);

  const handleScroll = () => {
    if (!listRef.current) return;
    const scrollTop = listRef.current.scrollTop;
    setStartIndex(Math.ceil(scrollTop / itemHeight));
    setEndIndex(
      Math.ceil((scrollTop + listRef.current.clientHeight) / itemHeight)
    );
  };

  const visibleItems = items.slice(startIndex, endIndex);
  console.log(
    "🚀 ~ file: virtualList.tsx ~ line 54 ~ visibleItems",
    visibleItems
  );
  console.log("🚀 ~ file: virtualList.tsx ~ line 77 ~ itemHeight", itemHeight);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>
        Left almost works but styling is throwing it off, pretty difficult to
        correctly implement manually
      </p>
      <div style={styles.container} onScroll={handleScroll} ref={listRef}>
        {visibleItems.map((item) => (
          <div
            key={item.key}
            style={{ ...styles.item, height: `${itemHeight}px` }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
