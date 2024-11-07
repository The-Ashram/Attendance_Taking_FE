import dynamic from "next/dynamic";

const Account = dynamic(() => import("@/app/admin/uaccount/client"), {
  ssr: false,
});

export default function UAccountPage() {
  return <Account />;
}
