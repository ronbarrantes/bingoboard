import * as utils from './utils'

class BingoCard {
  state?: utils.BoardState[][]
  constructor(state?: utils.BoardState[][]){
    this.state = state
  }

  private tileSize(): number{
    const { width, height } = window.screen
    if (width > height) 
      return height/6
    return width/5
  }

  private tile(value: string ): HTMLElement {
  const td = document.createElement('td')

    td.className = 'tile'
    td.width = this.tileSize().toString()
    td.height = this.tileSize().toString()
    td.textContent = value

    td.addEventListener('click', () => {
      td.classList.toggle('enabled')
    })
    return td
  }

  private title(): HTMLElement {
    const title = 'BINGO'
    const tr = document.createElement('tr')
    tr.className = 'tile'
    for(let i = 0; i < title.length; i++){
      const th = document.createElement('th')
      th.width = this.tileSize().toString()
      th.height = this.tileSize().toString()
      th.textContent = title[i]
      tr.appendChild(th)
    }
    return tr
  }

  private grid(state?: utils.BoardState[][]){
    state = state ||  utils.createState()    
    const table = document.createElement('table')
    const top = (window.screen.height/2) - ((this.tileSize() * 6) / 2)

    table.style.alignSelf = 'center'

    table.appendChild(this.title())

    for(let cols = 0; cols < state.length; cols++){
      const tr = document.createElement('tr')
      for (let rows = 0; rows < state[cols].length; rows++) {
        let value = state[cols][rows].value.toString()
        if(cols === 2 && rows === 2){
          value = 'Free'
        }
        tr.appendChild(this.tile(value))
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
