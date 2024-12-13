import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/modules`
  );
  return response.data;
};

export const fetchAssignments = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/assignments`
  );
  return response.data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/assignments`
  );
  return response.data;
};

export const fetchAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.get(
    `${REMOTE_SERVER}/api/assignments/${assignmentId}`
  );
  return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const updateAssignment = async (
  assignmentId: string,
  updatedAssignment: any
) => {
  await axiosWithCredentials.put(
    `${REMOTE_SERVER}/api/assignments/${assignmentId}`,
    updatedAssignment
  );
};

export const deleteAssignment = async (assignmentId: string) => {
  await axiosWithCredentials.delete(
    `${REMOTE_SERVER}/api/assignments/${assignmentId}`
  );
};
