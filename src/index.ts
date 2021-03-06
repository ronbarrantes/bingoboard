import 'reset-css'
import './styles/main.scss'
import * as utils from './utils'
import BingoCard from './BingoCard'

const title = document.createElement('h1')

const bingoCard = new BingoCard()
const container = document.createElement('div')

utils.appendMultiple(container)(bingoCard.render())

container.className = 'root'
document.body.appendChild(container)