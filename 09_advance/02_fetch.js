/*** fetch ***/
async function getUser() {
  try {
    const response = await fetch("https://api.github.com/users/Sayan520");
    // console.log(response)
    const data = await response.json(); // converts string to json & use await because it also takes time
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}

getUser();

// another approach
fetch("https://api.github.com/users/Sayan520")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
