import { Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import FloatingLabelInput from "../components/input/FloatingLabelInput";
import { useState } from "react";

const SampleComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [password, setPassword] = useState("");
  return (
    <>
      <h1 className="text-red-600 mb-4">Hello World</h1>

      <div className="mb-4">
        <FloatingLabelInput label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" name="first_name"  required autoFocus />
        <p className="font-medium">First Name: {firstName}</p>
      </div>
      <div className="mb-4">
        <FloatingLabelInput label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" name="last_name" />
        <p className="font-medium">Last Name: {lastName}</p>
      </div>

      <div className="mb-4">
        <FloatingLabelInput label="Birth Date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} type="date" name="birth_date" />
        <p className="font-medium">Birth Date: {birthDate}</p>
      </div>

      <div className="mb-4">
        <FloatingLabelInput label="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
        <p className="font-medium">Password: {password}</p>
      </div>
    </>
  );
};

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<SampleComponent />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;