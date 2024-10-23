import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderCode } from "../RenderCode";
import {Table} from "../../components/Table"



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
      <section>
        <h2>Installation</h2>
        <ul>
          {component.installation.map((elem) => {
            return (
              <li key={elem.name}>
                <button onClick={()=> setInstallation(elem.command)}>
                  <img src={elem.path} alt={elem.name} />
                  <span>{elem.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <RenderCode code={installation} />
      </section>
          <section>
            <Table data={component.propsTable}/>
          </section>
      </>
    );
  }
}
