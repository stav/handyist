import '@/style.css'
import viteLogo from '/vite.svg'
import typescriptLogo from '@/typescript.svg'
import { setupCounter } from '@/counter.ts'
import template from '@/main.html?raw'

const params = ["viteLogo", "typescriptLogo", `return \`${template}\``]
const templateFunction = new Function(...params)
const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = templateFunction(viteLogo, typescriptLogo)

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
