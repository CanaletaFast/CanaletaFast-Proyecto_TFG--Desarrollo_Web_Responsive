/*Datos del conductor principal*/
const form = document.getElementById('form');
const inputs1 = document.querySelectorAll('#form input');//Selecciona todos los formulario con cada input

/*Forma de pago*/
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');//Selecciona todos los formulario con cada input

const expresiones = {
    /*Datos del conductor principal*/
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //hasta 40 carácteres
	apellidos: /^[A-Za-z]{3,50} [A-Za-z]{3,70}$/,//3 letras hasta 50 espacio 3 letras hasta 70
	dni: /^\d{8}[a-zA-Z]$/,//8 dígitos y una letra
	telefono: /^\d{9}$/,//9 dígitos
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    /*Forma de pago*/
	nombreTarjeta: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //hasta 40 carácteres
	numeroTarjeta: /^\d{4}\s-?\d{4}\s-?\d{4}\s-?\d{4}$/,// 4 + 4 + 4 + 4 = 16 dígitos
	fechaCaducidad: /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])$/,// Més y año 
	cvc: /^\d{3}$/,//3 dígitos
}

const campos = {//si el campo está valido o no. por defecto siempre está false.
    /*Datos del conductor principal*/
    nombre: false,
	apellidos: false,
	dni: false,
	telefono: false,
    email: false,

    /*Forma de pago*/
	nombreTarjeta: false,
	numeroTarjeta: false,
	fechaCaducidad: false,
	cvc: false,
}

/*Forma de pago*/
const validarFormulario = (e) => {//Función que se ejecuta cada vez que el usuario teclea en un input
	switch (e.target.name) {//el nommbre del input sea nombreTarjeta o numeroTarjeta o fechaCaducidad o cvc o...
		/*Datos del conductor principal*/
        case "nombre":
			validarCampo1(expresiones.nombre, e.target, 'nombre');//Llama a la función validarCampo y le pasa los 3 parámetros
		break;
		case "apellidos":
			validarCampo1(expresiones.apellidos, e.target, 'apellidos');
		break;
		case "dni":
			validarCampo1(expresiones.dni, e.target, 'dni');
		break;
		case "telefono":
			validarCampo1(expresiones.telefono, e.target, 'telefono');
		break;
        case "email":
			validarCampo1(expresiones.email, e.target, 'email');
		break;

        /*Forma de pago*/
        case "nombreTarjeta":
			validarCampo(expresiones.nombreTarjeta, e.target, 'nombreTarjeta');//Llama a la función validarCampo y le pasa los 3 parámetros
		break;
		case "numeroTarjeta":
			validarCampo(expresiones.numeroTarjeta, e.target, 'numeroTarjeta');
		break;
		case "fechaCaducidad":
			validarCampo(expresiones.fechaCaducidad, e.target, 'fechaCaducidad');
		break;
		case "cvc":
			validarCampo(expresiones.cvc, e.target, 'cvc');
		break;
	}
}

const imageCheck = document.createElement('img');
imageCheck.src  = 'images/check.svg';

const imageError = document.createElement('img');
imageError.src  = 'images/icono-error.svg';

/*Datos del conductor principal*/
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

/*Forma de pago*/
const validarCampo = (expresion, input, campo) => {//Parámetros de entrada: expresion, input, campo
	if(expresion.test(input.value)){//si la expresión regular del input (nombreTarjeta o...) es true entonces ejecuta 
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');//elimina la clase
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');//añade la clase
		document.querySelector(`#grupo__${campo} img`).insertAdjacentHTML("afterend",`<img src=${imageCheck.src} class="formulario__validacion-estado">`);
		document.querySelector(`#grupo__${campo} img`).remove("afterend",`<img src=${imageError.src}class="formulario__validacion-estado">`);
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');//Elimina la clase del error
		campos[campo] = true;//el campo es igual = true
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} img`).insertAdjacentHTML("afterend",`<img src=${imageError.src} class="formulario__validacion-estado">`);
		document.querySelector(`#grupo__${campo} img`).remove("afterend",`<img src=${imageCheck.src}class="formulario__validacion-estado">`);
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');//Añade (mensaje) la clase del error
		campos[campo] = false;//el campo no es igual = false
	}
}

