import { useState } from "react";

interface Prop {
  children: string;
  value?: number;
}

function ExpandableText({ children, value = 100 }: Prop) {
  const [expanded, setExpanded] = useState(false);
  if (children.length <= value) return <p>{children}</p>;

  const text = expanded ? children.substring(0, value) : children;

  return (
    <p>
      {text}...{" "}
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "More" : "Less"}
      </button>
    </p>
  );
}

export default ExpandableText;
