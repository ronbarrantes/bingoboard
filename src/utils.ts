export interface AppendMultiple {
  (parent: HTMLElement): (...children: HTMLElement[]) => void;
}

export interface BoardState {
  value: number
  isEnabled: boolean
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

    /**
   * get a sequence of number and returns 5 random numbers from said sequence
   * @param from start of the range 
   * @param to end of the range
   * @returns 5 random numbers from the range
   */
  export const get5RandomNumbersFromRange = (from: number, to: number): number[] => {
    let orderedList = []
    let resultList = []

    if(from + 4 > to){
      throw new Error('from value needs to be at least 5 numbers bigger');
    }

    for(let i = from; i <= to; i++){
      orderedList.push(i)
    }

    resultList = shuffleArray(orderedList).splice(0, 5)
    return resultList
  }

  /**
   * Makes an initial state object of of an array with a value and isEnabled
   * 
   */
  export const createState = () => {
    let state: BoardState[][] = []
    let numberList: number[][] = []
    for(let cols = 0; cols < 5; cols++){
      const inc = 15 * cols
      const from = 1 + inc 
      const to = from + 14 
      numberList.push(get5RandomNumbersFromRange(from, to))
    }
    
    for (let cols = 0; cols < numberList.length; cols++) {
      state.push([])
      for (let rows = 0; rows < numberList[cols].length; rows++) {
        const strVal = numberList[rows][cols]
        state[cols].push({ value: strVal, isEnabled: false })
      }
    }
    return state
  }