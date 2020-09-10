<template>
  <input :class="hasClass"
    class="btn" />
</template>

<script>

export default {
  props: {
    maxLenght: Number,
    hasClass: {
      type: String,
      default: ''
    },
  },
  methods: {
  
  },
  computed: {
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
.btn {
  width: 4.31rem;
  height: .77rem;
  border-radius: .39rem;
  font-size: .35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: .02rem solid #05a8c2;
  color: #05A8C2;
  text-align: center;
}
</style>