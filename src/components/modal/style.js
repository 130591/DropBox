import styled from "styled-components";

export const ModalContent = styled.section`
  position: relative;
  top: 25%;
  left: 30%;
  width: 500px;
  min-height: 200px;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
`;

export const HeadModal = styled.header`
  width: 100%;
  height: 30px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 16px;
  line-height: 24px;
  color: #3d464d;
  font-weight: 400;
`;

export const IconClose = styled.img`
  width: 20px;
  height: 20px;
`;

export const InputModal = styled.input`
  width: 80%;
  border: 0px;
  width: 100%;
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  margin-bottom: 15px;

  :focus {
    border-bottom: 1px solid #0070e0;
  }
`;

export const ModalFooter = styled.footer`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;
