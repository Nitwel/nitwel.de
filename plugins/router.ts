export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook("page:finish", async (a) => {
      setTimeout(() => {

        // Hack to accommodate  transitions
        window.scrollTo({ top: 0 });
      }, 200)
    });
  });