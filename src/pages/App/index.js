import React from "react";
import ToolBar from "../../components/ToolBar";
import BurgerBuilder from "../BurgerBuilder";
import "./style.css";

function App() {
  return (
    <div>
      <ToolBar />
      <main className="content">
        <BurgerBuilder />
      </main>
    </div>
  );
}

export default App;
