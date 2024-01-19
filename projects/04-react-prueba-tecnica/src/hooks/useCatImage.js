import { useState, useEffect } from 'react';

export function useCatImage ({ fact }) {

  const CAT_PREFIX_IMAGE_URL = `https://cataas.com/cat/`;
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    // Si no hay 'fact' no hacemos nada
    if (!fact) return;

    // Si lo hay, lo dividimos en palabras y nos quedamos con las 3 primeras
    const threeFirstWords = fact.split(" ", 3).join(" ");

    // Hacemos la petición a la API de la imagen
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
    .then(res => res.json())
    .then(data => {
      const { _id } = data;
      setImageUrl(`${_id}/says/${threeFirstWords}?fontSize=50&fontColor=white`);
    })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
}