import styled from "styled-components";

const StInputField = styled.div`

    display: grid;
    gap: 5px;

    input {
        border: 1px solid grey;
        border-radius: 4px;
        font-size: 20px;
        padding: 5px;
    }

    input:hover {
        background-color: #F0F8FF;
    }

    input:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
        adding: 3px 0px 3px 3px;
        border: 1px solid rgba(81, 203, 238, 1);
    }
`;

export default StInputField;