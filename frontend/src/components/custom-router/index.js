import { Route } from "react-router-dom";
import {
  Home,
  Form,
  Login,
  Profile,
  AdminSeeUsers,
  AdminAddUsers,
  AdminUpdateUsers,
  ForumCreatePost,
} from "../../views";
import { NavBar } from "../../components";

function CustomRouter() {
  return (
    <>
      <Route exact path="/" component>
        <NavBar />
        <Home />
      </Route>
      <Route exact path="/register" component>
        <Form />
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
      <Route path="/forum/:id/post/create">
        <ForumCreatePost />
      </Route>
    </>
  );
}

export default CustomRouter;
