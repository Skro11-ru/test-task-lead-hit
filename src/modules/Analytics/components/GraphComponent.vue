<template>
  <div class="hello" ref="chartdiv"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4lang_ru_RU from "@amcharts/amcharts4/lang/ru_RU";
am4core.useTheme(am4themes_animated);

export interface IDataItem {
  date: string;
  visits: number;
}

@Component({
  components: {}
})
export default class GraphComponent extends Vue {
  @Prop({
    default: [],
    type: Array
  })
  data!: Array<IDataItem>;
  chart: any = "";
  mounted() {
    // Creating a chart and assigning it to the variable chart.
    this.chart = am4core.create(
      this.$refs.chartdiv as HTMLElement,
      am4charts.XYChart
    );
    this.chart.data = this.data;
    this.chart.language.locale = am4lang_ru_RU;
    // Creating a title for the chart.
    let title = this.chart.titles.create();
    title.text = "Аналитика по визитам";
    title.fontSize = 25;
    title.marginBottom = 30;

    // Creating a new date axis.
    let dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    // Creating a new value axis.
    let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 35;

    // Creating a new line series.
    let series = this.chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "visits";
    series.tooltipText = "{valueY.value}";
    series.fillOpacity = 1;
    series.fill = am4core.color("#E6C8FA");
    series.stroke = am4core.color("#9E18FB");
    series.strokeOpacity = 1;
    series.strokeWidth = 3;

    // Adding a cursor to the chart.
    this.chart.cursor = new am4charts.XYCursor();

    // Adding a circle bullet to the chart.
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.fill = am4core.color("#9E18FB");
    bullet.strokeWidth = 3;

    // Removing the grid lines from the chart.
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = false;
    dateAxis.renderer.line.strokeOpacity = 0.1;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = false;
    valueAxis.renderer.line.strokeOpacity = 0.1;
  }
}
</script>

<style scoped lang="scss">
.hello {
  width: 100%;
  height: 500px;
}
</style>
