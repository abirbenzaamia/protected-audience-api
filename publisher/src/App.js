import './App.css';
import AdSlot from './components/AdSlot';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Publisher Website</h2>
      <p>Ad according to your browsing history</p>
      </header>
      <body>
       <AdSlot>

       </AdSlot>

      </body>
    </div>
  );
}

export default App;
