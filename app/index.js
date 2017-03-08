import 'whatwg-fetch';
import App from './components/application.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount('.app');
