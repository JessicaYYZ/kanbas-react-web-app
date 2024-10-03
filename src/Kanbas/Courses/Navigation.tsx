import { Link, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const location = useLocation();

  // Helper function to check if the link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kanbas/Courses/1234/Home"
        id="wd-course-home-link"
        className={`list-group-item border border-0 ${
          isActive("/Kanbas/Courses/1234/Home") ? "active" : "text-danger"
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Home
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Modules"
        id="wd-course-modules-link"
        className={`list-group-item border border-0 ${
          isActive("/Kanbas/Courses/1234/Modules") ? "active" : "text-danger"
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Modules
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className={`list-group-item border border-0 ${
          isActive("/Kanbas/Courses/1234/Piazza") ? "active" : "text-danger"
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Piazza
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className={`list-group-item border border-0 ${
          isActive("/Kanbas/Courses/1234/Zoom") ? "active" : "text-danger"
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Zoom
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Assignments"
        id="wd-course-assignments-link"
        className={`list-group-item border border-0 ${
          isActive("/Kanbas/Courses/1234/Assignments")
            ? "active"
            : "text-danger"
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Assignments
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Quizzes"
        id="wd-course-quizzes-link"
        className={`list-group-item border border-0 ${
          isActive("/Kanbas/Courses/1234/Quizzes") ? "active" : "text-danger"
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Quizzes
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/People"
        id="wd-course-people-link"
        className={`list-group-item border border-0 ${
          isActive("/Kanbas/Courses/1234/People") ? "active" : "text-danger"
        }`}
        style={{ marginBottom: "-15px" }}
      >
        People
      </Link>
      <br />
    </div>
  );
}
