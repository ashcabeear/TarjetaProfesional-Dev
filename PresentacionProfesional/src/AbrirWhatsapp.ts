import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'WhatsAppButton',

  stateMachine: ({world, eid}) => {
    ecs.defineState('default')
      .initial()
      .listen(eid, ecs.input.UI_CLICK, () => {
        console.log('WHATSAPP BUTTON CLICKED')
        
        ecs.Ui.set(world, eid, {
          opacity: 0.5,
        })
      })
  },
})