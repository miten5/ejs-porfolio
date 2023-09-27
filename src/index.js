const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	//  sending rendered view as a response
	//  res.render('location') will automatically look in the
	// 'views' folder for the view. So the 'location' should
	// be relative to the 'view' folder
	res.render("pages/index");
  });

app.listen(5050);