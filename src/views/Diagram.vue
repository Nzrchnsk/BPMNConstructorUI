<template>
  <div class="canvas-wrapper">
    <canvas
        ref="canvas"
        @mousedown="start"
        @mouseup="finish"
        @mousemove="draw"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: "Diagram",
  data: () => ({
    ctx: null,
    painting: false,
  }),
  methods: {
    start(e) {
      this.painting = true;
      this.ctx.beginPath();
    },
    finish(e) {
      this.stroke(e);
      this.painting = false;
    },
    draw(e) {
      if (this.painting) {
        this.stroke(e);
        this.ctx.beginPath();
        this.ctx.moveTo(e.offsetX, e.offsetY);
      }
    },
    stroke(e) {
      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();
    },
  },
  mounted() {
    this.$refs.canvas.width = 800;
    this.$refs.canvas.height = 800;
    this.ctx = this.$refs.canvas.getContext('2d');
    this.ctx.lineWidth = 5;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = 'black';
  },
}
</script>
<style scoped>
/*canvas {*/
/*  width: 100vw;*/
/*  height: 100vh;*/
/*}*/
canvas {
  position: absolute;
  border: 1px solid black;
  width: 80%;
  height: 80%;
}
.canvas-wrapper {
 position: center;
}
</style>