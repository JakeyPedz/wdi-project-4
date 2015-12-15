var request      = require("request");
var cheerio      = require("cheerio");
var mongoose     = require("mongoose");
var findOrCreate = require('mongoose-findorcreate'); 
var Project      = require("../models/project");
var config       = require("../config/config");

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

        Project.findOrCreate({ title: data.title }, function(err, project, created) {
          if (err) return console.log("There was an error saving " + data.title + ": " + err.errmsg);
          if (created) return console.log("New project added '%s.", data.title);
          Project.findByIdAndUpdate(project._id, data, function(err, project)
          {
            if (err) return console.log("There was an error updating " + data.title + ": " + err.errmsg);
            return ("'%s' was updated.", data.title);
          })
        })
      })
    }
  });
}



