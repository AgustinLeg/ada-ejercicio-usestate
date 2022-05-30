import "./App.css";
import { list } from "./assets/lista";

import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <h1 className="title">Preguntas Generales</h1>
      <div className="box__list">
        {list.map((item) => (
          <Box key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
