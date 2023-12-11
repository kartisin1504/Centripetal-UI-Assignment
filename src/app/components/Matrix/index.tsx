/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
export function Matrix() {
  // State variables for rows and cols
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [totalPaths, setTotalPaths] = useState(0);

  // Initialize a 2D array to store the number of ways to reach each cell
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Calculate the number of ways to reach each cell using dynamic programming
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1; // Cells in the first row or first column can only be reached in one way
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  // Calculate the total number of paths
  useEffect(() => {
    setTotalPaths(dp[rows - 1][cols - 1]);
  }, [rows, cols, dp]);
  return (
    <Wrapper>
      <div>
        <h2>Total number of ways to reach each cell:</h2>

        {/* Input fields for rows and columns */}
        <label>
          Rows:
          <input
            type="number"
            value={rows}
            onChange={e => setRows(Number(e.target.value))}
          />
        </label>

        <label>
          Columns:
          <input
            type="number"
            value={cols}
            onChange={e => setCols(Number(e.target.value))}
          />
        </label>

        <table>
          <tbody>
            Paths:{totalPaths}
            {dp.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((value, colIndex) => (
                  <td
                    key={colIndex}
                    style={{
                      backgroundColor:
                        rowIndex === rows - 1 && colIndex === cols - 1
                          ? 'red'
                          : 'inherit',
                    }}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  table {
    border-collapse: collapse;
    width: 300px; /* Adjust the width as needed */
    margin: 20px;
  }

  th,
  td {
    border: 1px solid #4caf50; /* Green border color */
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: #4caf50; /* Green background color for header cells */
    color: white;
  }

  /* Optional: Add hover effect */
  tr:hover {
    background-color: #f5f5f5;
  }
`;
