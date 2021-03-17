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
  Forum
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
        <NavBar />
        <Form />
      </Route>
      <Route path="/login">
        <NavBar />
        <Login />
      </Route>
      <Route path="/profile/:username">
        <NavBar />
        <Profile />
      </Route>
      <Route exact path="/admin">
        <NavBar />
        <AdminSeeUsers />
      </Route>
      <Route exact path="/admin/see">
        <NavBar />
        <AdminSeeUsers />
      </Route>
      <Route exact path="/admin/add">
        <NavBar />
        <AdminAddUsers />
      </Route>
      <Route exact path="/admin/update">
        <NavBar />
        <AdminUpdateUsers />
      </Route>
      <Route path="/forum">
        <Forum/>
      </Route>
      <Route path="/forum/:id/post/create">
        <NavBar />
        <ForumCreatePost />
      </Route>
    </>
  );
}

export default CustomRouter;
