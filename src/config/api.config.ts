export const getApiConfig = () => {
  return {
    apiUrl: import.meta.env.VITE_API_URL || "http://localhost:5555/api",
  };
};
