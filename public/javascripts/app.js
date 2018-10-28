'use strict'
var app = angular.module('BaseStation', ['angular-route'])

app.controller('MainCtrl', [
'$scope',
function($scope){
 $scope.test = 'testing';
}]);