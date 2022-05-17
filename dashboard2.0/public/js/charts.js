
var cts = document.getElementById("chart-storage-doughnut");
var chartStorage = new Chart(cts, {
  type: 'doughnut',
  options: {
    cutout: "65",
    aspectRatio: 1,
    plugins: {
        legend: {
          display: false
        }
    }, 
    animation: {
        duration: 0
    }
  },
  data: {
    labels:['Usado', 'Livre'],
    datasets: [{
      backgroundColor: [
        "#387ADD",
        "#444444"
      ],
      data: [1,2],
      borderWidth: 0,

    }]
  }
});

var optionsfirst = {
    responsive: true,
    plugins: {
        legend: {
         display: false
        }
       },
    animation: {
        duration: 0
    },
    elements: {
        points: {
            borderWidth: 0
        }
    },
    backgroundColor: "#a16acd",
    plugins: {
        legend: {
            display: false,

        },
        title: {
            display: true,
            text: "Histórico CPU [%]",
            color: "#FFF",
        },
    },
    fill: true,
    scales: {
        x: {

            grid: {
                display: false,
            },
            ticks: {
                beginAtZero:true,
                color: "#FFF",
            }
        },
        y: {
            max: 100,
            min: 0,
            ticks: {
                color: "#FFF",
                stepSize: 50,
                fontColor: "#5555ff",
            },
            grid: {
                display: false,
            },
        },
    },
    elements: {
        line: {
            backgroundColor: "#c27afb",
        },
    },
}

var optionssecond = {
    responsive: true,
    animation: {
        duration: '1s'
    },
    backgroundColor: "#3df170",
    plugins: {
        datalabels: {
            color: '#ffffff',
            font: {
              size: 8,
            }
          },
        legend: {
            display: false,
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 2
                }
            }
        },
        title: {
            display: true,
            text: "Histórico memória RAM [%]",
            color: "#FFF",
        },

    },
    fill: true,
    scales: {
        x: {

            grid: {
                display: false,
            },
            ticks: {
                beginAtZero:true,
                color: "#FFF",
            }
        },
        y: {
            max: 100,
            min: 0,
            ticks: {
                color: "#FFF",
                stepSize: 50,
                fontColor: "#5555ff",
            },
            grid: {
                display: false,
            },
        },
    },
    elements: {
        line: {
            backgroundColor: "#a4ffa7",
        },
    },
}

const datafirst = {
    labels: [],
    datasets: [
        {
            data: [],
            fill: false,
            borderColor: "#a16acd",
            tension: 0,
            fill: true,
        },
    ],
};

const datasecond = {

    datasets: [
        {
            data: [],
            fill: false,
            borderColor: "#3df170",
            tension: 0,
            fill: true,
        },
    ],
};


const configfirst = {
    type: "line",
    data: datafirst,
    options: optionsfirst
};

const configsecond = {
    type: "line",
    data: datasecond,
    options: optionssecond
};

const ctCPU = document.getElementById("chartCPU");
const ctRAM = document.getElementById("chartRAM");
const chartCPU = new Chart(ctCPU, configfirst);
const chartRAM = new Chart(ctRAM, configsecond);


function addData(chart, label, data) {
    if(chart.data.labels.slice(-1) != label || chart.data.labels.length == 0){
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        if (chart.data.datasets[0].data.length > 10) {
            removeData(chart);
        }
        chart.update();
    }
}

function removeData(chart) {
    chart.data.labels.shift();
    chart.data.datasets[0].data.shift();
    chart.update();
}

function setDisco(livre, usado) {
    chartStorage.data.datasets[0].data = [usado, livre];
    chartStorage.update();
}

function clearChart(chart) {
    chart.data.labels = [];
    chart.data.datasets[0].data = [];
    chart.update();
}