<!DOCTYPE html>
<html lang="en">
<head>
  <title>Mission SQL|Technovanza</title>
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
      <h1><div id="event_title">Mission SQL</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tagline">Tagline</a></li>
              <li><a data-toggle="tab" href="#theme">Theme</a></li>

              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>
               <li><a data-toggle="tab" href="#rules">Rules</a></li>
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="tagline" class="tab-pane fade in active">
            
            <br>
            They say a code without a proper structure is as good as no code. And when it comes to handling databases, a misstep is a disaster. The event will test the ingenuity of the participants at handling the concept, design and syntax of SQL. <br>
            The world thrives on data; let’s see how well data thrives on your code! <br>
            <b><blockquote>Mission starts on 26th December 2015,8:45 am</blockquote></b><br>
      

      
     
      </div>

       <div id="theme" class="tab-pane fade">

              <br>
              1.Theme for Mission SQL will be DDLC (Database Development Life Cycle) and SQL.<br>
              2.SQL is most useful when the DB is proper, so participants will be assessed on their overall skills with both DB development and SQL.<br>
              3.There will be 4 Rounds in all.<br>
              4.The points from previous rounds will be carried forward.<br>
              5.Mission SQL will test the participants’ skill at understanding, implementing and managing a Database (DB).<br>
              6.This will include the contestants’ comprehension of ERDs, the structure and flow of tokens through tables, simple queries & large procedures / functions etc. using Oracle or MySql.<br>
              7.SQL has multiple ways of performing a task, however the most efficient manner in terms of CPU I/O cost is considered standard.<br>
              8.The contestants need to devise queries which are as close to the standard as one can.<br>
          

       </div>

      <div id="gameplay" class="tab-pane fade in">

              <br>
              The event will be conducted in the following round :<br>
              <b><blockquote>Elimination:</blockquote></b>
              1.The participants will be given a question sheet based on both DB concepts and SQL queries.<br>
              2.There will be objective type questions related to queries & DB Software.<br>
              3.There will be 2 sections, each containing 15-25 questions.<br>
              4.For Questions of 1st Section there will be 1 mark per right answer.<br>
              5.But 2nd Section Questions have Multiple Answers where there will be Negative Marking of -1/2 for incorrect choice among given multiple.<br>
              6.Baseline will be decided at the venue and the top scorers will advance to the next round.<br>
              7.Total time is 30 minutes for this Round.<br>
              <b><blockquote>Debugging:</blockquote></b>
              1.The participants will be given questions in the form of a database schema (say Hospital management) with number of errors.<br>
              2.Participants have to create correct schema from any of them, in 45 minutes.<br>
              3.Errors will be in the form of ERDs & Procedures/Functions.<br>
              4.Participants will have to find maximum number of errors AND jot down the revised schema & given Procedures / Functions.<br>
              5.There will be +2 mark for each corrected error & -1/2 for unsolved error.<br>
              6.Top scorers from this round will advance to the next.<br>
              <b><blockquote>Bonus Round:</blockquote></b>
              1.The participants will be given cross words puzzles based on SQL and database concepts.<br>
              2.Hints will be provided for solving the puzzle, whoever recognizes the answer to the hint must clap.<br>
              3.The first clapper will be given a bowl of alphabets to make the word (answer).<br>
              4.The time taken by each participant to make the word will be recorded.<br>
              5.The fastest five participants will move to the next round.<br>
              6.Time for this round is 30 minutes.<br>
              7.Maximum 10martks will be given to each correct answer.<br>
              8.The participants will get the opportunity to collect more points in bonus round.<br>
              <b><blockquote>Implementation and Coding:</blockquote></b>
              1.The participants will be given a database similar to the schema that they corrected in 2nd round.<br>
              2.They will be given a list of procedures/functions/triggers/views to be implemented on their own database of which at least 4 must be solved.<br>
              3.Time for this round is 1 hour.<br>
              4.Maximum 10 marks will be there to each correct answer.<br>
              5.The participant with most number of points will be the winner.<br>

      
     
      </div>
      
      <div id="rules" class="tab-pane fade">
              <br>
              1.Participant must have knowledge of at least one DBMS among MySQL or Oracle.<br>
              2.Registration will be free.<br>
              3.Each person can register only once.<br>
              4.Participants are not allowed to bring any media devices such as pen drives, CD, DVD etc.<br>
              5.Cell phones must be switched off.<br>
              6.Any violation of rules will lead to disqualification.<br>
              7.Apart from these rules, additional rules will be disclosed on the spot.<br>
              8.All other details and further explanation about the event will be disclosed on the spot.<br>
              9.The points from previous rounds will be carried forward.<br>
              10.The last round will be a decided on the basis of all the accumulated points.<br>
              11.Marking scheme and rounds are subject to change on site depending on the participation strength.<br>
              12.The decision of the organizers is final and binding.<br>
      

      
     
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

      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

      <script type="text/javascript" src="js/materialize.min.js"></script>
      <script type="text/javascript" src="js/sidenav.js"></script>
      <script type="text/javascript" src="js/parallax.js"></script>
</body>

</html>

