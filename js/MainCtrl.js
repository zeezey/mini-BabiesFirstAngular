var app = angular.module('friendsList');
app.controller('mainCtrl', function($scope){
    $scope.name = "JMoney";
    var myFriends = ["John", "Kagen", "Michelle", "Katie"];
    $scope.friends = myFriends;
});
    $scope.friendAdded = function(){
        var frnd = $scope.newFriend;
        $scope.friends.push(frnd);
    }
});
