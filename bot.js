module.exports = function(req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {};
  if (userName === "pradliff") {
    botPayload.text = "Paul, slackBot told me you're his favorite.";
  } else if (userName === "john") {
    botPayload.text = "I'm back!!!! WARNING: Poornima is speaking. Everyone keep calm and it will all be over soon.";
  }

  var names = ["pradliff", "john"];
  if (names.indexOf(userName) >= 0) {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
};
