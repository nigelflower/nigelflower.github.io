$(document).ready(function(){
    $.getJSON("projects.json", function(data){
       console.log(data);
       $.each(data.projects, function(i, v){
           // Create a card for each project and append it to the projects section
           $("#projects").append("<div class='resume-item d-flex flex-column flex-md-row mb-5'>" +
            "<div class='resume-content mr-auto'>" +
              "<h3 class='mb-0'>" + v.title + "</h3>" +
              "<div class='subheading mb-3'> Technologies: " + v.technologies + "</div>" +
              "<p>" + v.description + "</p>" +
              "<br>"+
              "<a href='#'> Repository Link </a>"+
              "<br>" + 
              "<a href='#'> Project Link </a>" +
            "</div>" +
          "</div>");
         
       });
    });
});


  