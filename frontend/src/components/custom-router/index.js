import { Route } from "react-router-dom";
import { Home, Login, Profile } from "../../views";

function CustomRouter() {
  return (
    <>
      <Route exact path="/" component>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </>
  );
}

export default CustomRouter;
