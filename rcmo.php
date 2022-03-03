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
      <h1><div id="event_title">RCMO</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#introduction">Introduction</a></li>
           
              

              

              <li><a data-toggle="tab" href="#rules">Rules</a></li>
              <li><a data-toggle="tab" href="#certificate">Certificate Policy</a></li>
              <li><a data-toggle="tab" href="#schedule">Schedule</a></li>
            
             
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">
              <br><br>

              VJTI and Technovanza are proud to present you RCMO (Rubik’s Cube Mumbai Open)
              an International Cubing Competition hosted by VJTI during the three days of TECHNOVANZA, the national level techno-management festival. RCMO welcomes cubers from all over the country to showcase their speed cubing skills at the largest cubing competition in the country.<br>
              RCMO along with the WORLD CUBING ASSOCIATION (WCA) governs all the competitions for puzzles labelled as Rubik puzzles,
              and all other puzzles that are played by twisting the sides, so called twisty puzzles. The event details and the schedule will be put up by 3 days prior to the competition.<br>
              <b><blockquote>Goal:</blockquote></b>
               The goal of RCMO is have fair competition with more participants with more fun each year.<br>
              The spirit of the competition is to have fun together in a friendly atmosphere, help each other and inculcate a spirit of sportsman-ship. <br>
              <b><blockquote>Success : </blockquote></b>
              With a minimum of half a dozen national records breaking each year at the competition, Rubik’s Cube Mumbai Open is Technovanza’s flagship event from the last 5 years after following tremendous success in its previous years and it just gets bigger and better every time. RCMO has been the major attraction with a large footfall and is undoubtedly one of the biggest hits of the Techno festival every year. <br>
              Do join us in this wonderful experience of hosting the international event. Till then HAPPY CUBING!!!! “The game play is perfect, keep it as it is” <br>
             
             
                            
         

      
     
      </div>

      

      <div id="rules" class="tab-pane fade ">
            <br><br>
            The competition strictly follows the World Cube Association rules and regulation.
            <a href=" https://www.worldcubeassociation.org/regulations/guidelines.html ">Click here</a>
            
               


                            

           
     

      
     
      </div>

      <div id="certificate" class="tab-pane fade ">
              <br><br>
              1.All the participants will get participation certificate.<br>
              2.Top 3 participants will be awarded with prize money and certificate of merit.<br>
             

                
               


                            

           
     

      
     
      </div>

       <div id="spec" class="tab-pane fade ">
              <br><br>
             

                
               


                            

           
     

      
     
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

