new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    lineColor:['orange'],
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { year: '2016', value: 10 },
      { year: '2017', value: 32 },
      { year: '2018', value: 40 },
      { year: '2019', value: 75 },
      { year: '2020', value: 50 },
      { year: '2021', value: 80 },
      { year: '2022', value: 60 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    ykeys: ['value'],
    labels: ['Value']
  });
  Morris.Donut({
    element: 'donut-example',
    data: [
      {label: "Iphone 13 Promax", value: 48},
      {label: "SamSung S22 Ultra", value: 22},
      {label: "FindX 5 Pro", value: 20}
    ],
    colors:['orange','#0072f2','#f42a26'],
    labeColor:'#ffffff'
  });