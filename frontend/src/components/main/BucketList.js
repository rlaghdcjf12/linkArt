import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Paper, Typography, Grid, Tooltip, Zoom } from '@mui/material';
import BorderHexagon from '../common/BorderHexagon';
import Spacer from '../common/Spacer';

function BucketList() {
  const [bucketList, setBucketList] = useState([]);

  const fetch = async () => {
    try {
      const response = await axios.get('https://bucketlist.pyeongbee.workers.dev');
      setBucketList(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Container elevation={0}>
      <Typography variant='h5' sx={{ flexGrow: 2 }}>
        2023 올해의 목표
      </Typography>
      <Spacer axis='vertical' size={1} />
      <Grid container spacing={{ xs: 2 }} columns={{ xs: 4 }}>
        {bucketList?.map((element, index) => (
          <Tooltip
            TransitionComponent={Zoom}
            title={element.properties.bucket.rich_text[0].plain_text}
            placement='bottom'
          >
            <Grid item xs={2} key={index}>
              <BorderHexagon
                width='100'
                height='100'
                border='2px solid gold'
                image={element.properties.image.rich_text[0].plain_text}
              ></BorderHexagon>
            </Grid>
          </Tooltip>
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled(Paper)`
  text-align: center;
`;

export default BucketList;
