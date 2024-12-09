<script lang="ts" setup>
import { useLayoutMode } from "@/hooks/useLayoutMode"
import logo from "@/assets/layouts/logo.png?url"
const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE
interface Props {
  collapse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  collapse: true
})

const { isLeft, isTop } = useLayoutMode()
</script>

<template>
  <div class="layout-logo-container" :class="{ collapse: props.collapse, 'layout-mode-top': isTop }">
    <transition name="layout-logo-fade">
      <router-link v-if="props.collapse" key="collapse" to="/">
        <img :src="logo" class="layout-logo" />
      </router-link>
      <router-link v-else key="expand" to="/">
         <div style="font-size: 26px;color: #fff;">{{ VITE_APP_TITLE }}</div>
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.layout-logo-container {
  position: relative;
  width: 100%;
  height: var(--v3-header-height);
  line-height: var(--v3-header-height);
  text-align: center;
  overflow: hidden;
  .layout-logo {
    display: none;
  }
  .layout-logo-text {
    width: 100%;
    vertical-align: middle;
  }
}

.layout-mode-top {
  height: var(--v3-navigationbar-height);
  line-height: var(--v3-navigationbar-height);
}

.collapse {
  .layout-logo {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    display: inline-block;
  }
  .layout-logo-text {
    display: none;
  }
}
.layout-text {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family:
    Source Han Serif CN,
    Source Han Serif CN;
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
  letter-spacing: 5px;
}
</style>
