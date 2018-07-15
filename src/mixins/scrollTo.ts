const scrollTo = (targetSelector: string) => {
  document.querySelector(targetSelector).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

export { scrollTo }
export default scrollTo
