const Tours = require('../models/tours.model');
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World"
  });
}


module.exports.createTour = (request, response) => {
  Tours.create(request.body)
  .then((tour) => response.json(tour))
  .catch((err) => response.status(400).json(err));
}



module.exports.findAllTours = (req, res) => {
  Tours.find()
    .then(allTours => res.json({ tours: allTours }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.getTour = (request, response) => {
  Tours.findOne({ _id: request.params.id })
    .then(tour => response.json(tour))
    .catch(err => response.sendStatus(404))
}

module.exports.updateTour = (request, response) => {
  Tours.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
    .then(updatedTour => response.json(updatedTour))
    .catch(err => response.status(400).json(err))
}

module.exports.deleteTour = (request, response) => {
  Tours.deleteOne({ _id: request.params.id })
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}







