<!DOCTYPE html>
<?php  session_start(); ?>
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
  font-family: 'Lobster';
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
      <h1><div id="event_title">Bridge the Gap</h1>
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
          
      Across gulfs and rivers, between people and countries, bridges break down separation and foster connectedness. The world has gone at its heights to reach the sky. As far back as we can see in history, human beings have used technology to solve problems and ease physical burdens and this has played a major role in human development. Here is your chance to build structures with your own techniques and skills and make the marvels of engineering!!
REGISTER

    </div>

    <div id="gameplay" class="tab-pane fade in active">

     Round 1
Construct a TWO SIDE SUPPORTED TRUSS BRIDGE of length 70 cm using standard popsicle sticks and adhesives.
The bridge must have only two peers and the distance between their centres must be 50 cm.
Overlap criteria -The structure must be a truss (not a beam), not more than two Popsicle sticks should be overlapped to make a truss member.
Peer width should not exceed the width of deck.
The roadway should be continuous and should allow a 10cm x 10cm vehicle to pass the entire length of the bridge.
The width of the bridge at any point shall not be more than 12.5 cm.
Total height of the bridge with peer must not be less than 20 cm and must not exceed 30 cm. No truss members must be placed 5 cm above the roadway.
Round 2
The earthquake resistant building frame is to be made in this round by material provided at the time of event.
The maximum cross-section dimensions of building frame should be 15x25 cm.
The height of the building should be between 40-50 cm.
The frame should be such that it resists the seismic vibrations.

Time for constructing : 3hrs 
Time for drying : 3hrs 
Number of sticks : 100 (may change by small amount at the time of event)
REGISTER

    </div>

    <div id="rules" class="tab-pane fade in active">
The bridge must be constructed only from Popsicle sticks (12 cm x 1.2 cm x 0.2 cm) and adhesives (Synthetic white adhesive or single component cyanoacrylate adhesive).
Joint criteria -Joints should resemble a pin connection, so not more than 1.5 cm of popsicle stick should be overlapped at joints.
No other materials may be used.
Any material should not be stained, painted or coated in any fashion with any foreign substance.
The Popsicle sticks may be cut or trimmed to any shape or size.
The adhesive can only be used to join Popsicle sticks together; however adhesives cannot be applied on the free surface of the member sticks to increase its strength.

Team Specifications
A team may consists of maximum 4 members.Students from different educational institutes can form a team.
      
    </div>
    <div id="criteria" class="tab-pane fade in active">

     Round 1
The constructed bridge will be judge on the following criteria :-

Maximum load at which the structure fails.
Aesthetics
Teamwork
Total number of Popsicle sticks used in construction (to be considered only in case if there is a tie in first criteria)

Round 2
The constructed frame structure will be tested on earthquake simulator and with different loads.
The building frame should resist the vibrations for maximum amount of time.

NOTE: There may occur changes in the gameplay which will be specified at the time of event. All the decisions taken by the judge will be final and binding to all. Any queries afterwards will not be entertained.
REGISTER


    </div>
    <div id="contact" class="tab-pane fade in active">

      

Contact Us
Dipesh Balani : +918793408281
Devesh Patil : +919673227483
Prathamesh Ashtankar : +918975710280
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

     <script type="text/javascript" src="../js/jquery.min.js"></script>

      <script type="text/javascript" src="../js/materialize.min.js"></script>
      <script type="text/javascript" src="../js/sidenav.js"></script>
      <script type="text/javascript" src="../js/parallax.js"></script>
</body>

</html>

