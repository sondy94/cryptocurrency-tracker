import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin'


const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

function App() {
  const [coins, setCoins] = useState([]);
  const [search,setSearch]  = useState('');


  const onFormSubmit = (e) => {
    e.preventDefault();

  }

useEffect(() => {
  axios.get(url)
  .then((res) => {
setCoins(res.data);
console.log(res.data);
  })
},[])

const filteredCoins = coins.filter(coin => 
  coin.name.toLowerCase().includes(search.toLowerCase()));
 

  return (
    <div className="App">
      <div className="coin-search">
        <h1 className="coin-text">search a currency</h1>
        <form action="" onSubmit ={onFormSubmit} >
          <input type="text" placeholder="Search" className="coin-input" onChange={(e) => setSearch(e.target.value)} />

        </form>
      </div>
      {
        filteredCoins.map(coin => {
          return <Coin key={coin.id} {...coin} />
        })
      }
    </div>
  );
}

export default App;
