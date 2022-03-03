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
      <h1><div id="event_title">How Stuff Works</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#problem">Intoduction</a></li>
              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>

              <li><a data-toggle="tab" href="#spec">Team Specifications</a></li>

              <li><a data-toggle="tab" href="#proposal">Details of Proposal</a></li>
             
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">
              
              <br><br>
              We believe in originality, primarily.However, it's important to know what there has been before to aim in that direction.<br>
              So here's an event exclusively for inquisitive first year brains.<br>
              Look around yourself, there's a world full of technologies.... from storming bleeding edge technologies to the animatronics...<br>
              Everything has a story! A story worth mentioning!<br>
              Explore technology as never before with lucid explanations on the working and applications of some of the most exciting discoveries and technologies enclaving us. Rediscover a new dimension to your curiosity and understanding of the underlying. Nothing great in the world has ever been accomplished without passion and all creations are like mines with every man a miner.<br>
              So, be ready with your mining helmets to unveil the mine of existing technologies because you never know you may create a mine of your own very soon! <br>
              
         

      
     
      </div>

       <div id="gameplay" class="tab-pane fade">
              <b><blockquote>Conditions and limitations :</blockquote></b>
              1.Discuss with your teammates and chose a topic that interests you the most.<br>
              2.Prepare a PowerPoint presentation briefly describing how you will go about your project on the topic chosen by you. Be specific in your ideas to be implemented.<br>
              3.Send your presentation to us and we will assess how good and efficient your project is .<br>
              4.If you are selected your project will be on display during Technovanza 2015.<br>
          



       
       </div>

      <div id="spec" class="tab-pane fade in">

      <br><br>
              1.A team can consist upto 4 participants.<br>
              2.Students from different educational institutes are allowed to form a team. <br>
              <b><blockquote>Certificate Policy</blockquote></b>
              1.Participating teams would get participation certificates. Top three teams will be given certificates of excellence.<br>
              2.Disqualified teams will not be given any certificates.<br>

           
     

      
     
      </div>
      
      <div id="proposal" class="tab-pane fade">
              
              <b><blockquote>Conditions and limitations :</blockquote></b>
              1.The proposal should be a powerpoint presentation with maximum 10 slides.<br>
              2.A soft copy should be mailed on given e-mail address.<br>
              
              <b><blockquote>Format :</blockquote></b>
              1.Title of the project and Team Name.<br>
              2.Introduction<br>
              3.Principle and /or working<br>
              4.Conclusion<br>
              5.Applications<br>
              
              <b><blockquote>Deadline for entry:</blockquote></b>
              1.The participants are expected to send their proposals (ideas) by November 2015.<br>
              2.The list of short-listed students would be put up in 1st week of Dec 2015.<br>
              3.The proposals would be judged on basis of feasibility and significance. <br>
                    
     
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

