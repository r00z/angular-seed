'use strict';

/* Controllers */
angular.module('myApp.controllers', []).
    controller('MyCtrl1', function () {

    })

    .controller('MyCtrl2', function ($scope, Data) {
        $scope.data = Data;
    })

    .controller('MyCtrl3', function ($scope, Data) {
        $scope.phones = [
            {'name': 'Nexus S',
                'snippet': 'Fast just got faster with Nexus S.',
                'age': 1},
            {'name': 'Motorola XOOM™ with Wi-Fi',
                'snippet': 'The Next, Next Generation tablet.',
                'age': 2},
            {'name': 'MOTOROLA XOOM™',
                'snippet': 'The Next, Next Generation tablet.',
                'age': 3}
        ];
        $scope.d3Data = [
            {name: "Greg", score: 98},
            {name: "Ari", score: 96},
            {name: 'Q', score: 75},
            {name: "Loser", score: 48}
        ];

        $scope.orderProp = 'age';
        $scope.data = Data;
    });