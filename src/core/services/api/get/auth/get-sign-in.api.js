import http from "../../../interceptor";
export const login = async (data) => {
  try {
    const response = await http.post("/Sign/Login", data);
    console.log(response);
    return response;
  } catch (error) {
    return false;
  }
};
