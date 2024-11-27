"use client";

import { Background, Wrapper } from "@/app/style";
import LoginModal from "@/app/components/LoginModal/LoginModal";
import StyledComponentsRegistry from "./registry";

export default function Home() {
  return (
    <StyledComponentsRegistry>
      <Wrapper>
        <Background>
          <LoginModal />
        </Background>
      </Wrapper>
    </StyledComponentsRegistry>
  );
}
