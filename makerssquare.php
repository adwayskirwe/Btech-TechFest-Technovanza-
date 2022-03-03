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
      <h1><div id="event_title">Makers Square</h1>
        <div style="overflow:auto;-webkit-overflow-scrolling:touch">
          <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#introduction">Introduction</a></li>
              <li><a data-toggle="tab" href="#gameplay"> Gameplay</a></li>
              <li><a data-toggle="tab" href="#rules">Rules</a></li>
               <li><a data-toggle="tab" href="#spec">Team Specifications</a></li>
               <li><a data-toggle="tab" href="#proposal">Details of Proposal</a></li>

              
              
        
             
              <li><a data-toggle="tab" href="#contact">Contact us</a></li>
              <li><a data-toggle="tab" href="#gallery">Gallery</a></li>
          </ul>
         </div>


   
 

     <div class="tab-content">
      <div id="introduction" class="tab-pane fade in active">
          <br><br>
          It's time to bring your imagination to reality and show case your talent and bring forth your ideas to the world.<br>
          Makers Square is a national event to put up your projects and exhibits ranging from civil, mechanical to robotics, chemical, physics experiments etc. So this is your chance to gain immense recognition and experience.<br>
          Redesigning the technologies and devices through their projects, students make a significant contribution to the society and earn accolades for their work.<br>


    </div>

    <div id="gameplay" class="tab-pane fade ">
              <br><br>
              1.Discuss with your teammates and chose a topic that interests you the most.<br>
            2.Prepare a abstract briefly describing how you will go about your project on the topic chosen by you. Be specific in your ideas to be implemented.<br>
            3.Send your abstract to us at and we will assess how good and efficient your project is.<br>
            4.If you are selected your project will be on display during Technovanza 2015.<br>







        
    </div>

    <div id="rules" class="tab-pane fade ">
             <br><br>
             1.The maximum number of members allowed in a team is 6.<br>
              2.All the exhibits which the participants are using should be notified beforehand.<br>
              3.A 8×8 ft space will be provided for putting up.Only certain other facilities will be provided (these would be put up later).<br>
              4.Winner would be decided on points given by three judges based on different criteria as mentioned. Decision of judges would be final.<br>
              5.Participating teams would get participation certificates.Top three teams will be given certificates of excellence.<br>
    </div>

     <div id="spec" class="tab-pane fade ">
            <br><br>
            1. A team may consist of 6 participants.<br>
            2.Students from different educational institutes are allowed to form a team. <br>
            <b><blockquote>Certificate Policy</blockquote></b>
            1.Participating teams would get participation certificates. Top three teams will be given certificates of excellence.<br>
            2.Disqualified teams will not be given any certificates<br>
    </div>


     <div id="proposal" class="tab-pane fade ">
             <b><blockquote>Conditions and limitations :</blockquote></b>
              1.The proposal should be a word document with maximum 2000 words.<br>
              2.A soft copy should be mailed on given e-mail address.<br>
              <b><blockquote>Format :</blockquote></b>
              1.Title of the project<br>
              2.Abstract<br>
              3.Introduction<br>
              4.Main body of the project<br>
              5.Conclusion<br>
              6.Reference<br>
              7.Practical implementation, if possible<br>
              <br>The proposals would be judged on basis of feasibility and significance. <br>
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

