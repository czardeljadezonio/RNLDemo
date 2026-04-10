import EditGenderForm from "./components/EditGenderForm";
import { useEffect } from "react";

function EditGenderPage() {
    useEffect(() => {
        document.title = 'Edit Gender Page';
    }, []);
  return (
    <>
    <EditGenderForm />
    </>
  )
}

export default EditGenderPage