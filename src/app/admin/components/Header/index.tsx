import {Button, ButtonsWrapper, Wrapper} from "@/app/admin/components/Header/styled";
import {usePathname, useRouter} from "next/navigation";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const isHome = pathname === '/admin/homepage'

    const LogoutHandler = () => {
        //logout stuff
        router.push("/");
    }

    const AccountHandler = () => {
        router.push("/admin/account")
    }
    const HomeHandler = () => {
        router.push('/admin/homepage')
    }
    return (
        <Wrapper>
            <ButtonsWrapper>
                {isHome ? null : <Button onClick={HomeHandler}>Home</Button>}
                <Button>Placeholder</Button>
                <Button onClick={AccountHandler}>Accounts</Button>
            </ButtonsWrapper>
            <div style={{width: "300px"}}/>
            <Button onClick={LogoutHandler}>Log Out</Button>
        </Wrapper>
    )
}