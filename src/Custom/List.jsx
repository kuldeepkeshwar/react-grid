import React from 'react';
export default ({ headers, data }) => {
  return (
    <table className="custom list">
      <thead>
        <tr>
          {headers.map(header => <td key={header.key}>{header.label}</td>)}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr>
            {headers.map(header => <td key={header.key}>{row[header.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
