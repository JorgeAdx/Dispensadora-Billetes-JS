console.log ("Este programa es una dispensadora de billetes");                      // AUTOR: JORGEADX

function dispensarBilletes(cantidadARetirar) {                                      // Función principal para la dispensadora de billetes      
    const denominaciones = [1000, 500, 200, 100, 50, 20];                           // Declara todos los valores de los billetes $
    let inventario = {                                                              // Se declara cada denominación junto con la cantidad de billetes disponibles
        1000: 10,
        500: 10,
        200: 10,
        100: 10,
        50: 10,
        20: 10
    };

    let entrega = {};                                                               // Se declara objeto con el que se hará la entrega
    let cambioRestante = cantidadARetirar;                                          // Se inicializa la variable

    for (let i = 0; i < denominaciones.length; i++) {                               // Bucle para iterar sobre todas las denominaciones de billetes
        let valor = denominaciones[i];                                              // Var. Que obtiene el valor del billete actual, desde elemento 0 hasta n
        let billetesDisponibles = inventario[valor];                                // Var. Que consulta cantidad de billetes de denominación específica
        let cantidadNecesaria = Math.floor(cambioRestante / valor);                 // Var. Que calcula cantidad de billetes necesarios para dar el cambio, asegurándose redondear al entero inferior
        let cantidadAEntregar = Math.min(billetesDisponibles, cantidadNecesaria);   // Var. Que calcula la cantidad real de billetes a entregar consultando con el inventario y sin entregar de más     

        if (cantidadAEntregar > 0) {                                                // Evalúa si aún se necesita tomar más billetes del inventario o no para dispensar
            entrega[valor] = cantidadAEntregar;                                     // Se asigna la cantidad de billetes a entregar
            cambioRestante -= cantidadAEntregar * valor;                            // Actualiza el cambio por entregar
        }
    }

    if (cambioRestante === 0) {                                                     // Evalúa si se pudo completar el dinero a entregar o no 
        console.log("Billetes entregados:");
        for (let valor in entrega) {                                                // Recorre el objeto anteriormente vacío para imprimir los billetes que se dispensarán           
            console.log(`$${valor}: ${entrega[valor]} billetes`);
        }
    } else {
        console.log("No hay combinación suficiente para dispensar ese monto.");     // Cuando no es posible dispensar billetes, imprime mensaje en pantalla
    }
}

dispensarBilletes(18200);                                                           // (EDITAR) Realiza la función de dispensadora para la cantidad entre paréntesis