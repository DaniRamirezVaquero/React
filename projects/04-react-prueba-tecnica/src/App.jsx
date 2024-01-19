import "./App.css";
import { useCatFact } from "./hooks/useCatFact.js";
import { useCatImage } from "./hooks/useCatImage.js";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  // Controla el click del botón y recupera una nueva 'fact'
  const handleClick = () => {
    refreshFact();
  }

  return (
    <main>
      <div className="catCard">
        <h1>App de gatitos</h1>
        {imageUrl && (
            <img
              src={imageUrl}
              alt={`Image extracted using the first three words from ${fact}`}
            />
          )}
        <div className="catFact">{fact && <p>{fact}</p>}</div>
        <button onClick={handleClick}>Get new fact</button>
      </div>
    </main>
  );
}
