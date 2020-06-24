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
