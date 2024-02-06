import '@/style.css'
import viteLogo from '/vite.svg'
import typescriptLogo from '@/typescript.svg'
// Done importing assets

import { setupDarkMode } from './darkmode'
// Done importing modules

import template from '@/main.html?raw'
// Done importing template
// Done importing

const params = ["viteLogo", "typescriptLogo", `return \`${template}\``]
const templateFunction = new Function(...params)
// Done creating template function (compile)

const app = document.querySelector<HTMLDivElement>('#app')!
// Done selecting app element (dom)

app.innerHTML = templateFunction(viteLogo, typescriptLogo)
// Done rendering template (hydrate)

setupDarkMode(document.querySelector<HTMLButtonElement>('#dark-toggle')!)
// DarkMode listening
