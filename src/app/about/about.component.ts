import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Chart } from "chart.js";
import { TourService } from "ngx-tour-md-menu";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  object: any = {}
  title: string = "chart";

  noOfTotalTypesOfRoom: number = 3
  typesOfRoom = ["Standard", "Delux", "Super Delux"]
  totalNoOfRooms = [5, 5, 5]
  occupiedRooms = [4, 3, 2]
  priceOfEachTypeRoom = [5000, 10000, 15000]
  totalIncome = [25000, 50000, 75000]
  totalIncomeOfSoldRooms = [25000, 20000, 30000, 75000]
  totalIncomeOfSoldRoomsFree = [25000, 25000, 25000, 75000]
  totalIncomeOfSoldRoomBid = [25000, 35000, 50000, 75000]

  constructor(public tourService: TourService) {
    
    this.tourService.initialize([{
      anchorId: 'click',
      content: 'Click here.',
      title: 'Click',
      enableBackdrop: true

    },{
      anchorId: 'click2',
      content: 'Click2 is here.',
      title: 'Click2',
      enableBackdrop: true

    },{
      anchorId: 'Click3',
      // placement: 'top',
      content: 'Click3 is here..',
      title: 'Click3',
      enableBackdrop: true
    },{
      anchorId: 'Click4',
      // placement: 'top',
      content: 'Click4 is here.',
      title: 'Click4',
      enableBackdrop: true
    }]);
  }
  generateGraph() {
    this.object.LineChart.update()
    this.object.pieChart1.update()
    this.object.barChart.update()
    this.object.pieChart2.update()
    this.object.barChart1.update()
    this.object.barChart3.update()
  }


  getArray(noOfTimes: number): any {
    let arrRooms = []
    for (let i = 0; i < noOfTimes; i++) {
      arrRooms.push(i);
    }
    return arrRooms;
  }

  getCurrentIncome() {
    let arr = []
    arr = this.priceOfEachTypeRoom.map((obj, index) => {
      return obj * this.occupiedRooms[index]
    })
    return arr;
  }
  getUpxsellingIncome() {
    let arr = []
    arr = this.priceOfEachTypeRoom.map((obj, index) => {
      return obj * this.totalNoOfRooms[index]
    })
    return arr;
  }

  ngOnInit() {

    this.object.LineChart = new Chart("lineChart", {
      type: "line",
      data: {
        labels: this.typesOfRoom,
        datasets: [
          {
            label: "Currrent case",
            fill: true,
            data: this.getCurrentIncome(),
            lineTension: 0.2,
            borderColor: "blue",
            borderWidth: 1
          },
          {
            label: "Upxselling technology",
            fill: true,
            data: this.getUpxsellingIncome(),
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

    this.object.pieChart1 = new Chart("pieChart-1", {
      type: "pie",
      data: {
        datasets: [
          {
            // data: [137000, 85000],
            data: [
              this.getUpxsellingIncome().reduce((accumulator, a) => {
                return accumulator + a
              })
              ,
              this.getCurrentIncome().reduce((accumulator, a) => {
                return accumulator + a
              })
            ],
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

    this.object.barChart = new Chart("barChart", {
      type: "bar",
      data: {
        labels: this.typesOfRoom,
        datasets: [
          {
            label: "Total Income",
            backgroundColor: "blue",
            yAxisID: "y-axis-1",
            data: this.totalIncome
          },
          {
            label: "No Upgradation Income",
            backgroundColor: "green",
            yAxisID: "y-axis-2",
            data: this.totalIncomeOfSoldRooms
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Total (fully filled) vs No upgradation (not-fully filled)"
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
    this.object.barChart1 = new Chart("barChart-2", {
      type: "bar",
      data: {
        labels: this.totalIncome,
        datasets: [
          {
            label: "Total Income",
            backgroundColor: "blue",
            yAxisID: "y-axis-1",
            data: this.totalIncome
          },
          {
            label: "No Upgradation Income",
            backgroundColor: "green",
            yAxisID: "y-axis-2",
            data: this.totalIncomeOfSoldRoomsFree
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Total(fully filled) vs Free upgradation (not-fully filled)"
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
    this.object.barChart3 = new Chart("barChart-3", {
      type: "bar",
      data: {
        labels: this.totalIncome,
        datasets: [
          {
            label: "Total Income",
            backgroundColor: "blue",
            yAxisID: "y-axis-1",
            data: this.totalIncome
          },
          {
            label: "No Upgradation Income",
            backgroundColor: "green",
            yAxisID: "y-axis-2",
            data: this.totalIncomeOfSoldRoomBid
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Total(fully filled) vs Upxselling Technology (not-fully filled)"
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

    this.object.pieChart2 = new Chart("pieChart-2", {
      type: "pie",
      data: {
        datasets: [
          {
            data: [
              this.totalNoOfRooms.reduce((accumulator, a) => {
                return accumulator + a
              })
              ,
              this.occupiedRooms.reduce((accumulator, a) => {
                return accumulator + a
              })
            ],
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

  Demo(){
    this.tourService.start();
  }

}
