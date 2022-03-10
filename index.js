// window.prompt('Do you head left or right?')
let firstAnswer = window.prompt('Do you head left or right?')

if(firstAnswer === 'left') {
    let strayCat = window.prompt('You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it? or continue on your path?')
} else if(firstAnswer === 'right') {
    let snoringDragon = window.prompt('You come across a snoring dragon. On the other side of him, you see a shint chest of treasure. Another path would lead you away from the dragon altogether. Which path do you take?')
}
// this is code for all the left aswers and what follows 
/*
if(strayCat === 'follow') {
    let followedCat = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inecplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. Do you stay or spread the word?')
} else if(strayCat === 'continue') {
    let noCat = window.prompt('You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety looking ladder that leads up towards the right. Which do you take?')
}
*/
switch(strayCat){
    case 'folow':
        window.prompt('Hi')
    break
    case 'continue':
        window.prompt('bye')
    break
}
// this will be for following cat
