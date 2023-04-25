import User from "./User";
import Logo from "./Logo";

const Header = ({ userName }) => {
  return (
    <header>
      <div className="container">
        <h1>My Bank</h1>
        <div>
          <User userName={userName} />
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;
