const update = document.getElementById("orderForm");
console.log(update);
update.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    id: document.getElementById("idInput").value,
    name: document.getElementById("nameInput").value,
    description: document.getElementById("description").value,
    asset_value: document.getElementById("assetVal").value,
    rental_status: document.getElementById("isRented").value,
    rented_location: document.getElementById("rentedLocation").value,
    company_renting: document.getElementById("companyRenting").value,
  };
  // console.log(formData);
  fetch(`/api/equipment/${formData.id}"`, {
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
