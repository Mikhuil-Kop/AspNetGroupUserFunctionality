import Plot from "react-plotly.js";


const dummy = Object.assign({
    "data": [
        {
            "mode": "lines",
            "x": [
                -35,
                -34,
                -33,
                -32,
                -31,
                -30,
                -29,
                -28,
                -27,
                -26,
                -25,
                -24,
                -23,
                -22,
                -21,
                -20,
                -19,
                -18,
                -17,
                -16,
                -15,
                -14,
                -13,
                -12,
                -11,
                -10,
                -9,
                -8,
                -7,
                -6,
                -5,
                -4,
                -3,
                -2,
                -1,
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33
            ],
            "y": [
                0,
                -0.7081441416527816,
                -1.688615989394508,
                -2.8646839762003777,
                -4.2461361910979845,
                -5.831208856350877,
                -7.605866201428849,
                -9.489654242065427,
                -11.499820673744516,
                -13.709640048893462,
                -16.018772182873157,
                -18.426966207446984,
                -20.882309477988823,
                -23.487967764293625,
                -26.21377543573063,
                -29.01924143709056,
                -31.80024578402551,
                -34.62379226773698,
                -37.2840488407065,
                -39.90139494612361,
                -42.51171395844077,
                -45.234830833353186,
                -47.88491391405062,
                -50.555889950117354,
                -53.20877391146171,
                -55.82346973924986,
                -58.475585657985725,
                -61.07560408839893,
                -63.654354801111694,
                -66.17493668914848,
                -68.67995841036952,
                -71.27926155038342,
                -73.90374226770935,
                -76.26419434468013,
                -77.63068898813842,
                -76.99064030787203,
                -74.63366351214236,
                -71.69813560754858,
                -68.8350670991701,
                -66.12189939792226,
                -63.360052165009606,
                -60.511061978139296,
                -57.568781456667516,
                -54.52214540066919,
                -51.50437401304033,
                -48.625260921213396,
                -45.915328901070424,
                -43.326997326084836,
                -40.66244802229567,
                -37.95054135613184,
                -35.14791476723596,
                -32.38559489501719,
                -29.675170067670916,
                -27.05119907505742,
                -24.40462210360443,
                -21.851240463423405,
                -19.41157507846782,
                -17.11322646304717,
                -14.859615490545991,
                -12.700493976517972,
                -10.63626153916317,
                -8.763183513464716,
                -7.011187841233576,
                -5.363638193260537,
                -3.896992865148796,
                -2.6234903148976194,
                -1.5433104575224181,
                -0.6457336565593723,
                0
            ],
            "type": "scatter"
        }
    ],
    "layout": {
        "title": {
            "text": "Potential profile"
        },
        "xaxis": {
            "gridcolor": "grey",
            "griddash": "dot",
            "gridwidth": 1,
            "linecolor": "black",
            "linewidth": 1,
            "showgrid": true,
            "ticks": "outside",
            "title": {
                "text": "Cell num"
            }
        },
        "yaxis": {
            "gridcolor": "grey",
            "griddash": "dot",
            "gridwidth": 1,
            "linecolor": "black",
            "linewidth": 1,
            "showgrid": true,
            "ticks": "outside",
            "title": {
                "text": "Phi, V"
            }
        },
        "template": {
            "data": {
                "histogram2dcontour": [
                    {
                        "type": "histogram2dcontour",
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "colorscale": [
                            [
                                0,
                                "#0d0887"
                            ],
                            [
                                0.1111111111111111,
                                "#46039f"
                            ],
                            [
                                0.2222222222222222,
                                "#7201a8"
                            ],
                            [
                                0.3333333333333333,
                                "#9c179e"
                            ],
                            [
                                0.4444444444444444,
                                "#bd3786"
                            ],
                            [
                                0.5555555555555556,
                                "#d8576b"
                            ],
                            [
                                0.6666666666666666,
                                "#ed7953"
                            ],
                            [
                                0.7777777777777778,
                                "#fb9f3a"
                            ],
                            [
                                0.8888888888888888,
                                "#fdca26"
                            ],
                            [
                                1,
                                "#f0f921"
                            ]
                        ]
                    }
                ],
                "choropleth": [
                    {
                        "type": "choropleth",
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    }
                ],
                "histogram2d": [
                    {
                        "type": "histogram2d",
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "colorscale": [
                            [
                                0,
                                "#0d0887"
                            ],
                            [
                                0.1111111111111111,
                                "#46039f"
                            ],
                            [
                                0.2222222222222222,
                                "#7201a8"
                            ],
                            [
                                0.3333333333333333,
                                "#9c179e"
                            ],
                            [
                                0.4444444444444444,
                                "#bd3786"
                            ],
                            [
                                0.5555555555555556,
                                "#d8576b"
                            ],
                            [
                                0.6666666666666666,
                                "#ed7953"
                            ],
                            [
                                0.7777777777777778,
                                "#fb9f3a"
                            ],
                            [
                                0.8888888888888888,
                                "#fdca26"
                            ],
                            [
                                1,
                                "#f0f921"
                            ]
                        ]
                    }
                ],
                "heatmap": [
                    {
                        "type": "heatmap",
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "colorscale": [
                            [
                                0,
                                "#0d0887"
                            ],
                            [
                                0.1111111111111111,
                                "#46039f"
                            ],
                            [
                                0.2222222222222222,
                                "#7201a8"
                            ],
                            [
                                0.3333333333333333,
                                "#9c179e"
                            ],
                            [
                                0.4444444444444444,
                                "#bd3786"
                            ],
                            [
                                0.5555555555555556,
                                "#d8576b"
                            ],
                            [
                                0.6666666666666666,
                                "#ed7953"
                            ],
                            [
                                0.7777777777777778,
                                "#fb9f3a"
                            ],
                            [
                                0.8888888888888888,
                                "#fdca26"
                            ],
                            [
                                1,
                                "#f0f921"
                            ]
                        ]
                    }
                ],
                "heatmapgl": [
                    {
                        "type": "heatmapgl",
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "colorscale": [
                            [
                                0,
                                "#0d0887"
                            ],
                            [
                                0.1111111111111111,
                                "#46039f"
                            ],
                            [
                                0.2222222222222222,
                                "#7201a8"
                            ],
                            [
                                0.3333333333333333,
                                "#9c179e"
                            ],
                            [
                                0.4444444444444444,
                                "#bd3786"
                            ],
                            [
                                0.5555555555555556,
                                "#d8576b"
                            ],
                            [
                                0.6666666666666666,
                                "#ed7953"
                            ],
                            [
                                0.7777777777777778,
                                "#fb9f3a"
                            ],
                            [
                                0.8888888888888888,
                                "#fdca26"
                            ],
                            [
                                1,
                                "#f0f921"
                            ]
                        ]
                    }
                ],
                "contourcarpet": [
                    {
                        "type": "contourcarpet",
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    }
                ],
                "contour": [
                    {
                        "type": "contour",
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "colorscale": [
                            [
                                0,
                                "#0d0887"
                            ],
                            [
                                0.1111111111111111,
                                "#46039f"
                            ],
                            [
                                0.2222222222222222,
                                "#7201a8"
                            ],
                            [
                                0.3333333333333333,
                                "#9c179e"
                            ],
                            [
                                0.4444444444444444,
                                "#bd3786"
                            ],
                            [
                                0.5555555555555556,
                                "#d8576b"
                            ],
                            [
                                0.6666666666666666,
                                "#ed7953"
                            ],
                            [
                                0.7777777777777778,
                                "#fb9f3a"
                            ],
                            [
                                0.8888888888888888,
                                "#fdca26"
                            ],
                            [
                                1,
                                "#f0f921"
                            ]
                        ]
                    }
                ],
                "surface": [
                    {
                        "type": "surface",
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "colorscale": [
                            [
                                0,
                                "#0d0887"
                            ],
                            [
                                0.1111111111111111,
                                "#46039f"
                            ],
                            [
                                0.2222222222222222,
                                "#7201a8"
                            ],
                            [
                                0.3333333333333333,
                                "#9c179e"
                            ],
                            [
                                0.4444444444444444,
                                "#bd3786"
                            ],
                            [
                                0.5555555555555556,
                                "#d8576b"
                            ],
                            [
                                0.6666666666666666,
                                "#ed7953"
                            ],
                            [
                                0.7777777777777778,
                                "#fb9f3a"
                            ],
                            [
                                0.8888888888888888,
                                "#fdca26"
                            ],
                            [
                                1,
                                "#f0f921"
                            ]
                        ]
                    }
                ],
                "mesh3d": [
                    {
                        "type": "mesh3d",
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    }
                ],
                "scatter": [
                    {
                        "fillpattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        },
                        "type": "scatter"
                    }
                ],
                "parcoords": [
                    {
                        "type": "parcoords",
                        "line": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        }
                    }
                ],
                "scatterpolargl": [
                    {
                        "type": "scatterpolargl",
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        }
                    }
                ],
                "bar": [
                    {
                        "error_x": {
                            "color": "#2a3f5f"
                        },
                        "error_y": {
                            "color": "#2a3f5f"
                        },
                        "marker": {
                            "line": {
                                "color": "#E5ECF6",
                                "width": 0.5
                            },
                            "pattern": {
                                "fillmode": "overlay",
                                "size": 10,
                                "solidity": 0.2
                            }
                        },
                        "type": "bar"
                    }
                ],
                "scattergeo": [
                    {
                        "type": "scattergeo",
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        }
                    }
                ],
                "scatterpolar": [
                    {
                        "type": "scatterpolar",
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        }
                    }
                ],
                "histogram": [
                    {
                        "marker": {
                            "pattern": {
                                "fillmode": "overlay",
                                "size": 10,
                                "solidity": 0.2
                            }
                        },
                        "type": "histogram"
                    }
                ],
                "scattergl": [
                    {
                        "type": "scattergl",
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        }
                    }
                ],
                "scatter3d": [
                    {
                        "type": "scatter3d",
                        "line": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        },
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        }
                    }
                ],
                "scattermapbox": [
                    {
                        "type": "scattermapbox",
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        }
                    }
                ],
                "scatterternary": [
                    {
                        "type": "scatterternary",
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        }
                    }
                ],
                "scattercarpet": [
                    {
                        "type": "scattercarpet",
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        }
                    }
                ],
                "carpet": [
                    {
                        "aaxis": {
                            "endlinecolor": "#2a3f5f",
                            "gridcolor": "white",
                            "linecolor": "white",
                            "minorgridcolor": "white",
                            "startlinecolor": "#2a3f5f"
                        },
                        "baxis": {
                            "endlinecolor": "#2a3f5f",
                            "gridcolor": "white",
                            "linecolor": "white",
                            "minorgridcolor": "white",
                            "startlinecolor": "#2a3f5f"
                        },
                        "type": "carpet"
                    }
                ],
                "table": [
                    {
                        "cells": {
                            "fill": {
                                "color": "#EBF0F8"
                            },
                            "line": {
                                "color": "white"
                            }
                        },
                        "header": {
                            "fill": {
                                "color": "#C8D4E3"
                            },
                            "line": {
                                "color": "white"
                            }
                        },
                        "type": "table"
                    }
                ],
                "barpolar": [
                    {
                        "marker": {
                            "line": {
                                "color": "#E5ECF6",
                                "width": 0.5
                            },
                            "pattern": {
                                "fillmode": "overlay",
                                "size": 10,
                                "solidity": 0.2
                            }
                        },
                        "type": "barpolar"
                    }
                ],
                "pie": [
                    {
                        "automargin": true,
                        "type": "pie"
                    }
                ]
            },
            "layout": {
                "autotypenumbers": "strict",
                "colorway": [
                    "#636efa",
                    "#EF553B",
                    "#00cc96",
                    "#ab63fa",
                    "#FFA15A",
                    "#19d3f3",
                    "#FF6692",
                    "#B6E880",
                    "#FF97FF",
                    "#FECB52"
                ],
                "font": {
                    "color": "#2a3f5f"
                },
                "hovermode": "closest",
                "hoverlabel": {
                    "align": "left"
                },
                "paper_bgcolor": "white",
                "plot_bgcolor": "#E5ECF6",
                "polar": {
                    "bgcolor": "#E5ECF6",
                    "angularaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "radialaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    }
                },
                "ternary": {
                    "bgcolor": "#E5ECF6",
                    "aaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "baxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "caxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    }
                },
                "coloraxis": {
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    }
                },
                "colorscale": {
                    "sequential": [
                        [
                            0,
                            "#0d0887"
                        ],
                        [
                            0.1111111111111111,
                            "#46039f"
                        ],
                        [
                            0.2222222222222222,
                            "#7201a8"
                        ],
                        [
                            0.3333333333333333,
                            "#9c179e"
                        ],
                        [
                            0.4444444444444444,
                            "#bd3786"
                        ],
                        [
                            0.5555555555555556,
                            "#d8576b"
                        ],
                        [
                            0.6666666666666666,
                            "#ed7953"
                        ],
                        [
                            0.7777777777777778,
                            "#fb9f3a"
                        ],
                        [
                            0.8888888888888888,
                            "#fdca26"
                        ],
                        [
                            1,
                            "#f0f921"
                        ]
                    ],
                    "sequentialminus": [
                        [
                            0,
                            "#0d0887"
                        ],
                        [
                            0.1111111111111111,
                            "#46039f"
                        ],
                        [
                            0.2222222222222222,
                            "#7201a8"
                        ],
                        [
                            0.3333333333333333,
                            "#9c179e"
                        ],
                        [
                            0.4444444444444444,
                            "#bd3786"
                        ],
                        [
                            0.5555555555555556,
                            "#d8576b"
                        ],
                        [
                            0.6666666666666666,
                            "#ed7953"
                        ],
                        [
                            0.7777777777777778,
                            "#fb9f3a"
                        ],
                        [
                            0.8888888888888888,
                            "#fdca26"
                        ],
                        [
                            1,
                            "#f0f921"
                        ]
                    ],
                    "diverging": [
                        [
                            0,
                            "#8e0152"
                        ],
                        [
                            0.1,
                            "#c51b7d"
                        ],
                        [
                            0.2,
                            "#de77ae"
                        ],
                        [
                            0.3,
                            "#f1b6da"
                        ],
                        [
                            0.4,
                            "#fde0ef"
                        ],
                        [
                            0.5,
                            "#f7f7f7"
                        ],
                        [
                            0.6,
                            "#e6f5d0"
                        ],
                        [
                            0.7,
                            "#b8e186"
                        ],
                        [
                            0.8,
                            "#7fbc41"
                        ],
                        [
                            0.9,
                            "#4d9221"
                        ],
                        [
                            1,
                            "#276419"
                        ]
                    ]
                },
                "xaxis": {
                    "gridcolor": "white",
                    "linecolor": "white",
                    "ticks": "",
                    "title": {
                        "standoff": 15
                    },
                    "zerolinecolor": "white",
                    "automargin": true,
                    "zerolinewidth": 2
                },
                "yaxis": {
                    "gridcolor": "white",
                    "linecolor": "white",
                    "ticks": "",
                    "title": {
                        "standoff": 15
                    },
                    "zerolinecolor": "white",
                    "automargin": true,
                    "zerolinewidth": 2
                },
                "scene": {
                    "xaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white",
                        "gridwidth": 2
                    },
                    "yaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white",
                        "gridwidth": 2
                    },
                    "zaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white",
                        "gridwidth": 2
                    }
                },
                "shapedefaults": {
                    "line": {
                        "color": "#2a3f5f"
                    }
                },
                "annotationdefaults": {
                    "arrowcolor": "#2a3f5f",
                    "arrowhead": 0,
                    "arrowwidth": 1
                },
                "geo": {
                    "bgcolor": "white",
                    "landcolor": "#E5ECF6",
                    "subunitcolor": "white",
                    "showland": true,
                    "showlakes": true,
                    "lakecolor": "white"
                },
                "title": {
                    "x": 0.05
                },
                "mapbox": {
                    "style": "light"
                }
            }
        }
    }
});

dummy.layout.plot_bgcolor = 'rgba(0,0,0,0)';
dummy.layout.paper_bgcolor = 'rgba(0,0,0,0)';

dummy.layout.title.font = { color: `#${process.env.REACT_APP_NAVIGATION_TAB_COLOR}` }

dummy.layout.xaxis.showline = false;
dummy.layout.xaxis.showgrid = false;
dummy.layout.xaxis.zeroline = false;
dummy.layout.xaxis.tickfont = { color: `#${process.env.REACT_APP_NAVIGATION_TAB_COLOR}` }
dummy.layout.xaxis.titlefont = { color: `#${process.env.REACT_APP_NAVIGATION_TAB_COLOR}` }

dummy.layout.yaxis.showline = false;
dummy.layout.yaxis.showgrid = false;
dummy.layout.yaxis.zeroline = false;
dummy.layout.yaxis.tickfont = { color: `#${process.env.REACT_APP_NAVIGATION_TAB_COLOR}` }
dummy.layout.yaxis.titlefont = { color: `#${process.env.REACT_APP_NAVIGATION_TAB_COLOR}` }

const CustomPlot = () => {
    return (
        <Plot data={dummy.data} layout={dummy.layout}/>
    )
}

export default CustomPlot;