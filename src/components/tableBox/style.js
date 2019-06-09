import styled from "styled-components";

export const Table = styled.table`
  width: 700px;
  color: #1b2733;
`;

export const Thead = styled.thead`
  display: flex;
  justify-content: space-between;
  flex-basis: 40px;
  padding-bottom: 5px;
  padding-left: 0px;
  border-bottom: 1px solid #e6e8eb;

  tr {
    align-items: center;

    th {
      font-size: 14px;
    }
  }
`;

export const Tr = styled.tr`
  /* padding: 5px; */
  display: flex;
  justify-content: space-between;
  color: #637282;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
`;

export const Th = styled.th`
  text-transform: capitalize;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #637282;
`;

export const Tbody = styled.tbody`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  tr {
    display: flex;
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #e6e8eb;

    td {
      height: 100%;
      align-items: center;
      display: flex;
      cursor: pointer;
    }
  }
`;

export const Td = styled.td`
  height: 144px;
  position: relative;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #333;
  text-transform: capitalize;
`;
