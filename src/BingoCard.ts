import * as utils from './utils'

class BingoCard {

  /**
   * get a sequence of number and returns 5 random numbers from said sequence
   * @param from start of the range 
   * @param to end of the range
   * @returns 5 random numbers from the range
   */
  private get5RandomNumbersFromRange(from: number, to: number): number[]{
    let orderedList = []
    let resultList = []

    if(from + 4 > to){
      throw new Error('from value needs to be at least 5 numbers bigger');
    }

    for(let i = from; i <= to; i++){
      orderedList.push(i)
    }

    resultList = utils.shuffleArray(orderedList).splice(0, 5)
    return resultList
  }
  
  private createState() {
    let board: number[][] = []
    let numberList: number[][] = []
    for(let cols = 0; cols < 5; cols++){
      const inc = 15 * cols
      const from = 1 + inc 
      const to = from + 14 
      numberList.push(this.get5RandomNumbersFromRange(from, to))
    }
    
    for (let i = 0; i < numberList.length; i++) {
      board.push([])
      for (let j = 0; j < numberList[i].length; j++) {
        board[i].push(numberList[j][i])
      }
    }

    return board
  }

  private title() {

  }

  private board(){

  }

  public render(): HTMLElement{
    console.log(this.createState())
    return document.createElement('div')
  }
  
}

export default BingoCard