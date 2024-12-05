"use client";
import { NavBarProps } from "@/lib/navbar/type";
import React, { useState } from "react";

export default function NavBar<T>({ data, children }: NavBarProps<T>) {
  const [currentPanel, setCurrentPanel] = useState<T>(data[0].panel);

  const renderContent = Array.isArray(children)
    ? children.find(
        (child) =>
          React.isValidElement(child) && child.props.id === currentPanel
      )
    : null;

  return (
    <>
      <nav className="flex gap-4">
        {data.map((item) => (
          <button
            key={String(item.panel)} // Ensure uniqueness by converting the panel to a string
            onClick={() => setCurrentPanel(item.panel)} // Update the selected panel
            className={`transition ${
              currentPanel === item.panel
                ? "border-b-2 font-bold"
                : "font-thin hover:border-b-2 hover:border-gray-400"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
      {/* Render the content based on the selected panel */}
      <div className="mt-6">{renderContent}</div>
    </>
  );
}
