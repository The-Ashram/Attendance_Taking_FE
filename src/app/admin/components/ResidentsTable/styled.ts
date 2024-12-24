import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; /* Center the table vertically */
  padding: 20px; /* Add more padding for spacing */
  background-color: #f4f4f9; /* Light background color for contrast */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  overflow-x: auto; /* Allow horizontal scrolling for smaller screens */
  margin: 20px 0; /* Add margin above and below */

  @media (max-width: 768px) {
    padding: 10px; /* Adjust padding for smaller screens */
    border-radius: 8px; /* Slightly reduce border radius */
  }
`;
