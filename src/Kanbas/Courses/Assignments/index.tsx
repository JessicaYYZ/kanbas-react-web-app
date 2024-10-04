import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { AiOutlineFileText } from "react-icons/ai";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <button
        id="wd-add-assignemnt-btn"
        className="btn btn-lg btn-danger me-1 float-end "
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <button
        id="wd-add-group-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <div className="input-group w-25 mb-5">
        <span className="input-group-text bg-white border-end-0">
          <IoSearchOutline />
        </span>
        <input
          id="wd-search-assignment"
          className="form-control border-start-0"
          placeholder="Search..."
          style={{
            padding: "15px",
            borderRadius: "5px",
            outline: "none",
            border: "1px solid #ddd",
          }}
        />
      </div>
      {/* Assignments */}
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS{" "}
            <ModuleControlButtons />
          </div>

          {/* Assignment 1 */}
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              {/* Left Section (Icon + Text) */}
              <div className="d-flex align-items-start">
                {/* Drag Icon */}
                <BsGripVertical className="me-2 fs-3" />
                {/* File Icon */}
                <AiOutlineFileText className="me-2 text-success fs-5" />
                {/* Green Border */}
                <div
                  className="border-start border-success me-3"
                  style={{ width: "4px", height: "auto" }}
                ></div>
                {/* Text Section */}
                <div>
                  <a
                    className="wd-assignment-link text-dark fw-bold fs-5 text-decoration-none"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    <h5 className="mb-1">A1</h5>
                  </a>
                  <p className="text-danger mb-0">
                    Multiple Modules{" "}
                    <span className="text-dark">
                      | Not available until May 6 at 12:00am |
                    </span>
                  </p>
                  <p className="text-dark mb-0">
                    Due May 13 at 11:59pm | 100 pts
                  </p>
                </div>
              </div>
              {/* Right Section (LessonControlButtons) */}
              <div className="d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>
          </ul>

          {/* Assignment 2 */}
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              {/* Left Section (Icon + Text) */}
              <div className="d-flex align-items-start">
                {/* Drag Icon */}
                <BsGripVertical className="me-2 fs-3" />
                {/* File Icon */}
                <AiOutlineFileText className="me-2 text-success fs-5" />
                {/* Green Border */}
                <div
                  className="border-start border-success me-3"
                  style={{ width: "4px", height: "auto" }}
                ></div>
                {/* Text Section */}
                <div>
                  <a
                    className="wd-assignment-link text-dark fw-bold fs-5 text-decoration-none"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    <h5 className="mb-1">A2</h5>
                  </a>
                  <p className="text-danger mb-0">
                    Multiple Modules{" "}
                    <span className="text-dark">
                      | Not available until May 13 at 12:00am |
                    </span>
                  </p>
                  <p className="text-dark mb-0">
                    Due May 20 at 11:59pm | 100 pts
                  </p>
                </div>
              </div>
              {/* Right Section (LessonControlButtons) */}
              <div className="d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>
          </ul>

          {/* Assignment 3 */}
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              {/* Left Section (Icon + Text) */}
              <div className="d-flex align-items-start">
                {/* Drag Icon */}
                <BsGripVertical className="me-2 fs-3" />
                {/* File Icon */}
                <AiOutlineFileText className="me-2 text-success fs-5" />
                {/* Green Border */}
                <div
                  className="border-start border-success me-3"
                  style={{ width: "4px", height: "auto" }}
                ></div>
                {/* Text Section */}
                <div>
                  <a
                    className="wd-assignment-link text-dark fw-bold fs-5 text-decoration-none"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    <h5 className="mb-1">A3</h5>
                  </a>
                  <p className="text-danger mb-0">
                    Multiple Modules{" "}
                    <span className="text-dark">
                      | Not available until May 20 at 12:00am |
                    </span>
                  </p>
                  <p className="text-dark mb-0">
                    Due May 27 at 11:59pm | 100 pts
                  </p>
                </div>
              </div>
              {/* Right Section (LessonControlButtons) */}
              <div className="d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>{" "}
    </div>
  );
}
