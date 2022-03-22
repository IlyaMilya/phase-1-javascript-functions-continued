// code your solution here

const saturdayFun = (activity = 'roller-skate')=> {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = 'go to the office') => {
return `This Monday, I will ${activity}.`
}

/*const wrapAdjective = (string1 = '*', string2 = '||') => {
   //wraps any given adjective (string) as a highlight
   //when function 

    if (wrapAdjective(string1) ){
       return `You are ${string1}a hard worker${string1}!`
   }
    else {wrapAdjective(string2)}{
return `You are ${string2}a dedicated programmer${string2}!`;

   }}*/
function wrapAdjective(flair = '*'){
   return function(adj= 'special' ) {
         return `You are ${flair}${adj}${flair}!` ;
   }
}


const wrappingAdj = wrapAdjective()()
console.log(wrappingAdj)


const wrapAdjective2 = wrapAdjective('%')('a hard worker')
console.log(wrapAdjective2)
console.log(wrappingAdj) 


//
