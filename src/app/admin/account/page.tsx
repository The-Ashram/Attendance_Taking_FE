'use client'

import Header from "../components/Header"
import {CreateContainer, Wrapper} from "@/app/admin/account/styled";
import {MdOutlineCreateNewFolder} from "react-icons/md";
import {Table} from "@/app/admin/components/Table/styled";
import {useState} from "react";
import Modal from "react-modal";
import Row from "./Row";
import CreateModalContents from "@/app/admin/account/modals/CreateModalContents";


const data = [
    {
        name: 'abc',
        email: 'abc@gm.com',
        role: 'resident'
    },
    {
        name: 'abcd',
        email: 'abcd@gm.com',
        role: 'resident'
    },
    {
        name: 'dcba',
        email: 'abcd@gm.com',
        role: 'admin'
    }
]

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '70%',
        width: '70%',
    },
};

export default function Account() {
    const [createVisible, setCreateVisible] = useState(false)
    function modalHandler() {
        setCreateVisible(false)
    }

    return <>
        <Modal isOpen={createVisible} onRequestClose={() => modalHandler()} style={customStyles}>
            <CreateModalContents visible={createVisible}/>
        </Modal>
        <Header/>
        <Wrapper>
            <CreateContainer>
                <MdOutlineCreateNewFolder onClick={() => setCreateVisible(true)} style={{width: "4%", height: "max-content"}}/>
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

                {data.map((row, index) => (
                    <Row key={index} row={row}/>
                ))}
                </tbody>
            </Table>
        </Wrapper>
    </>
}
