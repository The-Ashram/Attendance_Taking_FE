"use client";

import Header from "../components/Header";
import { Button, CreateContainer, Wrapper } from "@/app/admin/account/styled";
import { Table } from "@/app/admin/components/Table/styled";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import Row from "./Row";
import CreateAModalContents from "@/app/admin/account/modals/CreateAModalContents";
import CreateRModalContents from "@/app/admin/account/modals/CreateRModalContents";
import Cookies from "js-cookie";
import { UserResponse } from "../../../../api/types";

const data = [
  {
    name: "abc",
    email: "abc@gm.com",
    phoneNumber: 999,
    phaseNumber: 3,
    role: "resident",
  },
  {
    name: "abcd",
    email: "abcd@gm.com",
    phoneNumber: 999,
    phaseNumber: 3,
    role: "resident",
  },
  {
    name: "dcba",
    email: "abcd@gm.com",
    phoneNumber: 999,
    role: "admin",
    employeeId: 1234,
  },
];

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
  const [apiResponse, setApiResponse] = useState<UserResponse | null>(null); // Changed undefined to null for better control flow
  const isAuthenticated = Cookies.get("role") === "admin";

  const modalHandler = () => {
    setCreateAVisible(false);
    setCreateRVisible(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("aT");
        if (!token) {
          console.error("Please re-login");
          return;
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/user`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setApiResponse(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error,
        );
      }
    };

    fetchData();
  }, []);

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
            <CreateAModalContents visible={createAVisible} />
          </Modal>
          <Modal
            isOpen={createRVisible}
            onRequestClose={() => modalHandler()}
            style={customStyles}
          >
            <CreateRModalContents visible={createRVisible} />
          </Modal>
          <Wrapper>
            <CreateContainer>
              <Button onClick={() => setCreateAVisible(true)}>
                Create Admin
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
                  <th>Role</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {apiResponse?.users.map((row, index) => (
                  <Row key={index} row={row} />
                ))}
              </tbody>
            </Table>
          </Wrapper>
        </>
      )}
    </>
  );
}
