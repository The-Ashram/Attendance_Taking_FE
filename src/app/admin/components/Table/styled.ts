import styled from "styled-components";

export const Table = styled.table`
  width: 100%; /* Full width of container */
  max-width: 90%; /* Ensure it never exceeds container width */
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 30px; /* Adjusted font size for larger screens */
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  thead {
    background-color: cornflowerblue;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  th,
  td {
    padding: 12px 15px;
    border-bottom: 1px solid #ddd;
  }

  tbody tr {
    transition: background-color 0.2s ease-in-out;

    &:nth-child(even) {
      background-color: #f9f9f9;
    }

    &:hover {
      background-color: #f1f1f1;
    }

    td {
      &:last-child {
        text-align: center;
      }

      svg {
        cursor: pointer;
        transition: color 0.2s ease-in-out;

        &:hover {
          color: #0056b3;
        }
      }
    }
  }

  /* iPad & medium screens */
  @media (max-width: 1024px) {
    font-size: 20px;
    th,
    td {
      padding: 10px 12px;
    }

    tbody tr {
      &:nth-child(even) {
        background-color: #f2f2f2; /* Better contrast on medium screens */
      }
    }

    /* Allow horizontal scrolling for very small screens */
    overflow-x: auto;
    display: block;
  }

  /* Mobile Optimization */
  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size */
    th,
    td {
      padding: 10px 12px; /* Slightly smaller padding for medium screens */
    }

    tbody tr {
      &:nth-child(even) {
        background-color: #f2f2f2; /* Better contrast on medium screens */
      }
    }
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Further reduced font size for small screens */
    th,
    td {
      padding: 8px 10px; /* Further reduce padding for small screens */
    }

    tbody tr {
      &:nth-child(even) {
        background-color: #f2f2f2; /* Adjusted background for better contrast */
      }
    }

    /* Allow horizontal scrolling for very small screens */
    overflow-x: auto;
    display: block;
  }
`;
