import React, { useState } from "react";

// COMPONENTS
import Modal from "react-modal";
import Upload from "../uploads";
import { Button } from "../appactions/style";
import { ModalContent, Title, IconClose, HeadModal, InputModal } from "./style";

// ICONS
import close from "../../imagens/search.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(177, 184,192, 0.2)",
    border: "0px",
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.1)"
  }
};

export const ModalBox = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { onPress } = props;
  return (
    <>
      <Button
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Criar novo arquivo
      </Button>
      {modalIsOpen === false ? (
        ""
      ) : (
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={modalIsOpen}
          onRequestClose={() => {
            setModalIsOpen(false);
          }}
          style={customStyles}
          contentLabel="PlayList"
        >
          <ModalContent>
            <HeadModal>
              <Title>Criar novo arquivo</Title>
              <IconClose
                src={close}
                alt="close"
                onClick={() => setModalIsOpen(false)}
              />
            </HeadModal>
            <InputModal placeholder="Nome do arquivo" />
            <Upload onUpload={onPress} />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
