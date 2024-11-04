import React, { useState } from "react";
import DynamicComponent from "../../components/DinamicComponent/DinamicComponent";
import { RenderCode } from "../RenderCode/RenderCode";
import Button from "../../component_testing/Button/Button";
import "./ExampleViewer.scss";

export default function ExampleViewer({ example }) {
  const [showPreview, setShowPreview] = useState(true);
  if (example) {
    return (
      <section className="DynamicComponent">
        <div className="toggle-buttons">
          <Button
            onClick={() => setShowPreview(true)}
            className={showPreview ? "active" : ""}
          >
            Preview
          </Button>
          <Button
            onClick={() => setShowPreview(false)}
            className={showPreview ? "active" : ""}
          >
            Code
          </Button>
        </div>
        <div
          className={`component-display ${
            showPreview ? "preview-view" : "code-view"
          }`}
        >
          {showPreview ? (
            <ul className="component-ul">
              {example.components.map((component, index) => {
                const { type, props, children } = component;

                return (
                  <li key={index}>
                    <DynamicComponent
                      type={type}
                      props={props}
                      children={children}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <RenderCode code={example.code} />
          )}
        </div>
      </section>
    );
  } else {
    return <p>Alles wird gut</p>;
  }
}
