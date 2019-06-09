import React from "react";

import { Menu, Button, ListMenu, MenuItem } from "./style";

import folder from "../../imagens/file (1).svg";

export const AppactionsMenu = () => {
  return (
    <>
      <Menu>
        <Button>Criar novo arquivo</Button>
        <ListMenu>
          <MenuItem>
            <img src={folder} alt="" />
            <h2>Enviar arquivos</h2>
          </MenuItem>
          <MenuItem>
            <img src={folder} alt="" />
            <h2>Mova pasta</h2>
          </MenuItem>
          <MenuItem>
            <img src={folder} alt="" />
            <h2>Enviar pasta</h2>
          </MenuItem>
        </ListMenu>
      </Menu>
    </>
  );
};
