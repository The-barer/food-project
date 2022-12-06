import { useParams } from "react-router-dom";

export const Contact = () => {
  const { id } = useParams();
  return <h3> Contact {id}</h3>;
};
