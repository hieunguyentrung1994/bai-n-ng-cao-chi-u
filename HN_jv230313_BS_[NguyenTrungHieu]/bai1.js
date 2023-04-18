let works = [
  {
    id: 1,
    name: "họ tên",
    email: "convet@gmail.com",
    phone: "0977654321",
    home: "Hà Nội",
    grender: "nam",
  },
];
const tbody = document.getElementById("tbody");
const form = document.getElementById("main-form");
const search = document.getElementById("serch");

function renderWorks() {
  tbody.innerHTML = "";
  for (let i = 0; i < works.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `<tr class="noidung" id=${works[i].id}>
        <td>${i + 1}</td>
        <td>${works[i].name}</td>
        <td>${works[i].email}</td>
        <td>${works[i].phone}</td>
        <td>${works[i].home}</td>
        <td>${works[i].grender}</td>
        <td>
          <button class="btn-edit">edit</button>
          <button class="btn-delete">delete</button>
        </td>
        <td></td>
      </tr>`;
  }
}
renderWorks();
form.onsubmit = function (e) {
  e.preventDefault();
  if (
    form.name.value &&
    form.email.value &&
    form.phone.value &&
    form.home.value &&
    form.grender.value
  ) {
    let work = {
      id: Math.floor(Math.random() * 10000000),
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      home: form.home.value,
      grender: form.grender.value,
    };
    works.push(work);
    renderWorks();
    alert("thêm thành công");
  } else {
    alert("nhập đầy đủ thông tin");
  }
};
tbody.onclick = function (e) {
  console.log(e.target.parentElement.parentElement);
  if (e.target.classList.contains("btn-delete")) {
    let deleteElement = e.target.parentElement.parentElement;
    deleteElement.remove();
  }
  if (e.target.classList.contains("btn-edit")) {
    let id = e.target.parentElement.parentElement.id;
    let td = e.target.parentElement.parentElement;
    let findIndex = -1;
    for (let i = 0; i < works.length; i++) {
      if (works[i].id === Number(id)) {
        findIndex = i;
      }
    }
    if (findIndex > -1) {
      let find = works[findIndex];
      td.innerHTML = `<tr class="noidung" id=${find.id}>
    <td></td>
    <td><input type="text"/ value="${find.name}"></td>
    <td><input type="email"/ value="${find.email}"></td>
    <td><input type="tel"/ value="${find.phone}"></td>
    <td><input type="text"/ value="${find.home}"></td>
    <td><label id="grender"
    >
    <input type="radio" name="grender" id="grender" value="nam" />nam
    <input type="radio" name="grender" id="nu" value="nu" />nữ
  </label>
    ${find.grender}</td>
    <td>
    <button class="btn btn-info btn-confirm">Confirm</button>
    <button id="delete" class="btn btn-danger btn-cancel">Cancel</button>
    </td>
    <td></td>
  </tr>`;
    }
    if (e.target.classList.contains("btn-confirm")) {
      let name = e.target.parentElement.parentElement.children[1].value;
      let email = e.target.parentElement.parentElement.children[2].value;
      let phone = e.target.parentElement.parentElement.children[3].value;
      let home = e.target.parentElement.parentElement.children[4].value;
      let grender = e.target.parentElement.parentElement.children[5].value;
      console.log(name, email);

      works[undateIndex] = {
        ...works[undateIndex],
        name: name,
        email: email,
        phone: phone,
        home: home,
        grender: grender,
      };
      renderWorks();
    }
  }
};
