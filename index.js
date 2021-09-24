const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function formatTut (element){
//   let array = element.split(" ")
//   return array.map(formatWord).join(" ") 
// }

// function formatWord(word){
//  return word.charAt(0).toUpperCase() + word.slice(1)
// }

// const titleCased = () => {
//   let newTutorials = tutorials.map(formatTut)
//   return newTutorials
//}



// function splitArr (array){
//   array.map(element => array[element] = element.toLowerCase().split(" ")   
//   )
//   console.log(array)
//   return array
// }


// const titleCased = (array) => {
//   array.map(element => (array[element].charAt(0).toUpperCase() + array[element].substring(1) ))
//   console.log(array)
//   return array
// }

const array = ["The test of my knowlege", "Do i really know"]


// for (let i = 0; i < newArray.lenght; i++ ){
      //   newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].substring(1)
      // }

// function splitArr(element){
//   element.toLowerCase().split(" ")
//   return element
// }
// tutorials.map(splitArr)




// const array = ["The test of my knowlege", "Do i really know"]
// function splitS(strArray){
//     const newArray = strArray.map( function (elements){
//         elements.split(" ")
//     })
// return newArray
// }

//myStr.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');


// function splitArr (index){
//   let splitted = index.map( element => {element.split(" ")
//   })
//   return splitted
// }
// console.log(splitArr(array))

const titleCased = () => {
  let formattedTutorial = tutorials.map(breakSentences)
  return formattedTutorial
}

function breakSentences (element){
  let array = element.split(" ")
  return array.map(formatWord).join(" ")
}

function formatWord (word){
    return (word.charAt(0).toUpperCase() + word.slice(1))
}