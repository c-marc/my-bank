import { formatValue } from "../utils/format";

const Value = ({ value, currency }) => {
  return (
    <p className="value">
      <span>{formatValue(value)}</span>
      <span>{currency}</span>
    </p>
  );
};

export default Value;
