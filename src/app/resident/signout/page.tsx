import dynamic from "next/dynamic";

const SignOut = dynamic(() => import("@/app/resident/signout/client"), {
  ssr: false,
});

export default function SignOutPage() {
  return <SignOut />;
}
