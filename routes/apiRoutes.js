var surveyData = require("../data/friends.js");


//Routes here
module.exports = function(app) {


  app.get("/api/survey", function(req, res) {
    res.json(surveyData);
  });


  app.post("/api/survey", function(req, res) {
    //Our "survey" will respond to requests here at this point.


    //if (surveyData.length < 5) {
      surveyData.push(req.body);

      var clientScore = req.body.scores;

      var surveyName = "";
      var surveyPhoto = "";
      var totalDifference = 25;

      for (var i = o ; i < clientData.length -1 ; i ++) {
          var difference = 0;

          for (var k = 0; k < clientScore.length; k++) {
              difference += Math.abs(friendData[i].score[k] - clientScore[k]);k
          }

          if (difference <totalDifference) {
              totalDifference = difference;
              surveyName = friendData[i].name;
              surveyPhoto = friendData[i].photo;
          }
      }

      res.json({ ok: true, surveyName: surveyName, surveyPhoto: surveyPhoto });
    });
  };
      //res.json(true);
    //}
    //else {
      //Data.push(req.body);
      //res.json(false);
    //}
  //});

  //app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    //surveyData.length = [];

    //res.json({ ok: true, surveyName: surveyName, surveyPhoto: surveyPhoto });
  //});
//};