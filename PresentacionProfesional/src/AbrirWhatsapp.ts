import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'Abrir WhatsApp',

  add: (world, component) => {
    world.events.addListener(
      component.eid,
      ecs.input.SCREEN_TOUCH_START,
      () => {
        console.log('WhatsApp clicked!')

        window.open(
          'https://wa.me/573001234567',
          '_blank'
        )
      }
    )
  },
})