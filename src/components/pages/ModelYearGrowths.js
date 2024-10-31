
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import EVChart from '../EVChartUi';
import Typography from '@mui/material/Typography';

function ModelYearGrowth() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse('/Electric_Vehicle_Population_Data.csv', {
      download: true,
      header: true,
      complete: (results) => setData(results.data),
    });
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        EV Growth by Model Year
      </Typography>
      {data.length > 0 ? <EVChart data={data} chartType="yearGrowth" /> : <p>Loading data...</p>}
    </div>
  );
}

export default ModelYearGrowth;
