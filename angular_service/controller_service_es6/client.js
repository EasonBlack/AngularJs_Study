import angular from  'angular'
import uuid from 'node-uuid';

angular.module('app', [])
    .controller('appCtrl', ['$scope', '$http', 'userService', function ($scope, $http, User) {
        $scope.users = [];
        $scope.newUser = '';
        $scope.addUser = ()=> {
            if(!$scope.newUser) return ;
            $scope.users.push(new User( 0 ,$scope.newUser))
        }
        $scope.deleteUser = (id)=>{
            $scope.users.splice($scope.users.map((u)=> u.id).indexOf(id),1);
        }

        $scope.helloUser = (user)=>{
            alert(user.getName());
        }
        var init = ()=> {
            $http.get('data.json')
            .then(function(response){
                    response.data.map((u)=> {
                        $scope.users.push(new User(u.id, u.name))
                    })
                })
        }

        init();
    }])
    .factory('userService', function () {
        class User  {
            constructor(id,name) {
                this.id = id || uuid.v1();
                this.name = name;
            }
            getName() {
                return `Hello ${this.name} !`;
            }
        }

        return User;
    })
