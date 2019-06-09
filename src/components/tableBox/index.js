import React, { useState } from "react";

import { Table, Thead, Th, Tr, Tbody, Td, Title } from "./style";
import { ImageDoc, TitleDoc } from "./format";
import doc from "../../imagens/file.svg";

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
        <Tr>
          <Th>tipo</Th>
        </Tr>
        <Tr>
          <Th>menu</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <div className="document-content">
              <ImageDoc src={doc} />
              <TitleDoc>Documento</TitleDoc>
            </div>
          </Td>
          <Td>
            <Title>23/05/2019</Title>
          </Td>
          <Td>
            <Title>Documento</Title>
          </Td>
          <Td>
            <Title>menu</Title>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div className="document-content">
              <ImageDoc src={doc} />
              <TitleDoc>Documento</TitleDoc>
            </div>
          </Td>
          <Td>
            <Title>23/05/2019</Title>
          </Td>
          <Td>
            <Title>Documento</Title>
          </Td>
          <Td>
            <Title>menu</Title>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div className="document-content">
              <ImageDoc src={doc} />
              <TitleDoc>Documento</TitleDoc>
            </div>
          </Td>
          <Td>
            <Title>23/05/2019</Title>
          </Td>
          <Td>
            <Title>Documento</Title>
          </Td>
          <Td>
            <Title>menu</Title>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div className="document-content">
              <ImageDoc src={doc} />
              <TitleDoc>Documento</TitleDoc>
            </div>
          </Td>
          <Td>
            <Title>23/05/2019</Title>
          </Td>
          <Td>
            <Title>Documento</Title>
          </Td>
          <Td>
            <Title>menu</Title>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
