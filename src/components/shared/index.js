import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const Column = styled.div`
  width: calc(100% - 240px);
  margin: 0 auto;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
`;
