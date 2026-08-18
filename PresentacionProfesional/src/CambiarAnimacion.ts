import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'Cambiar Animacion',

  stateMachine: ({world, eid}) => {

    ecs.defineState('default')
      .initial()
      .listen(eid, ecs.input.SCREEN_TOUCH_START, () => {

        ecs.GltfModel.mutate(world, eid, (cursor) => {

          if (cursor.animationClip === 'Dance') {
            cursor.animationClip = 'Idle'
          } else {
            cursor.animationClip = 'Dance'
          }

          cursor.paused = false
          cursor.loop = true
          cursor.crossFadeDuration = 0.3

          return false
        })

      })
  },
})