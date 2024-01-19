const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

// Get a random cat fact
export const getRandomCatFact = async () => {
  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  const data = await response.json();
  return data.fact;
};