import './App.css';
import Hello from './com/Hello'

function App() {
 
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
 
  return (
    <div className="App">
      <Hello/>
      <div style={style}>{name}</div>
    </div>
  );
}

export default App;
