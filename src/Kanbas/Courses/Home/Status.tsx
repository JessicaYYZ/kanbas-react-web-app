export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <div>
        <button style={{ marginRight: "10px" }}>Unpublish</button>
        <button>Publish</button>
      </div>
      <div>
        <button style={{ display: "block", marginTop: "5px" }}>
          Import Existing Content
        </button>
        <button style={{ display: "block", marginTop: "5px" }}>
          Import from Commons
        </button>
        <button style={{ display: "block", marginTop: "5px" }}>
          Choose Home Page
        </button>
        <button style={{ display: "block", marginTop: "5px" }}>
          View Course Stream
        </button>
        <button style={{ display: "block", marginTop: "5px" }}>
          New Announcement
        </button>
        <button style={{ display: "block", marginTop: "5px" }}>
          New Analytics
        </button>
        <button style={{ display: "block", marginTop: "5px" }}>
          View Course Notifications
        </button>
      </div>
    </div>
  );
}
