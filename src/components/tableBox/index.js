import React from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import { Table, Tbody, Td, Tr, Title } from "./style";
import { HeadTable } from "./headTable";
import { ImageDoc, TitleDoc } from "./format";
import doc from "../../imagens/file.svg";

export const TableBox = props => {
  const { box } = props;
  return (
    <Table>
      <HeadTable />
      <Tbody>
        {box.data &&
          box.data.map(box => (
            <Tr key={box._id}>
              <Td>
                <div className="document-content">
                  <ImageDoc src={doc} />
                  <TitleDoc>{box.title}</TitleDoc>
                </div>
              </Td>
              <Td>
                <div className="document-content">
                  <Title>{box.updatedAt}</Title>
                </div>
              </Td>
              <Td>
                <Title>
                  <Link to={`/files/${box._id}`}>documento</Link>
                </Title>
              </Td>
              <Td>
                <Title>menu</Title>
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
};

export const TableFile = props => {
  const { files } = props;
  return (
    <Table>
      <HeadTable />
      <Tbody>
        {files &&
          files.map(file => (
            <Tr key={file._id}>
              <Td>
                <div className="document-content">
                  <ImageDoc src={doc} />
                  <TitleDoc>{file.title}</TitleDoc>
                </div>
              </Td>
              <Td>
                <div className="document-content">
                  <Title>{file.updatedAt}</Title>
                </div>
              </Td>
              <Td>
                <Title>
                  <Link to={`/files/${file._id}`}>documento</Link>
                </Title>
              </Td>
              <Td>
                <Title>
                  <img src={file.url} alt="path" />
                </Title>
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
};
