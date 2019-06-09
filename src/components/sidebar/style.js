import styled from "styled-components";

export const BarContainer = styled.aside`
  width: 240px;
  min-height: 100%;
  box-sizing: border-box;
  background-color: #f7f9fa;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const AsidePanel = styled.div`
  width: 80%;
  height: 15%;
  padding: 25px;
  margin: 0 auto;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const AsideFooter = styled.footer`
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  margin-left: 20px;
  box-sizing: border-box;
  border-top: 1px solid #e6e4eb;
  position: absolute;
  bottom: 0;

  h2 {
    font-size: 14px;
    color: #1b2733;
    cursor: pointer;
    font-weight: 400;
    text-transform: capitalize;
  }
`;

export const Logo = styled.a`
  img {
    margin-left: 15px;
    width: 30px;
    height: 30px;
    background-size: cover;
    box-sizing: border-box;
  }
`;

export const AsideMenu = styled.nav`
  margin-top: 15px;

  h1 {
    margin: 15px 13px;
    font-size: 1.3em;
    line-height: 21px;
    font-weight: 400;
    color: #0070e0;
    cursor: pointer;
    text-transform: capitalize;

    :hover {
      color: #0090e0;
    }
  }
`;

export const NavegationMenu = styled.ul`
  display: flex;
  min-width: 50px;
  list-style: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Link = styled.li`
  font-size: 1.2em;
  color: #637282;
  font-weight: 400;
  cursor: pointer;
  margin-left: -27px;
  margin-bottom: 15px;
  text-transform: capitalize;

  :hover {
    color: #637278;
  }

  :focus {
    font-weight: 600;
    color: #5fa5ea;
  }
`;
