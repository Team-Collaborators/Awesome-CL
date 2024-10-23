import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RenderCode } from "../../renderers/RenderCode";
=======
import { RenderCode } from "../RenderCode"; 


//This component is rendering the controllers but could also be used on
//other pages. !! The Json have to be the same as the controller.json

export function RenderFiles({ data }) {
  const { name } = useParams();
  const [component, setComponent] = useState(null);

  useEffect(() => {
    if (data && data.length >= 2) {
      const foundComponent = data.find((comp) => comp.title === name);
      setComponent(foundComponent);
    } else {
      setComponent(data[0]);
    }
  }, [name, data]);
  if (component) {
    return (
      <div>
        <h2>{component.title}</h2>
        <p>{component.description}</p>
        <RenderCode data={component.controllers} />
      </div>
    );
  }
}
