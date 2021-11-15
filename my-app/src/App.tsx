import './App.scss';

import Header from './components/Header'
import VacationDays from './components/VacationDays'
import VacationForm from './components/VacationForm'
import LeaveHistory from './components/LeaveHistory'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main__wrapper wrapper">
      <main className="main">
        <VacationDays />
        <VacationForm />
        <LeaveHistory />
      </main>
      </div>
    </div>
  );
}

export default App;
