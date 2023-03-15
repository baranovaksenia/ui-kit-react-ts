import React from "react";
import { Layout } from "components";

import "./App.scss";
import { Button } from "ui-kit";

export const App: React.FC = () => {
  const handleButtonClick = (event: React.MouseEvent) => {
    console.log("[button click event]", event);
  };

  return (
    <>
      <Layout>
        <h1>UI library</h1>
        <h2>BUTTON</h2>
        <Button isDisabled={true} onClick={handleButtonClick}>
          submit
        </Button>
      </Layout>
    </>
  );
};
