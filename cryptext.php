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
      <div class="parallax"><img src="photos/coding.jpg"></div>
    </div>

    <div class="row">
      <h1><div id="event_title">Cryptext</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#introduction">Introduction</a></li>
              <li><a data-toggle="tab" href="#gameplay"> Gameplay</a></li>
              <li><a data-toggle="tab" href="#rules">Rules</a></li>
              
              <li><a data-toggle="tab" href="#result">Result</a></li>
        
             
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">
         <br><br>
          Calling for efforts without wax! Can your mind and code identify encoding method for given cipher text and decode the message?<br>
          Then welcome to our digital fortress and decrypt your way to victory!!!<br>


    </div>

    <div id="gameplay" class="tab-pane fade ">
               

               <b><blockquote>ROUND 1: Qualifier </blockquote></b>
              1.Given an encrypted piece of text, decrypt it to find famous English proverbs and sayings. <br>
              2.Decrypt the encrypted text to solve riddles which lead you to the next round. <br>
              <b>Total Questions : 12 </b> <br>
              <b>Total Points  : 75</b> <br>
              
              <b><blockquote>ROUND 2: Finale </blockquote></b>
              <b><u><li>Level 1 </li></u></b><br>
              Follow the bit crumbs and code your way to decryption to the next level. <br>
              <b>Total Questions : 2</b><br>
              <b>Total Points  : 50</b> <br><br>

              <b><u><li>Level 2</li></u></b> <br>
              Overcome your last hurdle by decoding and providing a code for the complex encoded piece of text. <br>
              <b>Total Questions : 2</b> <br>
              <b>Total Points  : 50</b><br>
               






        
    </div>

    <div id="rules" class="tab-pane fade ">
            <br><br>
            1.It’s an individual online event.<br>
            2.Each person can register only once.<br>
            3.The participants have to complete all the rounds to be able to win the competition.<br>
            4.Each participant can make ONLY ONE submission per round.<br>
            5.Hints to decode the questions will be provided depending on the gameplay.<br>
            6.The decision of the organisers will be final and binding.<br>
    </div>

   

    <div id="result" class="tab-pane fade">

     


    </div>
    <div id="contact" class="tab-pane fade ">

      

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

