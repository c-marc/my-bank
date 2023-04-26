const formatValue = (value) => {
  // return value.toFixed(2);
  // or even better ?
  return value.toLocaleString("fr-FR", {
    minimuFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export { formatValue };
