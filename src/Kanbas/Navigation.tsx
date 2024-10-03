import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: "110px" }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
        style={{ marginBottom: "-10px" }}
      >
        <img src="/images/NEU.png" width="75px" alt="NEU Logo" />
      </a>
      <br />

      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className={`list-group-item text-center border-0 ${
          isActive("/Kanbas/Account")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
        style={{ marginBottom: "-10px" }}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            isActive("/Kanbas/Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account{" "}
      </Link>
      <br />

      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={`list-group-item text-center border-0 ${
          isActive("/Kanbas/Dashboard")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
        style={{ marginBottom: "-10px" }}
      >
        <AiOutlineDashboard
          className={`fs-1 ${
            isActive("/Kanbas/Dashboard") ? "text-danger" : "text-danger"
          }`}
        />
        <br />
        Dashboard{" "}
      </Link>
      <br />

      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={`list-group-item text-center border-0 ${
          isActive("/Kanbas/Courses")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
        style={{ marginBottom: "-10px" }}
      >
        <LiaBookSolid
          className={`fs-1 ${
            isActive("/Kanbas/Courses") ? "text-danger" : "text-danger"
          }`}
        />
        <br />
        Courses{" "}
      </Link>
      <br />

      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={`list-group-item text-center border-0 ${
          isActive("/Kanbas/Calendar")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
        style={{ marginBottom: "-10px" }}
      >
        <IoCalendarOutline
          className={`fs-1 ${
            isActive("/Kanbas/Calendar") ? "text-danger" : "text-danger"
          }`}
        />
        <br />
        Calendar{" "}
      </Link>
      <br />

      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={`list-group-item text-center border-0 ${
          isActive("/Kanbas/Inbox")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
        style={{ marginBottom: "-10px" }}
      >
        <FaInbox
          className={`fs-1 ${
            isActive("/Kanbas/Inbox") ? "text-danger" : "text-danger"
          }`}
        />
        <br />
        Inbox{" "}
      </Link>
      <br />

      <Link
        to="/Labs"
        id="wd-labs-link"
        className={`list-group-item text-center border-0 ${
          isActive("/Labs") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <LiaCogSolid
          className={`fs-1 ${
            isActive("/Labs") ? "text-danger" : "text-danger"
          }`}
        />
        <br />
        Labs{" "}
      </Link>
      <br />
    </div>
  );
}
