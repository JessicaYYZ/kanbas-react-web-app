export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" style={{ width: "50%", margin: "0 auto" }}>
      {/* Assignment Name */}
      <label
        style={{ fontWeight: "bold", marginTop: "30px" }}
        htmlFor="wd-name"
      >
        Assignment Name
      </label>
      <input
        id="wd-name"
        value="A1 - ENV + HTML"
        style={{
          display: "block",
          width: "100%",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      />

      {/* Description */}
      <label
        style={{ fontWeight: "bold", marginTop: "30px" }}
        htmlFor="wd-description"
      >
        Description
      </label>
      <textarea
        id="wd-description"
        style={{ width: "400px", height: "150px", marginBottom: "15px" }}
      >
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section. Links to each of the lab
        assignments. Link to the Kanbas application. Links to all relevant
        source code repositories. The Kanbas application should include a link
        to navigate back to the landing page.
      </textarea>

      {/* Points and Other Fields */}
      <table style={{ width: "400px", marginBottom: "px" }}>
        <tbody>
          <tr>
            <td align="right" valign="top" style={{ paddingRight: "10px" }}>
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                value={100}
                style={{
                  width: "180px",
                  marginBottom: "15px",
                }}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={{ paddingRight: "10px" }}>
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select
                id="wd-group"
                style={{
                  width: "150px",
                  marginBottom: "15px",
                }}
              >
                <option value="assignments">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={{ paddingRight: "10px" }}>
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select
                id="wd-display-grade-as"
                style={{
                  width: "100px",
                  marginBottom: "15px",
                }}
              >
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={{ paddingRight: "10px" }}>
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select
                id="wd-submission-type"
                style={{
                  width: "80px",
                  marginBottom: "15px",
                }}
              >
                <option value="online">Online</option>
              </select>
              <div>
                Online Entry Options
                <br />
                <label htmlFor="wd-text-entry">
                  <input id="wd-text-entry" type="checkbox" /> Text Entry
                </label>
                <br />
                <label htmlFor="wd-website-url">
                  <input id="wd-website-url" type="checkbox" /> Website URL
                </label>
                <br />
                <label htmlFor="wd-media-recordings">
                  <input id="wd-media-recordings" type="checkbox" /> Media
                  Recordings
                </label>
                <br />
                <label htmlFor="wd-student-annotation">
                  <input id="wd-student-annotation" type="checkbox" /> Student
                  Annotation
                </label>
                <br />
                <label htmlFor="wd-file-upload">
                  <input id="wd-file-upload" type="checkbox" /> File Uploads
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Flexbox container for Assign section */}
      <div
        style={{ display: "flex", alignItems: "flex-start", marginTop: "20px" }}
      >
        {/* Label for Assign */}
        <label
          htmlFor="wd-assign-section"
          style={{
            marginRight: "10px",
            fontSize: "16px",
            marginTop: "0px", // Align the label with the section
          }}
        >
          Assign
        </label>

        {/* Assign section content */}
        <div style={{ flex: 1 }}>
          {/* Assign to */}
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="wd-assign-to"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Assign to
            </label>
            <input
              id="wd-assign-to"
              value="Everyone"
              style={{
                display: "block",
                width: "180px",
              }}
            />
          </div>

          {/* Due Date */}
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="wd-due-date"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Due
            </label>
            <input
              id="wd-due-date"
              type="date"
              value="2024-05-13"
              style={{
                display: "block",
                width: "150px",
              }}
            />
          </div>

          {/* Available From and Until */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "48%" }}>
              <label
                htmlFor="wd-available-from"
                style={{ display: "block", marginBottom: "5px" }}
              >
                Available from
              </label>
              <input
                id="wd-available-from"
                type="date"
                value="2024-05-06"
                style={{
                  display: "block",
                  width: "150px",
                }}
              />
            </div>

            <div style={{ width: "48%" }}>
              <label
                htmlFor="wd-available-until"
                style={{ display: "block", marginBottom: "5px" }}
              >
                Until
              </label>
              <input
                id="wd-available-until"
                type="date"
                value="2024-05-20"
                style={{
                  display: "block",
                  width: "150px",
                }}
              />
            </div>
          </div>

          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <button style={{ marginRight: "10px" }}>Cancel</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
