
var bookName = document.getElementById("bookName");
var bookmarkUrl = document.getElementById("bookmarkUrl");
var addItem = [];

if (localStorage.getItem('vistWebsite') != null) {
    addItem = JSON.parse(localStorage.getItem('vistWebsite'));
    showData();
}


localStorage.setItem('vistWebsite', JSON.stringify(addItem))


function sumbit() {


    var form = {
        nameBook: bookName.value,
        markUrl: bookmarkUrl.value,
    }
    console.log(addItem);

    addItem.push(form);
    localStorage.setItem('vistWebsite', JSON.stringify(addItem))

    showData();
    clearForm();
}

function clearForm() {
    bookName.value = null;
    bookmarkUrl.value = null;
}



function showData() {

    container = ``;

    for (var i = 0; i < addItem.length; i++) {

        container += `
        <tr>
        <td>${i + 1}</td>
        <td>${addItem[i].nameBook}</td>
        <td>
            <a href="${addItem[i].markUrl}" target="_blank" class="btn-visit btn" id="Visit">
            <i class="fa-solid fa-eye pe-2"></i>
            Visit
            </a>
        <td>
        <button onclick="deleteItem(${i})" class="btn-delete btn btn-danger">  
        <i class="fa-solid fa-trash-can"></i>
        Delete</button>
        </td>
        `
    }
    document.getElementById("link").innerHTML = container;

}

function deleteItem(index) {
    addItem.splice(index, 1);
    localStorage.setItem('vistWebsite', JSON.stringify(addItem))

    showData();
}
