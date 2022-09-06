const tourController = require('../controllers/tours.controller');
module.exports = function(app){
    app.get('/api', tourController.index);
    app.get("/api/tours", tourController.findAllTours);
    app.post('/api/tour/new', tourController.createTour);
    app.get('/api/tour/:id', tourController.getTour);
    app.put('/api/tour/:id', tourController.updateTour);
    app.delete('/api/tour/:id', tourController.deleteTour);

}

