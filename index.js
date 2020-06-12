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

const select =$('select');
const showSelectedLocation =() =>{
    const selectedLocation = select.children("option:selected").val();
    if (selectedLocation==='san-francisco'){
        $(this.value).removeClass('location-hidden');
        $('.location').addClass('location-hidden');
    }
    if (selectedLocation==='new-york'){
        $(this.value).removeClass('location-hidden');
        $('.location').addClass('location-hidden');
    }
    if (selectedLocation==='los-angeles'){
        $(this.value).removeClass('location-hidden');
        $('.location').addClass('location-hidden');
    }
}
showSelectedLocation();
$('select').change(showSelectedLocation);




