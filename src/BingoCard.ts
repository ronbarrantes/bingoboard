import * as utils from './utils'

class BingoCard {

  private getOneCol(from: number, to: number): number[]{
    let orderedList = []
    let resultList = []

    for(let i = from; i <= to; i++){
      orderedList.push(i)
    }

    // ERROR: there getting multiple of the same number
    for(let i = 0; i < 5; i++){
      const num = utils.randomNumber(orderedList.length)
      resultList.push(orderedList[num])
      const trimList: number[] = [...orderedList.slice(0, num -1), ...orderedList.slice(num, orderedList.length)]
      orderedList = trimList
    }

    return resultList
  }
  
  private createState() {
    let board = new Array(5).fill([])

    let numberList: number[] = []

    for(let cols = 0; cols < 5; cols++){
      const inc = 15 * cols
      const from = 1 + inc
      const to = from + 14
      numberList = [ ...numberList, ...this.getOneCol(from, to) ]
    }

    for(let cols = 0; cols < 5; cols++){
      for(let rows = 0; rows < 5; rows++){
        board[rows][cols] = utils.randomNumber(100)
      }
    }

    // TODO: add the numbers to the board array as a string
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