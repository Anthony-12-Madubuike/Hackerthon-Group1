'use strict';
$(document).ready(function () {
    setTimeout(function () {
        $(function () {
            var options = {
                chart: {
                    height: 300,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false,
                    width: 2,
                },
                stroke: {
                    curve: 'straight',
                },
                colors: ["#1d8dfd"],
                series: [{
                    name: "Score",
                    data: [30, 30.5, 45, 20, 49, 50, 74, 80, 100]
                }],
                title: {
                    text: 'Session Analysis',
                    align: 'left',
                },
                grid: {
                    row: {
                        colors: ['darkslateblue', '#040134'], // takes an array which will be repeated on columns
                        opacity: 0.7
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                }
            }

            var chart = new ApexCharts(
                document.querySelector("#line-chart-1"),
                options
            );
            chart.render();
        });


        $(function () {
            var options = {
                chart: {
                    height: 100,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 0,
                            size: '3%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,

                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: ["#4680ff", "#8a2be2", "#00ffff", "#ffffff"],
                series: [110, 100, 61, 90],
                labels: ['Users', 'Students', 'Tutors', 'Courses'],
                legend: {
                    show: true,
                    floating: false,
                    fontSize: '10px',
                    position: 'left',
                    offsetX: 0,
                    offsetY: 0,
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    formatter: function (seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                    },
                    itemMargin: {
                        horizontal: 1,
                    }
                },
                responsive: [{
                    breakpoint: 219,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }]
            }

            var chart = new ApexCharts(
                document.querySelector("#radialBar-chart-2"),
                options
            );

            chart.render();
        });

        $(function () {
            var options = {
                chart: {
                    height: 170,
                    type: 'area',
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                colors: ["#8b008b", "#daa520"],
                series: [{
                    name: 'Today',
                    data: [31, 40, 28, 51, 42, 109, 100]
                }, {
                    name: 'Yesterday',
                    data: [11, 32, 45, 32, 34, 52, 41]
                }],

                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                }
            }

            var chart = new ApexCharts(
                document.querySelector("#area-chart-1"),
                options
            );

            chart.render();
        });



    }, 700)
})



