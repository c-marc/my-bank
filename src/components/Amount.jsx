import { formatValue } from "../utils/format";

const currencySymbols = {
  EUR: "€",
  USD: "$",
};

const Amount = ({ value, currency }) => {
  return (
    <p className="amount">
      <metric data-currency={currency}>{formatValue(value)}</metric>
      <span>{currencySymbols[currency]}</span>
    </p>
  );
};

export default Amount;
