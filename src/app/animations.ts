import { animate, animation, style, transition, trigger, useAnimation } from '@angular/animations'

export const TIME = '750ms'

const showHideTransition = animation([
  style({
    opacity: '{{opacityStart}}'
  }),
  animate(
    '{{time}}',
    style({
      opacity: '{{opacityEnd}}'
    })
  )
])
export const showHide = trigger('showHide', [
  transition(':enter', [
    useAnimation(showHideTransition, {
      params: { opacityStart: 0, opacityEnd: 1, time: `${TIME} ease-out` }
    })
  ]),
  transition(':leave', [
    useAnimation(showHideTransition, {
      params: { opacityStart: 1, opacityEnd: 0, time: `${TIME} ease-out` }
    })
  ])
])
const opacityTransition = animation([
  style({
    opacity: '{{opacityStart}}',
    width: '{{widthStart}}'
  }),
  animate(
    '{{time}}',
    style({
      opacity: '{{opacityEnd}}',
      width: '{{widthEnd}}'
    })
  )
])
const transformTransition = animation([
  style({
    transform: '{{transformStart}}',
    opacity: '{{opacityStart}}'
  }),
  animate(
    `{{time}}`,
    style({
      transform: '{{transformEnd}}',
      opacity: '{{opacityEnd}}'
    })
  )
])

export const appearance = trigger('appearance', [
  transition(':enter', [
    useAnimation(opacityTransition, {
      params: {
        opacityStart: 0,
        opacityEnd: 1,
        widthStart: 0,
        widthEnd: '*',
        time: `${TIME} ease-out`
      }
    })
  ]),
  transition(':leave', [
    useAnimation(opacityTransition, {
      params: {
        opacityStart: 1,
        opacityEnd: 0,
        widthStart: '*',
        widthEnd: 0,
        time: `${TIME} ease-out`
      }
    })
  ])
])

export const FromBottom = trigger('FromBottom', [
  transition(':enter', [
    useAnimation(transformTransition, {
      params: {
        transformStart: 'translateY(130%)',
        transformEnd: 'translateY(1.5rem)',
        opacityStart: 1,
        opacityEnd: 1,
        time: `${TIME} 800ms ease-out`
      }
    })
  ])
])
