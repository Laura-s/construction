<template>
  <router-link v-if="type === 'link'" :to="{ name: target }" class="fancyButton" :style="{ width }">
    <span class="label"> {{ label }} </span>
    <span class="icon"
      ><i class="fa fa-long-arrow-right fa-2x" aria-hidden="true"></i
    ></span>
  </router-link>
  <a v-else-if="type === 'anchor'" :href="target" class="fancyButton" :style="{ width }">
    <span class="label"> {{ label }} </span>
    <span class="icon"
      ><i class="fa fa-long-arrow-right fa-2x" aria-hidden="true"></i></span
  ></a>
  <a v-else-if="type === 'button'" @click.prevent="" href="#" class="fancyButton" :style="{ width }">
    <span class="label"> {{ label }} </span>
    <span class="icon"
      ><i class="fa fa-long-arrow-right fa-2x" aria-hidden="true"></i></span
  ></a>
</template>

<script>
export default {
  props: {
   
    label: {
      type: String,
      required: true,
      // default: "cat"
    },
    target: {
      type: String,
      
    },
    width: {
      type: String,
      default: "300px",
    },
    type: {
        type: String,
        required: true, 
    }
  },
};
</script>

<style scoped lang="scss">
.fancyButton {
  display: flex;
  color: inherit;
  align-items: center;

  height: 66px;
  text-decoration: none;
  span.icon {
    background-color: orange;
    border-radius: 50%;
    height: 100%;
    width: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    color: black;
  }
  span.label {
    text-decoration: underline;
    padding: 0px 20px;
    font-weight: bold;
    font-size: 18px;
  }
  &:hover {
    background-color: orange;
    border-radius: 33px;
    span.icon {
      display: none;
    }
    span.label {
      color: white;
    }
  }
}
</style>
