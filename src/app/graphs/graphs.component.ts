import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent {
  readonly TITLE: string = "Indicadores Financeiros";

  constructor(private router: Router) {}

  chart: any;

  chartStyles = {
    padding: '15px',
    margin: '15px', 
    width: '43%', 
    height: '300px', 
    'float': 'left',
  }
  
	
	getChartOptions(chart: any) {
    return {
      theme: "light2",
      animationEnabled: true,
      zoomEnabled: true,
      title: {
        text: chart.title
      },
      legend:{
        cursor: "pointer",
        horizontalAlign: "left", // "center" , "right"
        verticalAlign: "center",  // "top" , "bottom"
        fontSize: 10,
        dockInsidePlotArea: true,
        itemclick: function(e: any) {
          if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else{
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      axisY: {
        labelFormatter: (e: any) => {
          var suffixes = ["", "K", "M", "B", "T"];
   
          var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
          if(order > suffixes.length - 1)
            order = suffixes.length - 1;
   
          var suffix = suffixes[order];
          return (e.value / Math.pow(1000, order)) + suffix;
        }
      },
      axisX:{  
        valueFormatString: "YYYY",
        interval: 1,
        intervalType: "year",
      },
      data: chart.data
    }
  }

  cgCharts = [ {
    title: "Capital de Giro Total (CGT)", 
    data: [
      {
        type: "line", showInLegend: true,
        xValueFormatString: "YYYY",
        yValueFormatString: "#,###.##",
        name: "CAPITAL DE GIRO TOTAL (CGT)",
        dataPoints: [
          { x: new Date(2017, 1, 1), y: 1843200 },
          { x: new Date(2018, 1, 1), y: 1938204 },
          { x: new Date(2019, 1, 1), y: 1842796 },
        ]
      },
      {
        type: "line", showInLegend: true,
        xValueFormatString: "YYYY",
        yValueFormatString: "#,###.##",
        name: "ATIVO CIRCULANTE",
        dataPoints: [
          { x: new Date(2017, 1, 1), y: 1843200 },
          { x: new Date(2018, 1, 1), y: 1938204 },
          { x: new Date(2019, 1, 1), y: 1842796 },
        ]
      }
    ]},
    {
      title: "Capital Circulante Liquido (CCL)", 
      data: [
        {
          type: "line", showInLegend: true,
          name: "CAPITAL CIRCULANTE LÍQUIDO (CCL)",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 483723 },
            { x: new Date(2018, 1, 1), y: 539502 },
            { x: new Date(2019, 1, 1), y: 724762 },
          ]
        },
        {
          type: "line", showInLegend: true,
          name: "ATIVO NÃO CIRCULANTE",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 9854619 },
            { x: new Date(2018, 1, 1), y: 9721558 },
            { x: new Date(2019, 1, 1), y: 9686019 },
          ]
        },
        {
          type: "line", showInLegend: true,
          name: "PATRIMÔNIO LÍQUIDO",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 6757192 },
            { x: new Date(2018, 1, 1), y: 6494761 },
            { x: new Date(2019, 1, 1), y: 6743713 },
          ]
        },
        {
          type: "line", showInLegend: true,
          name: "PASSIVO NÃO CIRCULANTE",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 3581150 },
            { x: new Date(2018, 1, 1), y: 3766298 },
            { x: new Date(2019, 1, 1), y: 3667068 },
          ]
        },
      ]
    },
    {
      title: "Capital de Giro Próprio (CGP)", 
      data: [
        {
          type: "line", showInLegend: true,
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          name: "CAPITAL DE GIRO PRÓPRIO",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: -3097427 },
            { x: new Date(2018, 1, 1), y: -3226796 },
            { x: new Date(2019, 1, 1), y: -2942306 },
          ]
        },
        {
          type: "line", showInLegend: true,
          name: "PATRIMÔNIO LÍQUIDO",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 6757192 },
            { x: new Date(2018, 1, 1), y: 6494761 },
            { x: new Date(2019, 1, 1), y: 6743713 },
          ]
        },
        {
          type: "line", showInLegend: true,
          name: "ATIVO NÃO CIRCULANTE",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 9854619 },
            { x: new Date(2018, 1, 1), y: 9721558 },
            { x: new Date(2019, 1, 1), y: 9686019 },
          ]
        },
      ]
    },
    {
      title: "Necessidade de Capital de Giro (NCG)", 
      data: [
        {
          type: "line", showInLegend: true,
          name: "NECESSIDADE DE CAPITAL DE GIRO (NCG)",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 803593 },
            { x: new Date(2018, 1, 1), y: 851161 },
            { x: new Date(2019, 1, 1), y: 766754 },   
          ]
        },
        {
          type: "line", showInLegend: true,
          name: "PASSIVO CIRCULANTE OPERACIONAL",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 584184 },
            { x: new Date(2018, 1, 1), y: 591881 },
            { x: new Date(2019, 1, 1), y: 551896 },
          ]
        },
        {
          type: "line", showInLegend: true,
          name: "ATIVO CIRCULANTE OPERACIONAL",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 1387777 },
            { x: new Date(2018, 1, 1), y: 1443042 },
            { x: new Date(2019, 1, 1), y: 1318650 },
          ]
        },
      ]
    },
    {
      title: "Necessidade Total de Financiamento Permanente (NTFP)", 
      data: [
        {
          type: "line", showInLegend: true,
          name: "NECESSIDADE TOTAL DE FINANCIAMENTO PERMANENTE (NTFP)",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 10658212 },
            { x: new Date(2018, 1, 1), y: 10572719 },
            { x: new Date(2019, 1, 1), y: 10452773 },
          ]
        },
        {
          type: "line", showInLegend: true,
          name: "ATIVO NÃO CIRCULANTE",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 9854619 },
            { x: new Date(2018, 1, 1), y: 9721558 },
            { x: new Date(2019, 1, 1), y: 9686019 },
          ]
        },
        {
          type: "line", showInLegend: true,
          name: "NECESSIDADE DE CAPITAL DE GIRO",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 803593 },
            { x: new Date(2018, 1, 1), y: 851161 },
            { x: new Date(2019, 1, 1), y: 766754 },   
          ]
        },
      ]
    },
    {
      title: "Saldo de Tesouraria", 
      data: [
        {
          type: "line", showInLegend: true,
          name: "SALDO DE TESOURARIA (ST)",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: -319870 },
            { x: new Date(2018, 1, 1), y: -311659 },
            { x: new Date(2019, 1, 1), y: -41992 },   
          ]
        },
        {
          type: "line", showInLegend: true,
          name: "ATIVO CIRCULANTE FINANCEIRO",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 455423 },
            { x: new Date(2018, 1, 1), y: 495162 },
            { x: new Date(2019, 1, 1), y: 524146 },   
          ]
        },
        {
          type: "line", showInLegend: true,
          name: "PASSIVO CIRCULANTE FINANCEIRO",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 775293 },
            { x: new Date(2018, 1, 1), y: 806822 },
            { x: new Date(2019, 1, 1), y: 566138 },   
          ]
        },
      ]
    },
    {
      title: "Termômetro de Liquidez", 
      data: [
        {
          type: "line", showInLegend: true,
          name: "TERMÔMETRO DE LIQUIDEZ (TL)",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: -0.39805 },
            { x: new Date(2018, 1, 1), y: -0.366158 },
            { x: new Date(2019, 1, 1), y: -0.054766 },
          ]
        },
        {
          type: "line", showInLegend: true,
          name: "SALDO DE TESOURARIA",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: -319870 },
            { x: new Date(2018, 1, 1), y: -311659 },
            { x: new Date(2019, 1, 1), y: -41992 },   
          ]
        },
        {
          type: "line", showInLegend: true,
          name: "|NCG|",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,###.##",
          dataPoints: [
            { x: new Date(2017, 1, 1), y: 803593.16 },
            { x: new Date(2018, 1, 1), y: 851161.14 },
            { x: new Date(2019, 1, 1), y: 766754.00 },   
          ]
        },
      ]
    },
  ];
  
  goBackward() {
    this.router.navigateByUrl("dfc");
  }
}
