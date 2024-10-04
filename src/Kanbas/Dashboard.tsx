import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" style={{ paddingLeft: "0", paddingRight: "0" }}>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      {/* Setting up responsive grid with col-lg-4 for 3 per row, col-md-4 for medium screens, col-sm-6 for small screens */}
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4"
        style={{ marginLeft: "0", marginRight: "0" }}
      >
        {/* Course 1 */}
        <div className="col" style={{ width: "270px", marginBottom: "30px" }}>
          <div
            className="card rounded-3 overflow-hidden"
            style={{ height: "100%" }}
          >
            <Link
              className="text-decoration-none text-dark"
              to="/Kanbas/Courses/101/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height="160"
                alt="React JS"
              />
              <div className="card-body">
                <h5 className="card-title">
                  CS101 Introduction to Programming
                </h5>
                <p className="card-text">Learn the basics of programming</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 2 */}
        <div className="col" style={{ width: "270px", marginBottom: "30px" }}>
          <div
            className="card rounded-3 overflow-hidden"
            style={{ height: "100%" }}
          >
            <Link
              className="text-decoration-none text-dark"
              to="/Kanbas/Courses/102/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height="160"
                alt="Web Development"
              />
              <div className="card-body">
                <h5 className="card-title">CS102 Web Development</h5>
                <p className="card-text">
                  Building websites and web applications
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 3 */}
        <div className="col" style={{ width: "270px", marginBottom: "30px" }}>
          <div
            className="card rounded-3 overflow-hidden"
            style={{ height: "100%" }}
          >
            <Link
              className="text-decoration-none text-dark"
              to="/Kanbas/Courses/103/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height="160"
                alt="Algorithms"
              />
              <div className="card-body">
                <h5 className="card-title">CS103 Algorithms</h5>
                <p className="card-text">
                  Understanding data structures and algorithms
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 4 */}
        <div className="col" style={{ width: "270px", marginBottom: "30px" }}>
          <div
            className="card rounded-3 overflow-hidden"
            style={{ height: "100%" }}
          >
            <Link
              className="text-decoration-none text-dark"
              to="/Kanbas/Courses/104/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height="160"
                alt="Databases"
              />
              <div className="card-body">
                <h5 className="card-title">CS104 Databases</h5>
                <p className="card-text">Designing and managing databases</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 5 */}
        <div className="col" style={{ width: "270px", marginBottom: "30px" }}>
          <div
            className="card rounded-3 overflow-hidden"
            style={{ height: "100%" }}
          >
            <Link
              className="text-decoration-none text-dark"
              to="/Kanbas/Courses/105/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height="160"
                alt="Machine Learning"
              />
              <div className="card-body">
                <h5 className="card-title">CS105 Machine Learning</h5>
                <p className="card-text">
                  Introduction to machine learning algorithms
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 6 */}
        <div className="col" style={{ width: "270px", marginBottom: "30px" }}>
          <div
            className="card rounded-3 overflow-hidden"
            style={{ height: "100%" }}
          >
            <Link
              className="text-decoration-none text-dark"
              to="/Kanbas/Courses/106/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height="160"
                alt="Cloud Computing"
              />
              <div className="card-body">
                <h5 className="card-title">CS106 Cloud Computing</h5>
                <p className="card-text">
                  Basics of cloud infrastructure and services
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 7 */}
        <div className="col" style={{ width: "270px", marginBottom: "30px" }}>
          <div
            className="card rounded-3 overflow-hidden"
            style={{ height: "100%" }}
          >
            <Link
              className="text-decoration-none text-dark"
              to="/Kanbas/Courses/107/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height="160"
                alt="Cybersecurity"
              />
              <div className="card-body">
                <h5 className="card-title">CS107 Cybersecurity</h5>
                <p className="card-text">
                  Foundations of cybersecurity and protection
                </p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
