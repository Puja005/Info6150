import logo from './logo.svg';
import './App.css';
import Button from './Button.jsx';

function App() {
  return (
    <div className="app">
      <Button visual="link">Example 1</Button>
      <Button visual="button">Example 2</Button>
      <dialog open>
          <form>
            <h2>Modal Dialog</h2>
            <p>Click any of the buttons below:</p>
            <Button type="submit" visual="link">
              Submit Form
            </Button>
          </form>
        </dialog>
    </div>
  );
}

export default App;
