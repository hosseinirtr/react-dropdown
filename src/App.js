import { useState } from "react";
import DGXLogo from "./components/DGXLogo";
import DGXDropdown from "./components/DGXDropdown";
import DGXContainer from "./components/DGXContainer";
import "./App.css";
import "./fonts/font.css";
import list from "./mock/drop-items.json";
import selectedItem from "./mock/form-data.json";

function App() {
  const [result, setResult] = useState("هیج");

  const changeResult = (item) => {
    setResult(item);
  };

  return (
    <div
      id="app"
      className="flex"
      style={{ backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")' }}
    >
      <DGXContainer className="top">
        <DGXLogo className="flex" />
        <div className="mt">
          <DGXDropdown
            list={list}
            selected={selectedItem.dropdown}
            changeResult={changeResult}
          />
        </div>
        <div className="result">{result}</div>
      </DGXContainer>
    </div>
  );
}

export default App;
