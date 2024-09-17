'use client'

import {Background, Wrapper} from "@/app/style";
import LoginModal from "@/app/components/LoginModal/LoginModal";

export default function Home() {
  return (
    <Wrapper>
        <Background>
        <LoginModal/>
        </Background>
    </Wrapper>
  );
}
