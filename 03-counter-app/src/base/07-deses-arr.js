

const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;


export const returnArr = () =>{
    return ['ABC', 123];
}

// const [ letters, numbers ] = returnArr(); 


// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = useState( 'Goku' );
setNombre();





