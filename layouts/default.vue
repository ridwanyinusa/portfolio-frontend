<template>  
  <div>
    <!-- // You call your new Header component -->
    <Header />

    <div class="uk-section uk-section-default">
      <div class="uk-container uk-container-large">

        <!-- // This is where all yours pages will be -->
        <nuxt />

      </div>
    </div>

  </div>
</template>

<script>  
// Import your new Header component
import Header from '~/components/Header.vue'  
export default {  
  components: {
    Header
  }
}
</script>