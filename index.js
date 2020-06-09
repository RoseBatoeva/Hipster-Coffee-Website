// const navbarOffsetTop =  get navbar distance from top;
// if (navbar distance === 0 && navbar has class shadow ) {
//   remove shadow class
// }
// if(navbar distance !== 0 && navbar doesn't have class shadow) {
//   add classShadow
// }
const navbar=$('.navbar');
function toggleNavbarShadow() {
    const navbarOffsetTop=navbar.offset().top;
    if (navbarOffsetTop!==0 && !navbar.hasClass('navbar-shadow')) {
        $(".navbar").addClass( "navbar-shadow" );
    } 
    if (navbarOffsetTop===0 && navbar.hasClass("navbar-shadow")){
        $(".navbar").removeClass( "navbar-shadow" );
    } 
    }
    toggleNavbarShadow();
    window.addEventListener('scroll',toggleNavbarShadow)


////////////////////////////////
// const navbar=('.navbar');
// function toggleNavbarShadow() {
//     $(".navbar").toggleClass( "navbar-shadow" );
// }
// toggleNavbarShadow();
// window.addEventListener('scroll',toggleNavbarShadow)

////////////////////////////////

//    window.addEventListener('scroll',function () {
//     $(".navbar").toggleClass( "navbar-shadow" );
//    });