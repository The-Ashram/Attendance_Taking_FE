import {CiEdit} from "react-icons/ci";
import {MdDeleteOutline} from "react-icons/md";
import {useState} from "react";
import EditModalContents from "@/app/admin/account/modals/EditModalContents";
import Modal from "react-modal";
import DeleteModalContents from "./modals/DeleteModalContents";
import CreateModalContents from "./modals/CreateModalContents";

interface Props {
    row: any
}

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

export default function Row({row}: Props) {
    const [editVisible, setEditVisible] = useState(false)
    const [deleteVisible, setDeleteVisible] = useState(false)


    function modalHandler() {
        setEditVisible(false);
        setDeleteVisible(false);
    }

   return  (<>
           <Modal isOpen={editVisible || deleteVisible} onRequestClose={() => modalHandler()} style={customStyles}>
               <EditModalContents visible={editVisible}/>
               <DeleteModalContents visible={deleteVisible}/>
           </Modal>
       <tr>
    <td>{row.name}</td>
    <td>{row.email}</td>
    <td>{row.role}</td>
    <td>
        <CiEdit onClick={() => setEditVisible(true)} style={{width: "25%", height: "25%"}}/>
    </td>
    <td>
        <MdDeleteOutline onClick={() => setDeleteVisible(true)} style={{width: "15%", height: "15%"}}/>
    </td>
</tr>
   </>
   )
}
