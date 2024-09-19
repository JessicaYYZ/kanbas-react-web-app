import { Link } from "react-router-dom";
export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation">
      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "20px",
          marginRight: "20px",
        }}
      >
        <a
          href="https://www.northeastern.edu/"
          id="wd-neu-link"
          target="_blank"
        >
          <li>Northeastern</li>
        </a>

        <Link to="/Kanbas/Account" id="wd-account-link">
          <li>Account</li>
        </Link>

        <Link to="/Kanbas/Dashboard" id="wd-dashboard-link">
          <li>Dashboard</li>
        </Link>

        <Link to="/Kanbas/Dashboard" id="wd-course-link">
          <li>Courses</li>
        </Link>

        <Link to="/Kanbas/Calendar" id="wd-calendar-link">
          <li>Calendar</li>
        </Link>

        <Link to="/Kanbas/Inbox" id="wd-inbox-link">
          <li>Inbox</li>
        </Link>

        <Link to="/Labs" id="wd-labs-link">
          <li>Labs</li>
        </Link>
      </ul>
    </div>
  );
}
