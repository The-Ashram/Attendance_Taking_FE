'use client'

import Header from "@/app/resident/components/Header/header";
import {FormButtons, FormWrapper} from "@/app/resident/homepage/styled";

export default function Homepage() {
    return <>
        <Header/>
        <FormWrapper>
            <FormButtons>Sign In</FormButtons>
            <FormButtons>Events</FormButtons>
        </FormWrapper>
    </>
}