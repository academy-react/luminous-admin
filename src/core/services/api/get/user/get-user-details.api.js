import http from "../../../interceptor";

export const getUserDetail = async (UserId) => {
  try {
    const response = await http.get(`/User/UserDetails/${UserId}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log("user lists error", error);
    return [];
  }
};
