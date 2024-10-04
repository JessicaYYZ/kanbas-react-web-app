import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";

export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <button
        id="wd-score-proportion-btn"
        className="btn rounded-pill px-3 py-1 me-2"
        style={{
          fontSize: "14px",
          border: "1px solid black",
        }}
      >
        40% of Total
      </button>

      <BsPlus className="fs-3" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
