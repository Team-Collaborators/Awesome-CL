import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderCode } from "../../common/RenderCode";

//This component is rendering the controllers but could also be used on
//other pages. !! The Json have to be the same as the controller.json 

export function RenderController({ data }) {
  const { name } = useParams();
  const [component, setComponent] = useState(null);

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
