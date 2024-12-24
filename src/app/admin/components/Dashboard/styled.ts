import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #f7f7f7; // Light background for the dashboard
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;  // Add space between items

  @media (max-width: 1024px) {
    justify-content: space-evenly;
  }

  @media (max-width: 768px) {
    flex-direction: row; // Keep items side by side on tablets
    align-items: center; // Ensure they align in the center
  }

  @media (max-width: 480px) {
    flex-direction: row; // Items will stay in a row even on mobile, with wrap
    justify-content: center;
    align-items: center;
    gap: 15px; // Adjust gap for mobile view
  }
`;

export const StatsBlock = styled.div`
  background-color: #4caf50; /* A stronger green for better contrast */
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  flex: 1 1 45%; // Allow flex items to grow and shrink
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #1976d2; /* Stronger blue for hover */
  }

  label {
    font-size: 16px;
    color: black; /* Set font color to black */
  }

  label:nth-child(2) {
    font-size: 30px;
    font-weight: bold;
    margin-top: 5px;
    color: black; /* Ensure the font is black for the second label as well */
  }

  @media (max-width: 768px) {
    flex: 1 1 40%; /* Adjust the width for tablets */
    margin: 10px;
  }

  @media (max-width: 480px) {
    flex: 1 1 45%; /* Adjust the width for mobile devices, side by side still */
    margin: 10px 0;
  }
`;

// Modal wrapper for centering content
export const ModalWrapper = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center; /* Vertically center content */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px; /* Adjust padding for mobile */
  }

  @media (max-width: 480px) {
    padding: 10px; /* Further adjust padding for very small screens */
  }
`;
