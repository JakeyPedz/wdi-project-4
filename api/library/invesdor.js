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



        var title = $(this).children('div').children('.heading').children('.right').children('.title').text().replace(/(\r\n|\n|\r)/gm,"");  

        var description = $(this).children('div').children('.heading').children('.right').children('.teaser').text();

        var logo = $(this).children('div').children('.heading').children('.left').children('.image').attr('style').split("(")[1].split(")")[0];


        
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

