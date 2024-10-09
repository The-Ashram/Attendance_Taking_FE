import {
    CTAButton,
    ErrorMessage,
    InputBox,
    InputWrapper,
    Wrapper
} from "@/app/admin/components/LoginModal/styled";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";


export default function LoginModal() {
    const router = useRouter();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [isForget, setForget] = useState(false)

    const forgetHandler = () => {
        setForget((s) => !s)
    }

    const onLogin = (data: any) => {
        if(data.email == 'admin@ashram.com') {
            router.push("/admin/homepage")
        } else if (data.email == 'resident@ashram.com') {
            router.push("/resident/homepage")
        }
        // router.push("/homepage");
    }
    return (
        <Wrapper>
            {!isForget && <>
                <label style={{color: "black", textAlign: "center"}}>Login</label>
                <form>
                    <InputWrapper>
                        <InputBox {...register("email", {
                            required: 'Please fill up your email!',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email"
                            }
                        })}
                                  placeholder={"Email"}/>
                        <ErrorMessage>{errors.email?.message as string}</ErrorMessage>
                        <InputBox {...register("password", {required: 'Fill in your password'})} type={"password"}
                                  placeholder={"Password"}/>
                        <ErrorMessage>{errors.password?.message as string}</ErrorMessage>
                    </InputWrapper><InputWrapper>
                    <CTAButton onClick={handleSubmit(onLogin)}>Submit</CTAButton>
                    {/*<CTAButton onClick={forgetHandler}>Forget Password</CTAButton>*/}
                </InputWrapper>
                </form>
            </>}
            {/*{isForget && <><label style={{color: "black", textAlign: "center"}}>Forget Password</label>*/}
            {/*    <InputWrapper>*/}
            {/*        <InputBox required={true} placeholder={"Email"}/>*/}
            {/*    </InputWrapper>*/}
            {/*    <InputWrapper>*/}
            {/*        <CTAButton onClick={handleSubmit(onLogin)}>Submit</CTAButton>*/}
            {/*        <CTAButton onClick={forgetHandler}>Cancel</CTAButton>*/}
            {/*    </InputWrapper>*/}
            {/*</>}*/}
        </Wrapper>
    )
}