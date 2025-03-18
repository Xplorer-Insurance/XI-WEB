import axiosInstance from '../config/axiosConfig';

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get(`/users`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Hubo un error inesperado, intenta de nuevo');
  }
}