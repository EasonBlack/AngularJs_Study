angular.module('app', []).controller('appCtrl', function CalculatorController($scope) {
    $scope.sum = function() {
        $scope.z = $scope.x + $scope.y;
    };
    $scope.userName = 'AA';
});