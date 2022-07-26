import VueMatomo from 'vue-matomo'

export default defineNuxtPlugin((app) => {

  app.vueApp.use(VueMatomo, {
        router: app.$router,
        host: 'https://track.nitwel.de',
        siteId: 1,
        debug: false,
        disableCookies: true,
      })
})