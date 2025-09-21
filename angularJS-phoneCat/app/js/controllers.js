'use strict';

var phonecatControllers = angular.module('phonecatControllers', []);

//phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
// ** Hard coded data **
//    $scope.phones = [
//        {'name': 'Nexus S',
//         'snippet': 'Fast just got faster with Nexus S'},
//        {'name': 'Motorola Xyboard with Wi-Fi',
//         'snippet': 'The Next, Next Generation table'},
//        {'name': 'MOTOROLA XOOM™',
//         'snippet': 'The Next Generation tablet.'}
//    ];


// ** Before replacing the code below with new custom service 'Phone' **
//    $http.get('phones/phones.json').success(function(data){
////        $scope.phones = data;
//        $scope.phones = data.splice(0, 5);
//    });
//}]);


phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
}]);



//phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
//    // ** Test this before requesting json data ('phones' directory) **
////    $scope.phoneId = $routeParams.phoneId;
//    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data){
//        $scope.phone = data;
//        $scope.mainImageUrl = data.images[0];
//    });
//    
//    // ** called on 'ng-click' for image swapping **
//    $scope.setImage = function(imageUrl) {
//        $scope.mainImageUrl = imageUrl;
//    };
//}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
        $scope.mainImageUrl = data.images[0];
    });
    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    };
}]);