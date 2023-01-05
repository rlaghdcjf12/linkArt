import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/header/Header';
import Main from './components/main/BucketList';
import { Box } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <Header />
      <Body>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<Main />}></Route>
            {/* <Route path='/' element={<Main />}></Route> */}
            {/* <Route path='/product/*' element={<Product />}></Route> */}
            {/* <Route path='*' element={<NotFound />}></Route> */}
          </Routes>
        </BrowserRouter>
      </Body>
    </div>
  );
}

const Body = styled(Box)`
  width: 80vw;
  margin: 10px auto;
`;

export default App;
