import { createApp } from 'vue';
import App from './App.vue';
import BaseButton from './components/BaseButton.vue';
import RadioButton from './components/RadioButton.vue';
import BaseCalendar from './components/BaseCalendar.vue';
import BaseAlertbox from './components/BaseAlertbox.vue';
import BaseInput from './components/BaseInput.vue';

const app = createApp(App);
app.component('base-button', BaseButton);
app.component('radio-button', RadioButton);
app.component('base-calendar', BaseCalendar);
app.component('base-alertbox', BaseAlertbox);
app.component('base-input', BaseInput);

app.mount('#app');
