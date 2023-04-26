import { formatValue } from "../utils/format";

const currencySymbols = {
  EUR: "€",
  USD: "$",
};

const Amount = ({ value, currency }) => {
  return (
    <p className="amount">
      <meter data-currency={currency}>{formatValue(value)}</meter>
      <span>{currencySymbols[currency]}</span>
    </p>
  );
};

export default Amount;
