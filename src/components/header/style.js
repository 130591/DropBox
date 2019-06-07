import styled from "styled-components";

export const Head = styled.header`
  width: calc(100% - 240px);
  height: 100px;
  position: absolute;
  top: 0px;
  left: 240px;

  div {
    width: calc(100% - 240px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
  color: #1b2733;
  text-transform: capitalize;
`;

export const Navegation = styled.nav`
  margin-right: 0;
  width: 35%;
  min-width: 300px;
  left: inherit;
  margin-left: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

export const Form = styled.form`
  width: 70%;
  display: flex;
  align-items: center;
  border-radius: 25px;
  overflow: hidden;
  border: 1px solid #c1c7cd;
  background: #fff;
  padding: 3px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
`;

export const IconSearch = styled.img`
  width: 15px;
  height: 15px;
  margin-top: 2px;
  margin-left: 2px;
`;

export const Input = styled.input`
  border: 0px;
  display: flex;
  padding: 3px;
  outline: none;
  font-size: 1em;
`;

export const IconNotification = styled.img`
  width: 20px;
  height: 20px;
`;

export const IconSingIn = styled(IconNotification)``;
