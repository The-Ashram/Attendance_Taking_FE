import dynamic from "next/dynamic";

const Account = dynamic(() => import("@/app/resident/account/client"), {
  ssr: false,
});

export default function AccountPage() {
  return <Account />;
}
