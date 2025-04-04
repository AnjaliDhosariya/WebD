const userDetails = [
  {
    name: "Anjali",
    email: "anjali@gmail.com",
    contact: "21435436576",
    address: "Rau",
    checked: false,
  },
  {
    name: "Aakash",
    email: "anjali@gmail.com",
    contact: "21435436576",
    address: "Rau",
    checked: false,
  },
];

function closeModalN() {
  document.getElementById("warning").setAttribute("class", "d-none");
}
function openModal() {
  clearNameError();
  clearMailError();
  clearContactError();
  clearAddressError();
  document.getElementById("edit").setAttribute("class","d-none");
  document.getElementById("add").setAttribute("class","d-block");
  document.getElementById("userName").value="";
      document.getElementById("userMail").value="";
      document.getElementById("userAddress").value="";
      document.getElementById("userContact").value="";
  document.getElementById("form").setAttribute("class", "d-block");
}
function closeModal() {
  document.getElementById("form").setAttribute("class", "d-none");
}
function getData() {
  document.getElementById("tableBody").innerHTML = null;
  userDetails.map((user, index) => {
    let tableRow = document.createElement("tr");

    let firstColum = document.createElement("td");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    firstColum.appendChild(checkBox);
    checkBox.onchange = function (event) {
      user.checked = event.target.checked;
    };

    let tableName = document.createElement("td");
    let nameCell = document.createTextNode(user.name);
    tableName.appendChild(nameCell);

    let tableMail = document.createElement("td");
    let mailCell = document.createTextNode(user.email);
    tableMail.appendChild(mailCell);

    let tableAddress = document.createElement("td");
    let addressCell = document.createTextNode(user.address);
    tableAddress.appendChild(addressCell);

    let tableContact = document.createElement("td");
    let contactCell = document.createTextNode(user.contact);
    tableContact.appendChild(contactCell);

    let iconTable = document.createElement("td");
    let x = document.createElement("div");
    let iconCell = document.createElement("i");
    iconCell.setAttribute("class", "fa fa-edit marginIcon");
    let att = document.createAttribute("style");
    att.value = "margin: 0px 10px";
    iconCell.setAttributeNode(att);
    iconCell.onclick = function (){
      document.getElementById("form").setAttribute("class","d-block");
      document.getElementById("edit").setAttribute("class","d-block");
      document.getElementById("add").setAttribute("class","d-none");
      document.getElementById("userName").value=user.name;
      document.getElementById("userMail").value=user.email;
      document.getElementById("userAddress").value=user.address;
      document.getElementById("userContact").value=user.contact;
      document.getElementById("edit").onclick= function() {
      let  a=document.getElementById("userName").value;
       let b=document.getElementById("userMail").value;
        let c=document.getElementById("userAddress").value;
       let d=document.getElementById("userContact").value;
       let e={
        name: a,
        email: b,
        contact: d,
        address: c,
        checked: false,
       }
       userDetails.splice(index,1,e);
       getData();
        document.getElementById("form").setAttribute("class","d-none");
      }
    }
    x.appendChild(iconCell);

    let iconCell2 = document.createElement("i");
    iconCell2.setAttribute("class", "fa fa-trash");
    iconCell2.onclick = function () {
      document.getElementById("warning").setAttribute("class", "d-block");
      document.getElementById("yesDelete").onclick = function () {
        myFunction(index);
      };
    };
    function myFunction(index) {
      userDetails.splice(index, 1);
      getData();
      closeModalN();
    }

    x.appendChild(iconCell2);

    iconTable.appendChild(x);

    tableRow.appendChild(firstColum);
    tableRow.appendChild(tableName);
    tableRow.appendChild(tableMail);
    tableRow.appendChild(tableAddress);
    tableRow.appendChild(tableContact);
    tableRow.appendChild(iconTable);

    document.getElementById("tableBody").appendChild(tableRow);
    document.getElementById("userName").value = "";
    document.getElementById("userMail").value = "";
    document.getElementById("userAddress").value = "";
    document.getElementById("userContact").value = "";
  });
}
function deleteFunction() {
  userDetails = userDetails.filter((user) => user.checked !== true);
  getData();
}

function addDataToTable() {
  let name = document.getElementById("userName").value;
  let mail = document.getElementById("userMail").value;
  let address = document.getElementById("userAddress").value;
  let contact = document.getElementById("userContact").value;
  let flag = 1;
  if (name == "") {
    document.getElementById("nameError").innerHTML = "**Name can not be empty.";
    flag = 0;
  }
  if (mail == "") {
    document.getElementById("mailError").innerHTML =
      "Please provide your Email ID.";
    flag = 0;
  }
  if (address == "") {
    document.getElementById("addressError").innerHTML =
      "**Address field cant be empty...";
    flag = 0;
  }
  if (contact == "") {
    document.getElementById("contactError").innerHTML =
      "**Enter your mobile number!!!!";
    flag = 0;
  }
  if (flag == 1) {
    let user = {
      name: name,
      email: mail,
      contact: contact,
      address: address,
      checked: false,
    };
    userDetails.push(user);
    closeModal();
    getData();
  }
}
function clearNameError() {
  document.getElementById("nameError").innerHTML = "";
}
function clearMailError() {
  document.getElementById("mailError").innerHTML = "";
}
function clearContactError() {
  document.getElementById("contactError").innerHTML = "";
}
function clearAddressError() {
  document.getElementById("addressError").innerHTML = "";
}
//   function yesDelete(){
//     userDetails.splice(index,1);
// }
