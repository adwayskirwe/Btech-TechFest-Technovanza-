<!DOCTYPE html>
<?php  session_start(); ?>
<html lang="en">
<head>
  <title>Fast N Furious|Technovanza</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
   <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.css"  media="screen,projection"/>
 
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
  font-family: 'Muli', cursive;
}

body{
 font-family: 'Roboto', sans-serif;
}

blockquote{
  border-left: 0.4vw solid #428bc2;
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
<?php  include("navbar.php"); ?>
<div class="container">

   <div class="parallax-container">
      <div class="parallax"><img src="images/fun_bg.jpg"></div>
    </div>

    <div class="row">
      <h1><div id="event_title">Climb-e-rope</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#problem">Intoduction</a></li>
              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>

              <li><a data-toggle="tab" href="#scoring">Scoring</a></li>

              <li><a data-toggle="tab" href="#arena">Arena</a></li>
              <li><a data-toggle="tab" href="#criteria">Judging Criteria</a></li>
               <li><a data-toggle="tab" href="#tutorial">Tutorial</a></li>
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">

          <br>
          Here is the rope to success! Can your bot climb it?? But here is the twist. A bot has to climb the rope using any hydraulic mechanism which could be as simple as a syringe. You may want to check out this video for more info. <br>

          <b><blockquote>Team Specification :</blockquote></b> 
          A team may consist of a maximum of 3 participants. Students from different educational institutes can form a team. <br>

          <b><blockquote>Certificate Policy :</blockquote></b> 
          1. Certificate of appreciation/participation will be awarded to the all teams. And certificate of excellence will be given to top three teams. 2. Disqualified teams will not be considered for any certificates.<br>

      
     
      </div>

       <div id="gameplay" class="tab-pane fade">

            <b><blockquote>1st Round:</blockquote></b>
            1.The bot has to climb vertically upwards against gravity.<br>
            2.The bot must reach the top in least time.<br>
            <b><blockquote>2nd Round:</blockquote></b>
            1.The race would be on an inclined rope.<br>
            2.The team that reaches to the flag in least time wins and will be qualified on the basis of judging criteria as mentioned.<br>



       
       </div>

      <div id="arena" class="tab-pane fade in">
            <br>Coming soon !
     

      
     
      </div>
      
      <div id="scoring" class="tab-pane fade">
            <br>Coming soon !
     
      
     
      </div>
      <div id="criteria" class="tab-pane fade">
            <br>Coming soon !
    
      
     
      </div>
      <div id="tutorial" class="tab-pane fade">

            <br><br>
            <div class="row">
                <div class="col l6 offset-l1">
                    <div class="embed-responsive embed-responsive-16by9" style="margin-right:10px">
                    <iframe src="http://www.youtube.com/embed/kKFIZ-PRheo?autohide=1&amp;rel=0">
                    </iframe>
                    </div>
                </div>
            </div>

      
     
      </div>
      <div id="contact" class="tab-pane fade in">

      

      
     
      </div>
      <div id="gallery" class="tab-pane fade">

      

      
     
      </div>
  </div>
  </div>
</div>

<script src="https://fastcdn.org/FlowType.JS/1.1/flowtype.js"></script>


<script type="text/javascript">
  $('body').flowtype({
 minimum :500 ,
 minFont :4,
 maxFont :16,
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

      <script type="text/javascript" src="js/materialize.min.js"></script>
      <script type="text/javascript" src="js/sidenav.js"></script>
      <script type="text/javascript" src="js/parallax.js"></script>
</body>

</html>

