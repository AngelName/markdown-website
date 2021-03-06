import React from "react";

export default function EditorPanel({ active, style, children }) {
  return (
    <section
      style={{
        width: "100%",
        position: "absolute",
        transition: ".5s all",
        transform: `translate(${active ? "0" : "-100%"})`,
        ...style,
      }}
    >
      {children}
    </section>
  );
}
