const Table = ({ data }) => {
    return (
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} style={{ border: '1px solid black', padding: '8px' }}>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((cell, i) => (
                <td key={i} style={{ border: '1px solid black', padding: '8px' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  