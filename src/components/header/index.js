import React from "react";

import {
  Head,
  Title,
  Navegation,
  Form,
  IconSearch,
  Input,
  IconNotification,
  IconSingIn
} from "./style";
import { Container } from "../shared";

import icon from "../../imagens/search.svg";
import singin from "../../imagens/folder (1).svg";
import notif from "../../imagens/notification (1).svg";

export const Header = () => {
  return (
    <Head>
      <Container>
        <Title>dropbox</Title>
        <Navegation>
          <Form>
            <IconSearch src={icon} />
            <Input placeholder="Buscar" />
          </Form>
          <IconNotification src={notif} />
          <IconSingIn src={singin} />
        </Navegation>
      </Container>
    </Head>
  );
};
