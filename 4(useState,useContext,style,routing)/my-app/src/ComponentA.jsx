
import React, { useContext } from "react";
import { Context } from "./Context";

export default function ComponentA() {
  const [context, setContext] = useContext(Context);
  return (
    <div>
      ComponentA:
      <button onClick={() => setContext("New Value")}>
        Change Context Value
      </button>
    </div>
  );
}