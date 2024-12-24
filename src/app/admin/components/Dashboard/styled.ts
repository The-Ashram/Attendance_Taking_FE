import styled from "styled-components";

// Container for overall layout
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3%;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */

  @media (max-width: 768px) {
    padding: 5%; /* Adjust padding for mobile */
  }

  @media (max-width: 480px) {
    padding: 8%; /* Further adjust padding for very small screens */
  }
`;

// Wrapper for inner content
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;  /* Gap between the two blocks */
  width: 100%;
  max-width: 1000px; /* Max width to prevent the blocks from stretching too far apart */
  
  @media (max-width: 768px) {
    gap: 15px; /* Slightly smaller gap on smaller screens */
  }

  @media (max-width: 480px) {
    gap: 10px; /* Even smaller gap for mobile */
  }
`;

// StatsBlock button (the blocks that display stats)
export const StatsBlock = styled.button`
  flex: 1;  /* Makes the stats blocks take equal width */
  min-width: 120px;  /* Minimum width to avoid squishing on smaller screens */
  width: 30%; /* Width of each block */
  height: 100px;
  padding: 15px;
  display: grid;
  background-color: lightseagreen;
  border: lightseagreen;
  border-radius: 15px;
  text-align: center;
  font-size: 16px; /* Set font size for readability */
  font-weight: bold;

  &:hover {
    background-color: lightcoral;
  }

  @media (max-width: 768px) {
    width: 45%; /* Adjust block width for smaller screens */
    font-size: 14px; /* Slightly reduce font size for mobile */
    height: 80px; /* Adjust height for smaller screens */
  }

  @media (max-width: 480px) {
    width: 100%; /* Make blocks full width on very small screens */
    font-size: 12px; /* Further reduce font size for small screens */
    height: 70px; /* Adjust height even further */
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
