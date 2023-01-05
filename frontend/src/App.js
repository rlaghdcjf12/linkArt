import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '@mui/material';
import Spacer from './components/common/Spacer';
import Header from './components/header/Header';
import Main from './components/main/BucketList';

function App() {
  return (
    <div className='App'>
      <Header />
      <Spacer axis='vertical' size={2} />
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
  margin: 0 auto;
`;

export default App;
