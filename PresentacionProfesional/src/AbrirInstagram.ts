import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'InstagramButton',

  stateMachine: ({eid}) => {
    ecs.defineState('default')
      .initial()
      .listen(eid, ecs.input.UI_CLICK, () => {

        console.log('Opening WhatsApp')

        window.open(
          'https://www.instagram.com/ashleybean.md/',
          '_blank'
        )
      })
  },
})