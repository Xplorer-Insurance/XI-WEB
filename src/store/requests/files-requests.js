import axiosInstance from '../config/axiosConfig';

export const postUsersByFile = async (body) => {
  try {
    const response = await axiosInstance.post(`/scrape/upload-csv`, body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Hubo un error inesperado, intenta de nuevo');
  }
}