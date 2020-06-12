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


const select = $('select');
function showSelectedLocation() {
    const selectedLocation = select.value;
    if (selectedLocation==='san-francisco'){
        this.removeClass('location-hidden');
        $('.location').addClass('location-hidden');
    }
    if (selectedLocation==='new-york'){
        this.removeClass('location-hidden');
        $('.location').addClass('location-hidden');
    }
    if (selectedLocation==='los-angeles'){
        this.removeClass('location-hidden');
        $('.location').addClass('location-hidden');
    }
}
showSelectedLocation();
select.addEventListener('change',showSelectedLocation);



