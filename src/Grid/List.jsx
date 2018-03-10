import React from 'react';
export default ({ headers, data }) => {
  return (
    <table className="list">
      <thead>
        <tr>
          {headers.map(header => <td key={header.key}>{header.label}</td>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {headers.map(header => <td key={header.key}>{row[header.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
