import RedButton from "./RedButton.vue"
import BorderButton from "./BorderButton.vue"
import DefaultInput from "./DefaultInput.vue"

const components = [
  {name: 'RedButton', component: RedButton},
  {name: 'BorderButton', component: BorderButton},
  {name: 'DefaultInput', component: DefaultInput}
]

export default {
  install(app){
    components.forEach(({name, component}) => {
      app.component(name, component)
    })
  }
}