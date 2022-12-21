import { Component, OnInit } from '@angular/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';

@Component({
  selector: 'app-charts-widget5',
  templateUrl: './charts-widget5.component.html',
})
export class ChartsWidget5Component implements OnInit {
  chartOptions: any = {};
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = getChartOptions();
  }

}

function getChartOptions() {
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-gray-200');

  const baseColor = getCSSVariableValue('--bs-primary');
  const secondaryColor = getCSSVariableValue('--bs-info');

  return {

    series: [44, 55, 13, 43, 22],
    chart: {
      type: "donut"
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "left"
          }
        }
      }
    ]
  };
}


