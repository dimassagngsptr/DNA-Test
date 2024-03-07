export const datePickerFormated = (dateString) => {
   const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
   ];
   const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
   ];
   const date = new Date(dateString);
   const dayName = days[date.getDay()];
   const day = date.getDate();
   const monthName = months[date.getMonth()];
   const year = date.getFullYear();
   let hour = date.getHours();
   let minute = date.getMinutes();
   hour = hour < 10 ? "0" + hour : hour;
   minute = minute < 10 ? "0" + minute : minute;
   return `${dayName.substr(0, 3)}, ${day} ${monthName} ${year
      .toString()
      .substr(-2)} ${hour}.${minute}`;
};
