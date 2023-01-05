import * as React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, AppBar, Toolbar, Typography, Avatar, IconButton } from '@mui/material';
import Spacer from '../common/Spacer';

function Header() {
  return (
    <StyledBox sx={{ flexGrow: 1 }}>
      <HoneyAppBar position='static' elevation={0}>
        <Toolbar variant='dense'>
          <MainIcon alt='PyeongBee' src='/logo_Bee_lsh_white_gra.png' />
          <Spacer axis='horizontal' size={1} />
          <Typography variant='h6'>PyeongBee</Typography>
          <Typography variant='h6' sx={{ flexGrow: 2 }}>
            {/* 2023 올해의 목표 */}
          </Typography>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </HoneyAppBar>
    </StyledBox>
  );
}

const StyledBox = styled(Box)`
  z-index: 10;
`;

const HoneyAppBar = styled(AppBar)`
  background-color: white !important;
  border-bottom: 2px solid gold;
  color: saddlebrown !important;
`;

const MainIcon = styled(Avatar)`
  width: 40px;
  height: 40px;
`;

export default Header;
