import React, { useState, useEffect } from 'react';
import data from './data.json';

const DummyDataTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, []);

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead style={{ backgroundColor: '#f2f2f2' }}>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Site URL</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Bytes</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Carbon</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(item => (
          <tr key={item.url}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.url}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.bytes}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.statistics.co2.grid.grams}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DummyDataTable;