"use client";
import {
  Button,
  ButtonsWrapper,
  LogoutButton,
  Wrapper,
} from "@/app/admin/components/Header/styled";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "react-modal";
import ReportModal from "@/app/admin/components/Header/ReportModal";
import api from "../../../../../api/axios";
import dayjs from "dayjs";
import LogsReportModal from "./LogsReportModal";

const ReportStyles = {
  content: {
    width: '80%', // Ensure modal doesn't take full width on mobile
    maxWidth: '600px', // Set a maximum width for large screens
    margin: 'auto', // Center modal on screen
    padding: '20px', // Add padding for inner content
    borderRadius: '10px', // Rounded corners
    background: '#fff', // Background color
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Light shadow for modal
    display: 'flex',
    flexDirection: "column" as "column",
    justifyContent: 'center',
  },

  // Mobile specific styling
  '@media (max-width: 600px)': {
    content: {
      width: '90%', // Ensure modal is responsive on small screens
      maxWidth: '100%', // Full width on small screens
      padding: '15px', // Reduce padding for mobile
      borderRadius: '8px', // Slightly smaller border radius
    },
  },

  // For small screens (phones)
  '@media (max-width: 480px)': {
    content: {
      width: '95%', // Make it even smaller on mobile for more space
      padding: '10px', // Smaller padding on phones
      borderRadius: '8px', // Smaller border radius for a more compact look
    },
  },
};

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/admin/homepage";
  const isAccount = pathname === "/admin/account";
  const [isVisible, setVisible] = useState(false);
  const [isAuditVisible, setAuditVisible] = useState(false);

  const LogoutHandler = () => {
    //logout stuff
    window.localStorage.clear();
    router.push("/");
  };

  const AccountHandler = () => {
    const role = window.localStorage.getItem("role");
    if (role === "admin") {
      router.push("/admin/account");
    } else {
      router.push("/admin/uaccount");
    }
  };

  const HomeHandler = () => {
    router.push("/admin/homepage");
  };

  const ReportHandler = () => {
    setVisible(true);
  };

  const AuditReportHandler = () => {
    setAuditVisible(true);
  };

  const AuditModalHandler = () => {
    setAuditVisible(false);
  };

  const ModalHandler = () => {
    setVisible(false);
  };

  const RefreshHandler = () => {
    window.location.reload();
  };

  const UserHandler = () => {
    const getUsers = async () => {
      const response = await api.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/export`,
        { responseType: "blob" },
      );
      const filename = "user_report_" + dayjs().format("YYYY-MM-DD") + ".csv";

      const blob = new Blob([response.data], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", filename); // Use extracted filename
      document.body.appendChild(link);
      link.click();

      link.parentNode?.removeChild(link);
    };
    getUsers();
  };

  return (
    <Wrapper>
      <Modal
        isOpen={isVisible}
        onRequestClose={() => ModalHandler()}
        style={ReportStyles}
      >
        <ReportModal visible={isVisible} onClose={ModalHandler} />
      </Modal>
      <Modal
        isOpen={isAuditVisible}
        onRequestClose={() => AuditModalHandler()}
        style={ReportStyles}
      >
        <LogsReportModal visible={isAuditVisible} onClose={AuditModalHandler} />
      </Modal>
      <ButtonsWrapper>
        {isHome ? null : <Button onClick={HomeHandler}>Home</Button>}
        <Button onClick={AuditReportHandler}>Audit Report</Button>
        <Button onClick={ReportHandler}>Attendance Report</Button>
        <Button onClick={UserHandler}>User Report</Button>
        {isAccount ? null : <Button onClick={AccountHandler}>Accounts</Button>}
        <Button onClick={RefreshHandler}>Refresh</Button>
        <LogoutButton onClick={LogoutHandler}>Log Out</LogoutButton>
      </ButtonsWrapper>
    </Wrapper>
  );
}
