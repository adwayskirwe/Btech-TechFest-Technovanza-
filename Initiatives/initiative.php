<!DOCTYPE html>
<html>
<head>
 
  <!--Import Google Icon Font-->
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="../css/materialize.css"  media="screen,projection"/>
 
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
 
 
 
 
  <title>Initiative</title>
  <style type="text/css" media="screen">
body::-webkit-scrollbar {
    width: 0.8em;
}
 
body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
  a.white{
    color:black;
  }

  hr{
    width: 75%;
  }

    .row .col{
padding-left: 0px;
padding-right:0px;
 
}

.row
      {
      margin:0px;
 
      }
    .container-fluid
    {
      width: 100%;
    }
    .panel {
    position: relative;
    float: left;
    overflow: hidden;
    width: 100%;
    text-align: center;
    background-color: transparent;
    background-position: center;
    background-size: cover;
}
    
     .panel .image {
    position: relative;
    height: 100%;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
}
.panel .left {
    float: left;
}
.panel .chevron-up-right {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    display: block;
    width: 30px;
    height: 30px;
    background: transparent url('../images/black-chevron-up-right.png') no-repeat center;
    background-size: contain;
    -webkit-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    -moz-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    -ms-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    -o-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s
}
.panel .chevron-down-left {
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    display: block;
    width: 30px;
    height: 30px;
    background: transparent url('../images/black-chevron-down-left.png') no-repeat center;
    background-size: contain;
    -webkit-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    -moz-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    -ms-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    -o-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s

}
.panel:hover .chevron-up-right {
    top: 20px;
    right: 20px;
    opacity: 1
}
.panel:hover .chevron-down-left {
    bottom: 20px;
    left: 20px;
    opacity: 1
}
 
.panel .chevron-up-left {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    display: block;
    width: 30px;
    height: 30px;
    background: transparent url('../images/white-chevron-up-left.png') no-repeat center;
    background-size: contain;
    -webkit-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    -moz-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    -ms-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    -o-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s
}
.panel .chevron-down-right {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0;
    display: block;
    width: 30px;
    height: 30px;
    background: transparent url('../images/white-chevron-down-right.png') no-repeat center;
    background-size: contain;
    -webkit-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    -moz-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    -ms-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    -o-transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s;
    transition: all 0.125s cubic-bezier(0.39, 0.58, 0.57, 1) 0s
}
.panel:hover .chevron-up-left {
    top: 20px;
    left: 20px;
    opacity: 1
}
.panel:hover .chevron-down-right {
    bottom: 20px;
    right: 20px;
    opacity: 1
}

.v-center-content img{
height: auto;
width: 100%;
margin: 0px;
padding: 0px;
 
}
.row1
{
background-color:#FFFFFF;
padding-bottom: 0px;
}
.row2
{
background-color:#141414;
}
.p1
{
text-align:center;
font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
    line-height: 130%;
  
    margin-top: 16px;
    margin-bottom: 16px;

}
.h1
{  
 text-align:center;
font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
margin-top:7vh;
color: #b59b4a;
}
content {
    white-space: normal;
}

.p2
{
color:white;
text-align:center;
font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
    line-height: 130%;
    
    margin-top: 16px;
    margin-bottom: 16px;

}
.h2
{   text-align:center;
color:white;
font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
margin-top:7vh;
color: #b59b4a;
}
 
      
p{
 
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;
 
  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;
 
  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
 
}
.navbar-collapse.collapse {
    display: none!important;
}

#bg img {
   
  background-position: center center;
    background-repeat: no-repeat;
    background-size: cover; 
  max-width: 100%;
  
}
.brand-logo img
{
  padding: 9px 15px;
  height:65px;
}
#menu {
  position:fixed;
  top:0px;
  width:100%; 
   
  background-color:#DDDDDD;
  color: #FFFFFF;
  z-index:9999;
  display: none;
}
.hide-on-med-and-down a:hover
{
color:#02A8F3;
}
center
{
  margin:47px;
}

  </style>
   </head>




<body>

 <?php  include("../navbar.php");  ?>
<div id="bg">
  <img src="fun_bg.jpg" alt="">
</div> 

 </div>
  <div id="content">
               <div id="content-main" role="main">
                  <div class="panels">
                                       
                     <div class="row row1">                      
                        <div class="col l12">                           
                           <div class="panel panel-home-panel-motion short dark home-panel-motion">
                              <div class="copy col l7 right  v-center-wrapper" >
                                 <div class="arrow left dark"></div>
                                 <div class="v-center-content">
                                    <div class="inner">
                                       <h4 class="h1" >Mission Mumbai</h4>
                                       <hr />
                                       <p class="p1">Our talented in-house team use their wealth of knowledge and ingenuity to service produce for some of the biggest and brightest clients across the globe. Whether we&rsquo;re working with global brands, international directors or national agencies; making huge TV campaigns or branded online content, our Scottish hospitality and expertise shines through.</p>
                                    <center><a style="font-color:black;" class="waves-effect waves-light btn black" href="missionmumbai.php">Read More</a></center>
                                    </div>
                                 </div>
                                 
                              </div>
                              <div class="image col l5 left .v-center-wrapper">
                                 <div class="chevron-up-right"></div>
                                 <div class="chevron-down-left"></div>
                                 <div class="v-center-content">       
                                   <img class="responsive-img" src="fun_bg.jpg" alt="">
                                 </div>
                              </div>
                           </div>
                           </div>
                           </div>
                           <div class="row row2">
                           <div class="col l12 ">
                           <div class="panel panel-home-panel-motion short dark home-panel-motion">
                            
                              <div class="copy col l7 left  v-center-wrapper" >
                                 <div class="arrow left dark"></div>
                                 <div class="v-center-content">
                                    <div class="inner">
                                       <h4 class="h2">Pratigya</h4>
                                       <hr />
                                       <p class="p2">Our talented in-house team use their wealth of knowledge and ingenuity to service produce for some of the biggest and brightest clients across the globe. Whether we&rsquo;re working with global brands, international directors or national agencies; making huge TV campaigns or branded online content, our Scottish hospitality and expertise shines through.</p>
                                    <center><a class="waves-effect waves-light btn white"
                                    href="pratigya.php">Read More</a></center>
                                    </div>
                                 </div>
                              </div>
                              <div class="image col l5 right">
                                <div class="chevron-up-left"></div>
                                 <div class="chevron-down-right"></div>
                                 <div class="v-center-content">                                 
                                   <img class="responsive-img" src="fun_bg.jpg" alt="">
                                 </div>
                              </div>
                           </div>
                           </div>
                        </div>
                   </div>                  
                </div>  
               
            

      <script type="text/javascript" src="../js/jquery.min.js"></script>
      <script type="text/javascript" src="../js/materialize.min.js"></script>
      <script type="text/javascript" src="../js/sidenav.js"></script>
      <script type="text/javascript" src="../js/ls.js"></script>
      <script type="text/javascript" src="../js/flowtype.js"></script>
 
         <script type="text/javascript">

 
 
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

 $('p').flowtype({
 minimum :500 ,
 minFont :4,
 maxFont :20,
 maximum : 1200
}); 

 $('h').flowtype({
 minimum :500 ,
 minFont :8,
 maxFont :20,
 maximum : 1200
});   
 </script>     
 </body>
</html>
