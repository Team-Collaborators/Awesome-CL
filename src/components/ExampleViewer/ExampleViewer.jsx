import React, { useState } from "react";
import DynamicComponent from "../../components/DinamicComponent/DinamicComponent";
import { RenderCode } from "../../components/renderers/RenderCode/RenderCode";
import Button from "../../component_testing/Button/Button";

export default function ExampleViewer({ example }) {
  const [showPreview, setShowPreview] = useState(true);
  const { type, props, children } = example.component;

  return (
    <section>
      <Button
        onClick={() => setShowPreview(true)}
        color="secondary"
        radius="rounded"
      >
        Preview
      </Button>
      <Button
        onClick={() => setShowPreview(false)}
        color="secondary"
        radius="rounded"
      >
        Code
      </Button>
      {showPreview ? (
        <DynamicComponent type={type} props={props} children={children} />
      ) : (
        <RenderCode code={example.code} />
      )}
    </section>
  );
}
