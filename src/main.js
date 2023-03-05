import { createApp } from 'vue';
import App from './App.vue';
import BaseButton from './components/baseUI/BaseButton.vue';
import RadioButton from './components/baseUI/RadioButton.vue';
import BaseCalendar from './components/baseUI/BaseCalendar.vue';
import BaseAlertbox from './components/baseUI/BaseAlertbox.vue';
import BaseInput from './components/baseUI/BaseInput.vue';
import BaseSelectInput from './components/baseUI/BaseSelectInput.vue'

const app = createApp(App);
app.component('base-button', BaseButton);
app.component('radio-button', RadioButton);
app.component('base-calendar', BaseCalendar);
app.component('base-alertbox', BaseAlertbox);
app.component('base-input', BaseInput);
app.component('base-select-input', BaseSelectInput);
app.mount('#app');
