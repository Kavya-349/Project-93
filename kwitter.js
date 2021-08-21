function addUser() {
    username = document.getElementById("user_input").value;
    localStorage.setItem("Username", username);
    window.location = "kwitter_room.html";
}