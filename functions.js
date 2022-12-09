function setinfo(cont) { //set txt of gallery div
    var out = document.getElementById("galleryContent");
    out.innerHTML = cont
}
function getValueById(id) { //get value of element
    return document.getElementById(id).value
}
function setValueById(id, value)  { //set value of element
    document.getElementById(id).value = value
}
function planBT() { //plan button onclicked
    setinfo('');
    var img = document.getElementById('image')
    img.src = 'https://png.pngtree.com/png-clipart/20210206/ourmid/pngtree-big-red-flower-with-black-border-clipart-png-image_2890436.jpg'
}