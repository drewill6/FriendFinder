var path = require("path");


module.exports = function(app) {
// When users "visit" a page code respomds.
//Get request

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  //default to home if no match
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
