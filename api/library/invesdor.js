var request      = require("request");
var cheerio      = require("cheerio");
var mongoose     = require("mongoose");
var Project      = require("../models/project");
var config       = require("../config/config");

var mongoose = mongoose.connect(config.database);

var url   = "https://www.invesdor.com/finland/en/pitches/popular"

scrape(url);

function scrape(url) {
  return request.get(url, function(error, response, body) {
    if (error) return (console.log(error));
    if (response.statusCode === 200) {
      var $ = cheerio.load(body);
      $("body #wrapper .container div.row div.pitches div.odd").each(function(){
        // console.log($(this).html());

        // if div class === "odd" then

        //   else this 


        var title = $(this).children('div').children('.heading').children('.right').children('.title').text().replace(/(\r\n|\n|\r)/gm,"");  

        var description = $(this).children('div').children('.heading').children('.right').children('.teaser').text();

        var logo = $(this).children('div').children('.heading').children('.left').children('.image').attr('style').split("(")[1].split(")")[0];

        // var titleEven = $(this).children("div.even").children(".pitch-accessible.pitch-active.pitch-equity-offering.pitch-preview pitch-public").children(".heading").children(".right").children("div.title.pitch-container").text();
        // var descriptionEven = $(this).children("div.even").children(".pitch-accessible.pitch-active pitch-equity-offering.pitch-preview.pitch-public").children(".heading").children(".right").children(".teaser").text();
        // var logoEven = $(this).children("div.even").children(".pitch-accessible.pitch-active.pitch-equity-offering.pitch-preview.pitch-public").children(".heading").children(".left").children(".image").attr("src");

        
        var data = {
          title: title,
          description: description,
          logo: logo
          // titleEven: titleEven,
          // descriptionEven: descriptionEven,
          // logoEven: logoEven
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
     