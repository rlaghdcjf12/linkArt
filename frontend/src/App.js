import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/BucketList';

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Main />}></Route> */}
          <Route path='*' element={<Main />}></Route>
          {/* <Route path='/product/*' element={<Product />}></Route> */}
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          {/* <Route path='*' element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
      <header>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
