<template>
  <div class="modal-wrapper" v-show="isModalShow">
    <div class="mask"></div>
    <div :class="modalClass">
      <slot></slot>
    </div>
    <img :src="icoClose" alt=""
        :class="handleIcoClass" @click="close">
  </div>
</template>

<script>
import icoClose from 'assets/img/ico_close.png'
export default {
  data () {
    return {
      isModalShow: this.visible,
      icoClose
    }
  },
  props: {
    hasClass: {
      type: String,
      default: ''
    },
    type: {
      type: 'long' | 'short',
      default: 'long'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible (val) {
      this.isModalShow = val
    }
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit('close');
    }
  },
  computed: {
    modalClass () {
      if (this.hasClass) {
        return `modal modal-${this.type} ${this.hasClass}`
      } else {
        return `modal modal-${this.type}`
      }
    },
    handleIcoClass () {
      return `ico-close ico-close-${this.type}`
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
.modal-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.mask {
  width: 100%;
  min-height: 100%;
  opacity: 0.85;
  background: #000;
  padding: 0 .74rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
}
.ico-close {
  width: .88rem;
  height: .88rem;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 999;
}
.ico-close-long {
  transform: translate(-50%, 5.61rem);
}
.ico-close-short {
  transform: translate(-50%, 3.2rem);
}
.modal-short {
  height: 5.17rem;
}
.modal-long {
  height: 10rem;
  padding: .5rem;
  font-size: .24rem;
  color: #05A8C2;
}
.modal {
  width: 6.03rem;
  background: #fff;
  border-radius: .24rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* overflow-y: auto; */
  z-index: 999;
}
</style>