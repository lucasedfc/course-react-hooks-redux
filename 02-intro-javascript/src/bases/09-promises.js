import { getHeroById } from "./bases/08-imp-exp";

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const hero = getHeroById(2);
//         resolve(hero)
//         //reject('Hero not found')

//     }, 2000);
// });

// promise.then((data) => {
//     console.log('Data from promise', data);
// })
// .catch(err => {
//     console.warn(err); 
// });

const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            hero ? resolve(hero) : reject('Hero not found')
        }, 2000);
    });


}


getHeroByIdAsync(1)
    .then(console.log)
    .catch(console.warn)

