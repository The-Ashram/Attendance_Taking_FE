import {
  Button,
  ButtonsWrapper,
  Wrapper,
} from "@/app/admin/components/Header/styled";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "react-modal";
import ReportModal from "@/app/admin/components/Header/ReportModal";

const ReportStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "50%",
    width: "50%",
  },
};

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/admin/homepage";
  const [isVisible, setVisible] = useState(false);

  const LogoutHandler = () => {
    //logout stuff
    router.push("/");
  };

  const AccountHandler = () => {
    router.push("/admin/account");
  };
  const HomeHandler = () => {
    router.push("/admin/homepage");
  };

  const ReportHandler = () => {
    setVisible(true);
  };

  const modalHandler = () => {
    setVisible(false);
  };

  return (
    <Wrapper>
      <Modal
        isOpen={isVisible}
        onRequestClose={() => modalHandler()}
        style={ReportStyles}
      >
        <ReportModal visible={isVisible} onClose={modalHandler} />
      </Modal>
      <ButtonsWrapper>
        {isHome ? null : <Button onClick={HomeHandler}>Home</Button>}
        <Button onClick={ReportHandler}>Report</Button>
        <Button onClick={AccountHandler}>Accounts</Button>
      </ButtonsWrapper>
      <div style={{ width: "300px" }} />
      <Button onClick={LogoutHandler}>Log Out</Button>
    </Wrapper>
  );
}
