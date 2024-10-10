interface CreateProps {
    visible: boolean
}

export default function CreateMoalContents({visible}: CreateProps) {
    return (<>
        {visible && <p>To do</p>}
    </>)
}