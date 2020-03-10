import Vue from 'vue';
import Nav from './components/nav';
import Content from './mainContent';

Window.Vue = Vue;

const vue = new Vue({
    el:"#app",
    components:{
        "lab-nav": Nav,
        "lab-main": Content
    }
});