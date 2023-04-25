import Value from "./Value";
import Button from "./Button";
import Operation from "./Operation";

const Account = ({ account }) => {
  return (
    <section className="account">
      <div
        className="account-header"
        style={{ backgroundColor: account.color }}
      >
        <h2>{account.name}</h2>
        <Value value={account.balance} currency="€" />
      </div>

      <ul className="container">
        {account.operations.map((op) => {
          const uid = op.date + op.description;
          // console.log(uid);
          return (
            <li key={uid}>
              <Operation
                date={op.date}
                description={op.description}
                amount={op.amount}
              />
            </li>
          );
        })}
      </ul>

      <div className="container">
        <Button>See more</Button>
      </div>
    </section>
  );
};

export default Account;
