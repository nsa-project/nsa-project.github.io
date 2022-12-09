function setinfo(cont) { //set txt of gallery div
    var out = document.getElementById("galleryContent");
    out.innerHTML = cont
    document.getElementById('closeBT').style.display = 'block';
}
function getValueById(id) { //get value of element
    return document.getElementById(id).value
}
function setValueById(id, value)  { //set value of element
    document.getElementById(id).value = value
}
function planBT() { //plan button onclicked
    setinfo('Windmills OR solar panels will be installed on the school campus aswell as a battery backup and LED lights in both NSA buildings. The windmills will be small and fenced off so that scholars will not be hurt or tamper with the windmills. <br> The windmills or solar panels will have to be maintained by janitorial services or other trained staff members. The battery backup will also be fenced in to prevent tampering, and will be connected to solar panels or windmills, city power supply, and the school main supply. <br> In case of a battery backup failure, there will be a manual bypass switch to connect city power directly to the school power line.');
    var img = document.getElementById('image');
    img.src = 'https://raw.githubusercontent.com/nsa-project/nsa-project.github.io/main/img/plan.png'
}
function closeGallery() {
    setinfo('');
    var img = document.getElementById('image');
    img.src = ''
    document.getElementById('closeBT').style.display = 'none';
}