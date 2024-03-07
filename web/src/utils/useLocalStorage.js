export const handleRedirect = (data, url) => {
   const storageBookmark = JSON.parse(localStorage.getItem("myBookmark")) || [];
   const isBookmarkExists = storageBookmark.some(
      (bookmark) => bookmark.url === url
   );
   if (isBookmarkExists) {
      return;
   }
   const updateBookmark = [...storageBookmark, { data, url }];
   localStorage.setItem("myBookmark", JSON.stringify(updateBookmark));
};