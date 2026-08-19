import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'WhatsAppButton',

  stateMachine: ({eid}) => {
    ecs.defineState('default')
      .initial()
      .listen(eid, ecs.input.UI_CLICK, () => {

        console.log('BUTTON CLICKED')

        window.location.href =
          'https://wa.me/573106919975'

      })
  },
})