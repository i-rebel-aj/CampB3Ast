import { Route } from "react-router-dom";
import {
  Home,
  Form,
  Login,
  Profile,
  AdminSeeUsers,
  AdminAddUsers,
  AdminUpdateUsers,
  Post,
  Forum,
  SeeForum,
  SeePost

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
      <Route exact path="/forum/create">
        <Forum />
      </Route>
      <Route exact path="/forum/see">
        <NavBar />
        <SeeForum />
      </Route>
      <Route  path="/forum/:id/post/create" exact>
        <Post />
      </Route>
      <Route path="/post/see">
        <NavBar />
        <SeePost />
      </Route>
    </>
  );
}

export default CustomRouter;
