module.exports = function(req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {};
  if (userName === "neil") {
    botPayload.text = "Neil, slackBot told me you're his favorite.";
  } else if (userName === "garth") {
    botPayload.text = "WARNING: Garth is speaking. Everyone keep calm and it will all be over soon.";
  }

  var names = ["neil", "garth"];
  if (names.indexOf(userName) >= 0) {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
};
