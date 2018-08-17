function calcTop(el) {
  return el.getBoundingClientRect().top
}

/** Функция вертикальной прокрутки на заданное расстояние или до указанного HTML-элемента 
 * !!! Для IE применяется scrollIntoView вместо scrollTo, т.е. скролл на IE будет
 * срабатывать только если передан объект, а не число.
*/
function scrollTo(
  /** Число, строка или объект (HTML-элемент)
   * Если объект - рассчитывается расстояние от края экрана до верхней границы элемента
   * и прибавляется величина прокрутки экрана.
   * Если число(строка) - скроллит на заданное число px.
   * Значение по умолчанию - для прокрутки к началу страницы
   */
  payload: any = 'html',
  /** Отступ от верхнего края экрана */
  gutter: number = 0
) {
  const isObject = typeof payload === 'object'
  let top = isObject ? calcTop(payload) : Number(payload)

  top -= gutter

  if (isObject) {
    top += window.scrollY
  }

  /** Проверка браузера
   * Значение если InternetExplorer: true
   */
  const isEdge = navigator.userAgent.search('Edge')
  const isIE = (navigator.userAgent.indexOf(".NET") != -1)

  /** Функция для IE */
  if (isIE) {
    document.querySelector(payload).scrollIntoView({behavior: 'smooth'})
  }

  if ( isEdge > 0) {
    window.scroll(0, top)
    return
  }

  /** Функция для остальных браузеров */
  window.scrollTo({
    top,
    behavior: 'smooth'
  })
}

export { scrollTo }
export default scrollTo
