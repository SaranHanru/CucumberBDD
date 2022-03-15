$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successfull Login using Credentials",
  "description": "",
  "id": "login;successfull-login-using-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User opens a URL \"http://localhost:8888/\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters Email as \"admin\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Login Button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});