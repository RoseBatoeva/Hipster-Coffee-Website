function toggleShadow() {
    $(".navbar").toggleClass( "navbar-shadow" );
}
window.addEventListener('scroll',toggleShadow)
//    window.addEventListener('scroll',function () {
//     $(".navbar").toggleClass( "navbar-shadow" );
//    });