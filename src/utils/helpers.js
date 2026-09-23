export const savePrediction = (prediction) => {
  const predictions =
    JSON.parse(localStorage.getItem("predictions")) || [];

  prediction.id = Date.now();

  predictions.unshift(prediction);

  localStorage.setItem(
    "predictions",
    JSON.stringify(predictions)
  );
};

export const getPredictions = () => {
  return JSON.parse(localStorage.getItem("predictions")) || [];
};

export const deletePrediction = (id) => {
  const predictions = getPredictions();

  const updated = predictions.filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    "predictions",
    JSON.stringify(updated)
  );
};