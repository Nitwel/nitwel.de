import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    modules: ["nuxt-directus", "@vueuse/nuxt"],
    css: ['~~/assets/main.css'],
    directus: {
        url: 'https://nitwel-eu.directus.app/'
    }
})