/*Datos del conductor principal*/
inputs1.forEach((input1) => {//Ejecuta todos los input que tenemos
	input1.addEventListener('keyup', validarFormulario);//Para cada input se aplica un evento de escucha y keyup es un evento de tecla arriba (el usuario deja de pulsar una tecla)
	input1.addEventListener('blur', validarFormulario);//blur es cuando un elemenot ha perdido su foco
});
/*Forma de pago*/
inputs.forEach((input) => {//Ejecuta todos los input que tenemos
	input.addEventListener('keyup', validarFormulario);//Para cada input se aplica un evento de escucha y keyup es un evento de tecla arriba (el usuario deja de pulsar una tecla)
	input.addEventListener('blur', validarFormulario);//blur es cuando un elemenot ha perdido su foco
});


/*Datos del conductor principal*/
form.addEventListener('submit', (e) => {//el boton de enviar ejecutará siempre y cuando (if) todos los campos esten correctos
	e.preventDefault();//No deja que el enlace se abra

    const terminos = document.getElementById('terminos');//también tiene en cuenta terminos
	if(campos.nombre && campos.apellidos && campos.dni && campos.telefono && campos.email && terminos.checked){
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

/*Forma de pago*/
formulario.addEventListener('submit', (e) => {//el boton de enviar ejecutará siempre y cuando (if) todos los campos esten correctos
	
	if(campos.nombreTarjeta && campos.numeroTarjeta && campos.fechaCaducidad && campos.cvc){
		formulario.reset();//Reinicia todos los campos formulario
		
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});

	} else {//si todos los campos no son correctos
		e.preventDefault();//No deja que el enlace se abra
        const boton = document.querySelector('#formulario button');//Selecciona todos los formulario con cada input
        boton.style.backgroundColor = "red";
        setTimeout(()=>{
            boton.style.backgroundColor = "#0247FE";
        },2000);
	}
});

/****************** Con sessionStorage se muestra los días escogidos y el coste a pagar por los días escogidos *********************/

const dias = document.querySelector(".precio__dia span");//Seleccionamos la clase precio__dia y cogemos su span
dias.innerHTML = sessionStorage.getItem("diasReservados");//Muestra mientras estes en la sesión (true) seguirá existiendo el valor del día reservado

const precioDia = document.querySelector(".precio__dia__zero-especifico span");//Seleccionamos la clase precio__dia__zero-específico y cogemos su span

precioDia.innerHTML = parseInt(precioDia.innerHTML) * parseInt(dias.textContent);//multiplicamos el valor de cada día del zero por los días escogidos


const diasZero = document.querySelector(".contenedor__desglose__total__final__precio-parrafoDia span");//Seleccionamos la clase precio__dia y cogemos su span
diasZero.innerHTML = sessionStorage.getItem("diasReservados");//Muestra mientras estes en la sesión (true) seguirá existiendo el valor del día reservado

const precioDiaZero = document.querySelector(".contenedor__desglose__total__final__precio-parrafo span");//Seleccionamos la clase precio__dia__zero-específico y cogemos su span

precioDiaZero.innerHTML = parseInt(precioDiaZero.innerHTML) * parseInt(diasZero.textContent);//multiplicamos el valor de cada día del zero por los días escogidos

/**************************************CONTACTO Y CONTACTANOS OCULTO*******************************************/

document.querySelector(".contactos__solicitado").addEventListener("click", ()=>{//EL DEL NAV CONTACTA

    document.querySelector(".contenedor__contacto__contactanos").style.display = "block";
    document.querySelector("nav").style.opacity = "0.2";
    document.querySelector(".contenedor__eleccion").style.opacity = "0.2";
    document.querySelector(".contenedor__caja__vehiculos__Zero").style.opacity = "0.2";
    document.querySelector(".contenedor-form").style.opacity = "0.2";
	document.querySelector(".contenedor-form-tarjeta").style.opacity = "0.2";
    document.querySelector(".contenedor__caja__contactanos").style.opacity = "0.2";
    document.querySelector(".contenedor__contacto__conocernos").style.opacity = "0.2";
    document.querySelector(".footer__informacion").style.opacity = "0.2";
})
document.querySelector(".boton__contáctanos").addEventListener("click", ()=>{//EL DEL CONTÁCTANOS

    document.querySelector(".contenedor__contacto__contactanos").style.display = "block";
    document.querySelector("nav").style.opacity = "0.2";
    document.querySelector(".contenedor__eleccion").style.opacity = "0.2";
    document.querySelector(".contenedor__caja__vehiculos__Zero").style.opacity = "0.2";
    document.querySelector(".contenedor-form").style.opacity = "0.2";
	document.querySelector(".contenedor-form-tarjeta").style.opacity = "0.2";
	
    document.querySelector(".contenedor__caja__contactanos").style.opacity = "0.2";
    document.querySelector(".contenedor__contacto__conocernos").style.opacity = "0.2";
    document.querySelector(".footer__informacion").style.opacity = "0.2";

    document.querySelector(".contenedor__contacto__contactanos").style.top = "3600px";
})


/******************************** FORMULARIO ********************************/
const form1 = document.getElementById('form');
const inputs11 = document.querySelectorAll('#form input');//Selecciona todos los formulario con cada input


const expresiones1 = {
    /*Datos del conductor principal*/
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //hasta 40 carácteres
	telefono: /^\d{9}$/,//9 dígitos
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

const campos1 = {//si el campo está valido o no. por defecto siempre está false.
    /*Datos del conductor principal*/
    nombre: false,
	telefono: false,
    email: false,
}

const validarFormulario1 = (e) => {//Función que se ejecuta cada vez que el usuario teclea en un input
	switch (e.target.name) {//el nommbre del input sea nombreTarjeta o numeroTarjeta o fechaCaducidad o cvc o...
		/*Datos del conductor principal*/
        case "nombre":
			validarCampo11(expresiones1.nombre, e.target, 'nombre');//Llama a la función validarCampo y le pasa los 3 parámetros
		break;
		case "telefono":
			validarCampo11(expresiones1.telefono, e.target, 'telefono');
		break;
        case "email":
			validarCampo11(expresiones1.email, e.target, 'email');
		break;
	}
}

const imageCheck1 = document.createElement('img');
imageCheck1.src  = 'images/check.svg';

const imageError1 = document.createElement('img');
imageError1.src  = 'images/icono-error.svg';


const validarCampo11 = (expresion, input1, campo1) => {//Parámetros de entrada: expresion, input, campo1
	if(expresion.test(input1.value)){//si la expresión regular del input (nombreTarjeta o...) es true entonces ejecuta 
		document.getElementById(`grupo__${campo1}`).classList.remove('form__grupo-incorrecto');//elimina la clase
		document.getElementById(`grupo__${campo1}`).classList.add('form__grupo-correcto');//añade la clase
		document.querySelector(`#grupo__${campo1} img`).insertAdjacentHTML("afterend",`<img src=${imageCheck1.src} class="form__validacion-estado">`);
		document.querySelector(`#grupo__${campo1} img`).remove("afterend",`<img src=${imageError1.src}class="form__validacion-estado">`);
		document.querySelector(`#grupo__${campo1} .form__input-error`).classList.remove('form__input-error-activo');//Elimina la clase del error
		campos1[campo1] = true;//el campo es igual = true
	} else {
		document.getElementById(`grupo__${campo1}`).classList.add('form__grupo-incorrecto');
		document.getElementById(`grupo__${campo1}`).classList.remove('form__grupo-correcto');
		document.querySelector(`#grupo__${campo1} img`).insertAdjacentHTML("afterend",`<img src=${imageError1.src} class="form__validacion-estado">`);
		document.querySelector(`#grupo__${campo1} img`).remove("afterend",`<img src=${imageCheck1.src}class="form__validacion-estado">`);
		document.querySelector(`#grupo__${campo1} .form__input-error`).classList.add('form__input-error-activo');//Añade (mensaje) la clase del error
		campos1[campo1] = false;//el campo no es igual = false
	}
}



inputs11.forEach((input1) => {//Ejecuta todos los input que tenemos
	input1.addEventListener('keyup', validarFormulario1);//Para cada input se aplica un evento de escucha y keyup es un evento de tecla arriba (el usuario deja de pulsar una tecla)
	input1.addEventListener('blur', validarFormulario1);//blur es cuando un elemenot ha perdido su foco
});

// QUITANDO EL 25/03/2023!!!!!!!!!!!!!!!!!!!!!!!!!

// form.addEventListener('submit', (e) => {//el boton de enviar ejecutará siempre y cuando (if) todos los campos esten correctos
// 	e.preventDefault();

//     const terminos = document.getElementById('terminos');//también tiene en cuenta terminos
// 	if(campos1.nombre && campos1.telefono && campos1.email && terminos.checked){
// 		form.reset();//Reinicia todos los campos formulario
 
// 		document.querySelectorAll('.form__grupo-correcto').forEach((icono) => {
// 			icono.classList.remove('form__grupo-correcto');
// 		});

// 	} else {//si todos los campos no son correctos
//         const boton = document.querySelector('#form button');//Selecciona todos los formulario con cada input
//         boton.style.backgroundColor = "red";
//         setTimeout(()=>{
//             boton.style.backgroundColor = "#0247FE";
//         },2000);
//     }
// });
