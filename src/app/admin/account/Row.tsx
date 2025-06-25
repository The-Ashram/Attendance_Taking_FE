import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Dispatch, SetStateAction, useState } from "react";
import EditModalContents from "@/app/admin/account/modals/EditModalContents";
import Modal from "react-modal";
import DeleteModalContents from "./modals/DeleteModalContents";
import { User } from "../../../../api/types";

interface Props {
  row: User;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dimmed background
    display: "flex",
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
    zIndex: 1000, // Make sure it appears above everything
    padding: "16px",
  },
  content: {
    position: "relative", // More predictable than absolute + transform
    height: "70%",
    width: "70%",
    maxHeight: "90vh", // Prevent overflow on shorter screens
    maxWidth: "90%", // Add max-width for smaller screens
    padding: "20px", // Add padding for better spacing
    borderRadius: "10px",
    overflow: "auto",      // Prevent content overflow
    inset: "unset",        // Disable all inset properties
  },
};

const deleteStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dimmed background
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "16px",
  },
  content: {
    position: "relative", // More predictable than absolute + transform
    width: "90%",          // Default width
    maxWidth: "400px",     // Limit max width for desktop
    padding: "24px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    inset: "unset",        // Disable all inset properties
    overflow: "auto",      // Prevent content overflow
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
        <td>{row.toNote}</td>
        <td>{row.email}</td>
        <td>{row.phoneNumber}</td>
        <td>{row.role}</td>
        <td>
          <CiEdit
            onClick={() => setEditVisible(true)}
            style={{ width: "50%", height: "50%" }}
          />
        </td>
        <td>
          <MdDeleteOutline
            onClick={() => deleteHandler(row)}
            style={{ width: "25%", height: "25%" }}
          />
        </td>
      </tr>
    </>
  );
}
