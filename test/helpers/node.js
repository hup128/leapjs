assert = require('chai').assert;
_ = require("underscore");

Leap = require('../../lib');

assertUtil = require('./../assertUtil');
var common =  require('./common');
fakeHand = common.fakeHand;
fakeFrame = common.fakeFrame;
fakeFinger = common.fakeFinger;
fakeTool = common.fakeTool;
fakeController = common.fakeController;
fakePluginFactory = common.fakePluginFactory;
fakeGesture = common.fakeGesture;

frame_schema = require('./../../schema/frame_schema.json');
pointable_schema = require('./../../schema/pointable_schema.json');
hand_schema = require('./../../schema/hand_schema.json');
ZSchema = require('z-schema');

frame_captured =  {
    "currentFrameRate": 57.729,
    "gestures":         [],
    "hands":            [
        {
            "direction":              [0.116025, 0.397141, -0.910394],
            "id":                     75,
            "palmNormal":             [0.297019, -0.888515, -0.349744],
            "palmPosition":           [-144.275, 207.575, 31.4698],
            "palmVelocity":           [-390.276, -74.6941, -118.947],
            "r":                      [
                [0.761971, 0.0674798, 0.644086],
                [-0.00466897, 0.995103, -0.0987318],
                [-0.647595, 0.0722235, 0.758555]
            ],
            "s":                      0.748275,
            "sphereCenter":           [-99.3956, 157.546, -13.5962],
            "sphereRadius":           91.7781,
            "stabilizedPalmPosition": [-143.651, 207.69, 31.6624],
            "t":                      [-67.3719, 7.81311, -19.4755],
            "timeVisible":            8.3428
        },
        {
            "direction":              [-0.131547, 0.261669, -0.956151],
            "id":                     6,
            "palmNormal":             [-0.0227986, -0.965076, -0.260975],
            "palmPosition":           [136.022, 152.594, 16.6373],
            "palmVelocity":           [593.785, -215.77, -44.4402],
            "r":                      [
                [0.815717, -0.152206, -0.558068],
                [0.177439, 0.98409, -0.00903859],
                [0.550565, -0.0916503, 0.829746]
            ],
            "s":                      0.53873,
            "sphereCenter":           [101.543, 138.562, -9.22113],
            "sphereRadius":           68.1544,
            "stabilizedPalmPosition": [135.574, 152.758, 16.6702],
            "t":                      [57.7219, -169.623, -122.51],
            "timeVisible":            6.591
        }
    ],
    "id":               4574,
    "interactionBox":   {
        "center": [0, 200, 0],
        "size":   [221.418, 221.418, 154.742]
    },
    "pointables":       [
        {
            "direction":             [-0.22687, -0.149369, -0.962403],
            "handId":                6,
            "id":                    60,
            "length":                44.7282,
            "stabilizedTipPosition": [147.069, 163.513, -80.6852],
            "timeVisible":           0.589689,
            "tipPosition":           [147.069, 163.513, -80.6852],
            "tipVelocity":           [872.498, -334.346, -56.9944],
            "tool":                  false,
            "touchDistance":         -0.509573,
            "touchZone":             "touching"
        },
        {
            "direction":             [0.0558289, -0.150502, -0.987032],
            "handId":                6,
            "id":                    88,
            "length":                29.2884,
            "stabilizedTipPosition": [173.456, 167.205, -80.0251],
            "timeVisible":           0.520327,
            "tipPosition":           [173.456, 167.205, -80.0251],
            "tipVelocity":           [1472.1, 327.431, -749.775],
            "tool":                  false,
            "touchDistance":         0.333333,
            "touchZone":             "hovering"
        },
        {
            "direction":             [0.26925, 0.150117, -0.951299],
            "handId":                75,
            "id":                    27,
            "length":                56.046,
            "stabilizedTipPosition": [-139.038, 247.778, -70.6847],
            "timeVisible":           0.450962,
            "tipPosition":           [-139.038, 247.778, -70.6847],
            "tipVelocity":           [-536.625, -83.4843, -164.63],
            "tool":                  false,
            "touchDistance":         -0.578846,
            "touchZone":             "hovering"
        },
        {
            "direction":             [-0.22766, -0.20453, -0.952018],
            "handId":                6,
            "id":                    45,
            "length":                61.5164,
            "stabilizedTipPosition": [114.968, 163.78, -69.0579],
            "timeVisible":           0.43356,
            "tipPosition":           [114.968, 163.78, -69.0579],
            "tipVelocity":           [708.326, -289.419, -9.22689],
            "tool":                  false,
            "touchDistance":         0.324819,
            "touchZone":             "hovering"
        },
        {
            "direction":             [0.153558, 0.218624, -0.963651],
            "handId":                75,
            "id":                    54,
            "length":                30.5523,
            "stabilizedTipPosition": [-158.615, 237.504, -64.0115],
            "timeVisible":           0.398856,
            "tipPosition":           [-158.615, 237.504, -64.0115],
            "tipVelocity":           [-520.154, -106.249, -112.379],
            "tool":                  false,
            "touchDistance":         0.330639,
            "touchZone":             "hovering"
        },
        {
            "direction":             [0.120586, 0.345061, -0.930802],
            "handId":                75,
            "id":                    29,
            "length":                44.749,
            "stabilizedTipPosition": [-113.63, 245.784, -54.1217],
            "timeVisible":           0.312119,
            "tipPosition":           [-113.63, 245.784, -54.1217],
            "tipVelocity":           [-512.848, -122.604, -126.696],
            "tool":                  false,
            "touchDistance":         0.310044,
            "touchZone":             "hovering"
        },
        {
            "direction":             [0.207085, -0.032817, -0.977772],
            "handId":                6,
            "id":                    44,
            "length":                57.5333,
            "stabilizedTipPosition": [197.935, 144.345, -43.8021],
            "timeVisible":           0.537665,
            "tipPosition":           [197.935, 144.345, -43.8021],
            "tipVelocity":           [456.518, -399.884, 113.29],
            "tool":                  false,
            "touchDistance":         0.33499,
            "touchZone":             "hovering"
        },
        {
            "direction":             [-0.035866, 0.210944, -0.97684],
            "handId":                75,
            "id":                    21,
            "length":                61.6607,
            "stabilizedTipPosition": [-195.209, 214.562, -41.5304],
            "timeVisible":           0.537665,
            "tipPosition":           [-195.209, 214.562, -41.5304],
            "tipVelocity":           [-506.053, -84.8027, -25.0487],
            "tool":                  false,
            "touchDistance":         0.333126,
            "touchZone":             "hovering"
        },
        {
            "direction":             [0.383738, 0.636443, -0.669093],
            "handId":                75,
            "id":                    15,
            "length":                44.7999,
            "stabilizedTipPosition": [-75.5081, 229.402, 27.0255],
            "timeVisible":           0,
            "tipPosition":           [-75.5081, 229.402, 27.0255],
            "tipVelocity":           [-415.663, 62.4347, -235.605],
            "tool":                  false,
            "touchDistance":         0.333333,
            "touchZone":             "hovering"
        },
        {
            "direction":             [-0.675903, 0.110629, -0.72864],
            "handId":                -1,
            "id":                    31,
            "length":                35.9865,
            "stabilizedTipPosition": [-214.574, 168.736, 122.113],
            "timeVisible":           0.190745,
            "tipPosition":           [-214.74, 168.722, 122.079],
            "tipVelocity":           [-284.878, -31.4737, -26.1777],
            "tool":                  false,
            "touchDistance":         0.360066,
            "touchZone":             "hovering"
        }
    ],
    "r":                [
        [0.386948, -0.59079, 0.707982],
        [-0.78811, -0.610484, -0.0786896],
        [0.478701, -0.527518, -0.701833]
    ],
    "s":                1.37897,
    "t":                [-570.272, -50.5658, -66.4967],
    "timestamp":        101517525257
}