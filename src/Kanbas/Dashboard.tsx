import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack Software Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2345/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS2345 Node.js</h5>
              <p className="wd-dashboard-course-title">
                Backend Development with Node.js
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/3456/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS3456 Python Programming</h5>
              <p className="wd-dashboard-course-title">
                Intro to Python Programming
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/4567/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS4567 Java Fundamentals</h5>
              <p className="wd-dashboard-course-title">
                Object-Oriented Programming with Java
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/5678/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS5678 HTML & CSS</h5>
              <p className="wd-dashboard-course-title">
                Building Responsive Websites
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/6789/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS6789 Databases</h5>
              <p className="wd-dashboard-course-title">
                Introduction to SQL and Databases
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/7890/Home"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS7890 Docker</h5>
              <p className="wd-dashboard-course-title">
                Containerization with Docker
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
