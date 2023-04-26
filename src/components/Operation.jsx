import Amount from "./Amount";

const Operation = ({ date, description, amount }) => {
  return (
    <div className="operation">
      <div>
        <span>{date}</span>
        <span> {description}</span>
      </div>
      <Amount value={amount} currency="EUR" />
    </div>
  );
};

export default Operation;
