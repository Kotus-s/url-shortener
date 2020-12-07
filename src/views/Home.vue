<template>
  <div class="card">
    <div class="card__title">
      Url Shortener 👻
    </div>
    <div class="card__content">
      <form class="card__content--form">
        <input type="text" v-model="val">
        <button>Shorten</button>
      </form>
      {{ val.toUpperCase() }}
    </div>
  </div>

  <div class="card">
    <div class="card__title">Generated Url 🪑</div>
    <div class="card__content">
      <div class="card__content--url">
        <a href="http://google.fr">Mon lien</a>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    const val = ref('')
    return { val }
  }
}
</script>
