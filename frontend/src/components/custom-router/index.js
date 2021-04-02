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
  SeePost,
} from "../../views";
import { NavBar } from "../../components";
import { isAutheticated } from "../../_helpers";

function CustomRouter() {
  const { user } = isAutheticated();
  return (
    <>
      <Route exact path="/" component>
        <NavBar user={user} />
        <Home />
      </Route>
      <Route exact path="/register" component>
        <NavBar user={user} />
        <Form />
      </Route>
      <Route path="/login">
        <NavBar user={user} />
        <Login />
      </Route>
      <Route path="/profile/:username">
        <NavBar user={user} />
        <Profile />
      </Route>
      <Route exact path="/admin">
        <NavBar user={user} />
        <AdminSeeUsers />
      </Route>
      <Route exact path="/admin/see">
        <NavBar user={user} />
        <AdminSeeUsers />
      </Route>
      <Route exact path="/admin/add">
        <NavBar user={user} />
        <AdminAddUsers />
      </Route>
      <Route exact path="/admin/update">
        <NavBar user={user} />
        <AdminUpdateUsers />
      </Route>
      <Route exact path="/forum/create">
        <NavBar user={user} />
        <Forum />
      </Route>
      <Route exact path="/forum/see">
        <NavBar user={user} />
        <SeeForum />
      </Route>
      <Route path="/forum/:id/post/create" exact>
        <NavBar user={user} />
        <Post />
      </Route>
      <Route path="/post/see">
        <NavBar user={user} />
        <SeePost />
      </Route>
    </>
  );
}

export default CustomRouter;
