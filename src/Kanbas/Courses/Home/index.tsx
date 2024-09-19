import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <table id="wd-home" style={{ width: "100%", tableLayout: "fixed" }}>
      <tr>
        <td valign="top" style={{ width: "70%", paddingRight: "20px" }}>
          <Modules />
        </td>
        <td
          valign="top"
          style={{
            width: "30%",
            paddingLeft: "10px",
            borderLeft: "1px solid #ddd",
          }}
        >
          <CourseStatus />
        </td>
      </tr>
    </table>
  );
}
