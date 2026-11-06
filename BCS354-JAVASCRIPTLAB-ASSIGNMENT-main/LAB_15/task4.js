/*
 Name : MAHI PAL
 Roll No : BCS2025377
 Assignment No : 15
 Task No : 4
*/

function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Mahi" },
        { id: 2, name: "Arif" },
        { id: 3, name: "Lokesh" }
      ]);
    }, 100);
  });
}

async function showUsers() {
  let users = await getUsers();
  users.forEach((user) => {
    console.log(user.name);
  });
}

showUsers();