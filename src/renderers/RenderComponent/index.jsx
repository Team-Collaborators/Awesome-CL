import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderCode } from "../RenderCode"; 

//This component is rendering the controllers but could also be used on
//other pages. !! The Json have to be the same as the controller.json 

export function RenderComponent({data}) {
    
  const { name } = useParams();
  const [component, setComponent] = useState(null);

  useEffect(() => {
    if (data && data.length >= 2) {
      const foundComponent = data.find((comp) => comp.title === name);
      setComponent(foundComponent);
    } else {
    setComponent(data[0])
    }
  }, [name, data]);
  if(component){
    return (
    <section>
        <h2>Installation</h2>
        <ul>
        {component.installation.map((elem) => {
            return(
                <li key={elem.name}>
                    <button>
                        <img src={elem.path} alt={elem.name} />
                        <span>{elem.name}</span>
                        <RenderCode code={elem.code} />
                    </button>
                </li>

            )
        })}
        </ul>
    </section>        

    //   <div>
    //     <h2>{component.title}</h2>
    //     <p>{component.description}</p>
    //     <RenderCode data={component.controllers} />
    //   </div>
    )
  }
}
