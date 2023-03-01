import './App.css';
import Question from './Question';

function App() {
  return (
    <div className="App">
      <h1>Project 2: FAQ/Accordion</h1>
      <div className="accordion-container">
        <h2>Frequently Asked Questions</h2>
        <Question title="Is this a good product?" answer="Yeah. Its very good" />
        <Question title="How much does it cost?" answer="99€" />
        <Question title="When can i get it?" answer="Now!" />
      </div>
    </div>
  );
}

export default App;
