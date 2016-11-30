(function() {
  'use strict';
  angular.module('angularTodo')
    .controller('TodoController', TodoController)

  function TodoController() {
    var self = this
    self.add = addTodo
    self.newTodo = {date: '', task: '', done: false}

    self.all = [
      {date: '12/30/16', task: 'Get a job', done: false},
      {date: '1/30/17', task: 'Take a vacation.', done: false},
      {date: '11/30/16', task: 'Learn Angular', done: true}
    ]

    function addTodo() {
      self.all.push({date: self.newTodo.date, task: self.newTodo.task, done: false})
      self.newTodo = {date: '',task: '', done: ''}
    }
  }
}());
