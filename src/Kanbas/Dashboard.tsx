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
              to="/Kanbas/Courses/1234/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height="160"
                alt="React JS"
              />
              <div className="card-body">
                <h5 className="card-title">CS1234 React JS</h5>
                <p className="card-text">Full Stack Software Developer</p>
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
              to="/Kanbas/Courses/1234/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height="160"
                alt="React JS"
              />
              <div className="card-body">
                <h5 className="card-title">CS1234 React JS</h5>
                <p className="card-text">Full Stack Software Developer</p>
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
              to="/Kanbas/Courses/1234/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height="160"
                alt="React JS"
              />
              <div className="card-body">
                <h5 className="card-title">CS1234 React JS</h5>
                <p className="card-text">Full Stack Software Developer</p>
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
              to="/Kanbas/Courses/1234/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height="160"
                alt="React JS"
              />
              <div className="card-body">
                <h5 className="card-title">CS1234 React JS</h5>
                <p className="card-text">Full Stack Software Developer</p>
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
              to="/Kanbas/Courses/1234/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height="160"
                alt="React JS"
              />
              <div className="card-body">
                <h5 className="card-title">CS1234 React JS</h5>
                <p className="card-text">Full Stack Software Developer</p>
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
              to="/Kanbas/Courses/1234/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height="160"
                alt="React JS"
              />
              <div className="card-body">
                <h5 className="card-title">CS1234 React JS</h5>
                <p className="card-text">Full Stack Software Developer</p>
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
              to="/Kanbas/Courses/1234/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height="160"
                alt="React JS"
              />
              <div className="card-body">
                <h5 className="card-title">CS1234 React JS</h5>
                <p className="card-text">Full Stack Software Developer</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
