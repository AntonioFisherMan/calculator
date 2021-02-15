import { Calculator } from "./components/Calculator";
import CalculatorProvider from './context/CalculatorProvider'


function App() {
  return (
    <div className="app">
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </div>
  );
}

export default App;
