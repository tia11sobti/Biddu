const parallax= document.getElementById("parallax_slide");
window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY= offset * 0.7 + "px";

}
)

options= document.getElementsByClassName('options');
options.addEventListener('scoll',function()
{
options.style.display= block;



}
)