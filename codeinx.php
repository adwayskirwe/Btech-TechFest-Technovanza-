<!DOCTYPE html>
<?php  session_start(); ?>
<html lang="en">
<head>
  <title>C-Way|Technovanza</title>
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
      <div class="parallax"><img src="fun_bg.jpg"></div>
    </div>

    <div class="row">
      <h1><div id="event_title">Code in X</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#intro">Introduction</a></li>


              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>
               <li><a data-toggle="tab" href="#criteria">Criteria</a></li>
               <li><a data-toggle="tab" href="#rules">Rules</a></li>
               <li><a data-toggle="tab" href="#result">Result</a></li>
              <li><a data-toggle="tab" href="#contact">Contact  us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="intro" class="tab-pane fade in active">
                
<br><br>Code in X, is an open challenge to all the geeks out there. If you think you are the best out of the rest, then here is a chance to prove it. Quench your thirst and accept the challenge and test the coder in you. Come and be the X. <br>


     

      
     
      </div>

       

      <div id="gameplay" class="tab-pane fade ">
          
          <b><blockquote> ROUND 1: The Cocktail Quiz </blockquote></b>
            <b>Set A MCQs </b><br>
            General MCQ's , 50 questions<br>
            Every correct answer will fetch you 2 points<br>
            1 point will be deducted for each wrong answer<br>
            <b>Set B Crossword </b><br>
            Participants will be given a crossword<br>
            Correct answer will fetch you 5 points<br>
            2 points will be deducted for each wrong answer<br>
            <b>Set C Jumbled Code </b><br>
            15 jumbled codes in different languages will be provided<br>
            Unscrambled code will fetch you only 6 points<br>
            Desired output will fetch you 10 points<br>
            <b>Set D Mind The Gap </b><br>
            Participants will be provided with 15 questions<br>
            Each question will carry 1 point<br>
            No negative marking<br>
            
            <b><blockquote>ROUND 2: The Eventual X-Coder</blockquote></b>
            1.4 programming questions will be provided<br>
            One has to solve
            2.First Question in one language for 10 points<br>
            3.Second Question in two language for 20 points<br>
            4.Third Question in three language for 30 points<br>
            5.Fourth Question in "X-Language "for 50 points<br>
            <li>Languages for each questions will be disclosed accordingly</li><br>
            i)First Question Language - 6pm (on 27th NOV)<br>
            ii)Second Question Languages- 9:30pm(on 27th NOV)<br>
            iii)Third Question Languages - 8:30am (on 28th NOV)<br><br>
            <li>"X-Language" will be disclosed at the end of all languages.</li><br>
            <li>Sufficient time period will be given for each question`</li><br>

     
     
      </div>
      
      <div id="criteria" class="tab-pane fade">
          <br><br>
            1.Top 10 participants with highest points in first round will be eligible for the 2nd i.e. final round. <br>
            2.Cumulative score of each participant will be displayed at the end of each round.<br>
        

      
     
      </div>
      <div id="rules" class="tab-pane fade">
            <br><br>
              1.Code In X is an online event with two rounds.<br>
              2.Participants will have to download the problem statement,solve and submit it within given duration of time.<br>
              3.Each participant can register only once.<br>
              4.The participants will have to go through both rounds to become Coder of X.<br>
              5.Any submission that contains harmful code, malwares, etc. will lead to disqualification.<br>
              6.For final round some rules will be disclosed on the spot.<br>


      

      
     
      </div>
      <div id="result" class="tab-pane fade">

     

      
     
      </div>

       <div id="contact" class="tab-pane fade">

     

      
     
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
<script type="text/javascript" src="js/jquery.min.js"></script>
      <script type="text/javascript" src="js/materialize.min.js"></script>
      <script type="text/javascript" src="js/sidenav.js"></script>
      <script type="text/javascript" src="js/parallax.js"></script>
</body>

</html>

