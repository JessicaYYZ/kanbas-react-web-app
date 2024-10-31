import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const location = useLocation();

  // Helper function to check if the link is active
  const isActive = (path: string) => location.pathname === path;
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to={`/Kanbas/Account/Signin`}
        id="wd-signin-link"
        className={`list-group-item border border-0 ${
          isActive(`/Kanbas/Account/Signin`) ? "active" : ""
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Signin
      </Link>
      <br />
      <Link
        to={`/Kanbas/Account/Signup`}
        id="wd-signup-link"
        className={`list-group-item border border-0 ${
          isActive(`/Kanbas/Account/Signup`) ? "active" : ""
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Signup
      </Link>
      <br />
      <Link
        to={`/Kanbas/Account/Profile`}
        id="wd-profile-link"
        className={`list-group-item border border-0 ${
          isActive(`/Kanbas/Account/Profile`) ? "active" : ""
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Profile
      </Link>
    </div>
  );
}
