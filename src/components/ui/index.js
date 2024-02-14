import RedButton from "./RedButton.vue"
import BorderButton from "./BorderButton.vue"


const components = [
  {name: 'RedButton', component: RedButton},
  {name: 'BorderButton', component: BorderButton}
]

export default {
  install(app){
    components.forEach(({name, component}) => {
      app.component(name, component)
    })
  }
}