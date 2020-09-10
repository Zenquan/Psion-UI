<template>
  <div>
    <img :src="avatar" alt="" :class="avatarClass"
      class="avatar" />
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    avatar: String,
    type: {
      type: 'small' | 'middle' | 'big',
      default: 'small'
    }
  },
  methods: {
  
  },
  computed: {
    avatarClass: function () {
      if (this.hasClass) {
        return `${this.hasClass} avatar-${this.type}`
      } else {
        return `avatar-${this.type}`
      }
    }
  },
  components: {
    
  },
  mounted() {
    
  },
  destroyed() {

  }
};
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
}
.avatar-small {
  width: .87rem;
  height: .87rem;
}
.avatar-middle {
  
}
.avatar-big {
  width: 1.66rem;
  height: 1.66rem;
}
</style>