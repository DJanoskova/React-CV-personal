export const GET_CV = async () => {
  try {
    const data = await fetch(`https://cv-be.herokuapp.com/cv`);
    console.log(data);
    const response = await data.json();
    if (response.data) return response.data;
    return response;
  } catch (e) {
    throw e;
  }
};
