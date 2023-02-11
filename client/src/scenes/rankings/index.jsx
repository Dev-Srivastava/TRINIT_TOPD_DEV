import { Typography,Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import data from './data.json';

const DummyDataTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, []);

  return (
    <Box>
<Typography sx={{mt: '1rem',mb:'2rem', textAlign: 'center',fontWeight: 'bold' }} variant="h1" component="h2">
  Rankings of Different Websites
</Typography>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead style={{ backgroundColor: 'blue' }}>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Site URL</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Bytes</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Carbon</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Cleaner Than</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Energy</th>

        </tr>
      </thead>
      <tbody>
        {tableData.map(item => (
          <tr key={item.url}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.url}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.bytes}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.statistics.co2.grid.grams}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.cleanerThan}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.statistics.energy}</td>

          </tr>
        ))}
      </tbody>
    </table>
    </Box>
    
  );
};

export default DummyDataTable;