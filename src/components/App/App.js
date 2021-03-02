import React, { useEffect } from "react";

// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?

import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
}

export default App;
