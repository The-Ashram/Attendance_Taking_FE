'use client'

import Header from "../components/Header"
import {CreateContainer, Wrapper} from "@/app/admin/account/styled";
import {CiEdit} from "react-icons/ci";
import {MdOutlineCreateNewFolder, MdDeleteOutline} from "react-icons/md";
import {Table} from "@/app/admin/components/Table/styled";


const data = [
    {
        name: 'abc',
        email: 'abc@gm.com'
    },
    {
        name: 'abcd',
        email: 'abcd@gm.com'
    }
]

export default function Account() {
    return <>
        <Header/>
        <Wrapper>
            <CreateContainer>
                <MdOutlineCreateNewFolder style={{width: "4%", height: "max-content"}}/>
            </CreateContainer>
            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>
                            <CiEdit style={{width: "25%", height: "25%"}}/>
                        </td>
                        <td>
                            <MdDeleteOutline style={{width: "15%", height: "15%"}}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Wrapper>
    </>
}
