import axios from 'axios';

export const GET_CV = async () => {
  try {
    const response = await axios.get(`https://cv-be.herokuapp.com/cv`);
    if (response.data) return response.data;
    return response;
  } catch (e) {
    throw e;
  }
};