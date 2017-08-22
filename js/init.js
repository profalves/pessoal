$(document).ready(function() {
   // Instanciando Variaveis	
   var _containerBtn = $(".jbtn-voltar");
   var _Btnlink = $(".jbtn-voltar-link");
   
   // Mostra o botao voltar ao topo
   $(window).scroll(function() {
    // se a barra de rolagem for maior que 70 mostra o botao
   	if ($(this).scrollTop()>70) {
      _containerBtn.fadeIn(0);
     
   	}
   	// se nao ao subir novamente escondera o botao
   	else{
      _containerBtn.fadeOut(0);
   	}

   });
   

   // Clique e volte ao topo
   _containerBtn.click(function() {
   	// Instanciando o corpo da pagina e usando animação do propio Jquery 0 = ao tanto que ira subir e 800 = velocidade que ira realizar  a ação
   	$("html, body").animate({scrollTop:0},800);
   	return false;
   	// return false para nao recarregar a pagina ao clicar
   });

});
(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space