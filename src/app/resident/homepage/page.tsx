"use client";

import Header from "@/app/resident/components/Header/header";
import { FormButtons, FormWrapper } from "@/app/resident/homepage/styled";
import { useRouter } from "next/navigation";

export default function Homepage() {
  const router = useRouter();

  function requestHandler() {
    router.push("/resident/requestform");
  }

  return (
    <>
      <Header />
      <FormWrapper>
        <FormButtons onClick={requestHandler}>Sign In</FormButtons>
        {/*<FormButtons>Events</FormButtons>*/}
      </FormWrapper>
    </>
  );
}
