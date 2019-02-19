import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  LineChart = [];
  pieChart = [];
  barChart = [];

  title: string = "chart";
  window: Window;

  constructor() {}

  ngOnInit() {
    this.LineChart = new Chart("lineChart", {
      type: "line",
      data: {
        labels: ["Standard", "Delux", "Super Delux"],
        datasets: [
          {
            label: "Currrent case",
            fill: true,
            data: [25000, 30000, 30000],
            lineTension: 0.2,
            borderColor: "blue",
            borderWidth: 1
          },
          {
            label: "Upxselling technology",
            fill: true,
            data: [25000, 46000, 66000],
            lineTension: 0.2,
            borderColor: "green",
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Revenue model"
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });

    this.pieChart = new Chart("pieChart-1", {
      type: "pie",
      data: {
        datasets: [
          {
            data: [137000, 85000],
            backgroundColor: ["green", "blue"],
            label: "Dataset 1"
          }
        ],
        labels: ["Upxselling", "Current"]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Revenue calulated"
        }
      }
    });

    this.barChart = new Chart("barChart", {
      type: "bar",
      data: {
        labels: ["Standard", "Delux", "Super Delux"],
        datasets: [
          {
            label: "Current Case",
            backgroundColor: "blue",
            yAxisID: "y-axis-1",
            data: [5, 3, 2]
          },
          {
            label: "Upxselling Technology",
            backgroundColor: "green",
            yAxisID: "y-axis-2",
            data: [5, 5, 5]
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Rooms vs Types of rooms"
        },
        tooltips: {
          mode: "index",
          intersect: true
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: true,
              position: "left",
              id: "y-axis-1"
            },
            {
              ticks: {
                beginAtZero: true
              },              
              type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: true,
              position: "right",
              id: "y-axis-2",
              gridLines: {
                drawOnChartArea: false
              }
            }
          ]
        }
      }
    });

    this.pieChart = new Chart("pieChart-2", {
      type: "pie",
      data: {
        datasets: [
          {
            data: [15, 10],
            backgroundColor: ["green", "blue"],
            label: "Rooms"
          }
        ],
        labels: ["Upxselling", "Current"]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Rooms occupied"
        }
      }
    });
  }
}
