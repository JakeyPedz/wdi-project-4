var request      = require("request");
var cheerio      = require("cheerio");
var mongoose     = require("mongoose");
var findOrCreate = require('mongoose-findorcreate'); 
var Project      = require('../models/project');
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
        var title = $(this).children("a").attr("href");
        var description = $(this).children(".pitch__detail").children(".pitch__description").children("a").text();
        var logo = $(this).children(".pitch__detail").children(".pitch__logo").children("a").children("img").attr("src");
        
        var data = {
          title: title,
          description: description,
          logo: logo
        }

        var newProject = new Project(data);
        newProject.save(function(err, data){
          console.log(data)
        })

      })
    }
  });
}



