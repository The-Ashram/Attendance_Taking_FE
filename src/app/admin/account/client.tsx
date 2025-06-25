"use client";

import Header from "../components/Header";
import { Button, CreateContainer, Wrapper } from "@/app/admin/account/styled";
import { Table, TableWrapper } from "@/app/admin/components/Table/styled";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import Row from "./Row";
import CreateAModalContents from "@/app/admin/account/modals/CreateAModalContents";
import CreateRModalContents from "@/app/admin/account/modals/CreateRModalContents";
import { UserResponse } from "../../../../api/types";
import CreateUModalContents from "@/app/admin/account/modals/CreateUModalContents";
import api from "../../../../api/axios";
import { ErrorMessage } from "@/app/components/LoginModal/styled";
import { useRouter } from "next/navigation";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "16px", // Add spacing for smaller screens
  },
  content: {
    position: "relative",
    width: "100%",
    maxWidth: "600px",
    maxHeight: "90vh",
    padding: "24px",
    background: "#fff",
    borderRadius: "12px",
    overflowY: "auto", // Scroll if content overflows
    inset: "unset", // Override default top/left/right/bottom positioning
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
  },
};

export default function Account() {
  const [createAVisible, setCreateAVisible] = useState(false);
  const [createRVisible, setCreateRVisible] = useState(false);
  const [createUVisible, setCreateUVisible] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [apiResponse, setApiResponse] = useState<UserResponse | null>(null); // Changed undefined to null for better control flow
  const isAuthenticated = window.localStorage.getItem("role") === "admin";
  const router = useRouter();

  const modalHandler = () => {
    setCreateAVisible(false);
    setCreateRVisible(false);
    setCreateUVisible(false);
  };

  useEffect(() => {
    const isAuthenticated = window.localStorage.getItem("role") === "admin";
    if (!isAuthenticated) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await api
        .get(`${process.env.NEXT_PUBLIC_API_URL}/user`)
        .then((r) => setApiResponse(r.data))
        .catch((r) => setErrorMsg(r.response.data));
    };
    fetchData();
  }, [refresh]);

  return (
    <>
      <Header />
      {isAuthenticated && (
        <>
          <Modal
            isOpen={createAVisible}
            onRequestClose={() => modalHandler()}
            style={customStyles}
          >
            <CreateAModalContents
              visible={createAVisible}
              closeModal={modalHandler}
              setRefresh={setRefresh}
            />
          </Modal>
          <Modal
            isOpen={createRVisible}
            onRequestClose={() => modalHandler()}
            style={customStyles}
          >
            <CreateRModalContents
              visible={createRVisible}
              closeModal={modalHandler}
              setRefresh={setRefresh}
            />
          </Modal>
          <Modal
            isOpen={createUVisible}
            onRequestClose={() => modalHandler()}
            style={customStyles}
          >
            <CreateUModalContents
              visible={createUVisible}
              closeModal={modalHandler}
              setRefresh={setRefresh}
            />
          </Modal>
          <Wrapper>
            <CreateContainer>
              <Button onClick={() => setCreateAVisible(true)}>
                Create Admin
              </Button>
              <Button
                style={{ marginLeft: "10px" }}
                onClick={() => setCreateUVisible(true)}
              >
                Create User
              </Button>
              <Button
                style={{ marginLeft: "10px" }}
                onClick={() => setCreateRVisible(true)}
              >
                Create Resident
              </Button>
            </CreateContainer>
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>To Note</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {apiResponse?.users
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((row, index) => (
                      <Row key={index} row={row} setRefresh={setRefresh} />
                    ))}
                </tbody>
              </Table>
            {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
          </Wrapper>
        </>
      )}
    </>
  );
}
