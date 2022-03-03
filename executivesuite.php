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
      <h1><div id="event_title">Executive Suite</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#introduction">Intoduction</a></li>
           
              <li><a data-toggle="tab" href="#gameplay">Gameplay</a></li>

              

              <li><a data-toggle="tab" href="#rules">Rules</a></li>
              <li><a data-toggle="tab" href="#criteria">Judging Criteria</a></li>
            
             
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">
              <br><br>GET A CHANCE TO SHOW THAT HOW SUITABLE ARE YOU FOR QUALIFIED JOBS AS E-CELL, VJTI, PRESENTS 'EXECUTIVE SUITE'. SO SUIT UP AND GIVE AN OPPORTUNITY TO YOURSELF TO FACE YOUR VERY FIRST INTERVIEW. HURRY UP GUYS! FILL THE REGISTRATION FORM AT THE EARLIEST.<br>
             
                            
         

      
     
      </div>

       <div id="gameplay" class="tab-pane fade">
            <br><br>
            THERE ARE THREE ROUNDS IN THIS EVENT:<br>
            1.APTITUDE TEST: AN OFFLINE WRITTEN EXAM WILL BE CONDUCTED<br>
            2.GROUP DISCUSSION (GD):THOSE CANDIDATES CLEAR ROUND 1 WILL GET CHANCE TO COMPETE IN THIS ROUND<br>
            3.PERSONAL INTERVIEW( PI):CANDIDATES WHO WILL GET QUALIFIED IN 2ND ROUND WILL GET CHANCE TO FACE PERSONAL INTERVIEW.<br><br>
            <b>Note:-</b>The dates of Round 1 and Round 2 will be provided on your respective mail Ids.<br>
            
          



       
       </div>

      <div id="rules" class="tab-pane fade ">
            <br><br>
            1.ANY KIND OF CHEATING OR FORGERING WILL LEAD TO DISQUALIFICATION.<br>
            2.CANDIDATES WILL HAVE TO CARRY HARD COPY OF THEIR RESUME.<br>
            3.DECISION OF THE EVENT HEADS AND THE JUDGES WILL BE FINAL.<br>
                
               


                            

           
     

      
     
      </div>

      <div id="criteria" class="tab-pane fade ">
              <br><br>
              1.CANDIDATES SHOULD HAVE TO SCORE ABOVE PAR SCORE IN 1st ROUND. PAR SCORE WILL DECIDE ON THE BASIS OF STRENGTH OF PARTICIPANTS.<br>
              2.JUDGES WILL DECIDE WINNERS ON THE BASIS COMMUNICATION SKILLS,ABILITY OF LEADERSHIP,KNOWLEDGE OF SUBJECT AND OTHER PARAMETERS.<br>


                
               


                            

           
     

      
     
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

