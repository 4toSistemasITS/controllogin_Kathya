'use strict';
var app = angular.module('myApp', ['ui.router'])//llamamos al router para hacer las interacciones//
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider //estados//
		.state('login', {
			url : '/login',
			templateUrl: 'vista/login.html', //vamos a llamar//
			controller: 'vistaPrincipal'
		})
		$urlRouterProvider.otherwise("/login");

	$stateProvider	
		.state('v1', {
			url : '/v1',
			templateUrl: 'vista/v1.html', //vamos a llamar//
			controller: 'vistaLista'
		})
		$urlRouterProvider.otherwise("/v1");
});

//para amostrar la pantala de login//
app.controller('vistaPrincipal', function($scope) {
    
});

//para amostrar la pantala de lista//
app.controller('vistaLista', function($scope) {
    
});

app.controller('validateCtrl', function($scope) {
    $scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
});

app.controller('lista2', function($scope){
	var nombres=[{nombre:"Kevin", edad:21}, {nombre:"Fabian", edad:23}, {nombre:"Valeria", edad:23}, {nombre:"Angel", edad:19}, {nombre:"Diego", edad:24}, {nombre:"Yoselin", edad:21}, {nombre:"Kathya", edad:19}];
	$scope.data=nombres;
	$scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.data.length; i++){
        total += ($scope.data[i].edad);
    }
    return total;
	}
});