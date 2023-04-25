import "./App.css";

import Header from "./components/Header";
import Accounts from "./components/Accounts";

import accounts from "./assets/data.json";

function App() {
  return (
    <>
      <Header userName="Marc" />

      <Accounts accounts={accounts} />
    </>
  );
}

export default App;
