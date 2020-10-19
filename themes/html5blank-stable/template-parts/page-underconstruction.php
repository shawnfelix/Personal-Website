<?php
/**
* Template Name: under-construction
*
*/
?>

<?php get_header(); ?>

	<main role="main">
		<section id="section-freelance-title" class="noselect">
			<div class="section-centering" style="margin-bottom: -5px;">
				<div id="freelance-title-wrapper">
					<div id="freelance-title">Page Under Construction</div>
					<div id="freelance-subtitle"><b>
					<img class="inline-icon" src="<?php bloginfo('template_url'); ?>/img/icons/www.svg"/>
						Come back soon for updates!<br/>
					
						</b>
					</div>
					<div id="freelance-subtitle-two"></div>
				</div>
			</div>
			
<div>
<svg viewBox="0 0 120 20">
 <defs> 
   <mask id="xxx">
     <circle cx="7" cy="12" r="40" fill="#fff" />
   </mask>
   
   <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
  	</filter>
     <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
  </defs> 

   <use id="wave3" class="wave" xlink:href="#wave" x="0" y="-2" ></use> 
   <use id="wave2" class="wave" xlink:href="#wave" x="0" y="0" ></use>
 
  <g class="topball">
  	<image xlink:href="<?php bloginfo('template_url'); ?>/img/sailboat.png"x="105" y="4" width="10px" height="8px"/>
  <g class="gooeff">
  
    <use id="wave1" class="wave" xlink:href="#wave" x="0" y="1" />

</svg>
</div>

		</section>
		<!-- /section -->
		<section id="section-tagline" class="section">
			<div id="tagline-container" class="section-centering">
			  <div id="tagline-text1" class="tagline-text">Lets build the website or software solution</div>
			  <div id="tagline-text2" class="tagline-text">that you need for your</div>
			  <div id=flip>
			    <div><div>hobby</div></div>
			    <div><div>blog</div></div>
			    <div><div>business</div></div>
			  </div>
			  
			</div>
			<div style="margin-bottom:75px; margin-top:20px" class="noselect">
				<div id="get-started-wrapper">
					<div id="get-started-button" class="boxes-btn">GET STARTED </div>
				</div>
			</div>
		</section>	
	</main>

<?php get_footer(); ?>