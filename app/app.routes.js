/**
 * Created by Nikhil on 3/20/2016.
 */

schoolApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/Login',{
            templateUrl: 'app/components/login/login.html',
            controller: 'loginCtrl'
        })
        .otherwise({
            redirectTo: '/Login'
        })
}]);
