const { application } = require("express");

const add = document.getElementById("addForm");
const update = document.getElementById("updateForm");
const del = document.getElementById("deleteForm");
const addType = document.getElementById("addTypeForm");

if (add) {
  console.log(add);
  add.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
      name: document.getElementById("nameInput").value,
      description: document.getElementById("description").value,
      asset_value: document.getElementById("asset_value").value,
      location: document.getElementById("location").value,
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
} else if (update) {
  console.log(update);
  update.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
      id: document.getElementById("idInput").value,
      name: document.getElementById("nameInput").value,
      description: document.getElementById("description").value,
      rental_rate: document.getElementById("rentalRate").value,
      asset_value: document.getElementById("asset_value").value,
      location: document.getElementById("location").value,
      is_rented: document.getElementById("is_rented").value,
      company_renting: document.getElementById("companyRenting").value,
      time_checked_in: document.getElementById("checkIn").value,
      time_checked_out: document.getElementById("checkOut").value,
    };
    // console.log(formData);
    fetch(`/api/equipment/${formData.id}`, {
      method: "PUT",
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
} else if (del) {
  console.log(del);
  del.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
      id: document.getElementById("id").value,
    };
    // console.log(formData);
    fetch(`/api/equipment/${formData.id}`, {
      method: "DELETE",
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
}

//=============================
// } else if (addType) {
//   console.log(addType);
//   addType.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const formData = {
//       name: document.getElementById("nameInput").value,
//       description: document.getElementById("description").value,
//       asset_value: document.getElementById("assetVal").value,
//       rental_rate: document.getElementById("rentalRate").value,
//     };
//     // console.log(formData);
//     fetch(`/api/asset`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     }).then((response) => {
//       if (response.ok) {
//         location.reload("/");
//       } else {
//         alert("somethings up");
//       }
//     });
//   });
// ===============================
