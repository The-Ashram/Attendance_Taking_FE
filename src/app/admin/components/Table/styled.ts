import styled from "styled-components";

export const Table = styled.table`
    min-width: 80%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 18px;
    text-align: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    thead {
        background-color: cornflowerblue;
        color: white;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }

    th, td {
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
`;