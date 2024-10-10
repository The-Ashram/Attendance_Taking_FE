
interface EditProps {
    visible: boolean
}

export default function EditMoalContents({visible}: EditProps) {
    return (<>
        {visible && <p>To do</p>}
    </>)
}