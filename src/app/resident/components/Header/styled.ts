import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row; /* Align items in a row */
  align-items: center;
  justify-content: flex-start; /* Align items to the left */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  width: 100%; /* Take full width of the container */
  padding: 12px; /* Add padding around the container */
  gap: 16px; /* Space between the items */
  background-color: #f9f9f9; /* Light background for contrast */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adds a soft shadow */

  @media (max-width: 768px) {
    gap: 8px; /* Adjust gap for smaller screens */
    padding: 8px; /* Reduce padding for smaller devices */
    justify-content: center; /* Center align items for smaller screens */
  }
`;


export const Button = styled.button`
  flex-grow: 1; /* Makes all buttons take equal space except the last one */
  max-width: 160px; /* Ensure buttons don't grow too wide on mobile */
  background-color: #0070f3; /* Primary button color */
  color: #ffffff; /* Text color */
  border: none; /* Remove default border */
  padding: 12px 16px; /* Adjusted padding for mobile */
  border-radius: 6px; /* Slightly smaller rounded corners */
  font-size: 14px; /* Smaller font size for mobile readability */
  font-weight: 600; /* Bold font for emphasis */
  cursor: pointer; /* Pointer cursor for buttons */
  transition: background-color 0.3s, transform 0.2s; /* Smooth hover effect */

  &:hover {
    background-color: #005bb5; /* Darker blue on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
  }

  &:active {
    background-color: #003f7f; /* Even darker blue for active state */
    transform: scale(0.95); /* Shrinks slightly when clicked */
  }

  @media (max-width: 768px) {
    max-width: 100%; /* Buttons take full width on smaller screens */
    padding: 10px 12px; /* Reduce padding on small screens */
    font-size: 12px; /* Adjust font size for small screens */
  }
`;

export const LogoutButton = styled(Button)`
  flex-grow: 0; /* Keeps the logout button from expanding */
  margin-left: auto; /* Pushes it to the far right */
  white-space: nowrap; /* Prevents the text from wrapping to the next line */
  max-width: unset; /* Allow it to take as much space as needed for the text */

  @media (max-width: 768px) {
    flex-grow: 1; /* Allow it to grow evenly with other buttons on mobile */
    margin-left: 0; /* Reset margin for mobile stacking */
  }
`;

export const Title = styled.label`
  display: grid;
  align-items: center;
  font-size: 16px; /* Default font size */
  margin-bottom: 8px; /* Add space below the title for readability */

  @media (max-width: 768px) {
    font-size: 14px; /* Smaller font size for mobile */
    margin-bottom: 6px; /* Adjust spacing for mobile */
  }
`;
