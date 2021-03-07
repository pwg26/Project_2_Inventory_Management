const add = document.getElementById("addForm");
console.log(add);
add.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    name: document.getElementById("nameInput").value,
    description: document.getElementById("description").value,
    asset_value: document.getElementById("assetVal").value,
    location: document.getElementById("rentedLocation").value,
    rental_rate: document.getElementById("rentalRate").value,
  };
  // console.log(formData);
  fetch("/api/equipment", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((response) => {
    if (response.ok) {
      location.reload("/");
    } else {
      alert("somethings up");
    }
  });
});

// const update = document.getElementById("updateForm");
// console.log(update);
// update.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = {
//     id: document.getElementById("idInput").value,
//     name: document.getElementById("nameInput").value,
//     description: document.getElementById("description").value,
//     asset_value: document.getElementById("assetVal").value,
//     rental_status: document.getElementById("isRented").value,
//     rented_location: document.getElementById("rentedLocation").value,
//     company_renting: document.getElementById("companyRenting").value,
//   };
//   // console.log(formData);
//   fetch(`/api/equipment/${formData.id}`, {
//     method: "PUT",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   }).then((response) => {
//     if (response.ok) {
//       location.reload("/");
//     } else {
//       alert("somethings up");
//     }
//   });
// });

// const del = document.getElementById("deleteForm");
// console.log(del);
// del.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = {
//     id: document.getElementById("id").value,
//   };
//   // console.log(formData);
//   fetch(`/api/equipment/${formData.id}`, {
//     method: "DELETE",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   }).then((response) => {
//     if (response.ok) {
//       location.reload("/");
//     } else {
//       alert("somethings up");
//     }
//   });
// });
