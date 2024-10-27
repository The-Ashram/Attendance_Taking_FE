import {
  Container,
  StatsBlock,
  Wrapper,
} from "@/app/admin/components/Dashboard/styled";
import { useState } from "react";
import Modal from "react-modal";
import ModalContents from "@/app/admin/components/Dashboard/ModalContents";
import { DayAttendanceResponse, UserResponse } from "../../../../../api/types";

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

interface Props {
  attendanceData: DayAttendanceResponse[];
  userData: UserResponse | null;
}

export default function Dashboard({ attendanceData, userData }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [inModal, setInModal] = useState(false);
  const [data, setData] = useState<DayAttendanceResponse[]>([]);
  const numOut = attendanceData?.filter((ad) => ad.status === "Out");
  const numIn = attendanceData?.filter((ad) => ad.status === "In");

  const modalHandler = (inModal: boolean) => {
    setInModal(inModal);
    if (inModal) {
      setData(numIn);
    } else {
      setData(numOut);
    }
    setOpenModal((s) => !s);
  };

  return (
    <Container>
      <Modal
        isOpen={openModal}
        onRequestClose={() => modalHandler(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalContents inModal={inModal} data={data} userData={userData} />
      </Modal>
      <Wrapper>
        <StatsBlock onClick={() => modalHandler(false)}>
          <label style={{ fontSize: "25px" }}>Residents Out</label>
          <label style={{ fontSize: "40px" }}>{numOut?.length ?? 0}</label>
        </StatsBlock>
        <StatsBlock onClick={() => modalHandler(true)}>
          <label style={{ fontSize: "25px" }}>Residents In</label>
          <label style={{ fontSize: "40px" }}>{numIn?.length ?? 0}</label>
        </StatsBlock>
      </Wrapper>
    </Container>
  );
}
