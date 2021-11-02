import './App.css';
import AppProvider from "./contexts/AppContext";
import Grandma from "./components/Grandma";

function App() {
  return (
    <AppProvider>
      <Grandma />
    </AppProvider>
  );
}

export default App;

