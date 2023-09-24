import './App.css';
import Hero from './components/Hero/Hero.jsx';
import Program from './components/Program/program';
import Reason from './components/Reasons/Reason';
import Plans from './components/Plans/plans';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reason/>
          <Plans/>
    </div>
  );
}

export default App;
