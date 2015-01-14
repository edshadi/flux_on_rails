//= require dispatchers/app-dispatcher
//= require constants/app-constants
var ExampleActions = {
  createExample: function(data) {
    AppDispatcher.handleViewAction({
      type: AppConstants.CREATE_EXAMPLE,
      data: data
    })
  },
  updateExample: function(data) {
    AppDispatcher.handleViewAction({
      type: AppConstants.UPDATE_EXAMPLE,
      data: data
    })
  },
  destroyExample: function(id) {
    AppDispatcher.handleViewAction({
      type: AppConstants.DESTROY_EXAMPLE,
      id: id
    })
  }
}
