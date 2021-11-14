import './App.scss';

import Header from './components/Header'
import VacationDays from './components/VacationDays'
import VacationForm from './components/VacationForm'
import LeaveHistory from './components/LeaveHistory'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <main>
        <VacationDays />
        <VacationForm />
        <LeaveHistory />
      </main>
    </div>
  );
}

export default App;
