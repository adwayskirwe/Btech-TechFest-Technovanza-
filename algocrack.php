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
      <h1><div id="event_title">Algocrack</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#introduction">Introduction</a></li>
              <li><a data-toggle="tab" href="#gameplay"> Gameplay</a></li>
              <li><a data-toggle="tab" href="#rules">Rules</a></li>
              <li><a data-toggle="tab" href="#criteria">Judging Criteria</a></li>
              <li><a data-toggle="tab" href="#result">Result</a></li>
        
             
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">
            
           <br><br>
           Algorithm is defined as an instance of logic, the key to unlock the toughest challenges of programming.<br>
            Here is your chance to test your logic and crack the most demanding and mindboggling challenges of Algorithm.<br>
            Are you ready to change your thinking radically to solve our most difficult problems? <br>
        
    </div>

    <div id="gameplay" class="tab-pane fade ">
               
               <br><br>
                1.There will be two rounds, the qualifier and the finale.<br>
                2.Each round will be having challenging algorithms in store for the participants along with some logical question to gain points.<br>
                3.The participants will have to qualify the Round A point criteria to play the next round.<br>
              




                <b><blockquote>Round A:Algo-riddle</blockquote></b><br>

            <table class="table">
              <thead>
                <tr>
                  <th>Total questions</th>
                  <th>15</th>
                  <th>Total points</th>
                  <th>150</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Algorithms</th>
                  <td>5</td>
                  <td>10 points each</td>
                  
                </tr>
                <tr>
                  <th scope="row">Multiple choice questions</th>
                  <td>10</td>
                  <td>5 points each</td>
                  
                </tr>
                
              </tbody>
            </table>


              <b><blockquote>Round A: Point criteria</blockquote></b>
              1.Participant will require minimum 75 (50 in Section A & 25 in Section B each) points to qualify the round A.<br>
              2.Each MCQ will have a riddle with it, if your MCQ is correct you can claim for bonus riddle point for the same MCQ if you answer the riddle correct. i.e <br>
              Correct MCQ + Correct riddle = 10 pts.<br>
              Wrong MCQ + Correct riddle = no pt<br>

              <b><blockquote>Round B:</blockquote></b>
               <table class="table">
              <thead>
                <tr>
                  <th>Total questions</th>
                  <th>10</th>
                  <th>Total points</th>
                  <th>120</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Algorithms</th>
                  <td>4</td>
                  <td>15 points each</td>
                  
                </tr>
                <tr>
                  <th scope="row">Multiple choice questions</th>
                  <td>6</td>
                  <td>10 points each</td>
                  
                </tr>
                
              </tbody>
            </table>






        
    </div>

    <div id="rules" class="tab-pane fade ">
             <br><br>
            1.Participation is individual.<br>
            2.Only one entry per participant per round will be entertained.<br>
            3.You can make ONLY ONE SUBMISSION.<br>
            4.This submission should include all your solutions.<br>
            5.Algorithms should be in proper English statements (C/C++ or java programs are not allowed).<br>
            6.Only Complete Algorithm will be considered .<br>
            7.Also any submission that contains harmful code, malware ,etc. will lead to disqualification.<br>
            8.Any violation of rules will lead to disqualification.<br><br>
            <b>NOTE :</b> Participants will have to provide their name,college,department,email id and contact information along with their solution,failing to which participation may get revoked.<br>
              
    </div>

    <div id="criteria" class="tab-pane fade">

            <br><br>
            The participant will be judge in the below order: <br>
            1. First finalist to submit maximum working codes with desired output wins. <br>
            2. If there is a tie then submission time will be used as tie breaker.<br>
                 


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

