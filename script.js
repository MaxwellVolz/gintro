$(function() {
    console.log("ready!");

    var x = false;

    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 200);

    $('a.backToTopBtn').on('click', function(event) {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 600);
    });

    $('a#gitIntroBtn').on('click', function(event) {
        $('html, body').animate({
            scrollTop: $("#gitIntro").offset().top
        }, 600);
    });

    $('a#installGitBtn').on('click', function(event) {
        $('html, body').animate({
            scrollTop: $("#installGit").offset().top
        }, 600);
    });



    setInterval(function() {

        if (x) {

            $(".projectRepo").animate({
                opacity: 0.01
                // left: "+=50",
                // height: "toggle"
            }, 500, function() {
                // Animation complete.
                 // $("#projectRepo").text(" project ").css({"opacity":1},{"padding-left":"10px"});
                 $(".projectRepo").html('projects').css({"opacity":1,"margin-left":"14px","margin-right":"21px"});
                
            });


           
            x = false;
        } else {

        	$(".projectRepo").animate({
                opacity: 0.01
                // left: "+=50",
                // height: "toggle"
            }, 500, function() {
                // Animation complete.
                 $(".projectRepo").html(" repositories ").css({"opacity":1,"margin-left":"0px","margin-right":"0px"});
            });

            // $("#projectRepo").text("repository");
            // $("#projectRepo").text("repository").css({"opacity":1},{"height":"toggle"});
            x = true;

        }




    }, 2500);




});

var gitRef = {

    swapContent: function(selected) {
        var self = this;

        var newTopContent = $("div.content").find(selected).detach();

        $("div#contentContainer").prepend(newTopContent);


    }
}
