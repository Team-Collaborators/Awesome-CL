import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RenderCode } from "../RenderCode/RenderCode";

//This component is rendering the controllers but could also be used on
//other pages. !! The Json have to be the same as the controller.json

export function MainBackendLayout({ data }) {
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
        <h2>{component?.title}</h2>
        <p>{component?.description}</p>
        {component?.controllers?.length > 0 ? (
          component.controllers.map((controller) => (
            <div key={controller.title}>
              <h2>{controller.title}</h2>
              <p>{controller.description}</p>
              <RenderCode code={controller.code} />
            </div>
          ))
        ) : (
          <p>No controllers available</p>
        )}
      </div>
    );
  }
  return null;
}
