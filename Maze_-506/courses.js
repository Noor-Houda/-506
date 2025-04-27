function loadCourses() {
  const api = "https://localhost/couses.json";
  fetch(api)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error in json file");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
