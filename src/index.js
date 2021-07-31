import { getUsers } from "./api/userApi";
const tbody = document.querySelector("#body");

getUsers("/users").then((response) => {
  console.log(response);
  response.map((user) => {
    tbody.innerHTML += `
    <tr>
    <td><button>Delete</button></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>
    `;
  });
});
