import * as utils from './utils'

class BingoCard {
  state?: utils.BoardState[][]

  constructor(state?: utils.BoardState[][]){
    this.state = state
  }

  private title(): HTMLElement {
    const title = 'BINGO'
    const tr = document.createElement('tr')
    
    for(let i = 0; i < title.length; i++){
      const th = document.createElement('th')
      th.textContent = title[i]
      tr.appendChild(th)
    }

    return tr
  }

  private grid(state?: utils.BoardState[][]){
    state = state ||  utils.createState()    
    const table = document.createElement('table')

    table.appendChild(this.title())

    // TODO: add styling
    // TODO: change styling on enable, disable

    for(let cols = 0; cols < state.length; cols++){
      const tr = document.createElement('tr')
      for (let rows = 0; rows < state[cols].length; rows++) {
        const td = document.createElement('td')
        td.textContent = state[cols][rows].value.toString()
        if(cols === 2 && rows === 2){
          td.textContent = 'Free'
        }
        tr.appendChild(td)
      }
      table.appendChild(tr)
    }
    return table
  }

  public render(state?: utils.BoardState[][]): HTMLElement{
    state = state ||  utils.createState() 
    const board = document.createElement('div')
    utils.appendMultiple(board)(this.grid(state))

    return board
  }
}

export default BingoCard
