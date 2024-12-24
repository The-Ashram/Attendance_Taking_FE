"use client";
import {
  Button,
  LogoutButton,
  Title,
  Wrapper,
} from "@/app/resident/components/Header/styled";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const path = usePathname();
  const isHomepage = path === "/resident/homepage";
  const isAccount = path === "/resident/account";

  function accountsHandler() {
    router.push("/resident/account");
  }

  function homeHandler() {
    router.push("/resident/homepage");
  }

  function logoutHandler() {
    window.localStorage.clear();
    router.push("/");
  }

  function refreshHandler() {
    window.location.reload();
  }

  return (
    <Wrapper>
      {isHomepage ? null : <Button onClick={homeHandler}>Home</Button>}
      {isAccount ? null : <Button onClick={accountsHandler}>Account</Button>}
      <Button onClick={refreshHandler}>Refresh</Button>
      <LogoutButton onClick={logoutHandler}>Log Out</LogoutButton>
    </Wrapper>
  );
}
