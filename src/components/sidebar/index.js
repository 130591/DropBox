import React from "react";

import {
  BarContainer,
  AsidePanel,
  AsideFooter,
  Logo,
  AsideMenu,
  NavegationMenu,
  Link
} from "./style";
import logo from "../../imagens/Dropbox_Icon.svg";

export const SiderBar = () => {
  return (
    <BarContainer>
      <AsidePanel>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <AsideMenu>
          <h1>arquivos</h1>
          <NavegationMenu>
            <Link>meus arquivos</Link>
            <Link>compartilhamento</Link>
          </NavegationMenu>
        </AsideMenu>
      </AsidePanel>
      <AsideFooter>
        <h2>pessoal</h2>
      </AsideFooter>
    </BarContainer>
  );
};
