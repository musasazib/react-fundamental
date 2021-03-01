import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products =[
    {name: 'Photoshop', price: '$99.69'},
    {name: 'Camera', price: '$55.56'},
    {name: 'Phone', price: '$123.87'},
  ]
  return (
    <div className="App">
      <header className="App-header">
      <p>I am react parson</p>
      <ul>
        {
          products.map(pd => <li>{pd.name}</li>)
        }
      </ul>
      <Counter></Counter>
      <Users></Users>
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>
      <Person name='Tanvir' job='Police' home='Halir More'></Person>
      <Person name='Ruhol' job='Oppo Mobile' home='Ram Sala'></Person>
      <Person name='Wally' job='Doctor' home='Hossain Nogor'></Person>
      <Person name='Masud' job='Businessman' home='Sonamokhi'></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  return(
    <div>
      <h3>Count : {count}</h3>
      <button onClick={()=> setCount (count + 1)}>Increase</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  })
  return(
    <div>
      <h3>Dynamic Users : {users.length} </h3>
      <ul>
        {
          users.map(user=> <li>{user.email}</li>)
        }
      </ul>
    </div>
  );
}

function Product(props) {
  const productStyle={
    border: '2px solid red',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: 'tomato',
    hight: '200px',
    width: '200px'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h4>{name}</h4>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  );  
}

function Person(props) {
  const personStyle={
    border: '2px solid red',
    width: '800px',
    margin: '10px',
    padding: '10px',
  
  }
  return(
    <div style={personStyle}>
      <h3>Name: {props.name} </h3>
      <h4>Profession: {props.job} </h4>
      <h5>Home:  {props.home} </h5>
    </div>
  )
  
}

export default App;
