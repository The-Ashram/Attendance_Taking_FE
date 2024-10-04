import {Button, ButtonsWrapper, Wrapper} from "@/app/admin/components/Header/styled";
import {useRouter} from "next/navigation";

export default function Header() {
    const router = useRouter();
    const LogoutHandler = () => {
        //logout stuff
        router.push("/");
    }

    const AccountHandler = () => {
        router.push("/account")
    }
    return (
        <Wrapper>
            <ButtonsWrapper>
                <Button>Placeholder</Button>
                <Button onClick={AccountHandler}>Accounts</Button>
            </ButtonsWrapper>
            <div style={{width: "300px"}}/>
            <Button onClick={LogoutHandler}>Log Out</Button>
        </Wrapper>
    )
}