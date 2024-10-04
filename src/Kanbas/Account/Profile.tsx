import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <input
        id="wd-username"
        value="Yuyi Zhang"
        placeholder="username"
        className="form-control mb-1"
      />
      <br />
      <input
        id="wd-password"
        value="123"
        placeholder="password"
        type="password"
        className="form-control mb-1"
      />
      <br />
      <input
        id="wd-firstname"
        value="Yuyi Zhang"
        placeholder="First Name"
        className="form-control mb-1"
      />
      <br />
      <input
        id="wd-lastname"
        value="Wonderland"
        placeholder="Last Name"
        className="form-control mb-1"
      />
      <br />
      <input
        id="wd-dob"
        value="2000-01-01"
        type="date"
        className="form-control mb-1"
      />
      <br />
      <input
        id="wd-email"
        value="yuyi.Zhang@wonderland"
        type="email"
        className="form-control mb-1"
      />
      <br />
      <select id="wd-role" className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link
        id="wd-signin-btn"
        to="/Kanbas/Account/Signin"
        className="btn btn-danger w-100 mt-2"
      >
        Sign out
      </Link>
    </div>
  );
}
