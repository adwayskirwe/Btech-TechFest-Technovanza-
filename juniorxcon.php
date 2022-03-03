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
      <h1><div id="event_title">Junior Xcon</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#introduction">Introduction</a></li>
           
              

              

              <li><a data-toggle="tab" href="#rules">Rules</a></li>
              <li><a data-toggle="tab" href="#spec">Team Specifications</a></li>
            
             
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">
              <br><br>
              Little minds are the most creative and hence, we here at Technovanza give the opportunity to those budding Einsteins to showcase their creativity and curiosity in the form of projects they have made. To harness and nurture young talent, we present Jr XCON contest for school students to project their ideas and knowledge through working models accompanied by lucid explanations during three days of TECHNOVANZA. Several robotic endeavors, mechanical crusades and projects based on physics, chemistry and school sciences have given impetus to young minds to realize theoretical concepts and provide a thundering new dimension to their thinking and scale their abilities to a height unimagined before!<br>
              <b><blockquote>Certificate Policy</blockquote></b>
              Participating teams would get participation certificates. Top three teams will be given certificate of excellence.
              Disqualifying teams will not be given any certificates.<br>
             
                            
         

      
     
      </div>

      

      <div id="rules" class="tab-pane fade ">
            <br><br>
            1.Applicable only for school students.<br>
            2.The participants should have valid identity card as proof of they being students of their school<br>
            3.A teacher may accompany the students presenting their projects.<br>
            4.The responsibility of bringing the students and taking them back safely will be on the school.<br>
            5.Parking facilities is unavailable inside the campus but available outside it.<br>
            6.All facilities need to exhibit their projects will be provided to the students.The participants would be given space to set up their exhibit. They are expected to utilize to put up their models, charts, information base.<br>
               


                            

           
     

      
     
      </div>

      <div id="spec" class="tab-pane fade ">
              <br><br>
              A team may consist of maximum 4 participants. Students from different educational institutes are allowed to form a team.


                
               


                            

           
     

      
     
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

