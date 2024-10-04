import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const location = useLocation();
  const { cid } = useParams();
  //test

  const isActive = (path: string) => location.pathname === path;

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to={`/Kanbas/Courses/${cid}/Home`}
        id="wd-course-home-link"
        className={`list-group-item border border-0 ${
          isActive(`/Kanbas/Courses/${cid}/Home`) ? "active" : ""
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Home
      </Link>
      <br />
      <Link
        to={`/Kanbas/Courses/${cid}/Modules`}
        id="wd-course-modules-link"
        className={`list-group-item border border-0 ${
          isActive(`/Kanbas/Courses/${cid}/Modules`) ? "active" : ""
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Modules
      </Link>
      <br />
      <Link
        to={`/Kanbas/Courses/${cid}/Piazza`}
        id="wd-course-piazza-link"
        className={`list-group-item border border-0 ${
          isActive(`/Kanbas/Courses/${cid}/Piazza`) ? "active" : ""
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Piazza
      </Link>
      <br />
      <Link
        to={`/Kanbas/Courses/${cid}/Zoom`}
        id="wd-course-zoom-link"
        className={`list-group-item border border-0 ${
          isActive(`/Kanbas/Courses/${cid}/Zoom`) ? "active" : ""
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Zoom
      </Link>
      <br />
      <Link
        to={`/Kanbas/Courses/${cid}/Assignments`}
        id="wd-course-assignments-link"
        className={`list-group-item border border-0 ${
          isActive(`/Kanbas/Courses/${cid}/Assignments`) ? "active" : ""
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Assignments
      </Link>
      <br />
      <Link
        to={`/Kanbas/Courses/${cid}/Quizzes`}
        id="wd-course-quizzes-link"
        className={`list-group-item border border-0 ${
          isActive(`/Kanbas/Courses/${cid}/Quizzes`) ? "active" : ""
        }`}
        style={{ marginBottom: "-15px" }}
      >
        Quizzes
      </Link>
      <br />
      <Link
        to={`/Kanbas/Courses/${cid}/People`}
        id="wd-course-people-link"
        className={`list-group-item border border-0 ${
          isActive(`/Kanbas/Courses/${cid}/People`) ? "active" : ""
        }`}
        style={{ marginBottom: "-15px" }}
      >
        People
      </Link>
      <br />
    </div>
  );
}
