import ToastMessage from "../../components/ToastMessage/ToastMessage";
import { useToastMessage } from "../../hooks/useToastMessage";
import EditGenderForm from "./components/EditGenderForm";
import { useEffect } from "react";

function EditGenderPage() {
    useEffect(() => {
        document.title = 'Edit Gender Page';
    }, []);

  const {message: toastMessage, isVisible: toastMessageIsVissible, showToastMessage, closeToastMessage} = useToastMessage
  ('', false)

  return (
    <>
    <ToastMessage message={toastMessage} isVisible={toastMessageIsVissible} onClose={closeToastMessage}/>
    <EditGenderForm onGenderUpdated={showToastMessage}/>
    </>
  )
}

export default EditGenderPage