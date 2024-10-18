import React from "react";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database"; // Assuming assignments are in the database
import { AiOutlineFileText, AiOutlineCheckCircle } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";

export default function Assignments() {
  const { cid } = useParams(); // Get course ID from the URL
  const assignments = db.assignments; // Get all assignments from the database

  // Filter assignments based on the current course ID
  const filteredAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

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

      {/* Assignments Section */}
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS{" "}
            <ModuleControlButtons />
          </div>

          {/* Render each assignment dynamically */}
          {filteredAssignments.map((assignment) => (
            <ul
              key={assignment._id}
              className="wd-lessons list-group rounded-0"
            >
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-start">
                  <BsGripVertical className="me-2 fs-3" />
                  <AiOutlineFileText className="me-2 text-success fs-5" />
                  <div
                    className="border-start border-success me-3"
                    style={{ width: "4px", height: "auto" }}
                  ></div>

                  {/* Assignment Info */}
                  <div>
                    <Link
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      className="text-dark fw-bold fs-5 text-decoration-none"
                    >
                      {assignment.title}
                    </Link>
                    <p className="text-danger mb-0">
                      {assignment.details}{" "}
                      <span className="text-dark">
                        | {assignment.availability}
                      </span>
                    </p>
                    <p className="text-dark mb-0">
                      Due {assignment.dueDate} | {assignment.points} pts
                    </p>
                  </div>
                </div>

                {/* Right Section (Check Mark + Control Buttons) */}
                <div className="d-flex align-items-center">
                  <LessonControlButtons />
                </div>
              </li>
            </ul>
          ))}
        </li>
      </ul>
    </div>
  );
}
