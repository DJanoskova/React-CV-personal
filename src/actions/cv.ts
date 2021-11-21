export const GET_CV = async () => {
  const data = await fetch(`https://cv-be.herokuapp.com/cv`);
  const response = await data.json();
  if (response.data) return response.data;
  return response;
};
