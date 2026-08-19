import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'TikTokmButton',

  stateMachine: ({eid}) => {
    ecs.defineState('default')
      .initial()
      .listen(eid, ecs.input.UI_CLICK, () => {

        console.log('Opening WhatsApp')

        window.open(
          'https://www.tiktok.com/@ashleybean.md',
          '_blank'
        )
      })
  },
})