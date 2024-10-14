import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderCode } from "../RenderCode";

export function Controller({ data }) {
  const { name } = useParams();
  const [component, setComponent] = useState(null);
console.log(name);

  useEffect(() => {
    if (data) {
      const foundComponent = data.find((comp) => comp.title === name);
      setComponent(foundComponent);
    }
  }, [name, data]);
  if (!component) return <>todo bien</>;

  return (
    <div>
      <h2>{component.title}</h2>
      <p>{component.description}</p>
      <RenderCode data={component.controllers} />
    </div>
  );
}
