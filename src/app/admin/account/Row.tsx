import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Dispatch, SetStateAction, useState } from "react";
import EditModalContents from "@/app/admin/account/modals/EditModalContents";
import Modal from "react-modal";
import DeleteModalContents from "./modals/DeleteModalContents";

interface Props {
  row: any;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "70%",
    width: "70%",
  },
};

const deleteStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "40%",
    width: "40%",
  },
};

export default function Row({ row, setRefresh }: Props) {
  const [editVisible, setEditVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [selectedID, setSelectedID] = useState("");

  function modalHandler() {
    setEditVisible(false);
    setDeleteVisible(false);
  }

  function deleteHandler(row: any) {
    setDeleteVisible(true);
    setSelectedID(row.id);
  }

  return (
    <>
      <Modal
        isOpen={editVisible}
        onRequestClose={() => modalHandler()}
        style={customStyles}
      >
        <EditModalContents
          visible={editVisible}
          data={row}
          onClose={modalHandler}
          setRefresh={setRefresh}
        />
      </Modal>
      <Modal
        isOpen={deleteVisible}
        onRequestClose={() => modalHandler()}
        style={deleteStyles}
      >
        <DeleteModalContents
          visible={deleteVisible}
          onClose={modalHandler}
          id={selectedID}
          setRefresh={setRefresh}
        />
      </Modal>
      <tr>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>{row.role}</td>
        <td>
          <CiEdit
            onClick={() => setEditVisible(true)}
            style={{ width: "25%", height: "25%" }}
          />
        </td>
        <td>
          <MdDeleteOutline
            onClick={() => deleteHandler(row)}
            style={{ width: "15%", height: "15%" }}
          />
        </td>
      </tr>
    </>
  );
}
