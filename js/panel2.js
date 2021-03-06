// Graph Panel 1
var layout2 = {
    title: 'Consumer and Producer Surplus',
    xaxis:{
        range: [0, 4],
        dtick: 1,
        title: 'Number of Books on Shelf',
        showgrid: true,
    },
    yaxis:{
        range: [0, 4],
        dtick: 1,
        title: 'Price of Books ($)'
    }
};

var supplyCurve2 = {
    x: [0, 1, 2, 3, 4],
    y: [4, 3, 2, 1, 0],
    name: 'Evans Demand',
    type: 'scatter'
}

var demandCurve2 = {
    name: 'Sandras Supply',
    x: [null],
    y: [null],
}

var graph2 = [supplyCurve2, demandCurve2];

Plotly.newPlot('panelGraph2', graph2, layout2);
