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

export const getBlog = async (endpoint) => {
  try{
    const response = await axios.get(process.env.VUE_APP_BLOG_URL + endpoint);
    return response;
  }catch(error){
    if(!error.response){
      return {status : "No Server Response" };
    }else{
      return error.response;
    }
  }
}

export const postContent = async (endpoint, data) =>{
  try{
    const response = await axios.post(process.env.VUE_APP_API_URL + endpoint, data, {headers: { 'content-type': 'multipart/form-data' }});
    return response;
  }catch(error){
    if(!error.response){
      return{status: "No Server Response"};
    }else{
      return error.response;
    }
  }
}