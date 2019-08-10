import React from "react";

import { Menu, ListMenu, MenuItem } from "./style";
import { ModalBox } from "../modal";

import folder from "../../imagens/file (1).svg";

export const AppactionsMenu = props => {
  const { onPress } = props;
  return (
    <Menu>
      <ModalBox onPress={onPress} />
      <ListMenu>
        <MenuItem>
          <img src={folder} alt="" />
          <h2>Enviar arquivos</h2>
        </MenuItem>
        <MenuItem>
          <img src={folder} alt="" />
          <h2>Criar pasta</h2>
        </MenuItem>
        <MenuItem>
          <img src={folder} alt="" />
          <h2>Enviar pasta</h2>
        </MenuItem>
      </ListMenu>
    </Menu>
  );
};
