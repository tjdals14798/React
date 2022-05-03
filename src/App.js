import './App.css';
import Hello from './com/Hello'
import Wrapper from './com/Wrapper';
import Counter from './com/Counter';
import InputSample from './com/InputSample';

function App() {
 
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
 
  return (
      <Wrapper>
        <Hello name="react" color="red" isSpecial/>
        <Hello color="blue"/>
        <div style={style}>{name}</div>
        <Counter />
        <InputSample />
      </Wrapper>
  );
}

export default App;
