import {ForgetButton, InputBox, InputWrapper, SubmitButton, Wrapper} from "@/app/components/LoginModal/styled";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function LoginModal() {
    const router = useRouter();
    const [isForget, setForget] = useState(false)
    const forgetHandler = () => {
        setForget((s) => !s)
    }

    const onLogin = () => {
        router.push("/homepage");
    }
    return (
        <Wrapper>
            {!isForget && <><label style={{color: "black", textAlign: "center"}}>Login</label><InputWrapper>
                <InputBox required={true} placeholder={"Email"}/>
                <InputBox required={true} placeholder={"Password"}/>
            </InputWrapper><InputWrapper>
                <SubmitButton onClick={onLogin}>Submit</SubmitButton>
                <ForgetButton onClick={forgetHandler}>Forget Password</ForgetButton>
            </InputWrapper></>}
            {isForget && <><label style={{color: "black", textAlign: "center"}}>Forget Password</label>
            <InputWrapper>
                <InputBox required={true} placeholder={"Email"}/>
            </InputWrapper>
                <InputWrapper>
                <SubmitButton onClick={forgetHandler}>Submit</SubmitButton>
                </InputWrapper>
            </>}
        </Wrapper>
    )
}