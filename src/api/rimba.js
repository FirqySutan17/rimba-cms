import axios from "axios";

export const getContent = async (endpoint) => {
  try {
    const response = await axios.get(process.env.VUE_APP_API_URL + endpoint);
    return response;
  } catch (error) {
    if (!error.response) {
      return { status: "No Server Response" };
    } else {
      return error.response;
    }
  }
};
