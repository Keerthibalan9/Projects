function func1(){
    let a=document.getElementById("img1");
   a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    let b=document.getElementById("bulb1");
    b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    document.getElementById("txt").innerHTML="Switched OFF"
}
function func2(){
    let a=document.getElementById("img1");
    a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    let b=document.getElementById("bulb1");
    b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    b.style.width= "20%"
    document.getElementById("txt").innerHTML="Switched ON"
}



