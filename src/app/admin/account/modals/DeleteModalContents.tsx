interface DeleteProps {
  visible: boolean;
}

export default function DeleteModalContents({ visible }: DeleteProps) {
  return <>{visible && <p>To do</p>}</>;
}
