(async () => {

    const data = await fetch(
        'https://demo-live-data.highcharts.com/aapl-v.json'
    ).then(response => response.json());

    // create the chart
    Highcharts.stockChart('container', {
        chart: {
            alignTicks: false
        },

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'Afet Analiz Haritası'
        }, 

        series: [
            {
                type: 'column',
                name: 'Talep Adedi',
                colorByPoint: false,
                data: [
                    {
                        name: 'Enkaz',
                        y: 63.06,
                        drilldown: 'Enkaz'
                    },
                    {
                        name: 'Sağlık',
                        y: 19.84,
                        drilldown: 'Sağlık'
                    },
                    {
                        name: 'Barınma',
                        y: 4.18,
                        drilldown: 'Barınma'
                    },
                    {
                        name: 'Erzak',
                        y: 40.12,
                        drilldown: 'Erzak'
                    },
                    {
                        name: 'Kıyafet',
                        y: 2.33,
                        drilldown: 'Kıyafet'
                    },
                ]
            }
        ],
        drilldown: {
            breadcrumbs: {
                position: {
                    align: 'right'
                }
            },
            series: [
                {
                    name: 'Enkaz',
                    id: 'Enkaz',
                    data: [
                        [
                            'v65.0',
                            0.1
                        ],
                        [
                            'v64.0',
                            1.3
                        ]
                    ]
                },
                {
                    name: 'Sağlık',
                    id: 'Sağlık',
                    data: [
                        [
                            'v58.0',
                            1.02
                        ],
                        [
                            'v57.0',
                            7.36
                        ],
                        [
                            'v56.0',
                            0.35
                        ],
                        [
                            'v55.0',
                            0.11
                        ],
                        [
                            'v54.0',
                            0.1
                        ],
                        [
                            'v52.0',
                            0.95
                        ],
                        [
                            'v51.0',
                            0.15
                        ]
                    ]
                },
                {
                    name: 'Barınma',
                    id: 'Barınma',
                    data: [
                        [
                            'v11.0',
                            6.2
                        ],
                        [
                            'v10.0',
                            0.29
                        ],
                        [
                            'v9.0',
                            0.27
                        ],
                        [
                            'v8.0',
                            0.47
                        ]
                    ]
                },
                {
                    name: 'Erzak',
                    id: 'Erzak',
                    data: [
                        [
                            'v11.0',
                            3.39
                        ],
                        [
                            'v10.1',
                            0.96
                        ],
                        [
                            'v10.0',
                            0.36
                        ],
                        [
                            'v9.1',
                            0.54
                        ],
                        [
                            'v9.0',
                            0.13
                        ],
                        [
                            'v5.1',
                            0.2
                        ]
                    ]
                },
                {
                    name: 'Kıyafet',
                    id: 'Kıyafet',
                    data: [
                        [
                            'v16',
                            2.6
                        ],
                        [
                            'v15',
                            0.92
                        ],
                        [
                            'v14',
                            0.4
                        ],
                        [
                            'v13',
                            0.1
                        ]
                    ]
                }
            ]
        }        
    });
})();