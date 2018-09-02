import browserDetect from 'detect-browser'
// yarn add detect-browser

export default function browserDetect(
  /** Принимает строку из одного или нескольких аргументов
   * (пустое значение - по умолчанию все аргументы).
   * На основе этих переменных присваивается класс для 'html'.
   */
  params: string = 'name,version,os') {
  const { detect } = require('detect-browser')
  const browser = detect()
  const browserClass = []
  if (browser) {
    params.split(',').forEach(param => {
      browserClass.push(browser[param].split('.')[0])
    })
    document.querySelector('html').classList.add(browserClass.join(''))

  }
}
