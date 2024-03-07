export const fetchData = async (route) => {
   try {
      const response = await fetch(
         `https://newsapi.org/v2/${route}&apiKey=13dbd7fe8a1c46739a5f99cc3ac24b52`
      );
      return response.json();
   } catch (error) {
      return error;
   }
};
