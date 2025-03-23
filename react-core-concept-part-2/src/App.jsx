
import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';
import Posts from './Posts';
import Players from './Players';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())


const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}


const fethPosts = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}


function App() {

  const friendsPromise = fetchFriends();
  const postsPromise = fethPosts();

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

      <Players></Players>

      <Suspense fallback={<h4>Posts are coming...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers ={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

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
