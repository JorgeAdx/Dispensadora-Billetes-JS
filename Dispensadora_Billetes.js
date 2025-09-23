console.log ("Este programa es una dispensadora de billetes y monedas");            // AUTOR: JORGEADX

    const denominaciones = [1000, 500, 200, 100, 50, 20, 10, 5];                    // Declara todos los valores de los billetes y monedas $
    let inventario = {                                                              // Se declara cada denominación junto con la cantidad de billetes y monedas disponibles
        1000: 10,
        500: 10,
        200: 10,
        100: 10,
        50: 10,
        20: 10,
        10: 10,
        5: 10,       
    };                                                                              // Ahora el inventario se encuentra en alcance global para que se actualice automáticamente por cada retiro


function dispensarBilletes(cantidadARetirar) {                                      // Función principal para la dispensadora de billetes      

    let entrega = {};                                                               // Se declara objeto con el que se hará la entrega
    let cambioRestante = cantidadARetirar;                                          // Se inicializa la variable

    if (cantidadARetirar < 100){                                                    // Se utiliza condicional para que los retiros funcionen a partir de $100
        console.log ("El monto mínimo para realizar retiros es de $100");
        return;                                                                     // Finaliza el proceso dentro de la función
    }
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
        console.log("\nBilletes entregados:");                                      // Imprime mensaje en pantalla y da salto de línea
        for (let valor in entrega) {                                                // Recorre el objeto anteriormente vacío para imprimir los billetes que se dispensarán           

            
            let cantidadEntregada = entrega[valor];
            let tipoBOM = valor >= 20 ? "billete" : "moneda";                       // Var. Para definir si se entregarán billetes o monedas
            let tipoUnoOMas = cantidadEntregada > 1 ? tipoBOM + "s" : tipoBOM;      // Var. Para definir si se trata de uno o más elementos al imprimir en pantalla
            console.log(`$${valor}: ${cantidadEntregada} ${tipoUnoOMas}`);          // Muestra la cantidad de efectivo dispensado, junto con el monto de cada elemento y si son billetes o monedas
            inventario[valor] -= cantidadEntregada;                                 // Proceso que actualiza el inventario
        }
    } else {
        console.log("\nNo hay combinación suficiente para dispensar ese monto.");   // Cuando no es posible dispensar billetes, imprime mensaje en pantalla y da salto de línea
    }
}

dispensarBilletes(18050);                                                           // (EDITAR) Realiza la función de dispensadora para la cantidad entre paréntesis
dispensarBilletes(275);                                                             // (EDITAR) Ahora se pueden realizar más retiros si aún hay efectivo disponible
dispensarBilletes(1000); 
