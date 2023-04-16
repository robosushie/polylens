import React from "react";
import Viewport from "./views/viewport";

const App: React.FC<{}> = () => {
  return (
    <div
      id="polylens"
      className="w-screen h-screen bg-app-border-color text-app-white p-1 rounded"
    >
      <Viewport />
    </div>
  );
};

export default App;
