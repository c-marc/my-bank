import Value from "./Value";

const Operation = ({ date, description, amount }) => {
  return (
    <div className="operation">
      <div>
        <span>{date}</span>
        <span> {description}</span>
      </div>
      <Value value={amount} currency="€"></Value>
    </div>
  );
};

export default Operation;
