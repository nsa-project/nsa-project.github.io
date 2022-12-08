function setinfo(cont) {
    var out = document.getElementById("galleryContent");
    out.innerHTML = cont
}
function getValueById(id) {
    return document.getElementById(id).value
}
function setValueById(id, value)  {
    document.getElementById(id).value = value
}