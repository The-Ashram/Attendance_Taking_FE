"use client";

import Header from "../components/Header";
import { Button, CreateContainer, Wrapper } from "@/app/admin/account/styled";
import { Table } from "@/app/admin/components/Table/styled";
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
