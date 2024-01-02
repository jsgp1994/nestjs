import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import { name, age } from './bases/01-types'
// import { student } from './bases/02-objects.ts'
import { charmander } from './bases/04-inyection'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${charmander.name}</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
