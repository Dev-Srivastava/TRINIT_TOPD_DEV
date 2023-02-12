import React, { useState, useEffect } from 'react';
import data from './data.json';

const DummyDataTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, []);

  const sortTableData = (bytes) => {
    setTableData(tableData.sort((a, b) => (a[bytes] > b[bytes] ? 1 : -1)));
  };

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead style={{ backgroundColor: 'black' }}>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }} onClick={() => sortTableData('url')}>URL</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }} onClick={() => sortTableData('bytes')}>Bytes</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }} onClick={() => sortTableData('green')}>Green</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }} onClick={() => sortTableData('CO2 Emission')}>CO2 Emission</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }} onClick={() => sortTableData('energy')}>Energy</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(item => (
          <tr key={item.id}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.url}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.bytes}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.green}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.statistics.co2.grid.grams}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.statistics.energy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DummyDataTable;

