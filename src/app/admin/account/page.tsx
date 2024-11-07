import dynamic from "next/dynamic";

const Account = dynamic(() => import("@/app/admin/account/client"), {
  ssr: false,
});

export default function AccountPage() {
  return <Account />;
}
