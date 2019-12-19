<template>
  <div id="testd">
    <H2>D3.js 测试案例 用d3 画个五角星</H2>
    <div class="svg"></div>
    <span @click="again" class="btn">again</span>
  </div>
</template>

<script>
import * as d3 from "d3"

export default {
  name: "d3home",
  mounted() {
    this.start()
  },
  methods: {
    start() {
      // 生成svg,创建画布
      let x = 200
      let y = 200
      let _svg = d3
        .select(".svg")
        .append("svg")
        .attr("width", x)
        .attr("height", y)

      // 画一个多边形---polygon
      //这里手算了一个五角星坐标，其实是不知道怎样获取
      let starPoints = ""
      let starX = 100 // 五角星边长
      let starData = [
        { x: 0.2 * starX, y: y },
        { x: 0.8 * starX, y: y - 1.5 * starX },
        { x: 1.4 * starX, y: y },
        { x: 0, y: y - starX },
        { x: 1.6 * starX, y: y - starX }
      ]
      starData.forEach(s => {
        starPoints += `${s.x},${s.y} `
      })

      let star = _svg
        .append("polygon")
        .attr("class", "star-svg")
        .attr("points", starPoints)
        .attr("fill", "transparent")
        .attr("stroke", "red")
        .attr("stroke-width", 2)
      // 获取五角星 path 长度
      let starLen = document.querySelector(".star-svg").getTotalLength()

      // 创建动画，线性 、3000ms
      star
        .attr("stroke-dasharray", starLen)
        .attr("stroke-dashoffset", starLen)
        .transition()
        .ease(d3.easeLinear)
        .duration(3000)
        .attr("stroke-dashoffset", 0)
    },
    again() {
      d3.select("svg").remove()
      this.start()
    }
  }
}
</script>


<style>
.svg {
  margin-left: 50px;
}
.btn {
  display: block;
  margin-left: 50px;
  cursor: pointer;
  line-height: 40px;
  text-align: center;
  width: 100px;
  background: darkred;
  border-radius: 5px;
  margin-top: 20px;
  color: #fff;
}
</style>
