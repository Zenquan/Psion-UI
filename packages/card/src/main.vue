<template>
  <div class="form pos-center"
    :style="{height}">
    <slot></slot>
    <img :src="logo" alt="" class="logo">
  </div>
</template>

<script>
const $assetsPath = process.env.assetsPath;
export default {
  data() {
    return {
      logo: `${$assetsPath}/img/logo.png`
    }
  },
  props: {
    height: {
      type: String | Number,
      default: 'auto'
    }
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
.form {
  width: 6.03rem;
  padding-bottom: .43rem;
  font-size: .3rem;
  background: #ffffff;
  border-radius: .24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .logo {
    width: 1.61rem;
    height: .25rem;
    position: absolute;
    bottom: -.49rem;
  }
  }
</style>