import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import EVChart from '../EVChartUi';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
function MakeDistribution() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse('/Electric_Vehicle_Population_Data.csv', {
      download: true,
      header: true,
      complete: (results) => setData(results.data),
    });
  }, []);

  return (
    <Box sx={{mt:10}}>
    <div>
      {data.length > 0 ? <EVChart data={data} chartType="makeDistribution" /> : <p>Loading data...</p>}
    </div>
    </Box>
  );
}

export default MakeDistribution;
