import styled from "styled-components";

// Wrapper for the header or container area
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 9vh;
    align-items: center;
    background-color: cornflowerblue;
    padding: 5px;
    flex-wrap: wrap; /* Allows wrapping on small screens */
    
    @media (max-width: 768px) {
        height: 12vh; /* Adjust height for mobile */
        padding: 10px;
    }

    @media (max-width: 480px) {
        height: 20vh; /* Even more space on very small screens */
        padding: 4px;
    }
`;

// Wrapper for buttons in the container
export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align buttons to the left */
  width: 100%; /* Take full width of the container */
  padding: 16px; /* Add some padding around the container */
  gap: 16px; /* Space between the buttons */
  background-color: #f9f9f9; /* Light background for contrast */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adds a soft shadow */
  flex-wrap: wrap; /* Allow wrapping on small screens */
  justify-content: space-between; /* Makes buttons spaced out even on small screens */

  @media (max-width: 768px) {
    padding: 12px; /* Adjust padding for mobile */
    gap: 12px; /* Adjust space between buttons */
  }

  @media (max-width: 480px) {
    padding: 8px; /* Less padding for very small screens */
    gap: 8px; /* Even smaller gap for mobile */
  }
`;

// General button style
export const Button = styled.button`
  flex-grow: 1; /* Makes all buttons take equal space except the last one */
  max-width: 240px; /* Ensure buttons don't grow too wide */
  background-color: #0070f3; /* Primary button color */
  color: #ffffff; /* Text color */
  border: none; /* Remove default border */
  padding: 20px 28px; /* Larger padding for bigger buttons */
  border-radius: 8px; /* Rounded corners */
  font-size: 20px; /* Larger font size for better readability */
  font-weight: 600; /* Bold font for emphasis */
  cursor: pointer; /* Pointer cursor for buttons */
  transition: background-color 0.3s, transform 0.2s; /* Smooth hover effect */
  white-space: nowrap; /* Prevents the text from wrapping to the next line */

  &:hover {
    background-color: #005bb5; /* Darker blue on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
  }

  &:active {
    background-color: #003f7f; /* Even darker blue for active state */
    transform: scale(0.95); /* Shrinks slightly when clicked */
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for mobile */
    padding: 12px 20px; /* Adjust padding for smaller buttons */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Further adjust for very small screens */
    padding: 10px 18px; /* Further adjust padding */
  }
`;

// Logout button that doesn't expand like other buttons
export const LogoutButton = styled(Button)`
  flex-grow: 0; /* Keeps the logout button from expanding */
  margin-left: auto; /* Pushes it to the far right */
  white-space: nowrap; /* Prevents the text from wrapping to the next line */
  max-width: unset; /* Allow it to take as much space as needed for the text */

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for mobile */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Further adjust for small screens */
  }
`;
