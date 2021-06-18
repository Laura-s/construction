<template>
  <section
    class="procent container-fluid"
    :style="{ backgroundColor: background, color }"
  >
    <div class="container">
      <div class="row">
        <div class="procente col-sm my-auto  text-center">
          <div class="row">
            <div
              v-for="(stat, index) in stats"
              :key="`stat-${index}`"
              class="col-6"
            >
              <h3>{{ stat.value }}</h3>
              <div class="border-btm"></div>
              <p class="pt-3 pb-4">{{ stat.label }}</p>
            </div>
          </div>
        </div>
        <div class="col-sm bath-img-col p-5">
          <img
            src="../assets/bathroom_about.webp"
            alt=""
            class=" img-fluid"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: "#222222",
    },
    color: {
      type: String,
      default: "white",
    },
  },
  data: () => ({
    stats: [
      {
        value: "15",
        label: "years of experience",
      },
      {
        value: "0%",
        label: "instalment plan",
      },
      {
        value: "500+",
        label: "completed projects",
      },
      {
        value: "3",
        label: "offices statewide",
      },
    ],
  }),
};
</script>

<style>
.bath-img-col{
  background: url("../assets/diagonal_lines_orange_HP.svg");
  background-repeat: no-repeat;
  background-position: right top;
}
.procente h3 {
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 20px;
}
.procente p {
  font-size: 20px;
}
.border-btm {
  border-bottom: 5px solid rgba(143, 198, 145, 1);
  width: 80px;
  margin: auto;
}
</style>