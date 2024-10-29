import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderCode } from "../RenderCode/RenderCode";
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
                <div style={{ marginTop: "20px" }}>
                  <RenderCode code={installation} />
                </div>
              </>
            ) : null}
          </section>
          <section>
            <h2>Import</h2>
            {component.import ? (
              <>
                <p>{component.import.description}</p>
                <RenderCode code={component.import.code} />
              </>
            ) : null}
          </section>
          <section>
            <h2>Usage</h2>
            <ul>
              {component.examples
                ? component.examples.map((example, index) => {
                    return (
                      <li key={index}>
                        <h2>{example.title}</h2>
                        <ExampleViewer example={example} />
                      </li>
                    );
                  })
                : null}
            </ul>
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
            ) : null}
          </section>
          <section>
            {component.eventsTable ? (
              <>
                <h2>{component.eventsTable.title}</h2>
                <p>{component.eventsTable.description}</p>
                <Table
                  headers={component.eventsTable.headers}
                  rows={component.eventsTable.rows}
                />
              </>
            ) : null}
          </section>
          <section>
            {component.accessibility ? (
              <>
                <h2>{component.accessibility.title}</h2>
                <p>{component.accessibility.description}</p>
                <Table rows={component.accessibility.ariaRoles} />
              </>
            ) : null}
          </section>
        </main>
      </>
    );
  }
}
