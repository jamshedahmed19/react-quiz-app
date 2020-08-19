import styled from "styled-components";

export const Wrapper = styled.div`
  width: 85%;
  margin: 50px auto;

  .Qnumber {
    font-size: 28px;
    font-weight: 700;
    color: #14213d;
    text-transform: uppercase;
  }

  p {
    font-size: 24px;
  }

  .options {
    width: 100%;
  }

  .select {
    cursor: pointer;
    text-align: left;
    width: 100%;
    margin: 2px 0;
    padding: 10px 20px;
    font-size: 20px;
    letter-spacing: 3px;
    font-weight: 700;
    border: 3px solid #e5e5e5;
    border-radius: 0px;
    border: none;
    outline: none;
    background: #14213d;
    color: #fca311;
    :hover {
      transition: 0.2s linear;
      background: #fca311;
      color: #14213d;
      border: 3px solid #14213d;
    }
  }
`;
