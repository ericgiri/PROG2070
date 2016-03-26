/**
 * Created by EricGiri
 *              on 2016-03-22.
 */
function validateForm() {
    var name = document.getElementById('txtName').value;
    var city = document.getElementById('txtCity').value;
    var address = document.getElementById('txtAddress').value;
    var phone = document.getElementById('txtPhone').value;
    var email = document.getElementById('txtEmail').value;
    if (name =="" || name==null) {
        var msg = document.getElementById('msg');
        msg.innerHTML = "Enter Full Name";
    }
    else{
        alert("Hello "+name);
    }

}

function init() {
}

$(document).ready(function () {
    init();
});

