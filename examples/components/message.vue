
<template>
  <div>
    <Button @click="message">message dialog</Button>
  </div>
</template>

<script>
export default {
  methods: {
    message () {
      return this.$dialog.msg({
            msg: 'this is a message dialog',
            icon:'ios-checkmark',
            iconcolor:'#19be6b'
        })
    },
    
  }
}
</script>
