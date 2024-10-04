import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function LessonControlButtons() {
  return (
    <div className="{className} float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="me-2 fs-4" />
    </div>
  );
}
