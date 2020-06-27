interface AppendMultiple {
  (parent: HTMLElement): (...children: HTMLElement[]) => void;
}

/**
 * Creates a random number 
 * @param num the number, default 255
 */
export const randomNumber = (num: number = 255): number => Math.floor(Math.random() * num)

/**
 * Creates a random number in a range (inclusive)
 * @param from starting random number position
 * @param to end random number position
 * @returns number
 */
export const randomNumberRange = (from: number, to: number): number => from + randomNumber(to - from + 1)

/**
 * Creates a random rgb color
 * @returns string rgb
 */
export const randomColor = (): string =>
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`

/**
 * Appends multiple html elements to a parent html element
 * @param parent element to add to
 * @param children list of children comma separated
 */
export const appendMultiple: AppendMultiple = (parent) =>
  (...children) => children.forEach(child => parent.appendChild(child))

/**
 * Shuffles and array
 * @param array array to be shuffled
 * @returns shuffled array
 */
export const shuffleArray = (array: number[]): number[] => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
