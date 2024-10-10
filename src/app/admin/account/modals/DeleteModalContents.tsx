interface DeleteProps {
    visible: boolean
}

export default function DeleteMoalContents({visible}: DeleteProps) {
    return (<>
        {visible && <p>To do</p>}
    </>)
}