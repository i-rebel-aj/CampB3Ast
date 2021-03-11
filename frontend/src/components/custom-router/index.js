import { Route } from "react-router-dom";
import {
  Home,
  Login,
  Profile,
  AdminSeeUsers,
  AdminAddUsers,
  AdminUpdateUsers,
} from "../../views";
import { NavBar } from "../../components";

function CustomRouter() {
  return (
    <>
      <Route exact path="/" component>
        <NavBar />
        <Home />
      </Route>
      <Route path="/login">
        <NavBar />
        <Login />
      </Route>
      <Route path="/profile">
        <NavBar />
        <Profile />
      </Route>
      <Route exact path="/admin">
        <AdminSeeUsers />
      </Route>
      <Route exact path="/admin/see">
        <AdminSeeUsers />
      </Route>
      <Route exact path="/admin/add">
        <AdminAddUsers />
      </Route>
      <Route exact path="/admin/update">
        <AdminUpdateUsers />
      </Route>
    </>
  );
}

export default CustomRouter;
