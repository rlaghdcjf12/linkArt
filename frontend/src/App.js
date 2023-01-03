import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Header from './components/header/Header';

function App() {
  const [list, setList] = useState([]);

  const handleClick = async () => {
    try {
      const response = await axios.get('https://bucketlist.pyeongbee.workers.dev');
      setList(response.data.results);
      console.log(list.length);
      console.log(list[0].properties.bucket.title[0].plain_text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='App'>
      <Header />
      <header>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <button onClick={handleClick}>click!</button>
        {list.length > 0 &&
          list?.map((element) => <div key={1}>{element.properties.bucket.rich_text[0].plain_text}</div>)}
      </header>
    </div>
  );
}

export default App;
