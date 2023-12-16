import http from "../../../interceptor";

export const getUsersList = async () => {
  try {
    const response = await http.get("/User/UserMannage");
    console.log(response);
    return response;
  } catch (error) {
    console.log("user lists error", error);
    return [];
  }
};
