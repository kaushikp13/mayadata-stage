export const getFormattedDate = (date: string) => {
  const dateObj = new Date(date);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const _date = dateObj.getDate();
  const _month = monthNames[dateObj.getMonth()];
  const _year = dateObj.getFullYear();

  return `${_month} ${_date}, ${_year}`;
}
