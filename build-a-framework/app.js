// var john = G$("John", "Doe");

// console.log(john.greeting());

$("#login").click(function () {
  var loginGreeter = G$("John", "Doe");

  $("#logindiv").hide();

  loginGreeter.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});
