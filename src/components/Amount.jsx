import { formatValue } from "../utils/format";

const currencySymbols = {
  EUR: "€",
  USD: "$",
};

const Amount = ({ value, currency }) => {
  return (
    <p className="amount">
      <span data-value data-currency={currency}>
        {formatValue(value)}
      </span>
      <span>{currencySymbols[currency]}</span>
    </p>
  );
};

export default Amount;
