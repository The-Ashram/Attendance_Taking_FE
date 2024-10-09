import {Button, Title, Wrapper} from "@/app/resident/components/Header/styled";
import {usePathname, useRouter} from "next/navigation";

export default function Header() {
    const router = useRouter();
    const path = usePathname();
    const isHomepage = path === "/resident/homepage"
    const isRequestForm = path === "/resident/requestform"

    function accountsHandler() {
        router.push('/resident/account')
    }
    
    function homeHandler() {
        router.push('/resident/homepage')
    }

    function requestHandler() {
        router.push('/resident/requestform')
    }

    function logoutHandler() {
        router.push('/')    
    }

    return <Wrapper>
        {isHomepage ?
            <Title>Hello Resident</Title>
            :
            <Button onClick={homeHandler}>Home</Button>
        }

        {isRequestForm ?
            <Title >Reqeust form</Title>
            :
            <Button onClick={homeHandler}>Home</Button>

        }
        <Button onClick={requestHandler}>Submit Request Form</Button>
        <Button onClick={accountsHandler}>Account</Button>
        <Button onClick={logoutHandler}>Log Out</Button>
        
    </Wrapper>

}