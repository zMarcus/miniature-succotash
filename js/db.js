var app = angular.module('libraryApp', []);
app
  .controller('LibraryController', ['$scope', function ($scope) {

    $scope.library = [];    // library similar to tasks
    $scope.editIndex = false;

    // Similar to addTask
    $scope.addEntry = function(){
      if( $scope.editIndex === false){
        $scope.library.push({book: $scope.book, author: $scope.author})
      } else {
        $scope.library[$scope.editIndex].book = $scope.book;
      }
      $scope.editIndex = false;
      $scope.book = '';
      $scope.author = '';
    }

    $scope.editEntry = function(index){
      $scope.book = $scope.library[index].book;
      $scope.author = $scope.library[index].author;
      $scope.editIndex = index;
    }

    $scope.deleteEntry = function(index){
      $scope.library.splice(index, 1);
    }

}])
