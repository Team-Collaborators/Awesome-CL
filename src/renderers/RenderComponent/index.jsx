import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderCode } from "../RenderCode";
import styles from "./RenderComponent.module.css";

// This component renders the controllers but could also be used on
// other pages. The JSON has to be the same as the controller.json

export function RenderComponent({ data }) {
  const { name } = useParams();
  const [component, setComponent] = useState(null);
  const [selectedInstall, setSelectedInstall] = useState(null);

  useEffect(() => {
    if (data && data.length >= 2) {
      const foundComponent = data.find((comp) => comp.title === name);
      setComponent(foundComponent);
      setSelectedInstall(foundComponent.installation[0]); //default to first method CLI
    } else {
      setComponent(data[0]);
      setSelectedInstall(data[0]?.installation[0]); //default to first method CLI
    }
  }, [name, data]);

  // const handleInstallClick = (install) => {
  //  setSelectedInstall(install); //update the selected installation method
  //};

  if (component) {
    return (
      <section>
        <h2>Installation</h2>
        <ul className={styles.installList}>
          {component.installation.map((elem) => {
            return (
              <li key={elem.name}>
                <button
                  className={`${styles.installButton} ${
                    selectedInstall?.name === elem.name ? styles.active : ""
                  }`} //add active class if selected
                  onClick={() => setSelectedInstall(elem)}
                >
                  <img
                    src={elem.path}
                    alt={elem.name}
                    className={styles.icon}
                  />
                  <span>{elem.name}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {selectedInstall && (
          <div style={{ marginTop: "20px" }}>
            <RenderCode code={selectedInstall.command} />
          </div>
        )}
      </section>
    );
  }

  return null;
}

