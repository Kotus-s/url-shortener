<template>
  <div class="card">
    <div class="card__title">
      Url Shortener 👻
    </div>
    <div class="card__content">
      <form>
        <div class="card__content--input-group">
          <input type="text" v-model="val" placeholder="Url">
        </div>
        <div class="card__content--input-group">
          <input type="text" placeholder="Slug">
          <button>Shorten</button>
        </div>
      </form>
    </div>
  </div>

  <div class="card">
    <div class="card__title">Generated Url 😎</div>
    <div class="card__content">
      <div class="card__content--url">
        <a ref="generatedLink" href="http://google.fr" @click="copy">http://google.fr</a>
      </div>
    </div>
  </div>
</template>

<script>
import {getCurrentInstance, ref} from 'vue'

export default {
  setup() {
    const val = ref('')
    const generatedLink = ref(null)

    const instance = getCurrentInstance()
    const $emitter = instance.appContext.config.globalProperties.$emitter

    function copy(e) {
      e.preventDefault()
      navigator.clipboard.writeText(generatedLink.value.innerHTML).then(() => {
        console.log('copied')
      });
      $emitter.emit('notify', { level: 'green-600', title: '😎 Successfully copied'})
    }

    return { val, copy, generatedLink }
  }
}
</script>
