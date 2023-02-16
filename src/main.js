import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/BaseButton.vue'
import RadioButton from './components/RadioButton.vue'
import BaseCallendar from './components/BaseCallendar.vue'

const app = createApp(App);
app.component('base-button', BaseButton);
app.component('radio-button', RadioButton);
app.component('base-callendar', BaseCallendar);

app.mount('#app')
