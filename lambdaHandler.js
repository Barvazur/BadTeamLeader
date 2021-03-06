var compareFlow = require('./compare-flow');

// When new face is required for learning
exports.learnNewFace = function (event, context, callback) {
    console.info('Subscribing new face');
    var imageName = event.Records[0].s3.object.key.split('+').join(' ');
    console.info('Image is: ' + imageName);
    compareFlow.addFaceToCollection(imageName);
};

// Comparing between faces
exports.faceComparer = function (event, context, callback) {
    console.info('Starting the face comparison');
    var imageName = event.Records[0].s3.object.key.split('+').join(' ');
    console.info('Image is: ' + imageName);
    compareFlow.searchByImg(imageName);
};