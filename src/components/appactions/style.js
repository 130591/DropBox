import styled from "styled-components";

export const Menu = styled.div`
  outline: none;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 240px;
  flex: 0 0 240px;
  margin-right: 40px;
`;

export const Button = styled.button`
  border: 0px;
  color: #f1f1f1;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  text-align: center;
  padding: 7px 30px;
  background-color: #0070e0;
`;

export const ListMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  width: 120px;
  padding-left: 0px;
`;

export const MenuItem = styled.li`
   display: flex;
   align-items: center;
   font-size: color: #0070e0;
   cursor:pointer;

   img {
     width: 20px;
     height: 20px;
   }

   h2 {
     font-size: 13px;
     color: #0070e0;
     font-weight: 400;
     margin-left: 10px;
   }
`;
