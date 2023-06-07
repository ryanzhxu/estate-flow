import styled from "styled-components";

const StInputField = styled.div`

    display: grid;
    gap: 4px;

    input {
        font-size: 16px;
        line-height: 24px;
        color: #121212;
        border: 1px solid #808080;
        border-radius: 8px;
        padding: 8px 12px;
    }

    input:HomeWelcomePage {
        background-color: #F2F2F2;
    }

    input:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
        adding: 3px 0px 3px 3px;
        border: 1px solid rgba(81, 203, 238, 1);
        transition: box-shadow 0.3s ease-in-out;
    }

    label {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }
`;

export default StInputField;