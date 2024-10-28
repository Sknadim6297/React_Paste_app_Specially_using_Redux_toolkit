export const FormatDate = (date) => {
  
  const _date = new Date(date);
  if (isNaN(_date.getTime())) {
    console.error("Invalid date");
    return "Invalid Date";
  }

  // Format the date with time included
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true, // Optional: true for 12-hour format, false for 24-hour format
  }).format(_date);

  return formattedDate;
};
