const tasks = [
    {'elementId' : 'aTask', 'statistics' : [85, 0, 3, 2, 2, 5, 2, 1, 0, 0]},
    {'elementId' : 'bTask', 'statistics' : [65, 1, 6, 2, 10, 5, 4, 1, 0, 5]},
    {'elementId' : 'cTask', 'statistics' : [73, 0, 7, 2, 2, 15, 0, 0, 1, 0]},
    {'elementId' : 'dTask', 'statistics' : [41, 3, 20, 11, 8, 6, 7, 0, 3, 1]},
    {'elementId' : 'eTask', 'statistics' : [28, 0, 35, 3, 11, 5, 14, 1, 0, 3]},
    {'elementId' : 'fTask', 'statistics' : [7, 0, 46, 8, 11, 15, 2, 9, 2, 0]}
];

(function () {
    tasks.forEach(function(task) {
        createTaskGraph(task);
    });
}());

function createTaskGraph(task) {
    let ctx = document.getElementById(task.elementId).getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: task.statistics,
                backgroundColor: [
                    '#4dc9f6',
                    '#f67019',
                    '#f53794',
                    '#537bc4',
                    '#acc236',
                    '#166a8f',
                    '#00a950',
                    '#58595b',
                    '#8549ba'
                ]
            }],
            labels: [
                'OK',
                'Compilation error',
                'Wrong answer',
                'Presentation error',
                'Time-limit exceeded',
                'Memory limit exceeded',
                'Output limit exceeded',
                'Run-time error',
                'Precompile check failed',
                'Idleness limit exceeded'
            ]
        }
    });
}