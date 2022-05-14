import './App.css';
import Navbar from './components/navbar';
import Main from './components/body/main';
import Content from './components/body/content';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Content/>
    </div>
  );
}

export default App;
