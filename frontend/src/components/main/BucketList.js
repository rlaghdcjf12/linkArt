import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Tooltip, Zoom } from '@mui/material';
import BorderHexagon from '../common/BorderHexagon';

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
  );
}

// const HoneyAppBar = styled(AppBar)`
//   background-color: white !important;
//   border-bottom: 2px solid gold;
//   color: saddlebrown !important;
// `;

export default BucketList;
