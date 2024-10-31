
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import EVChart from './EVChartUi';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse('/Electric_Vehicle_Population_Data.csv', {
      download: true,
      header: true,
      complete: (results) => setData(results.data),
    });
  }, []);

  return (
    <Box  sx={{mt:6}}>

    
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Key Insights
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {data.length > 0 ? (
        <>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <EVChart data={data} chartType="makeDistribution" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <EVChart data={data} chartType="yearGrowth" />
              </CardContent>
            </Card>
          </Grid>
        </>
      ) : (
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <CircularProgress />
        </Grid>
      )}
    </Grid>
    </Box>
  );
}

export default Dashboard;
