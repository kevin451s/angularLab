(function() {
  'use strict';
  angular.module('angularTodo')
    .controller('TodoController', TodoController)

  function TodoController($scope, $log) {
    $scope.add = addTodo
    $scope.newTodo = {date: '', task: '', done: false}

    $scope.all = [
      {date: '12/30/16', task: 'Get a job', done: false},
      {date: '1/30/17', task: 'Take a vacation.', done: false},
      {date: '11/30/16', task: 'Learn Angular', done: true}
    ]

    $log.log($scope.all)
    $filter(task)

    function addTodo() {
      $scope.all.push({date: $scope.newTodo.date, task: $scope.newTodo.task, done: false})
      $scope.newTodo = {date: '',task: '', done: ''}
    }
  }
}());
