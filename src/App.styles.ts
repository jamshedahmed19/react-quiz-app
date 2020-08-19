import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }

    body{
        background-color: #E5E5E5;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        color: #14213d
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 54px;
    font-family: "Staatliches", sans-serif;
  }

  img{
    margin-top: 100px;
  }

  .start,
  .score,
  .next {
    cursor: pointer;
    margin: 10px;
    padding: 15px 25px;
    font-size: 20px;
    letter-spacing: 3px;
    font-weight: 700;
    border-radius: 0px;
    border: none;
    outline: none;
    border: 5px solid #e5e5e5;
    background: #14213d;
    color: #fca311;
  }

  .start:hover,
  .next:hover {
    transition: 0.2s linear;
    background: #fca311;
    color: #14213d;
    border: 5px solid #14213d;
  }

  .score {
    font-size: 42px;
    border-radius: 20px;
    padding: 10px 20px;
    margin: 0;
  }

  .next {
    margin: 20px 0 10px 0;
  }
`;
