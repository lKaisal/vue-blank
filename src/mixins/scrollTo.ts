function calcTop(el) {
  return el.getBoundingClientRect().top;
}

/** Функция вертикальной прокрутки на заданное расстояние или до указанного HTML-элемента */
function scrollTo(
  /** Число, строка или объект (HTML-элемент)
   * Если объект - рассчитывается расстояние от края экрана до верхней границы элемента
   * и прибавляется величина прокрутки экрана.
   * Если число(строка) - скроллит на заданное число px.
   */
  payload: any = 0,
  /** Отступ от верхнего края экрана */
  gutter: number = 0
) {
  const isObject = typeof payload === "object";
  let top = isObject ? calcTop(payload) : Number(payload);

  top -= gutter;

  if (isObject) {
    top += window.scrollY;
  }

  /** Проверка браузера 
   * Значение если InternetExplorer: true
   */
  const isIE = navigator.userAgent.search("Edge")

  /** Функция для IE */
  if ( isIE > 0) {
    window.scroll(0, top);
    return;
  }

  /** Функция для остальных браузеров */
  window.scrollTo({
    top,
    behavior: "smooth"
  });
}

export { scrollTo };
export default scrollTo;
