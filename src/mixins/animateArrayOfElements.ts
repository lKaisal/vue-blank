// import { TimelineLite, Expo } from '@/mixins/gsap'

// interface Payload {
//   elements: HTMLElement[],
//   rtl?: boolean
// }

// const animateArrayOfElements = (payload: Payload) => {
//   return new Promise(resolve => {
//     const { elements, rtl } = payload
//     const timeline = new TimelineLite()

//     timeline
//       .staggerFrom(elements, 1, {
//         opacity: 0,
//         x: -20 * (rtl ? -1 : 1),
//         ease: Expo.easeOut,
//         immediateRender: true,
//       }, .1, 0)
//       .add(resolve)
//   })
// }

// export { animateArrayOfElements }
// export default { methods: { animateArrayOfElements } }
