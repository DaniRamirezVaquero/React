import { useState, useEffect } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
const CAT_PREFIX_IMAGE_URL = `https://cataas.com/cat/`;

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ", 3).join(" ");
    console.log(threeFirstWords);

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
    .then(res => res.json())
    .then(data => {
      const { _id } = data;
      setImageUrl(`${_id}/says/${threeFirstWords}?fontSize=50&fontColor=white`);
    })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={CAT_PREFIX_IMAGE_URL+imageUrl}
            alt={`Image extracted using the first three words from ${fact}`}
          />
        )}
    </main>
  );
}
