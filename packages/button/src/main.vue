<template>
  <div :class="btnClass"
    class="btn" @click="onBtnClick">
    {{btnTxt}}
  </div>
</template>

<script>

export default {
  props: {
    btnTxt: String,
    hasClass: {
      type: String,
      default: ''
    },
    type: {
      type: 'blue' | 'white',
      default: 'blue'
    },
    onBtnClick: {
      type: Function,
      default: () => {}
    }
  },
  methods: {

  },
  computed: {
    btnClass: function () {
      if (this.hasClass) {
        return `${this.hasClass} btn-${this.type}`
      } else {
        return `btn-${this.type}`
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
.btn {
  width: 4.31rem;
  height: .77rem;
  border-radius: .39rem;
  font-size: .35rem;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-blue {
  background: #05a8c2;
}
.btn-white{
  background: #fff;
  border: .02rem solid #05a8c2;
  color: #05A8C2;
}
</style>