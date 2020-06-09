const navbar=$('.navbar');
function toggleNavbarShadow() {
    const navbarOffsetTop=navbar.offset().top;
    if (navbarOffsetTop!==0 && !navbar.hasClass('navbar-shadow')) {
        $('.navbar').addClass( 'navbar-shadow' );
    } 
    if (navbarOffsetTop===0 && navbar.hasClass('navbar-shadow')){
        $('.navbar').removeClass( 'navbar-shadow' );
    } 
    }
    toggleNavbarShadow();
    window.addEventListener('scroll',toggleNavbarShadow);