<template>
  <div class="absolute top-0 right-0 pr-2 pt-2">

    <transition-group name="fade" tag="div">
      <div :class="'bg-' + notification.level" class="mb-3 shadow-xl rounded-lg p-3 transition-all transform hover:translate-y-1" v-bind:key="notification" v-for="notification in notifications">
        <div class="flex flex-row">
          <div class="ml-2 mr-6">
            <span class="font-semibold">{{ notification.title }}</span>
            <span v-if="notification.content" class="block text-white">{{ notification.content }}</span>
          </div>
        </div>
      </div>
    </transition-group>

  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted, onUnmounted } from 'vue'

export default {
  name: 'notification-group',
  setup() {
    const instance = getCurrentInstance()
    const $emitter = instance.appContext.config.globalProperties.$emitter

    const notifications = ref([])

    onMounted(() => {
      $emitter.on('notify', (data) => {
        data = { ...data, _id: Date.now()}
        console.log(data)
        notifications.value.push(data)
        setTimeout(() => {
          notifications.value = notifications.value.filter(item => item._id !== data._id)
        }, data.time || 3000);
      })
    })

    onUnmounted(() => {
      $emitter.off('off')
    })

    return { notifications }
  }
}
</script>
