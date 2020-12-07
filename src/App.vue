<template>
  <notification-group></notification-group>
  <router-view></router-view>
</template>

<script>
import NotificationGroup from '@/components/NotificationGroup'

export default {
  components: {
    NotificationGroup
  }
}
</script>
