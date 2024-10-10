import { Table } from "@/app/admin/components/Table/styled";
import { Container } from "@/app/admin/components/ResidentsTable/styled";
import Row from "@/app/admin/components/ResidentsTable/Row";

const residentsData = [
  {
    name: "a",
    phase: "3",
    status: "in",
    reason: "Medical Appt",
    remarks: "SGH",
  },
  {
    name: "b",
    phase: "3",
    status: "out",
    reason: "Work",
    remarks: "abc company",
  },
];

export default function ResidentsTable() {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phase</th>
            <th>In</th>
            <th>Out</th>
            <th>Reason</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {residentsData.map((rd, index) => (
            <Row residentData={rd} key={index} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
