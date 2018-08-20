/** Обзервер вызывает коллбэк при появлении HTML-элемента (target) в области видимости */

import 'intersection-observer' // IE polyfill for Intersection Observer API

interface Options {
  /** HTML-элемент, который должен появиться в зоне видимости для вызова коллбэка */
  target: HTMLElement,
  /** Отступ от края элемента - величина видимой части элемента для вызова коллбэка */
  offset: number,
  callback: () => void
}

export default class VisibilityObserver {
  options: Options
  observer: any

  constructor(options: Options) {
    this.options = options
    this.init()
  }

  init() {
    this.observer = new IntersectionObserver(targets => {
      const target = targets[0];

      if (target.isIntersecting) {
        this.options.callback()
      }
    }, {
      rootMargin: `-${this.options.offset}px`,
    })
    this.observer.observe(this.options.target)
  }

  destroy() {
    this.observer.disconnect()
  }
}
