function reemplazarLetras() {
    
    textoOriginal = document.getElementById("texto").value;

    // Verificar si textoOriginal es una cadena no vacía
    if (typeof textoOriginal === 'string' && textoOriginal.trim() !== '') {
        // Verificar si no hay letras mayúsculas en el texto
        if (![...textoOriginal].some(char => /[A-Z]/.test(char))) {
            var mapaReemplazo = {
                'a': 'ai',
                'e': 'enter',
                'i': 'imes',
                'o': 'ober',
                'u': 'ufat',
            };

            let textoModificado = textoOriginal.replace(/[aeiou]/gi, function (letra) {
                return mapaReemplazo.hasOwnProperty(letra.toLowerCase()) ? mapaReemplazo[letra.toLowerCase()] : letra;
            });

            // Asignar el texto modificado al elemento "resultado"
            document.getElementById("resultado2").value = textoModificado;
            document.getElementById("texto").value = '';
            document.getElementById("errorMensaje").innerText = ''; // Limpiar el mensaje de error
        } else {
            // Mostrar un mensaje de error si hay al menos una letra mayúscula
            var marcadorOriginal = document.getElementsByName("resultado2")[0].placeholder;

            // Establecer un nuevo marcador de posición
            document.getElementsByName("resultado2")[0].placeholder = /[A-Z]/.test(textoOriginal) ? "No debe contener mayúsculas." : "El texto ingresado no es válido.";

            // Después de 3000 milisegundos (3 segundos), volver al marcador de posición original
            setTimeout(function () {
                document.getElementsByName("resultado2")[0].placeholder = marcadorOriginal;
                document.getElementById("errorMensaje").innerText = ''; // Limpiar el mensaje de error
            }, 2000);
        }
    } else {
        // Mostrar un mensaje de error si la cadena está vacía
        var marcadorOriginal = document.getElementsByName("texto")[0].placeholder;

        // Establecer un nuevo marcador de posición
        document.getElementsByName("texto")[0].placeholder = "El texto ingresado no es válido.";

        // Después de 3000 milisegundos (3 segundos), volver al marcador de posición original
        setTimeout(function () {
            document.getElementsByName("texto")[0].placeholder = marcadorOriginal;
            document.getElementById("errorMensaje").innerText = ''; // Limpiar el mensaje de error
        }, 6000);
    }

    reiniciarEstado();
}


function reemplazarLetras2() {
    textoOriginal2 = document.getElementById("resultado2").value;

    // Verificar si textoOriginal2 es una cadena no vacía
    if (typeof textoOriginal2 === 'string' && textoOriginal2.trim() !== '') {
        // Verificar si no hay letras mayúsculas en el texto
        if (!/[A-Z]/.test(textoOriginal2)) {
            var mapaReemplazo2 = {
                'ai': 'a',
                'enter': 'e',
                'imes': 'i',
                'ober': 'o',
                'ufat': 'u',
            };

            let textoModificado2 = textoOriginal2.replace(/(ai|enter|imes|ober|ufat)/gi, function (match) {
                return mapaReemplazo2.hasOwnProperty(match.toLowerCase()) ? mapaReemplazo2[match.toLowerCase()] : match;
            });

            // Asignar el texto modificado al elemento "texto"
            document.getElementById("texto").value = textoModificado2;
            document.getElementById("resultado2").value = '';
            document.getElementById("errorMensaje").innerText = ''; // Limpiar el mensaje de error
        } else {
            // Mostrar un mensaje de error si hay al menos una letra mayúscula
            var marcadorOriginal = document.getElementsByName("texto")[0].placeholder;

            // Establecer un nuevo marcador de posición
            document.getElementsByName("texto")[0].placeholder = /[A-Z]/.test(textoOriginal2) ? "No debe contener mayúsculas." : "El texto ingresado no es válido.";

            // Después de 2000 milisegundos (2 segundos), volver al marcador de posición original
            setTimeout(function () {
                document.getElementsByName("texto")[0].placeholder = marcadorOriginal;
                document.getElementById("errorMensaje").innerText = ''; // Limpiar el mensaje de error
            }, 2000);
        }
    } else {
        // Mostrar un mensaje de error si la cadena está vacía
        var marcadorOriginal = document.getElementsByName("resultado2")[0].placeholder;

        // Establecer un nuevo marcador de posición
        document.getElementsByName("resultado2")[0].placeholder = "El texto ingresado no es válido.";

        // Después de 2000 milisegundos (2 segundos), volver al marcador de posición original
        setTimeout(function () {
            document.getElementsByName("resultado2")[0].placeholder = marcadorOriginal;
            document.getElementById("errorMensaje").innerText = ''; // Limpiar el mensaje de error
        }, 2000);
    }
    reiniciarEstado2();
}



function copiarTexto1() {
    var checkbox = document.getElementById("checkboxCopiar1");
    var textoCaja = document.getElementById("texto");

    if (checkbox.checked) {
        // Seleccionar el texto en la caja
        textoCaja.select();
        textoCaja.setSelectionRange(0, 99999); // Para dispositivos móviles

        try {
            // Copiar al portapapeles utilizando la API del portapapeles
            navigator.clipboard.writeText(textoCaja.value)
                .then(() => {
                    console.log("Texto copiado al portapapeles.");

                    // Desactivar el checkbox después de 3 segundos
                    setTimeout(function () {
                        checkbox.checked = false;
                    }, 3000);
                })
                .catch((err) => {
                    console.error("Error al copiar al portapapeles:", err);
                });
        } catch (err) {
            console.error("Error al acceder a la API del portapapeles:", err);
        }

        // Deseleccionar el texto
        window.getSelection().removeAllRanges();
    }
}

function copiarTexto2() {
    var checkbox = document.getElementById("checkboxCopiar2");
    var textoCaja = document.getElementById("resultado2");

    if (checkbox.checked) {
        // Seleccionar el texto en la caja
        textoCaja.select();
        textoCaja.setSelectionRange(0, 99999); // Para dispositivos móviles

        try {
            // Copiar al portapapeles utilizando la API del portapapeles
            navigator.clipboard.writeText(textoCaja.value)
                .then(() => {
                    console.log("Texto copiado al portapapeles.");

                    // Desactivar el checkbox después de 3 segundos
                    setTimeout(function () {
                        checkbox.checked = false;
                    }, 3000);
                })
                .catch((err) => {
                    console.error("Error al copiar al portapapeles:", err);
                });
        } catch (err) {
            console.error("Error al acceder a la API del portapapeles:", err);
        }

        // Deseleccionar el texto
        window.getSelection().removeAllRanges();
    }
}

function reiniciarEstado() {
    // Limpiar los campos de texto
    document.getElementById("texto").value = '';
    document.getElementById("resultado2").value = '';
}

function reiniciarEstado2() {
    // Limpiar los campos de texto
    document.getElementById("texto").value = '';
    document.getElementById("resultado2").value = '';
}
