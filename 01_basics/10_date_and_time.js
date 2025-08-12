/* JS Tutorial : Date and Time */

const currentDate = new Date();
console.log(currentDate); // Current date and time in local timezone
console.log(typeof currentDate); // object

// to access general date and time information
console.log(currentDate.toString()); // String representation of the current date and time
console.log(currentDate.toDateString()); // Date in a human-readable format (e.g., "Mon Oct 23 2023")
console.log(currentDate.toTimeString()); // Time in a human-readable format (e.g., "14:30:00 GMT+0530 (India Standard Time)")

console.log(currentDate.toLocaleString()); // Localized date and time string
console.log(currentDate.toLocaleDateString()); // Localized date 
console.log(currentDate.toLocaleTimeString()); // Localized time

console.log(currentDate.toISOString()); // ISO format of the current date and time 
console.log(currentDate.toUTCString()); // UTC format of the current date and time

console.log(currentDate.getTime()); // Timestamp in milliseconds since January 1, 1970 January)
console.log(currentDate.getDate()); // Day of the month (1-31)
console.log(currentDate.getMonth()); // Current month (0-11)
console.log(currentDate.getFullYear()); // Current year (e.g., 2023)

// manual date and time creation
const specificDate = new Date(2023, 0, 23) 
console.log(specificDate.toString()); // Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)

const anotherDate = new Date(2025, 4, 26, 5, 10) 
console.log(anotherDate.toLocaleString()); // 5/26/2025, 5:10:00 AM 

const dateFormat = new Date("01-26-2025") // Date in MM-DD-YYYY format
console.log(dateFormat.toLocaleString()); // 1/26/2025, 12:00:00 AM

const myTimestamp = Date.now(); 
console.log(myTimestamp); // Current timestamp in milliseconds e.g., 1755002892814

console.log(dateFormat.getTime()); // Timestamp of the specific date in milliseconds

console.log(Date.now()/ 1000); // Current timestamp in seconds since January 1, 1970

console.log(Math.floor(Date.now()/ 1000)) // Ropunded value

console.log(myTimestamp.toLocaleString("default", { weekday: "Long"})); // manupulate date and time in desired format 
