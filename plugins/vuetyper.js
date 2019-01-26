import Vue from 'vue'
import VueTyperPlugin from 'vue-typer'

if (process.browser) {
    Vue.use(VueTyperPlugin);
}

