import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Card, Grid } from '@mui/material';

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
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {bucketList?.map((element, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Card></Card>
          {element.properties.bucket.rich_text[0].plain_text}
        </Grid>
      ))}
    </Grid>
  );
}

// const HoneyAppBar = styled(AppBar)`
//   background-color: white !important;
//   border-bottom: 2px solid gold;
//   color: saddlebrown !important;
// `;

export default BucketList;
