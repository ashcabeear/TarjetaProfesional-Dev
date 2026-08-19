import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'Abrir WhatsApp',

  stateMachine: ({eid}) => {
    ecs.defineState('default')
      .initial()
      .listen(eid, ecs.input.UI_CLICK, () => {

        window.open(
          'https://wa.me/573106919975',
          '_blank'
        )

      })
  },
})