import styled from "styled-components";

export const Table = styled.table`
  min-width: 80%; /* Ensures table never overflows the container */
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px; /* Adjusted font size for mobile */
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

  /* Mobile Optimization */
  @media (max-width: 768px) {
    font-size: 14px; /* Reduce font size for better readability */
    th, td {
      padding: 10px 12px; /* Slightly smaller padding */
    }

    tbody tr {
      &:nth-child(even) {
        background-color: #f2f2f2; /* Adjusted background for better contrast */
      }
    }
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Further reduce font size for very small screens */
    th, td {
      padding: 8px 10px; /* Further reduce padding */
    }

    tbody tr {
      &:nth-child(even) {
        background-color: #f2f2f2;
      }
    }
  }
`;
