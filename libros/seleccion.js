	$('#saga-nacidos').parent().css('scale', '1.1');
	$('#saga-nacidos').css('border', 'solid #EDD480 2px');

	function seleccion(id,obj) {
		//Seteo todos los carruseles como "no seleccionados"
		let bloques = document.getElementsByClassName('seccion-libros');

		for(let i = 0; i < bloques.length; i ++){
			bloques[i].firstElementChild.style.border = 'none';
			bloques[i].style.scale = 1;
		}

		let carruseles = document.getElementsByClassName('swiffy-slider');

		for(let i = 0; i < carruseles.length; i ++){
			carruseles[i].style.display = 'none';

		}
		//Selecciono el carrusel que corresponda
		$(id).css('display', 'block');
		$(obj).parent().css('scale', '1.15');
		$(obj).css('border', 'solid #EDD480 2px');

	}