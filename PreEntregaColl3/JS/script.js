let inicio

    if (inicio = confirm("TU AVENTURA POKEMON.\n ¿Estas listo?")){
        alert("¡Vamos a comenzar!")
    }else {
        alert("¡No le temas!")
    } 

alert("A través de praderas extensas y montañas imponentes, se despliega un mundo donde la aventura aguarda en cada esquina. POKEMON y entrenadores se preparan para desafiar lo desconocido y alcanzar la grandeza.")

//Validación nombre de usuario
function validarNombre(nombre) {
    if (nombre === null) {
        return "null";
    } else if (!isNaN(nombre)) {
        return "numero";
    } else if (nombre.length < 3) {
        return "corto";
    } else {
        return "valido";
    }
}

let nombre;
let resultado;

do {
    nombre = prompt("Dime, pequeño futuro entrenador, ¿cómo te llamas?");
    resultado = validarNombre(nombre);

    switch (resultado) {
        case "null":
            alert("Por lo que veo, no has ingresado ningún nombre");
            break;
        case "numero":
            alert("Un nombre no tiene números");
            break;
        case "corto":
            alert("Tu nombre debe tener 3 letas como mínimo");
            break;
        default:
            break;
    }
} while (resultado !== "valido");

let entrenador = nombre.toUpperCase()

alert("¡Saludos " + entrenador + "! Soy el profesor Oak.");
console.log("Nombre = " + entrenador)


alert("Prof Oak: ¡Este mundo está habitado por unas criaturas llamadas POKEMON! Para algunos, los POKEMON son mascotas. Pero otros los usan para pelear. En cuanto a mí... Estudio a los POKEMON como profesión. Pero tú, tu eres un futuro entrenador, ¿estas listo para tu aventura?")

//Validación nombre de pokemon
let pokebola = prompt("Porf Oak: Para enfrentarte a tus oponentes debes tener un POKEMON, vamos a encontrarte uno, para ello selecciona una de las siguientes pokebolas. (Ingresa el numero correspondiente)\n\n 1-Pokebola\n 2-Pokebola\n 3-Pokebola")

switch (pokebola){
    case "1":
        for (i=3; i>=1; i--)
                alert(i + "...")
                    alert("¡Felicitaciones! " + entrenador + " has conseguido a CHARMANDER")
                    console.log("CHARMANDER")
        break;
    case "2":
        for (i=3; i>=1; i--)
                alert(i + "...")
                    alert("¡Felicitaciones! " + entrenador + " has conseguido a SQUIRTLE")
                    console.log("SQUIRTLE")
        break;
    case "3":
        for (i=3; i>=1; i--)
                alert(i + "...")
                    alert("¡Felicitaciones! " + entrenador + " has conseguido a BULBASAUR")
                    console.log("BULBASAUR")
        break;
        default:
            alert("Número incorrecto, por favor, seleccióna del 1 al 3")
            break;
}
alert("Prof Oak: Ahora sal a la aventura y conviertete en el mejor entrenador de POKEMON")

//POKEDEX (utilización de objetos, funciones y métodos)
alert("Prof Oak: AH!, se me olvidaba " + entrenador + ", ten esto, es una POKEDEX, cuando te encuentres con un pokemon salvaje o de un entrenador, puedes escanearlo para que te diga su nombre y cualidades. Ahora si estas listo para salir y explorar todo Kanto")

// Array con nombres e infomación sobre pokemons randoms
const pokemons = [
    {nombre: "Eevee", tipo: "Normal", fuerza: 55, defensa: 50, evolucion: 1, fuerte: "", debil: "Lucha"},
    {nombre: "Gengar", tipo: "Veneno", fuerza: 63, defensa: 60, evolucion: 3, fuerte: "Psíquico", debil: "Tierra"},
    {nombre: "Toxapex", tipo: "Veneno", fuerza: 75, defensa: 50, evolucion: 2, fuerte: "Psíquico", debil: "Tierra"},
    {nombre: "Dragonite", tipo: "Dragón", fuerza: 134, defensa: 95, evolucion: 3, fuerte: "Hierba, Lucha", debil: "Hielo, Roca"},
    {nombre: "Lucario", tipo: "Lucha", fuerza: 110, defensa: 70, evolucion: 2, fuerte: "Hielo, 'Roca", debil: "Fuego, Lucha, Tierra"},
    {nombre: "Gardervoir", tipo: "Psíquico", fuerza: 85, defensa: 65, evolucion: 3, fuerte: "Lucha", debil: "Veneno, Acero"},
    {nombre: "Alakazam", tipo: "Psíquico", fuerza: 120, defensa: 45, evolucion: 3, fuerte: "Lucha, Veneno", debil: "Bicho, Fantasma"},
    {nombre: "Charmander", tipo: "Fuego", fuerza: 85, defensa: 43, evolucion: 1, fuerte: "Hierba, Hielo, Bicho, Acero", debil: "Agua, Roca, Tierra"},
    {nombre: "Bulbasaur", tipo: "Planta", fuerza: 65, defensa: 49, evolucion: 1, fuerte: "Agua, Tierra, Roca", debil: "Fuego, Hielo, Volador, Psíquico"},
    {nombre: "Squirtle", tipo: "Agua", fuerza: 60, defensa: 65, evolucion: 1, fuerte: "Fuego, Tierra, Roca", debil: "Eléctrico, Planta"},
];

