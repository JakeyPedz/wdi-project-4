var request      = require("request");
var cheerio      = require("cheerio");
var mongoose     = require("mongoose");
var Project      = require("../models/project");
var config       = require("../config/config");

var mongoose = mongoose.connect(config.database);

var url   = "https://wefunder.me/discover"

scrape(url);

function scrape(url) {
  return request.get(url, function(error, response, body) {
    if (error) return (console.log(error));
    if (response.statusCode === 200) {
      var $ = cheerio.load(body);
      $("div.renderCards_fundraising.card-grid.flexbox-row-center").each(function(){
        // console.log($(this).html());
        var title = $(this).children("card effect__click").children("a").children("div.card__front").children("div.card-top-bar");
        // var description = $(this).children(".card effect__click").children(".card__front").children(".photo").children(".tagLine").text();
        // var logo = $(this).children(".pitch__detail").children(".pitch__logo").children("a").children("img");
        
        var data = {
          title: title
          // description: description,
          // logo: logo
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
      // $(".g").each(function(){
      //   var href  = $(this).children("h3.r").children("a").attr("href").match(/(.*?)(?=[&"])/)[0].replace("/url?q=", "");
      //   var title = $(this).children("h3.r").children("a").text();

      //   var data = {
      //     href: href,
      //     title: title
      //   } 

      //   console.log(data);

      //   Link.findOrCreate({ href: data.href }, function(err, link, created) {
      //     if (err) return console.log("There was an error saving " + data.href + ": " + err.errmsg);
      //     if (created) return console.log("New link added '%s.", data.href);
      //     Link.findByIdAndUpdate(link._id, data, function(err, link)
      //     {
      //       if (err) return console.log("There was an error updating " + data.href + ": " + err.errmsg);
      //       return ("'%s' was updated.", data.href);
      //     })
      //   })
     