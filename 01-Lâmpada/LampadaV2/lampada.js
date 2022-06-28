const unico = document.getElementById('unico');
const lamp = document.getElementById('lamp');


function lampOnOff () {
	
	if (unico.textContent == 'Ligar') {
		
		lampOn ();		

	} else if (unico.textContent == 'Desligar' ) {
		
		lampOff ();	

	}else if (unico.textContent == 'Consertar') {
		
		lamp.src = './img/desligada.jpg';
		unico.textContent = 'Ligar'

	}
}


function lampOn () {
	
	if (!isLampBroken ()) {

		lamp.src = './img/ligada.jpg';
		unico.textContent = 'Desligar'
	}
	
}

function lampOff () {
	
if (!isLampBroken ()) {
		
		lamp.src = './img/desligada.jpg';
		unico.textContent = 'Ligar'
	}
	
}

function lampQuebrada () {
	lamp.src = './img/quebrada.jpg';
	unico.textContent = 'Consertar'
}

function isLampBroken () {
	return lamp.src.indexOf ('quebrada') > -1
}

unico.addEventListener ('click', lampOnOff);

lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampQuebrada);