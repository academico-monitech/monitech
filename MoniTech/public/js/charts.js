
var cts = document.getElementById("chart-storage-doughnut");
var chartStorage = new Chart(cts, {
  type: 'doughnut',
  options: {
    cutout: "50",
    aspectRatio: 1,
    plugins: {
        legend: {
          display: false
        }
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
    backgroundColor: "#3df170",
    plugins: {
        legend: {
            display: false,

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
    labels: [1, 1, 1, 1, 1, 1, 1],
    datasets: [
        {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "#a16acd",
            tension: 0,
            fill: true,
        },
    ],
};

const datasecond = {
    labels: [1, 1, 1, 1, 1, 1, 1],
    datasets: [
        {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
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

