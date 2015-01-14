//= require constants/app-constants
//= require dispatchers/app-dispatcher

var ExampleStore = (function () {
  var _examples = [];
  var CHANGE_EVENT = 'change';
  var FAIL_TO_CREATE_EVENT = 'creation-failed';

  return {
    examples: function() {
      return _examples;
    },
    all: function(type, id) {
      $.ajax({
        url: '/examples',
        type: 'GET'
      })
      .done(function (data) {
        _examples = data.examples;
        this.triggerChange();
      }.bind(this))
    },
    new: function () {
      return {
        name: null
      };
    },
    addChangeEvent: function (callback) {
      $(this).on(CHANGE_EVENT, callback);
    },
    addFailToTakeAction: function (callback) {
      $(this).on(FAIL_TO_CREATE_EVENT, callback);
    },
    triggerChange: function (data) {
      $(this).trigger(CHANGE_EVENT, data);
    },
    triggerFailToTakeAction: function(data) {
      $(this).trigger(FAIL_TO_CREATE_EVENT, data);
    },
    create: function(data) {
      $.ajax({
        url: '/examples',
        type: 'POST',
        data: { example: data }
      })
      .done(function (data) {
        _examples.push(data.example);
        this.triggerChange();
      }.bind(this))
      .fail(function (xhr) {
        this.triggerFailToTakeAction([xhr.responseJSON.errors]);
      }.bind(this));
    },

    update: function (data) {
      $.ajax({
        url: '/examples/' + data.id,
        type: 'PUT',
        data: {example: data}
      })
      .done(function (data) {
        _examples.forEach(function (examp, i) {
          if (examp.id === data.example.id) {
            _examples[i] = data.example;
            return this.triggerChange();
          }
        }.bind(this))
      }.bind(this))
      .fail(function (xhr) {
        this.triggerFailToTakeAction([xhr.responseJSON.errors]);
      }.bind(this));
    },

    delete: function (id) {
      $.ajax({
        type: 'DELETE',
        url: '/examples/' + id
      })
      .done(function (data) {
        _examples.forEach(function (examp, i) {
          if (examp.id === id) {
            _examples.splice(i, 1)[0];
            return this.triggerChange();
          }
        }.bind(this));
      }.bind(this))
      .fail(function (xhr) {
        this.triggerFailToTakeAction([xhr.responseJSON.errors]);
      }.bind(this));
    },

    payload: function (payload) {
      var action = payload.action;
      switch(action.type) {
        case AppConstants.CREATE_EXAMPLE:
          this.create(action.data);
          break;
        case AppConstants.UPDATE_EXAMPLE:
          this.update(action.data);
          break;
        case AppConstants.DESTROY_EXAMPLE:
          this.delete(action.id);
          break;
        default:
      }
    }
  }
}());

AppDispatcher.register(ExampleStore.payload.bind(ExampleStore));
