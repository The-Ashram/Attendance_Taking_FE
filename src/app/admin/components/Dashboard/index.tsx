import {Container, StatsBlock, Wrapper} from "@/app/admin/components/Dashboard/styled";
import {useState} from "react";
import Modal from "react-modal";
import ModalContents from "@/app/admin/components/Dashboard/ModalContents";

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

export default function Dashboard() {
    const [openModal, setOpenModal] = useState(false);
    const [inModal, setInModal] = useState(false)

    const modalHandler = (inModal: boolean) => {
        setInModal(inModal)
        setOpenModal((s) => !s)
    }

    return (
        <Container>
            <Modal isOpen={openModal} onRequestClose={() => modalHandler(false)} style={customStyles} ariaHideApp={false}>
                <ModalContents inModal={inModal}/>
            </Modal>
            <Wrapper>
                <StatsBlock onClick={() => modalHandler(false)}>
                    <label style={{fontSize: "25px"}}>Residents Out</label>
                    <label style={{fontSize: "40px"}}>3</label>
                </StatsBlock>
                <StatsBlock onClick={() => modalHandler(true)}>
                    <label style={{fontSize: "25px"}}>Residents In</label>
                    <label style={{fontSize: "40px"}}>3</label>
                </StatsBlock>
            </Wrapper>
        </Container>
    )
}