var images = document.querySelectorAll('img');
for(let i = 0; i < images.length; i++) {
    images[i] . addEventListener("mousemove", f1);
}
function f1(){
    for(let i = 0; i < images . length;i++){
        images[i] . style . width = '20%';
    }
    this . style . width = '30%';
}