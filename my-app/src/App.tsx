import "./App.scss";

import Header from "./components/Header";
import VacationDays from "./components/VacationDays";
import FormBlock from "./components/FormBlock";
import LeaveHistory from "./components/LeaveHistory";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main__wrapper wrapper">
        <main className="main">
          <VacationDays />
          <FormBlock />
          <LeaveHistory />
        </main>
      </div>
    </div>
  );
}

export default App;
