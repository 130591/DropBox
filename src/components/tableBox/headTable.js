import React from "react";
import { Thead, Th, Tr } from "./style";

export const HeadTable = () => {
  return (
    <Thead>
      <Tr>
        <Th> nome</Th>
      </Tr>
      <Tr>
        <Th> modificado</Th>
      </Tr>
      <Tr>
        <Th>tipo</Th>
      </Tr>
      <Tr>
        <Th>menu</Th>
      </Tr>
    </Thead>
  );
};
