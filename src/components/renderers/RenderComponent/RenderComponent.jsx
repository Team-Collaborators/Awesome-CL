import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderCode } from "../RenderCode/RenderCode";
import Button from "../../../component_testing/Button/Button";
import ExampleViewer from "../../ExampleViewer/ExampleViewer";
import Table from "../../Table/Table";

export function RenderComponent({ data }) {
  const { name } = useParams();
  const [component, setComponent] = useState(null);
  const [installation, setInstallation] = useState("cli-command-to-install");

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
      <>
        <header>
          <h2>{component.title}</h2>
          <p>{component.description}</p>
        </header>
        <main>
          <section>
            <h2>Installation</h2>
            {component.installation ? (
              <>
                <ul>
                  {component.installation.map((elem) => {
                    return (
                      <li key={elem.name}>
                        <button onClick={() => setInstallation(elem.command)}>
                          <img src={elem.path} alt={elem.name} />
                          <span>{elem.name}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <RenderCode code={installation} />
              </>
            ) : (
              <p>No installation commands available</p>
            )}
          </section>
          <section>
            <h2>Import</h2>
            {component.import ? (
              <>
                <p>{component.import.description}</p>
                <RenderCode code={component.import.code} />
              </>
            ) : (
              <p>No Import commands available</p>
            )}
          </section>
          <section>
            <h2>Usage</h2>
            {component.examples ? (
              component.examples.map((example, index) => {
                return (
                  <li key={index}>
                    <h2>{example.title}</h2>
                    <ExampleViewer example={example} />
                  </li>
                );
              })
            ) : (
              <p>No Usage commands available</p>
            )}
          </section>
          <section>
            <h2>API</h2>
            {component.propsTable ? (
              <>
                <h3>{component.propsTable.title}</h3>
                <Table
                  headers={component.propsTable.headers}
                  rows={component.propsTable.rows}
                />
              </>
            ) : (
              <p>No API commands available</p>
            )}
          </section>
        </main>
      </>
    );
  }
}
