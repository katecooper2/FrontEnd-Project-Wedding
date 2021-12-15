"use strict";

const getOutput = document.querySelector("#getOutput");

document.querySelector("#deleteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = this;

    const guestId = form.guestId.value;
    axios
        .delete(`http://localhost:8080/guest/deleteGuest/${guestId}`)
        .then(res => {
            console.log(res);
            form.reset();
            form.guestId.focus();
            getGuests();
        })
        .catch(err => console.error(err));
});


document.querySelector("#guestForm").addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("THIS:", this);
    const form = this; 

  

    const data = {
        firstName: form.first.name.value,
        lastName: form.last.name.value,
        tableNumber: form.table.number.value,
      
    };

    console.log("DATA: ", data);

    axios
        .post("http://localhost:8080/guest/createGuest", data)
        .then(res => {
            getGuests();
            form.reset(); 
            console.log(res);
        })
        .catch(err => console.error(err));
});

const getGuests = () => {
    axios
        .get("http://localhost:8080/guest/getAll")
        .then(res => {
            console.log(res);
            const guests = res.data;
            getOutput.innerHTML = ""; 
            for (let guest of guests) {
                const guestCol = document.createElement("div");
                guestCol.classList.add("col");

                const guestCard = document.createElement("div");
                guestCard.style = `background-color: ${guest.colour}`;
                guestCard.classList.add("card");

                const guestBody = document.createElement("div");
                guestBody.classList.add("card-body");

                const guestFirstName = document.createElement("h5");
                guestFirstName.classList.add("card-title");
                guestFirstName.innerText = guest.firstName;
                guestBody.appendChild(guestFirstName);

                const guestLastName = document.createElement("p");
                guestLastName.classList.add("card-text");
                guestLasttName.innerText = guest.lastName;
                guestBody.appendChild(guestLastname);

            
                const guestTableNumber = document.createElement("p");
                guestTableNumber.classList.add("card-text");
                guestTableNumber.innerText = guest.tableNumber`;
                guestBody.appendChild(guestTableNumber);

                const guestDelete = document.createElement("button");
                guestDelete.innerText = "DELETE";
                guestDelete.classList.add("btn", "btn-danger");
                guestDelete.addEventListener("click", () => {
                    axios
                        .delete
                        .then(res => getGuests())
                        .catch(err => console.error(err))
                });
                guestBody.appendChild(guestDelete);
                guestCard.appendChild(guestBody);
                guestCol.appendChild(guestCard);

                getOutput.appendChild(guestCol);
            }
        })
        .catch(err => console.error(err));
    