import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const createModuleForCourse = async (courseId: string, module: any) => {
  try {
    const response = await axiosWithCredentials.post(
      `${COURSES_API}/${courseId}/modules`,
      module
    );
    return response.data;
  } catch (error) {
    console.error("Failed to create module:", error);
    throw error;
  }
};

export const fetchAllCourses = async () => {
  try {
    const { data } = await axiosWithCredentials.get(COURSES_API);
    return data;
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    throw error;
  }
};

export const createCourse = async (course: any) => {
  try {
    const { data } = await axiosWithCredentials.post(COURSES_API, course);
    return data;
  } catch (error) {
    console.error("Failed to create course:", error);
    throw error;
  }
};

export const findModulesForCourse = async (courseId: string) => {
  try {
    const response = await axiosWithCredentials.get(
      `${COURSES_API}/${courseId}/modules`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch modules for course:", error);
    throw error;
  }
};

export const deleteCourse = async (id: string) => {
  try {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
    return data;
  } catch (error) {
    console.error("Failed to delete course:", error);
    throw error;
  }
};

export const updateCourse = async (course: any) => {
  try {
    const { data } = await axiosWithCredentials.put(
      `${COURSES_API}/${course._id}`,
      course
    );
    return data;
  } catch (error) {
    console.error("Failed to update course:", error);
    throw error;
  }
};

export const findUsersForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/users`);
  return response.data;
};
