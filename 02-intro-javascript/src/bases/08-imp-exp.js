//import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";
//console.log(owners);



export const getHeroById = (id) => heroes.find((hero) => hero.id === id);
//console.log(getHeroById(3));

export const getHeroByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);
//console.log(getHeroByOwner('DC'));