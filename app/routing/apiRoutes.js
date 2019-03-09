var surveyData = require("../data/surveyData");


//Routes here
module.exports = function(app) {


  app.get("/api/survey", function(req, res) {
    res.json(surveyData);
  });


  app.post("/api/survey", function(req, res) {
    //Our "survey" will respond to requests here at this point.

    if (surveyData.length < 5) {
      surveyData.push(req.body);
      res.json(true);
    }
    //else {
      //Data.push(req.body);
      //res.json(false);
    //}
  });

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    surveyData.length = [];

    res.json({ ok: true });
  });
};