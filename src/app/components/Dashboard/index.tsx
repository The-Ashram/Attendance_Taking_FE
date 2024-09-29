import {Container, StatsBlock, Wrapper} from "@/app/components/Dashboard/styled";
import {useState} from "react";
import Modal from "react-modal";

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

    const ClickHandler = () => {
        setOpenModal((s) => !s)
    }

    return (
        <Container>
            <Modal isOpen={openModal} onRequestClose={ClickHandler} style={customStyles}
                   contentLabel={"List of Residents"}/>
            <Wrapper>
                <StatsBlock onClick={ClickHandler}>
                    <label style={{fontSize: "25px"}}>Residents Out</label>
                    <label style={{fontSize: "40px"}}>15</label>
                </StatsBlock>
                <StatsBlock>
                    <label style={{fontSize: "25px"}}>Residents In</label>
                    <label style={{fontSize: "40px"}}>5</label>
                </StatsBlock>
            </Wrapper>
        </Container>
    )
}