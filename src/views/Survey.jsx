import { useParams } from "react-router-dom";

export default function Survey() {
    const { step } = useParams();

  return <div>Survey {step}</div>;
}
