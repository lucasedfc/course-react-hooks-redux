import heroes, {owners} from "../data/heroes";

console.log(owners);



const getHeroById = (id) => heroes.find((hero) => hero.id === id);
console.log(getHeroById(3));

const getHeroByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);
console.log(getHeroByOwner('DC'));