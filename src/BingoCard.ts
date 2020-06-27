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
    let state: number[][] = []
    let numberList: number[][] = []
    for(let cols = 0; cols < 5; cols++){
      const inc = 15 * cols
      const from = 1 + inc 
      const to = from + 14 
      numberList.push(this.get5RandomNumbersFromRange(from, to))
    }
    
    for (let cols = 0; cols < numberList.length; cols++) {
      state.push([])
      for (let rows = 0; rows < numberList[cols].length; rows++) {
        const strVal = numberList[rows][cols]
        state[cols].push(strVal)
      }
    }
    return state
  }

  private title() {

  }

  private grid(){
    const table = document.createElement('table')
    const state = this.createState()

    for(let cols = 0; cols < state.length; cols++){
      const tr = document.createElement('tr')
      for (let rows = 0; rows < state[cols].length; rows++) {
        const td = document.createElement('td')
        td.textContent = state[cols][rows].toString()
        if(cols === 2 && rows === 2){
          td.textContent = 'Free'
        }
        tr.appendChild(td)
      }
      table.appendChild(tr)
    }



    return table
  }

  public render(): HTMLElement{

    const board = document.createElement('div')

    utils.appendMultiple(board)(this.grid())

    return board
  }
  
}

export default BingoCard