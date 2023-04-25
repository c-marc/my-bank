import Account from "./Account";

const Accounts = ({ accounts }) => {
  return (
    <div className="container">
      {accounts.map((account) => (
        <Account key={account.name} account={account} />
      ))}
    </div>
  );
};

export default Accounts;
