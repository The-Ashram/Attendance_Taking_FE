
interface Props {
    row: any,
    inModal: boolean
}

export default function Row({row, inModal}: Props) {
    return  <tr >
        <td>{row.name}</td>
        <td>{row.checkout}</td>
        {!inModal && <td>{row.reason}</td>}
    </tr>
}