const tipo = [
    {tipo: "Normal"},
    {tipo: "Veneno"},
    {tipo: "Dragón"},
    {tipo: "Lucha"},
    {tipo: "Psíquico"}
]


// Función para obtener un Pokémon al azar
function nombreAzar() {
    const nombre = Math.floor(Math.random() * pokemons.length);
    return pokemons[nombre];
}

// Función para mostrar los datos del Pokémon en formato legible
function datos(datos) {
    return `Nombre: ${datos.nombre}\nTipo: ${datos.tipo}\nFuerza: ${datos.fuerza}\nDefensa: ${datos.defensa}\nEvolución: ${datos.evolucion}\nFuerte contra: ${datos.fuerte}\nDébil contra: ${datos.debil}`;
}

// Función para filtrar Pokémon por tipo
function filtrarPorTipo(tipo) {
    return pokemons.filter(pokemon => pokemon.tipo.toLowerCase() === tipo.toLowerCase());
}

// Función principal para solicitar opciones al usuario
function pokedex() {
    const opcion = prompt("Elige una opción:\n1. SAL A TU AVENTURA (Pokémon salvaje)\n2. Filtrar Pokémon por tipo");

    if (opcion === '1') {
        // Opción 1: Simulacion de encontrarnos a un pokemon salvaje
        const pokemonAleatorio = nombreAzar();
            alert(datos(pokemonAleatorio));
    } else if (opcion === '2') {
        // Opción 2: Filtro de tipo pokemon 
        const tipo = prompt("Tipo de Pokémon a filtrar (Normal, Veneno, Dragón, Lucha, Psíquico):");
        const pokemonsFiltrados = filtrarPorTipo(tipo);
        
        if (pokemonsFiltrados.length > 0) {
            let mensaje = `Pokémon de tipo ${tipo}:\n`;
            pokemonsFiltrados.forEach(pokemon => {
                mensaje += `${datos(pokemon)}\n\n`;
            });
            alert(mensaje);
        } else {
            alert(`No se encontraron Pokémon de tipo ${tipo}`);
        }
    } else {
        alert("Opción no válida. Por favor, elige 1 o 2.");
    }
}
pokedex();

// Selección de un Pokémon salvaje aleatorio
function nombreAzar() {
    const nombre = Math.floor(Math.random() * pokemons.length);
    return pokemons[nombre];
}

let pokemonSalvaje = nombreAzar();

localStorage.setItem('pokemonSalvaje', JSON.stringify(pokemonSalvaje));

// Calculo del daño en batalla
function daño({fuerza: fuerzaAtacante}, {defensa: defensaDefensor}) {
    return fuerzaAtacante - defensaDefensor;
}

function seleccionDePokemon() {
    // Pokemon salvaje
    let pokemonSalvaje = nombreAzar(); // Selecciona un Pokémon salvaje
    alert(`Prof. Oak: Explorando ciudad KANTO, nuestro ${entrenador} se encuentra con un ${pokemonSalvaje.nombre} salvaje`);

    // Seleccionamos el pokemon a pelear
    let pokemonSeleccionado = prompt("Elige tu Pokémon:\n1. Charmander\n2. Bulbasaur\n3. Squirtle");
    let pokemonUsuario;

    switch (pokemonSeleccionado) {
        case "1":
            pokemonUsuario = pokemons.find(({nombre}) => nombre === "Charmander");
            break;
        case "2":
            pokemonUsuario = pokemons.find(({nombre}) => nombre === "Bulbasaur");
            break;
        case "3":
            pokemonUsuario = pokemons.find(({nombre}) => nombre === "Squirtle");
            break;
        default:
            alert("Selección inválida, elige entre 1, 2 o 3.");
            return; 
    }

    batalla(pokemonUsuario, pokemonSalvaje);
}

// Función para iniciar la pelea
function batalla(pokemonUsuario, pokemonSalvaje) {
    let dañoUsuario = daño(pokemonUsuario, pokemonSalvaje);
    let dañoSalvaje = daño(pokemonSalvaje, pokemonUsuario);

    let resultado = document.createElement('div');
    resultado.className = 'resultado';

    // Resultado de la pelea
    let mensajeBatalla = `
        ¡Un ${pokemonSalvaje.nombre} salvaje apareció!\n
        Tu ${pokemonUsuario.nombre} vs ${pokemonSalvaje.nombre}\n
        ${pokemonUsuario.nombre} infligió ${dañoUsuario} de daño a ${pokemonSalvaje.nombre}.\n
        ${pokemonSalvaje.nombre} infligió ${dañoSalvaje} de daño a ${pokemonUsuario.nombre}.\n
    `;

    if (dañoUsuario > dañoSalvaje) {
        mensajeBatalla += `¡Ganaste! ${pokemonUsuario.nombre} derrotó a ${pokemonSalvaje.nombre}.`;
    } else if (dañoUsuario < dañoSalvaje) {
        mensajeBatalla += `Perdiste... ${pokemonSalvaje.nombre} derrotó a ${pokemonUsuario.nombre}.`;
    } else {
        mensajeBatalla += "¡Empate! Ambos Pokémons son iguales en fuerza.";
    }

    resultado.innerText = mensajeBatalla;
    document.body.append(resultado);
}

// EVENTO - Botón para seleccionar el pokemon a luchar contra el salvaje
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#seleccionarPokemonBtn').addEventListener('click', seleccionDePokemon);
});