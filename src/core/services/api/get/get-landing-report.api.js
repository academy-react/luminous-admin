import http from "../../interceptor";

export const landingReport = async () => {
  try {
    const result = await http.get("/Home/LandingReport");
    console.log("res", result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
