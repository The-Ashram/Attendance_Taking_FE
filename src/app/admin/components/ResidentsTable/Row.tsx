import { GoDotFill } from "react-icons/go";

interface Props {
  residentData: any;
}

export default function Row({ residentData }: Props) {
  console.log(residentData.name);
  return (
    <tr>
      <td>{residentData.name}</td>
      <td>{residentData.phase}</td>
      <td>{residentData.status === "in" && <GoDotFill />}</td>
      <td>{residentData.status === "out" && <GoDotFill />}</td>
      <td>{residentData.reason}</td>
      <td>{residentData.remarks}</td>
    </tr>
  );
}
