
import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';

function App() {

  function handleClick(){
    alert("I am Clicked")
  }

  const handleClick3 = () => {
    alert("clicked 3")
  }

  const handleAdds = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h1>Vite + React</h1>

      <Batsman></Batsman>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert("clicked 2")
      }}>Click Me</button>

      <button onClick={handleClick3}>Click me 3</button>

      <button onClick={()=> alert("clicked 4")}>Click me 4</button>

      <button onClick={() => handleAdds(3)}>Click add 5</button>
    </>
  )
}

export default App
