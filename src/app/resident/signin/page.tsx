import dynamic from "next/dynamic";

const SignIn = dynamic(() => import("@/app/resident/signin/client"), {
  ssr: false,
});

export default function SignInPage() {
  return <SignIn />;
}
