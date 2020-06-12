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
    const locations =$('.location');
    locations.each(location=>{
        if(location.attr('id') === selectedLocation && location.hasClass('location-hidden')) {
          location.removeClass('location-hidden');
        }
         if(location.attr('id') !== selectedLocation && !location.hasClass('location-hidden')) {
          location.addClass('location-hidden');
        }  
    })
      
}
showSelectedLocation();
$('select').change(showSelectedLocation);




