document.getElementById('closeBT').style.display = 'none';
function setinfo(cont) { //set txt of gallery div
    var out = document.getElementById("galleryContent");
    out.innerHTML = cont
    document.getElementById('closeBT').style.display = 'inline-block';
    var img = document.getElementById('image');
    img.src = ''
    out.style.margin = '10px';
}
function getValueById(id) { //get value of element
    return document.getElementById(id).value
}
function setValueById(id, value)  { //set value of element
    document.getElementById(id).value = value
}
function planBT() { //plan button onclicked
    setinfo('Windmills OR solar panels will be installed on the school campus as well as a battery backup and LED lights in both NSA buildings. The windmills will be small and fenced off so that scholars will not be hurt or tamper with the windmills. <br> The windmills or solar panels will have to be maintained by janitorial services or other trained staff members. The battery backup will also be fenced in to prevent tampering, and will be connected to solar panels or windmills, city power supply, and the school main supply. <br> In case of a battery backup failure, there will be a manual bypass switch to connect city power directly to the school power line.');
    var img = document.getElementById('image');
    img.src = 'https://raw.githubusercontent.com/nsa-project/nsa-project.github.io/main/img/plan.png';
    var prev = document.getElementById('prev');
    prev.innerHTML = 'Plan'
}
function closeGallery() {
    setinfo('');
    var img = document.getElementById('image');
    img.src = ''
    document.getElementById('closeBT').style.display = 'none';
    var out = document.getElementById("galleryContent");
    out.style.margin = '0%';
    var prev = document.getElementById('prev');
    prev.innerHTML = ''
}
function infoBT() {
    var prev = document.getElementById('prev');
    prev.innerHTML = 'Info'
    setinfo('Project <b>GREEN</b> aims to provide more energy efficient ways to power North Star Academy. These include solar panels or wind mills, battery backups, and LED lights. <br> The lights in classrooms and hallways are incandescant, which is very inefficient and wastes 90% of power to heat generation.  LED lights spend more than 85% of energy to lighting, and last longer than other lightbulbs. Battery backups can serve to help keep the school powered during blackouts or lack of energy so that we can avoid using big generators. Solar panels or wind turbines can help decrease energy bills and the amount of carbon released into the air. All of these can contribute alongside other green campaigns to make NSA a better school!')
}