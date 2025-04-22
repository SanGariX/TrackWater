import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import User from "../Pages/User/User";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/user" element={<User />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default AppRoutes;
