var request     = require("request");
var cheerio     = require("cheerio");
var mongoose    = require("mongoose");
var Link        = require("./models/link");
var config      = require("./config/config");

var mongoose = mongoose.connect(config.database);

var url   = "https://www.crowdcube.com/investments"

scrape(url);

function scrape(url) {
  return request.get(url, function(error, response, body) {
    if (error) return (console.log(error));
    if (response.statusCode === 200) {
      var $ = cheerio.load(body);
      $("article.pitch").each(function(){
        // console.log($(this).html());
        var title = $(this).children("a").attr("href");
        var description = $(this).children(".pitch__detail").children(".pitch__description").children("a").text();
        var logo = $(this).children(".pitch__detail").children(".pitch__logo").children("a").children("img").attr("src");
        
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
     