import React, { useState } from "react";
import { Button } from "AwesomeCL";
export default function Modal({
  children = "Open Modal", //text on the button
  modalHeader, //
  modalBody,
  size = "md", // size of the modal, default size
  radius = "md", // radius from the modal, default border radius
  placement = "center",
  backdrop = "transparent", // background color of the backdrop: blur, transparent, color( should be the color included)
  classNames = "",
}) {
  const [open, setOpen] = useState(false);
  //   const combinedClassNames = `
  //   ${styles.button}
  //   ${styles[`border-${border}`]}
  //   ${styles[`radius-${radius}`]}
  //   ${styles[`color-${color}`]}
  //   ${styles[`size-${size}`]}
  //   `.trim();
  //   const finalClassNames = `${combinedClassNames} ${className}`.trim();
  return (
    <>
      <main>
        {open ? (
          <aside>
            <h2>{modalHeader}</h2>
            <p>{modalBody}</p>
            <Button size={"md"} onClick={() => setOpen(false)}>
              X
            </Button>
          </aside>
        ) : (
          <Button children={children} onClick={() => setOpen(true)} />
        )}
      </main>
    </>
  );
}
