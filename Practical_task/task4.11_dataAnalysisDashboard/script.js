let student = [{ name: "Jay", hindi: 49, english: 77, history: 69, science: 88, economics: 75 },
{ name: "Deep", hindi: 66, english: 56, history: 54, science: 58, economics: 48 },
{ name: "Raj", hindi: 44, english: 78, history: 88, science: 89, economics: 55 },
{ name: "Sahil", hindi: 87, english: 66, history: 48, science: 41, economics: 85 },
{ name: "Manoj", hindi: 86, english: 87, history: 45, science: 56, economics: 55 }]
let total = 0;
let subjectTotals = [];
let show = document.getElementById("show");
let chart;
let typeChart = "bar";
let subject = "all";

function calculateMarks(sub) {
    subjectTotals = []
    if (sub != "all") {
        student.forEach(student => {
            marks = student[sub];
            let studentTotal = {
                totalMarks: marks
            };
            subjectTotals.push(studentTotal);
        });
    }
    else {
        student.forEach(student => {
            total = 0;
            total = student.hindi + student.english + student.history + student.science + student.economics;
            let studentTotal = {
                totalMarks: total
            };
            subjectTotals.push(studentTotal);
        });

    }
}

const calculateMetrics = () => {
    let sum = 0;
    let min = subjectTotals[0].totalMarks;
    let max = subjectTotals[0].totalMarks;

    for (let i = 0; i < subjectTotals.length; i++) {
        const value = subjectTotals[i].totalMarks;
        sum += value;
        if (value < min) min = value;
        if (value > max) max = value;
    }
    const average = sum / subjectTotals.length;
    return {
        average,
        min,
        max
    };
};

const displayMetrics = () => {
    const metrics = calculateMetrics();
    const metricsList = document.getElementById('metrics-list');
    metricsList.innerHTML = `
        <li>Average Marks: ${metrics.average}</li>
        <li>Minimum Marks: ${metrics.min}</li>
        <li>Maximum Marks: ${metrics.max}</li>
      `;
};


function setType() {
    typeChart = document.getElementById("chartType").value;
    subject = document.getElementById("subject").value;
    chart.destroy();
    calculateMarks(subject);
    displayChart();
    displayMetrics();
}

function displayChart() {
    let ctxBar = document.getElementById('bar-chart').getContext('2d');
    const labels = student.map(item => item.name);
    const dataValues = subjectTotals.map(item => item.totalMarks);
    const types = typeChart;

    chart = new Chart(ctxBar, {
        type: types,
        data: {
            labels: labels,
            datasets: [{
                label: subject,
                data: dataValues,
                backgroundColor: [
                    "#3E95CD",
                    "#8E5EA2",
                    "#3CBA9F",
                    "#E8C3B9",
                    "#C45850",],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

calculateMarks(subject);
displayChart();
displayMetrics();
show.addEventListener("click", setType);