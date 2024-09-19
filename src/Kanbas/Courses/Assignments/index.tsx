export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input
        style={{ width: "140px", marginRight: "5px" }}
        id="wd-search-assignment"
        placeholder="Search for Assignments"
      />
      <button style={{ marginRight: "5px" }} id="wd-add-assignment-group">
        + Group
      </button>
      <button style={{ marginRight: "5px" }} id="wd-add-assignment">
        + Assignment
      </button>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total{" "}
        <button style={{ marginLeft: "5px" }}>+</button>
      </h3>

      <ul
        id="wd-assignment-list"
        style={{ listStyleType: "disc", paddingLeft: "20px" }}
      >
        <li
          className="wd-assignment-list-item"
          style={{ marginBottom: "15px" }}
        >
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
            style={{
              textDecoration: "underline",
            }}
          >
            A1 - ENV + HTML
          </a>
          <div style={{ width: "420px", marginTop: "5px" }}>
            Multiple Modules |
            <span style={{ fontWeight: "bold" }}> Not available until</span> May
            6 at 12:00am |<span style={{ fontWeight: "bold" }}> Due</span> May
            13 at 11:59pm | 100 pts
          </div>
        </li>

        <li
          className="wd-assignment-list-item"
          style={{ marginBottom: "15px" }}
        >
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/124"
            style={{
              textDecoration: "underline",
            }}
          >
            A2 - CSS + BOOTSTRAP
          </a>
          <div style={{ width: "420px", marginTop: "5px" }}>
            Multiple Modules |
            <span style={{ fontWeight: "bold" }}> Not available until</span> May
            13 at 12:00am |<span style={{ fontWeight: "bold" }}> Due</span> May
            20 at 11:59pm | 100 pts
          </div>
        </li>

        <li
          className="wd-assignment-list-item"
          style={{ marginBottom: "15px" }}
        >
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/125"
            style={{
              textDecoration: "underline",
            }}
          >
            A3 - JAVASCRIPT + REACT
          </a>
          <div style={{ width: "420px", marginTop: "5px" }}>
            Multiple Modules |
            <span style={{ fontWeight: "bold" }}> Not available until</span> May
            20 at 12:00am |<span style={{ fontWeight: "bold" }}> Due</span> May
            27 at 11:59pm | 100 pts
          </div>
        </li>
      </ul>
    </div>
  );
}
