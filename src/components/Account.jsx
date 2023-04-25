import Button from "./Button";

const Account = ({ account }) => {
  const bgc = `background-color: ${account.color};`;
  console.log(bgc); // ok
  return (
    <section>
      <div className={account.color}>
        {/* <div className={account.color} style={bgc}> */}
        <h2>{account.name}</h2>
        <p>{account.balance}</p>
      </div>

      <ul className="container">
        {account.operations.map((op) => {
          const uid = op.date + op.description;
          // console.log(uid);
          return (
            <li key={uid}>
              <span>{op.date}</span>
              <span>{op.description}</span>
              <span>{op.amount}</span>
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
