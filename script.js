function showAlert(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var number = document.getElementById("number").value

    alert("name :" + name + "\nemail :" + email + "\nnumber :" + number)
}
function clearData(){
    var name = document.getElementById("name").value = ""
    var email = document.getElementById("email").value = ""
    var number = document.getElementById("number").value = ""

}