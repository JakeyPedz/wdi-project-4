var request     = require("request");
var cheerio     = require("cheerio");
var mongoose    = require("mongoose");
var Link        = require("./models/link");
var config      = require("./config/config");

var mongoose = mongoose.connect(config.database);

var url   = "https://www.earlyshares.com/projects"

scrape(url);

function scrape(url) {
  return request.get(url, function(error, response, body) {
    if (error) return (console.log(error));
    if (response.statusCode === 200) {
      var $ = cheerio.load(body);
      $("div.offering-card").each(function(){
        // console.log($(this).html());
        // var href = $(this).children("a").attr("href");
        var title = $(this).children(".offering-card-body").children(".offering-card-summary").text().replace(/(\r\n|\n|\r)/gm,""); 
        var description = $(this).children(".offering-card-body").children(".offering-card-details").children("ul").children("li.offering-card-details-desc").text().replace(/(\r\n|\n|\r)/gm,"");       
        var logo = $(this).children(".offering-card-image").attr("style").split("'")[1];
        
        var data = {
          title: title,
          description: description,
          logo: logo
        }
        console.log(data)
      })
    }
  });
}

// mongoose.connect('mongodb://localhost/qrowded');

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
     