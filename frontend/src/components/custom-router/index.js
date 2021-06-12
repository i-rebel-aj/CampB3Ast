import { Route, BrowserRouter } from "react-router-dom";
import {
  Home,
  Form,
  Login,
  Profile,
  AdminSeeUsers,
  AdminAddUsers,
  AdminSeeGroups,
  AdminAssignGroup,
  PostCreate,
  Forum,
  ForumCreate,
  ForumAssign,
  SeeForum,
  SeePost,
  AdminCreateGroup,
  SuperAdminCreateAdmin,
  SuperAdminAddCollege,
  SuperAdminAssignAdmin,
  SuperAdminSeeAdmin,
  SuperAdminSeeCollege,
} from "../../views";
import { NavBar } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { isAutheticated } from "../../_helpers";
import { authSuccess, authError } from "../../redux/auth/authActions";

function CustomRouter() {
  const { user } = isAutheticated();
  const dispatch = useDispatch();
  dispatch(authSuccess(user));
  return (
    <BrowserRouter>
      <Route exact path="/home">
        <NavBar />
        <Home />
      </Route>
      <Route exact path="/register">
        <NavBar user={user} />
        <Form />
      </Route>
      <Route exact path="/login">
        <NavBar user={user} />
        <Login />
      </Route>
      <Route path="/profile/:username">
        <NavBar user={user} />
        <Profile />
      </Route>
      <Route exact path="/admin">
        <NavBar user={user} />
        {user?.Type == "Admin" ? (
          <>
            <AdminSeeUsers />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in as admin!"} />
        )}
      </Route>
      <Route exact path="/admin/see">
        <NavBar user={user} />
        {user?.Type == "Admin" ? (
          <>
            <AdminSeeUsers />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in as admin!"} />
        )}
      </Route>
      <Route exact path="/admin/add">
        <NavBar user={user} />
        {user?.Type == "Admin" ? (
          <>
            <AdminAddUsers />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in as admin!"} />
        )}
      </Route>
      <Route exact path="/admin/group/add">
        <NavBar user={user} />
        {user?.Type == "Admin" ? (
          <>
            <AdminCreateGroup />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in as admin!"} />
        )}
      </Route>
      <Route exact path="/admin/group/see">
        <NavBar user={user} />
        {user?.Type == "Admin" ? (
          <>
            <AdminSeeGroups />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in as admin!"} />
        )}
      </Route>
      <Route exact path="/admin/group/assign">
        <NavBar user={user} />
        {user?.Type == "Admin" ? (
          <>
            <AdminAssignGroup />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in admin!"} />
        )}
      </Route>
      <Route exact path="/super-admin/institute/add">
        <NavBar user={user} />

        {user?.Type == "Super Admin" ? (
          <>
            <SuperAdminAddCollege />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in as Super Admin!"} />
        )}
      </Route>
      <Route exact path="/super-admin/institute/see">
        <NavBar user={user} />
        {user?.Type == "Super Admin" ? (
          <>
            <SuperAdminSeeCollege />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in as Super Admin!"} />
        )}
      </Route>
      <Route exact path="/super-admin">
        <NavBar user={user} />
        {user?.Type == "Super Admin" ? (
          <>
            <SuperAdminSeeCollege />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in as Super Admin!"} />
        )}
      </Route>
      <Route exact path="/super-admin/admin/see">
        <NavBar user={user} />
        {user?.Type == "Super Admin" ? (
          <>
            <SuperAdminSeeCollege />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in as Super Admin!"} />
        )}
      </Route>
      <Route exact path="/super-admin/admin/create">
        <NavBar user={user} />
        {user?.Type == "Super Admin" ? (
          <>
            <SuperAdminCreateAdmin />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in as Super Admin!"} />
        )}
      </Route>
      <Route exact path="/super-admin/admin/assign">
        <NavBar user={user} />
        {user?.Type == "Super Admin" ? (
          <>
            <SuperAdminAssignAdmin />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in as Super Admin!"} />
        )}
      </Route>
      <Route exact path="/forum/see/:forumName">
        <NavBar user={user} />
        {user ? (
          <>
            <Forum />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in!"} />
        )}
      </Route>
      <Route exact path="/forum/create">
        <NavBar user={user} />
        {user ? (
          <>
            <ForumCreate />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in!"} />
        )}
      </Route>
      <Route exact path="/forum/see">
        <NavBar user={user} />
        {user ? (
          <>
            <SeeForum />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in!"} />
        )}
      </Route>
      <Route exact path="/forum/assign">
        <NavBar user={user} />
        {user ? (
          <>
            <ForumAssign />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in!"} />
        )}
      </Route>
      <Route exact path="/forum/:id/post/create" exact>
        <NavBar user={user} />
        {user ? (
          <>
            <PostCreate />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in!"} />
        )}
      </Route>
      <Route exact path="/post/see">
        <NavBar user={user} />
        {user ? (
          <>
            <SeePost />{" "}
          </>
        ) : (
          <Login msg={"You are not logged in!"} />
        )}
      </Route>
      <Route path="/">
        <NavBar user={user} />
        <Home />
      </Route>
    </BrowserRouter>
  );
}

export default CustomRouter;
