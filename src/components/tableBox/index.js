import React, { useState } from "react";

import { Table, Thead, Th, Tr } from "./style";

export const TableBox = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th> nome</Th>
        </Tr>
        <Tr>
          <Th> modificado</Th>
        </Tr>
      </Thead>
    </Table>
  );
};
