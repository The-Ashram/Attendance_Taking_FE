import {CTAButton, InputBox, InputWrapper, Wrapper} from "@/app/components/LoginModal/styled";
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
                <CTAButton onClick={onLogin}>Submit</CTAButton>
                <CTAButton onClick={forgetHandler}>Forget Password</CTAButton>
            </InputWrapper></>}
            {isForget && <><label style={{color: "black", textAlign: "center"}}>Forget Password</label>
                <InputWrapper>
                    <InputBox required={true} placeholder={"Email"}/>
                </InputWrapper>
                <InputWrapper>
                    <CTAButton onClick={forgetHandler}>Submit</CTAButton>
                    <CTAButton onClick={forgetHandler}>Cancel</CTAButton>
                </InputWrapper>
            </>}
        </Wrapper>
    )
}