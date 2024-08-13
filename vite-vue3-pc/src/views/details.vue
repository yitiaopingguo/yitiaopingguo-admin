<template>
  <div class="details">
    <div class="details-back">
      <p class="details-title">我是title</p>
    </div>
    <div class="details-content">
      <p>我做了一场梦，梦里我迈着欢快的步伐去见“青春”，结果在梦里走不出来。
        这场梦像海市蜃楼般出现，恍惚间是放学回家守着电视机面前看7号店的场景，穿越时空来到面前，
        眼前的五位少年继续诉说着他们的故事。</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.details {
  background: var(--bgColor);
  color: var(--color);
  margin-top: 60px;

  .details-back {
    position: relative;
    width: 100%;
    height: 400px;
    background-image: url('https://image.fosunholiday.com/fostay-platform/test/086511b29db9ea874557a3d30b033df6.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .details-title {
      position: absolute;
      top: 280px;
      left: 50px;
      font-size: 30px;
    }
  }

  .details-content {
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px 60px;
    box-sizing: border-box;
  }
}
</style>