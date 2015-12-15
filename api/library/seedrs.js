var request      = require("request");
var cheerio      = require("cheerio");
var mongoose     = require("mongoose");
var Project      = require("../models/project");
var config       = require("../config/config");

var mongoose = mongoose.connect(config.database);

var url   = "https://www.seedrs.com/invest"

scrape(url);

function scrape(url) {
  return request.get(url, function(error, response, body) {
    if (error) return (console.log(error));
    if (response.statusCode === 200) {
      var $ = cheerio.load(body);
      $("article.CampaignCard").each(function(){
        // console.log($(this).html());
        var title = $(this).children("a").children("header").children("h3").text().replace(/(\r\n|\n|\r)/gm,"");        

        var logo = $(this).children("a").children("header").children(".Card-cover").children("span").children('img').attr("data-src");

        var description = $(this).children("a").children("p").text().replace(/(\r\n|\n|\r)/gm,""); 


        var data = {
          title: title,
          logo: logo,
          description: description
        }
        console.log(data)
      })
    }
  });
}

// mongoose.connect('mongodb://localhost/qrowded');
// mongoose.connection.on('error', function() {
//   console.error('MongoDB Connection Error. Make sure MongoDB is running.');
// });
