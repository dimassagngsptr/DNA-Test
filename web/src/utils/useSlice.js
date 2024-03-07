export const slicers = (start, end, data) => {
   if (!start && !end) {
      return;
   }
   const results = data?.slice(start, end);
   return results;
};
