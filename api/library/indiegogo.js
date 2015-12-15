var request     ß = require("request");
var cheerio     ß = require("cheerio");
var mongoose    ß = require("mongoose");
var Project      = require("../models/project");
var config       = require("../config/config");

var mongoose = mongoose.connect(config.database);

var url   = "https://www.indiegogo.com/explore#/browse/popular_all"

scrape(url);

function scrape(url) {
  return request.get(url, function(error, response, body) {
    if (error) return (console.log(error));
    if (response.statusCode === 200) {
      var $ = cheerio.load(body);
      $("div.project-card-with-friend-list.ng-scope").each(function(){
        // console.log($(this).html());
        var title = $(this).children("div.i-project-card.ng-isolate-scope").children("div.discoveryCard").children("div.discoveryCard-meta").children("div.discoveryCard-metaLead").children("div.discoveryCard-title.ng-binding").text();
        var logo = $(this).children("div.i-project-card.ng-isolate-scope").children("div.discoveryCard").children("div.discoveryCard-imageWrapper").attr("style");
        var description = $(this).children("div.i-project-card.ng-isolate-scope").children("div.discoveryCard").children("div.discoveryCard-meta").children("div.discoveryCard-metaLead").children("div.discoveryCard-tagline.ng-binding").text();
        

        // ("div.discoveryCard-metaLead").children("div.discoveryCard-tagline ng-binding").text();
       
        
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
     