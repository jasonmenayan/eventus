"use strict";

angular.module("starter.stack", [])

.controller("StackCtrl", function($scope, BookChoices, $rootScope, Auth, Gcal) {
  var ebObject = {
            "resource_uri": "https://www.eventbriteapi.com/v3/events/17141122559/",
            "name": {
                "text": "San Francisco Bay Area Cannabis Career & Job Fair - 7/18/15 presented by: Bloom Farms",
                "html": "San Francisco Bay Area Cannabis Career &amp; Job Fair - 7/18/15 presented by: Bloom Farms"
            },
            "description": {
                "text": "On July 18th come join dozens of employers and hundreds of job seekers for the 3rd San Francisco Bay Area Cannabis Career & Job Fair taking place at the City Nights Event space in San Francisco, CA. \u00a0Our LAST EVENT\u00a0in January was a HUGE success. \u00a0Don't miss this one! \nWant to get your resume in the hands of every employer beforehand?\u00a0UPLOAD YOUR RESUME NOW! \nSome of the EMPLOYERS who are confirmed: \nKIVA\u00a0Confections, Harborside Health Center, Bloom Farms, Auntie Dolores, O.pen Vape, NorCal Trimmers,\u00a0Meadow, Magnolia Wellness, Care by Design, Harvest on Geary, CCIA, The Green Door and more. \n \n \nBring your energy, motivation and several copies of a current resume. \nThe medical marijuana and cannabis industry is booming. Come meet and network with the brightest individuals and organizations in the industry. \u00a0Change your life with a new career path in medical cannabis. \nSome of the many jobs that will be available are: \nBudtenders and Purchasing - Protection and Security - Administrative & Reception - Office & Operational Management - Advertising & Sales Reps - Delivery Drivers - Graphic & Web Design - IT & Technology - Marketing & Social Media - Quality Testing & Product Reviewers - Flower Trimmers - Cultivation & Extraction Scientists - Retail Hydroponic Equipment Suppliers - Accounting - Legal and more \nEMPLOYER TABLES & SPONSOR OPPORTUNITIES AVAILABLE:\u00a0info@bloom.farm \nBloom Farms\u2122 and The San Francisco Bay Area Cannabis Career & Job Fair operate in strict compliance with California laws and in accordance with Proposition 215-The Compassionate Use Act of 1996, and all state laws and guidelines required by the California Attorney General. \n\u00a0 \nFAQs \n\u00a0 \nAre there ID requirements or an age limit to enter the event? \nMust be 18 or over with a valid CA ID and MMJ Doctor Recommendation \n\u00a0 \nWhat are my transport/parking options getting to the event? \nPaid parking across the street and BART just 3 blocks away. \n\u00a0 \nWhere can I contact the organizer with any questions? \ninfo@bloom.farm \n\u00a0 \nDo I have to bring my printed ticket to the event? \nYes please bring your printed ticket to the event. \n\u00a0 \nPLEASE SUPPORT THE CCIA \u00a0 ",
                "html": "<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><SPAN STYLE=\"line-height: 20.7999992370605px;\">On July 18th come join dozens of employers and hundreds of job seekers for the 3rd San Francisco Bay Area Cannabis Career &amp; Job Fair taking place at the City Nights Event space in San Francisco, CA<\/SPAN><SPAN STYLE=\"line-height: 1.6em;\">. \u00a0Our <A HREF=\"https://vimeo.com/bloomfarms/sfcannabisjobfair\" REL=\"nofollow\">LAST EVENT<\/A>\u00a0in January was a HUGE success. \u00a0Don't miss this one!<\/SPAN><\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\">Want to get your resume in the hands of every employer beforehand?\u00a0<A HREF=\"http://www.bloom.farm/resume\" TARGET=\"_blank\" REL=\"nofollow\">UPLOAD YOUR RESUME NOW!<\/A><\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><STRONG>Some of the EMPLOYERS who are <SPAN STYLE=\"text-decoration: underline;\">confirmed<\/SPAN>:<\/STRONG><\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><A HREF=\"http://kivaconfections.com\" TARGET=\"_blank\" REL=\"nofollow\">KIVA\u00a0Confections<\/A>, <A HREF=\"http://www.harborsidehealthcenter.com/\" TARGET=\"_blank\" REL=\"nofollow\">Harborside Health Center<\/A>, <A HREF=\"http://www.getbloomfarms.com\" TARGET=\"_blank\" REL=\"nofollow\">Bloom Farms<\/A>, Auntie Dolores, O.pen Vape, NorCal Trimmers,\u00a0<A HREF=\"http://www.getmeadow.com\" TARGET=\"_blank\" REL=\"nofollow\">Meadow<\/A>, Magnolia Wellness, Care by Design, Harvest on Geary, CCIA, The Green Door and more.<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><IMG SRC=\"https://cdn.evbuc.com/eventlogos/97738037/bloomjobfairposter728129.15r11.jpg\" ALT=\"\" WIDTH=\"450\" HEIGHT=\"675\"><\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><IMG SRC=\"https://cdn.evbuc.com/eventlogos/97738037/bloomjobfairposter728129.15r12.jpg\" ALT=\"\" WIDTH=\"400\" HEIGHT=\"600\"><\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><STRONG STYLE=\"line-height: 1.6em;\">Bring your energy, motivation and several copies of a current resume.<\/STRONG><\/SPAN><\/P>\r\n<P><SPAN STYLE=\"line-height: 1.6em; font-family: arial, helvetica, sans-serif;\">The medical marijuana and cannabis industry is booming. Come meet and network with the brightest individuals and organizations in the industry. \u00a0Change your life with a new career path in medical cannabis.<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><STRONG>Some of the many jobs that will be available are:<\/STRONG><\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><STRONG>Budtenders and Purchasing<\/STRONG> - Protection and Security - Administrative &amp; Reception - Office &amp; Operational Management - <STRONG>Advertising &amp; Sales Reps<\/STRONG> - Delivery Drivers - Graphic &amp; Web Design - IT &amp; Technology - Marketing &amp; Social Media - Quality Testing &amp; Product Reviewers - <STRONG>Flower Trimmers<\/STRONG> - Cultivation &amp; Extraction Scientists - Retail Hydroponic Equipment Suppliers - Accounting - Legal and more<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><STRONG>EMPLOYER TABLES &amp; SPONSOR OPPORTUNITIES AVAILABLE:<\/STRONG>\u00a0info@bloom.farm<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><EM>Bloom Farms\u2122 and The San Francisco Bay Area Cannabis Career &amp; Job Fair operate in strict compliance with California laws and in accordance with Proposition 215-The Compassionate Use Act of 1996, and all state laws and guidelines required by the California Attorney General.<\/EM><\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\">\u00a0<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><STRONG>FAQs<\/STRONG><\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\">\u00a0<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><STRONG>Are there ID requirements or an age limit to enter the event?<\/STRONG><\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\">Must be 18 or over with a valid CA ID and MMJ Doctor Recommendation<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\">\u00a0<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><STRONG>What are my transport/parking options getting to the event?<\/STRONG><\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\">Paid parking across the street and BART just 3 blocks away.<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\">\u00a0<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><STRONG>Where can I contact the organizer with any questions?<\/STRONG><\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\">info@bloom.farm<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\">\u00a0<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><STRONG>Do I have to bring my printed ticket to the event?<\/STRONG><\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\">Yes please bring your printed ticket to the event.<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\">\u00a0<\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><A HREF=\"http://www.cacannabisindustry.org/\" TARGET=\"_blank\" REL=\"nofollow\"><STRONG>PLEASE SUPPORT THE CCIA<\/STRONG><\/A><\/SPAN><BR><SPAN STYLE=\"font-family: arial, helvetica, sans-serif;\"><IMG SRC=\"https://cdn.evbuc.com/eventlogos/97738037/ccialogo3d.png\" ALT=\"\" WIDTH=\"200\">\u00a0<\/SPAN><\/P>"
            },
            "id": "17141122559",
            "url": "http://www.eventbrite.com/e/san-francisco-bay-area-cannabis-career-job-fair-71815-presented-by-bloom-farms-tickets-17141122559?aff=ebapi",
            "start": {
                "timezone": "America/Los_Angeles",
                "local": "2015-07-18T12:00:00",
                "utc": "2015-07-18T19:00:00Z"
            },
            "end": {
                "timezone": "America/Los_Angeles",
                "local": "2015-07-18T16:00:00",
                "utc": "2015-07-18T23:00:00Z"
            },
            "created": "2015-05-26T18:50:34Z",
            "changed": "2015-07-02T19:20:39Z",
            "capacity": 2230,
            "status": "live",
            "currency": "USD",
            "online_event": false,
            "tx_time_limit": 3600,
            "logo_id": "13771913",
            "organizer_id": "6450899399",
            "venue_id": "10608905",
            "category_id": "101",
            "subcategory_id": "1010",
            "format_id": "10",
            "category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/101/",
                "id": "101",
                "name": "Business & Professional",
                "name_localized": "Business & Professional",
                "short_name": "Business",
                "short_name_localized": "Business"
            },
            "logo": {
                "id": "13771913",
                "url": "https://img.evbuc.com/https%3A%2F%2Fimg.evbuc.com%2Fhttp%253A%252F%252Fcdn.evbuc.com%252Fimages%252F13771913%252F98422203259%252F1%252Foriginal.jpg%3Frect%3D46%252C22%252C406%252C203%26s%3Da5cedce47ea0909f32be152a69d8d068?h=200&w=450&s=6eeee39e218bed8d1987b2bd69454ada",
                "aspect_ratio": "2",
                "edge_color": null
            },
            "venue": {
                "address": {
                    "address_1": "715 Harrison Street",
                    "address_2": null,
                    "city": "San Francisco",
                    "region": "CA",
                    "postal_code": "94107",
                    "country": "US",
                    "latitude": 37.782128,
                    "longitude": -122.39765399999999
                },
                "resource_uri": "https://www.eventbriteapi.com/v3/venues/10608905/",
                "id": "10608905",
                "name": "City Nights",
                "latitude": "37.782128",
                "longitude": "-122.39765399999999"
            }
        }

  Auth.checkAuth()
  .then(function(){
    var gCalObject = Gcal.EtoG(ebObject);
    console.log(gCalObject);
    Gcal.sendToGcal(gCalObject);
  });



  $scope.userId = $rootScope.currentUser.id;
  $scope.stack = [];
  // get list of saved books aka 'stack' using getStack method from BookChoices factory
  $scope.getStack = function( id ) {
    BookChoices.getStack(id)
      .then(function(data){
        $scope.stack = data.stack;
      });
  };

  // remove book at index from stack
  $scope.removeFromStack = function( index ){
    BookChoices.removeFromStack($scope.userId, $scope.stack[index])
      .then(function(){
        $scope.getStack($scope.userId);
      });
  };

  $scope.getStack($scope.userId);
});
