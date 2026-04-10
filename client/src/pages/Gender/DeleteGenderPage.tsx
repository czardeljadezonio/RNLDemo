import DeleteGenderForm from "./components/DeleteGenderForm"
import { useEffect } from "react";

function DeleteGenderPage() {
    useEffect(() => {
        document.title = 'Delete Gender Page';
    }, []);
  return (
    <>
        <DeleteGenderForm />
    </>
  )
}

export default DeleteGenderPage