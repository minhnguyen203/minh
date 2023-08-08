angular.module('myApp', []).controller('MainController', function($scope) {
    $scope.users = [
        { name: 'Product 1', Price: 100 },
        { name: 'Product 2', Price: 150 },
        { name: 'Product 3', Price: 200 }
    ];

    $scope.modalTitle = '';
    $scope.formData = {};

    $scope.openModal = function(action, user) {
        if (action === 'add') {
            $scope.modalTitle = 'Add Product';
            $scope.formData = {};
        } else if (action === 'edit') {
            $scope.modalTitle = 'Edit Product';
            $scope.formData = angular.copy(user);
        }
        $('#myModal').modal('show');
    };

    $scope.submitUser = function() {
        if ($scope.modalTitle === 'Add Product') {
            $scope.users.push(angular.copy($scope.formData));
        } else if ($scope.modalTitle === 'Edit Product') {
            var index = $scope.users.indexOf(user);
            if (index !== -1) {
                $scope.users[index] = angular.copy($scope.formData);
            }
        }
        $scope.formData = {};
        $('#myModal').modal('hide');
    };

    $scope.deleteUser = function(user) {
        var index = $scope.users.indexOf(user);
        if (index !== -1) {
            $scope.users.splice(index, 1);
        }
    };
});
