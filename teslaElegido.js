/****************** Con sessionStorage se muestra los días escogidos y el coste a pagar por los días escogidos *********************/

const dias = document.querySelector(".precio__dia span");//Seleccionamos la clase precio__dia y cogemos su span
dias.innerHTML = sessionStorage.getItem("diasReservados");//Muestra mientras estes en la sesión (true) seguirá existiendo el valor del día reservado

const precioDia = document.querySelector(".precio__dia__tesla-especifico span");//Seleccionamos la clase precio__dia__tesla-específico y cogemos su span

precioDia.innerHTML = parseInt(precioDia.innerHTML) * parseInt(dias.textContent);//multiplicamos el valor de cada día del tesla por los días escogidos


const diasTesla = document.querySelector(".contenedor__desglose__total__final__precio-parrafoDia span");//Seleccionamos la clase precio__dia y cogemos su span
diasTesla.innerHTML = sessionStorage.getItem("diasReservados");//Muestra mientras estes en la sesión (true) seguirá existiendo el valor del día reservado

const precioDiaTesla = document.querySelector(".contenedor__desglose__total__final__precio-parrafo span");//Seleccionamos la clase precio__dia__tesla-específico y cogemos su span

precioDiaTesla.innerHTML = parseInt(precioDiaTesla.innerHTML) * parseInt(diasTesla.textContent);//multiplicamos el valor de cada día del tesla por los días escogidos



/**************************************CONTACTO Y CONTACTANOS OCULTO*******************************************/

document.querySelector(".contactos__solicitado").addEventListener("click", ()=>{//EL DEL NAV CONTACTA

    document.querySelector(".contenedor__contacto__contactanos").style.display = "block";
    document.querySelector("nav").style.opacity = "0.2";
    document.querySelector(".contenedor__eleccion").style.opacity = "0.2";
    document.querySelector(".contenedor__caja__vehiculos__tesla").style.opacity = "0.2";
    document.querySelector(".contenedor__inluido").style.opacity = "0.2";
    document.querySelector(".contenedor__inluido__cancelacion").style.opacity = "0.2";
    document.querySelector(".contenedor__inluido__muy").style.opacity = "0.2";
    document.querySelector(".contenedor__inluido__muyBuena").style.opacity = "0.2";
    document.querySelector(".contenedor__caja__contactanos").style.opacity = "0.2";
    document.querySelector(".contenedor__desglose").style.opacity = "0.2";
    document.querySelector(".contenedor__desglose__total").style.opacity = "0.2";
    document.querySelector(".contenedor__contacto__conocernos").style.opacity = "0.2";
    document.querySelector(".contenedor__desglose__total__final").style.opacity = "0.2";
    document.querySelector(".footer__informacion").style.opacity = "0.2";
})
document.querySelector(".boton__contáctanos").addEventListener("click", ()=>{//EL DEL CONTÁCTANOS

    document.querySelector(".contenedor__contacto__contactanos").style.display = "block";
    document.querySelector("nav").style.opacity = "0.2";
    document.querySelector(".contenedor__eleccion").style.opacity = "0.2";
    document.querySelector(".contenedor__caja__vehiculos__tesla").style.opacity = "0.2";
    document.querySelector(".contenedor__inluido").style.opacity = "0.2";
    document.querySelector(".contenedor__inluido__cancelacion").style.opacity = "0.2";
    document.querySelector(".contenedor__inluido__muy").style.opacity = "0.2";
    document.querySelector(".contenedor__inluido__muyBuena").style.opacity = "0.2";
    document.querySelector(".contenedor__caja__contactanos").style.opacity = "0.2";
    document.querySelector(".contenedor__desglose").style.opacity = "0.2";
    document.querySelector(".contenedor__desglose__total").style.opacity = "0.2";
    document.querySelector(".contenedor__contacto__conocernos").style.opacity = "0.2";
    document.querySelector(".contenedor__desglose__total__final").style.opacity = "0.2";
    document.querySelector(".footer__informacion").style.opacity = "0.2";

    document.querySelector(".contenedor__contacto__contactanos").style.top = "2400px";
})


/******************************** FORMULARIO ********************************/
const form = document.getElementById('form');
const inputs1 = document.querySelectorAll('#form input');//Selecciona todos los formulario con cada input


