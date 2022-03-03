<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Case</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
   <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="../css/materialize.css"  media="screen,projection"/>
 
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
 
 
  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">

</head>
<style type="text/css" media="screen">

a:hover, a:focus{
  text-decoration: none;
}

.img-responsive{
  width:100%;
  height:auto;
}

#event_title{
  font-family: 'Lobster', cursive;
}

body{
 font-family: 'Roboto', sans-serif;
}

blockquote{
  border-left: 0.4vw solid blue;
}

.container{
  width: 100%
}
#menu {
  position:fixed;
  top:0px;
  width:100%; 
  z-index:9999;
  display: none;
}

.parallax-container{
  width: 100%;
  height: 55vh;
}
.brand-logo img
{
  padding: 9px 15px;
  height:65px;
}

  </style>
  </head>
<body>
<?php  include("../navbar.php"); ?>
<div class="container">

   <div class="parallax-container">
      <div class="parallax"><img src="photos/coding.jpg"></div>
    </div>

    <div class="row">
      <h1><div id="event_title">Smart City</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#introduction">Introduction</a></li>
              <li><a data-toggle="tab" href="#gameplay"> Gameplay</a></li>
              <li><a data-toggle="tab" href="#rules">Rules</a></li>
        
              <li><a data-toggle="tab" href="#criteria">Judging criteria</a></li>
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">
          
          Still fantasizing about that city of your dreams? Well, Technovanza is back to give you a platform, to make all that out of your dreams and to design your very own city. So people! Grab the opportunity! Come, participate and prove your management and logical thinking in aspects of city planning and making it smart. 
Team Specification : A team may consist of a maximum of 4 participants.
      
    </div>

    <div id="gameplay" class="tab-pane fade in active">

      There will be two rounds as stated.
1. IBuild SmartCity (Smart Solutions)
2. IBuild TechnoCity (City Planning)
Every team is eligible fot both the rounds
Round 1 : SmartCity
The round emphasizes on the concept of Smart City.
The teams will be given a questionnaire. The answers would reflect their views of how a Smart City can be modified in terms of:
Energy Supply
Public Utility and Services,
Business Empowerment
Environment and Hygiene
Laws and Amendments
Round 2 : TechnoCity
Two teams will compete in Round 2
The teams will be given fixed amount of virtual money at the start of the game which they will use to buy the structures which will be afterwards used to design the city in competition with the other team. There will be limited structures thus a team should make sure that there are sufficient structures of make good city.
Some golden structures like college, shopping complex, hotel etc. will be placed for auctions between the two teams competing.
Then begins the job to arrange the different building structures of the city provided in fixed amount in your desired manner on the arena provided to a team.
The provided building structures will be containing numerous city-functional buildings like houses, factories, shops, roads, school and many more.
Team will also be given with some regional data which they can use while designing the city.
The game is simple but highly logical in arrangement of the building structures for the proper efficiency of the services to citizens.
    </div>

    <div id="rules" class="tab-pane fade in active">
Round 1 :
Mention the reference source of the data information and statistics if mentioned.
Points will be deducted if extra time is taken by the team.
Round 2 :
The team is confined to use only the provided material.
The building structures provided should be handled carefully and so damaging them can cause a penalty.
The judging system will be undoubtedly proper and thus no objections will be entertained.
      
    </div>
    <div id="criteria" class="tab-pane fade in active">

      Round 1 :
Judgement will be done on the basis of the answers given to those questions.
Round 2 :
Firstly the teams will be judged on basis of sufficiency and balance of the city in regard to the structures purchased from virtual money.
The city designed by the teams will be judged on the criteria of proper designing and arrangements, proper use of regional data provided, whether residents feeling any problems, etc.
For every proper and efficient locations of the structures, Team will awarded with some points and for each improper location, the points will be deducted.
REGISTER

    </div>
    <div id="contact" class="tab-pane fade in active">

      
Contact Us
Dipesh Balani : +918793408281
Apeksha Khandelwal : +918767982194
Vaishnavi Ansingkar : +917722031360
REGISTER

    </div>

    <div id="gallery"  class="tab-pane fade in active">

    </div>











  </div>
</div>

<script src="https://fastcdn.org/FlowType.JS/1.1/flowtype.js"></script>


<script type="text/javascript">
  $('body').flowtype({
 minimum :500 ,
 minFont :4,
 maxFont :20,
 maximum : 1200
});       
 
   $('blockquote').flowtype({
 minimum :500 ,
 minFont :4,
 maxFont :20,
 maximum : 1200
});     
   (function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('#menu').fadeIn(500);
            } else {
                $('#menu').fadeOut(500);
            }
        });
    });
})(jQuery);
</script>

  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>

      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

      <script type="text/javascript" src="../js/materialize.min.js"></script>
      <script type="text/javascript" src="../js/sidenav.js"></script>
      <script type="text/javascript" src="../js/parallax.js"></script>
</body>

</html>