const expresiones = {
    /*Datos del conductor principal*/
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //hasta 40 carácteres
	telefono: /^\d{9}$/,//9 dígitos
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

const campos = {//si el campo está valido o no. por defecto siempre está false.
    /*Datos del conductor principal*/
    nombre: false,
	telefono: false,
    email: false,
}

const validarFormulario = (e) => {//Función que se ejecuta cada vez que el usuario teclea en un input
	switch (e.target.name) {//el nommbre del input sea nombreTarjeta o numeroTarjeta o fechaCaducidad o cvc o...
		/*Datos del conductor principal*/
        case "nombre":
			validarCampo1(expresiones.nombre, e.target, 'nombre');//Llama a la función validarCampo y le pasa los 3 parámetros
		break;
		case "telefono":
			validarCampo1(expresiones.telefono, e.target, 'telefono');
		break;
        case "email":
			validarCampo1(expresiones.email, e.target, 'email');
		break;
	}
}

const imageCheck = document.createElement('img');
imageCheck.src  = 'images/check.svg';

const imageError = document.createElement('img');
imageError.src  = 'images/icono-error.svg';


const validarCampo1 = (expresion, input1, campo1) => {//Parámetros de entrada: expresion, input, campo1
	if(expresion.test(input1.value)){//si la expresión regular del input (nombreTarjeta o...) es true entonces ejecuta 
		document.getElementById(`grupo__${campo1}`).classList.remove('form__grupo-incorrecto');//elimina la clase
		document.getElementById(`grupo__${campo1}`).classList.add('form__grupo-correcto');//añade la clase
		document.querySelector(`#grupo__${campo1} img`).insertAdjacentHTML("afterend",`<img src=${imageCheck.src} class="form__validacion-estado">`);
		document.querySelector(`#grupo__${campo1} img`).remove("afterend",`<img src=${imageError.src}class="form__validacion-estado">`);
		document.querySelector(`#grupo__${campo1} .form__input-error`).classList.remove('form__input-error-activo');//Elimina la clase del error
		campos[campo1] = true;//el campo es igual = true
	} else {
		document.getElementById(`grupo__${campo1}`).classList.add('form__grupo-incorrecto');
		document.getElementById(`grupo__${campo1}`).classList.remove('form__grupo-correcto');
		document.querySelector(`#grupo__${campo1} img`).insertAdjacentHTML("afterend",`<img src=${imageError.src} class="form__validacion-estado">`);
		document.querySelector(`#grupo__${campo1} img`).remove("afterend",`<img src=${imageCheck.src}class="form__validacion-estado">`);
		document.querySelector(`#grupo__${campo1} .form__input-error`).classList.add('form__input-error-activo');//Añade (mensaje) la clase del error
		campos[campo1] = false;//el campo no es igual = false
	}
}



inputs1.forEach((input1) => {//Ejecuta todos los input que tenemos
	input1.addEventListener('keyup', validarFormulario);//Para cada input se aplica un evento de escucha y keyup es un evento de tecla arriba (el usuario deja de pulsar una tecla)
	input1.addEventListener('blur', validarFormulario);//blur es cuando un elemenot ha perdido su foco
});



form.addEventListener('submit', (e) => {//el boton de enviar ejecutará siempre y cuando (if) todos los campos esten correctos
	e.preventDefault();//No deja que el enlace se abra

    const terminos = document.getElementById('terminos');//también tiene en cuenta terminos
	if(campos.nombre && campos.telefono && campos.email && terminos.checked){
		form.reset();//Reinicia todos los campos formulario
 
		document.querySelectorAll('.form__grupo-correcto').forEach((icono) => {
			//icono.classList.remove('form__grupo-correcto');
			const boton = document.querySelector('#form button');//Selecciona todos los formulario con cada input
			boton.style.backgroundColor = "#008000";//El fondo del boton en color verde
			boton.style.borderColor = "#008000";//El borde del boton en color verde
			setTimeout(()=>{
				boton.style.backgroundColor = "#0247FE";//Lo vuelve a dejar en azul a los 2 segundos
				boton.style.borderColor = "#0247FE";//Lo vuelve a dejar en azul el borde a los 2 segundos
				icono.classList.remove('form__grupo-correcto');//Elimina el icono (tick verde) a los 2 segundos
			},2000);

		});

	} else {//si todos los campos no son correctos
		const boton = document.querySelector('#form button');//Selecciona todos los formulario con cada input
        boton.style.backgroundColor = "red";
		boton.style.borderColor = "red";//El borde del boton en color rojo
		
        setTimeout(()=>{
            boton.style.backgroundColor = "#0247FE";//Lo vuelve a dejar en azul a los 2 segundos
			boton.style.borderColor = "#0247FE";//Lo vuelve a dejar en azul el borde a los 2 segundos
        },2000);
    }
});
