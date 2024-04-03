
const set2english = () => {
	document.getElementById("mainContent").innerHTML = `
	<div class="fh5co-loader"></div>

	<div id="page">
	<nav class="fh5co-nav" role="navigation">
	<div class="container">
		<div class="row">

			<div class="col-xs-12 text-center menu-1 menu-wrap">
				<ul>
					<li class="active">
						<div class="col-xs-12 text-center logo-wrap">
							<div id="fh5co-logo"><a href="index.html"><img style="height: 100px;"
										src="images/logoaero (2).png" /></a></div>
						</div>
					</li>
					<li><a href="about.html">About US</a></li>
					<li style="position: relative;" class="has-dropdown">
						<a  id="t1"href="engineering service.html">ENGINEERING SERVICES  <span style="float:right" id="nav0bt" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
					  </svg></span> </a>
						<ul class="dropdown">
							<li><a href="CONSULTANCY.html">CONSULTANCY</a></li>
							<li><a href="BASE MAINTENANCE SUPPORT & OVERSIGHT SERVICE.html">BASE MAINTENANCE
									SUPPORT </a></li>
							<li><a href="Recruitment Services.html">Recruitment Services</a></li>


						</ul>
					</li>

					<li style="position: relative;" id="nav1" class="has-dropdown">
						<a href="technical manegment support.html">Technical Management Support  <span style="float:right" id="nav1bt" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
					  </svg></span> </a>
						<ul class="dropdown">
							<li><a href="aircraft asset management.html">AIRCRAFT ASSET MANAGEMENT</a></li>
							<li><a href="project support.html">PROJECT MANAGEMENT </a></li>
							<li><a href="record review.html">RECORDS MANAGEMENT</a></li>
							<li><a href="AIRCRAFT LEASE TRANSFERS.html">AIRCRAFT LEASE TRANSFERS</a></li>
							<li><a href="aircraft repossessing.html">AIRCRAFT REPOSSESSING</a></li>


						</ul>
					</li>
					<li class="has-dropdown"><a href="technical training.html">Aviation Training
							Services  <span style="float:right" id="nav2bt" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
						  </svg></span></a>
						<ul class="dropdown">
							<li><a href="esa part 66 examination.html">EASA BASIC MODULES EXAMINATION </a>
							</li>
							<li><a href="type rating courses.html">TYPE RATING COURSES</a></li>

							<li><a href="ONLINE COURSES.html"> ONLINE COURSES </a></li>
							<li><a href="OTHERS TRAINING.html"> OTHERS TRAINING </a></li>

							<li class="itemToHoverOver">
								<a href="CABIN CREW INITIAL TRAINING.html"> CABIN CREW INITIAL TRAINING </a>
								<ul class="dpdn">
									<div>
										<li><a href="HOW TO BECOME A CABIN CREW.html"> <svg
													xmlns="http://www.w3.org/2000/svg" width="16"
													height="16" fill="currentColor"
													class="bi bi-arrow-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
														d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
												</svg> HOW TO BECOME A CABIN
												CREW ?
											</a></li>
									</div>
								</ul>

							</li>


						</ul>
					</li>

					<li><a href="contact.html">Contact</a></li>
					<li class="has-dropdown"><img class="mobileHide" src="images/en.png"
							style="width: 30px; height: 30px; cursor: pointer;"></a>
						<ul style="top: 110% !important;" class="  dropdown hideNonMobile mobileLgNav " >
							<li onclick="changeLanguage('fr')" style="cursor: pointer; color : white"><img
									src="images/fr.png" style="width: 30px; height: 30px; cursor: pointer;">
								Frensh</li>

						</ul>
					</li>
				</ul>
			</div>
		</div>

	</div>
	<!-- </div> -->
</nav>

		<header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner"
			data-stellar-background-ratio="0.5">
			<div class="overlay">
				<img src="/images/aaa16.jpg" style="filter: brightness(0.5);
			width: 100%;
		">
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center mobileNopaddingleft">
						<div class="display-t js-fullheight">
							<div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
								<h1>Aero Training <em>&amp;</em><em>Engineering </em> Consulting</h1>
								<h2>An International Fame</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<div id="fh5co-about" class="fh5co-section">
			<div style="width:100%;">
				<div style="position: relative;">
					<div style="padding:0px" class="col-md-12  img-wrap animate-box"
						data-animate-effect="fadeInLeft">
						<img class="mobileHide" style="width: -webkit-fill-available;    height: 100vh;
						filter: brightness(50%)
						" src="images/aaa13.jpg" alt="">
					</div>
					<div style="position: absolute; width:100%" class="animate-box mobilePositionRelative">
						<div
							style="display: flex; justify-content: center;     width: 100%;	padding-top: 10%;					">
							<div style="width: 50%; display: flex; flex-direction: column; align-items: center;"
								class="section-heading">
								<h1 style="color: #bd9973 ;  text-align: center ;">Aero Training & Engineering
									Consulting</p>
									<p>Aero Training & Engineering Consulting was founded by a passionate aviation
										professional.
									</p>
									<p>Working within the world of airplane manufacturing, airline operations and
										consultancy
										they both gained their extensive experience.</p>
									<a href="about.html" class="btn btn-primary btn-outline">Our History</a>
							</div>
						</div>

					</div>
				</div>


				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
					<h1 style="color: white;">Our Services</p>

				</div>
			</div>
		</div>

		<div class="mobileShow">
		<a style="    position: relative;
		" href="./engineering service.html">
			<img style="    width: 60%;
			margin: 19%;

			transform: rotate(45deg);
		" src="../images/aircraft-sales-acquisitions_3a.jpg">
			<p style="text-align: center !important; position :absolute; top:5px;left:80px ">ENGINEERING SERVICES </p>
		</a>
		<a style="    position: relative;
		" href="./technical manegment support.html">
			<img style="    width: 60%;
			margin: 19%;

			transform: rotate(45deg);
		" src="../images/executive-charter_4a.jpg">
			<p style="text-align: center !important; position :absolute; top:5px;left:80px ">Technical Management Support </p>
		</a>
		<a style="    position: relative;
		" href="./technical training.html">
			<img style="    width: 60%;
			margin: 19%;

			transform: rotate(45deg);
		" src="../images/aircraft-managementa.jpg">
			<p style="text-align: center !important; position :absolute; top:5px;left:80px ">Aviation Training Services</p>
		</a>
		</div>

		<div id="fh5co-about" class="fh5co-section mobileHide">

			<div style="margin-top:20%;" id="fh5co-featured-menu" class="fh5co-section">

				<div class="container">

					<div class="row">

						<ul class="main-nav">

							<li class="item1">
								<a href="./engineering service.html">
									<div class="bg">
									</div>
									<p style="text-align: center !important;">ENGINEERING SERVICES </p>
								</a>
							</li>
							<li class="item2">
								<a href="./technical manegment support.html">
									<div class="bg"></div>
									<p style="text-align: center !important;">Technical Management Support</p>
								</a>
							</li>
							<li class="item3">
								<a href="./technical training.html">
									<div class="bg"></div>
									<p style="text-align: center !important;">Aviation Training Services</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>





		<div style="padding-top: 10%;" id="fh5co-blog" class="fh5co-section">
			<div class="container">
				<div class="row animate-box">
					<div style="margin-bottom: 5%;"
						class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
						<h1 style="color: white;">Blog</p>

					</div>
					<div class="row">
						<div class="col-md-4">
							<div class="fh5co-blog animate-box">
								<a href="#" class="blog-bg" style="background-image: url(images/EN3.jpg);"></a>
								<div class="blog-text">
									<span class="posted_on"></span>
									<h3><a style="color:#bd9973 ;" href="blog1.html">How Aircraft Engineering
											Consultants are Tackling
											Sustainability Challenges in Aviation </a></h3>
									<p style="color : #6f7075 !important;">As concerns about climate change continue
										to grow, the aviation industry is
										under
										increasing pressure to become more sustainable. From reducing greenhouse gas
										emissions to minimizing noise pollution, there are a variety of
										sustainability
										challenges facing the industry. In this context, aircraft engineering
										consultants are playing an increasingly important....</p>
									<Br />
									<ul class="stuff">
										<li><i class="icon-heart2"></i>1.2K</li>
										<li><i class="icon-eye2"></i>2K</li>
										<li><a href="blog1.html">Read More<i class="icon-arrow-right22"></i></a>
										</li>
									</ul>

								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="fh5co-blog animate-box">
								<a href="#" class="blog-bg" style="background-image: url(images/EN2.jpg);"></a>
								<div class="blog-text">
									<span class="posted_on"></span>
									<h3><a style="color:#bd9973 ;" href="/blog2.html">The Benefits of Advanced
											Simulation Tools in Aircraft
											Engineering Consulting</a></h3>
									<Br />
									<p style="color : #6f7075 !important;"> When it comes to designing and
										optimizing aircraft, simulation tools have
										become
										an essential part of the process. These tools allow engineers to create
										virtual
										models of aircraft, which can be used to test different design variations,
										predict performance under different conditions, and identify potential
										problems
										before a physical...</p>
									<Br />
									<ul class="stuff">
										<li><i class="icon-heart2"></i>1.2K</li>
										<li><i class="icon-eye2"></i>2K</li>
										<li><a href="blog2.html">Read More<i class="icon-arrow-right22"></i></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="fh5co-blog animate-box">
								<a href="#" class="blog-bg" style="background-image: url(images/EN1.jpg);"></a>
								<div class="blog-text">
									<span class="posted_on"></span>
									<h3><a style="color:#bd9973 ;" href="/blog3.html">The Importance of Maintenance
											Planning for Safe and
											Reliable Aircraft Operation <Br /> <Br /></a></h3>
									<p style="color : #6f7075 !important;">Aircraft maintenance is a critical
										component of ensuring safe and reliable
										aircraft operation. From routine inspections to major overhauls, every
										aspect of
										aircraft maintenance requires careful planning and execution. In the world
										of
										aircraft engineering consulting, maintenance planning is a key area of
										focus, as
										consultants work with airlines...</p>
									<Br />
									<ul class="stuff">
										<li><i class="icon-heart2"></i>1.2K</li>
										<li><i class="icon-eye2"></i>2K</li>
										<li><a href="blog3.html">Read More<i class="icon-arrow-right22"></i></a>
										</li>
									</ul>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

		</div>


		<div id="fh5co-about" class="fh5co-section">
			<h2 style="text-align: center; color: white;">
				Our Partners
			</h2>
			<h3 style="text-align: center; color: white;">
				Improve Your Experience With Us
			</h3>

			<div class="carousel-container">
				<div class="carousel-wrapper" id="carouselWrapper" style="transform: translateX(-100%);">

					<img src="images/WhatsApp Image 2024-04-01 à 10.53.51_4245b520.jpg" class="sponsorImg carousel-item ">


					<img src="images/sponsor1.png" class="sponsorImg carousel-item ">
					<img src="images/sponsor2.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor3.jpeg" class="sponsorImg carousel-item ">
					<img src="images/WhatsApp Image 2024-04-01 à 10.53.51_b2491137.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor4.png" class="sponsorImg carousel-item ">
					<img src="images/sponsor5.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor6.png" class="sponsorImg carousel-item ">
					<img src="images/WhatsApp Image 2024-04-01 à 10.53.51_26d81b91.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor7.png" class="sponsorImg carousel-item ">


				</div>
				<div class="carousel-wrapper" id="carouselWrapper1" style="transform: translateX(-100%);">
					<img src="images/WhatsApp Image 2024-04-01 à 10.53.51_b2491137.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor1.png" class="sponsorImg carousel-item ">
					<img src="images/sponsor2.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor3.jpeg" class="sponsorImg carousel-item ">
					<img src="images/sponsor4.png" class="sponsorImg carousel-item ">
					<img src="images/WhatsApp Image 2024-04-01 à 10.53.51_26d81b91.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor5.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor6.png" class="sponsorImg carousel-item ">
					<img src="images/sponsor7.png" class="sponsorImg carousel-item ">
					<img src="images/WhatsApp Image 2024-04-01 à 10.53.51_4245b520.jpg" class="sponsorImg carousel-item ">

				</div>

			</div>


		</div>



		<footer style="padding: 0px;" id="fh5co-footer" role="contentinfo" class="fh5co-section">
			<div style="padding:3% 2% 0% 2%;">
				<div class="row ">
					<div class="col-md-3 fh5co-widget">
						<a href="./index.html"><img src="images/logoaero (2).png" /></a>
					</div>
					<div class="col-md-1 col-md-push-1 fh5co-widget">
						<h4>Links</h4>
						<ul class="fh5co-footer-links">
							<li><a href="/index.html">Home</a></li>
							<li><a href="/about.html">About</a></li>
							<li><a href="technical training.html">Services</a></li>
						</ul>
					</div>

					<div class="col-md-2 col-md-push-1 fh5co-widget">
						<h4>Categories</h4>
						<div style="display: flex;">
							<ul class="fh5co-footer-links">
								<li><a href="/project support.html">Project support</a></li>
								<li><a href="/AIRCRAFT LEASE TRANSFERS.html">Transition Suppor</a></li>
								<li><a href="BASE MAINTENANCE SUPPORT & OVERSIGHT SERVICE.html">Base Maintenance Representative</a></li>
								<li><a href="/engineering service.html">Engineering support</a></li>
							</ul>

						</div>
					</div>
					<div class="col-md-2 col-md-push-1 fh5co-widget">
						<h4>Categories</h4>
						<div style="display: flex;">

							<ul class="fh5co-footer-links">
								<li><a href="esa part 66 examination.html">ESA Part 66 Examination</a></li>
								<li><a href="type rating courses.html">TYPE RATING COURSES</a></li>

							</ul>
						</div>
					</div>

					<div class="col-md-4 col-md-push-1 fh5co-widget">
						<h4>Contact Information</h4>
						<ul class="fh5co-footer-links">
							<li><a href="tel://212698977462">+212698977462</a></li>
							<li><a href="mailto:contact@aertecsupport.com">contact@aertecsupport.com</a></li>
						</ul>

						<div class="newFooter ">
							<div class="rounded-social-buttons">
								<a class="social-button facebook" href="https://www.facebook.com/"
									target="_blank"><i class="fab fa-facebook-f"></i></a>
								<a class="social-button twitter" href="https://www.twitter.com/" target="_blank"><i
										class="fab fa-twitter"></i></a>
								<a class="social-button linkedin" href="https://www.linkedin.com/"
									target="_blank"><i class="fab fa-linkedin-in"></i></a>
								<a class="social-button tiktok" href="whatsapp://send?phone=+212698977462"><i
										class="fab fa-whatsapp"></i></a>

								<a class="social-button instagram" href="https://www.instagram.com/"
									target="_blank"><i class="fab fa-instagram"></i></a>
							</div>
						</div>

					</div>

				</div>


			</div>
		</footer>
	</div>

	<div class="gototop js-top">
		<a href="#" class="js-gotop"><i class="icon-arrow-up22"></i></a>
	</div>


    `
}


const set2french = () => {
	document.getElementById("mainContent").innerHTML = `
	<div id="mainContent">
	<div class="fh5co-loader" style="display: none;"></div>

	<div id="page"><nav class="fh5co-nav" role="navigation">
	<div class="container">
		<div class="row">

			<div class="col-xs-12 text-center menu-1 menu-wrap">
				<ul>
					<li class="active">
						<div class="col-xs-12 text-center logo-wrap">
							<div id="fh5co-logo"><a href="index.html"><img style="height: 100px;"
										src="images/logoaero (2).png" /></a></div>
						</div>
					</li>
					<li><a href="about.html">À propos de nous</a></li>
					<li style="position: relative;" class="has-dropdown">
						<a  id="t1"href="engineering service.html">SERVICES D'INGÉNIERIE  <span style="float:right" id="nav0bt" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
					  </svg></span> </a>
						<ul class="dropdown">
							<li><a href="CONSULTANCY.html">CONSEIL</a></li>
							<li><a href="BASE MAINTENANCE SUPPORT & OVERSIGHT SERVICE.html">SOUTIEN À LA MAINTENANCE DES BASES </a></li>
							<li><a href="Recruitment Services.html">Services de recrutement</a></li>


						</ul>
					</li>

					<li style="position: relative;" id="nav1" class="has-dropdown">
						<a href="technical manegment support.html">Assistance à la gestion technique  <span style="float:right" id="nav1bt" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
					  </svg></span> </a>
						<ul class="dropdown">
							<li><a href="aircraft asset management.html">GESTION DES ACTIFS AÉRONEFS</a></li>
							<li><a href="project support.html">GESTION DE PROJET</a></li>
							<li><a href="record review.html">LA GESTION DES DOSSIERS</a></li>
							<li><a href="AIRCRAFT LEASE TRANSFERS.html">TRANSFERTS DE LOCATION D'AÉRONEFS</a></li>
							<li><a href="aircraft repossessing.html">REPRISE D'AÉRONEF</a></li>


						</ul>
					</li>
					<li class="has-dropdown"><a href="technical training.html">Services de formation aéronautique<span style="float:right" id="nav2bt" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
						  </svg></span></a>
						<ul class="dropdown">
							<li><a href="esa part 66 examination.html">EXAMEN DES MODULES DE BASE DE L'EASA </a>
							</li>
							<li><a href="type rating courses.html">COURS DE QUALIFICATION DE TYPE</a></li>

							<li><a href="ONLINE COURSES.html"> COURS EN LIGNE </a></li>
							<li><a href="OTHERS TRAINING.html"> AUTRES FORMATIONS</a></li>

							<li class="itemToHoverOver">
								<a href="CABIN CREW INITIAL TRAINING.html"> FORMATION INITIALE DU PERSONNEL DE CABINE</a>
								<ul class="dpdn">
									<div>
										<li><a href="HOW TO BECOME A CABIN CREW.html"> <svg
													xmlns="http://www.w3.org/2000/svg" width="16"
													height="16" fill="currentColor"
													class="bi bi-arrow-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
														d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
												</svg> COMMENT DEVENIR UN ÉQUIPAGE DE CABINE ?
											</a></li>
									</div>
								</ul>

							</li>


						</ul>
					</li>

					<li><a href="contact.html">Contact</a></li>
					<li class="has-dropdown"><img class="mobileHide" src="images/fr.png"
							style="width: 30px; height: 30px; cursor: pointer;"></a>
						<ul style="top: 110% !important;" class="  dropdown hideNonMobile mobileLgNav " >
							<li onclick="changeLanguage('en')" style="cursor: pointer; color : white"><img
									src="images/en.png" style="width: 30px; height: 30px; cursor: pointer;">
								Anglais</li>

						</ul>
					</li>
				</ul>
			</div>
		</div>

	</div>
	<!-- </div> -->
</nav>

		<header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" data-stellar-background-ratio="0.5" style="height: 730px; background-position: 0px 0px;">
			<div class="overlay">
				<img src="/images/aaa16.jpg" style="filter: brightness(0.5);
			width: 100%;
		">
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center mobileNopaddingleft">
						<div class="display-t js-fullheight" style="height: 730px;">
							<div class="display-tc js-fullheight animate-box fadeIn animated-fast" data-animate-effect="fadeIn" style="height: 730px;">
								<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Formation aéronautique </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">et</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> conseil </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">en ingénierie</font></font></em><font style="vertical-align: inherit;"></font></h1>
								<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Une renommée internationale</font></font></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<div id="fh5co-about" class="fh5co-section">
			<div style="width:100%;">
				<div style="position: relative;">
					<div style="padding:0px" class="col-md-12  img-wrap animate-box fadeInLeft animated-fast" data-animate-effect="fadeInLeft">
						<img class="mobileHide" style="width: -webkit-fill-available;    height: 100vh;
						filter: brightness(50%)
						" src="images/aaa13.jpg" alt="">
					</div>
					<div style="position: absolute; width:100%" class="animate-box mobilePositionRelative fadeInUp animated-fast">
						<div style="display: flex; justify-content: center;     width: 100%;	padding-top: 10%;					">
							<div style="width: 50%; display: flex; flex-direction: column; align-items: center;" class="section-heading">
								<h1 style="color: #bd9973 ;  text-align: center ;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Formation aéronautique et conseil en ingénierie</font></font><p></p>
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Aero Training &amp; Engineering Consulting a été fondée par un professionnel passionné de l'aviation.
									</font></font></p>
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Travaillant dans le monde de la construction aéronautique, des opérations aériennes et du conseil, ils ont tous deux acquis une vaste expérience.</font></font></p>
									<a href="about.html" class="btn btn-primary btn-outline"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Notre histoire</font></font></a>
							</h1></div>
						</div>

					</div>
				</div>


				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
					<h1 style="color: white;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nos services</font></font><p></p>

				</h1></div>
			</div>
		</div>

		<div class="mobileShow">
		<a style="    position: relative;
		" href="./engineering service.html">
			<img style="    width: 60%;
			margin: 19%;

			transform: rotate(45deg);
		" src="../images/aircraft-sales-acquisitions_3a.jpg">
			<p style="text-align: center !important; position :absolute; top:5px;left:80px "><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SERVICES D'INGÉNIERIE</font></font></p>
		</a>
		<a style="    position: relative;
		" href="./technical manegment support.html">
			<img style="    width: 60%;
			margin: 19%;

			transform: rotate(45deg);
		" src="../images/executive-charter_4a.jpg">
			<p style="text-align: center !important; position :absolute; top:5px;left:80px "><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Assistance à la gestion technique</font></font></p>
		</a>
		<a style="    position: relative;
		" href="./technical training.html">
			<img style="    width: 60%;
			margin: 19%;

			transform: rotate(45deg);
		" src="../images/aircraft-managementa.jpg">
			<p style="text-align: center !important; position :absolute; top:5px;left:80px "><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Services de formation aéronautique</font></font></p>
		</a>
		</div>

		<div id="fh5co-about" class="fh5co-section mobileHide">

			<div style="margin-top:20%;" id="fh5co-featured-menu" class="fh5co-section">

				<div class="container">

					<div class="row">

						<ul class="main-nav">

							<li class="item1">
								<a href="./engineering service.html">
									<div class="bg">
									</div>
									<p style="text-align: center !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SERVICES D'INGÉNIERIE</font></font></p>
								</a>
							</li>
							<li class="item2">
								<a href="./technical manegment support.html">
									<div class="bg"></div>
									<p style="text-align: center !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Assistance à la gestion technique</font></font></p>
								</a>
							</li>
							<li class="item3">
								<a href="./technical training.html">
									<div class="bg"></div>
									<p style="text-align: center !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Services de formation aéronautique</font></font></p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>





		<div style="padding-top: 10%;" id="fh5co-blog" class="fh5co-section">
			<div class="container">
				<div class="row animate-box">
					<div style="margin-bottom: 5%;" class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
						<h1 style="color: white;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Blog</font></font><p></p>

					</h1></div>
					<div class="row">
						<div class="col-md-4">
							<div class="fh5co-blog animate-box">
								<a href="#" class="blog-bg" style="background-image: url(images/EN3.jpg);"></a>
								<div class="blog-text">
									<span class="posted_on"></span>
									<h3><a style="color:#bd9973 ;" href="blog1.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Comment les consultants en ingénierie aéronautique relèvent les défis de durabilité dans l’aviation  <br>  <br>  </font></font></a></h3>
									<p style="color : #6f7075 !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Alors que les préoccupations concernant le changement climatique continuent de croître, l’industrie aéronautique subit une pression croissante pour devenir plus durable. De la réduction des émissions de gaz à effet de serre à la minimisation de la pollution sonore, l’industrie est confrontée à de nombreux défis en matière de développement durable. Dans ce contexte, les consultants en ingénierie aéronautique jouent un rôle de plus en plus important....</font></font></p>

									<ul class="stuff">
										<li><i class="icon-heart2"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1,2K</font></font></li>
										<li><i class="icon-eye2"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2K</font></font></li>
										<li><a href="blog1.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">En savoir plus</font></font><i class="icon-arrow-right22"></i></a>
										</li>
									</ul>

								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="fh5co-blog animate-box">
								<a href="#" class="blog-bg" style="background-image: url(images/EN2.jpg);"></a>
								<div class="blog-text">
									<span class="posted_on"></span>
									<h3><a style="color:#bd9973 ;" href="/blog2.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Les avantages des outils de simulation avancés dans le conseil en ingénierie aéronautique  <br>  <br></font></font></a></h3>

									<p style="color : #6f7075 !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lorsqu’il s’agit de concevoir et d’optimiser des avions, les outils de simulation sont devenus un élément essentiel du processus. Ces outils permettent aux ingénieurs de créer des modèles virtuels d'avions, qui peuvent être utilisés pour tester différentes variantes de conception, prédire les performances dans différentes conditions et identifier les problèmes potentiels avant une évaluation physique...  <br>  <br>  <br></font></font></p>

									<ul class="stuff">
										<li><i class="icon-heart2"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1,2K</font></font></li>
										<li><i class="icon-eye2"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2K</font></font></li>
										<li><a href="blog2.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">En savoir plus</font></font><i class="icon-arrow-right22"></i></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="fh5co-blog animate-box">
								<a href="#" class="blog-bg" style="background-image: url(images/EN1.jpg);"></a>
								<div class="blog-text">
									<span class="posted_on"></span>
									<h3><a style="color:#bd9973 ;" href="/blog3.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">L’importance de la planification de la maintenance pour une exploitation sûre et fiable des aéronefs</font></font> </a></h3>
									<p style="color : #6f7075 !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">La maintenance des aéronefs est un élément essentiel pour garantir une exploitation sûre et fiable des aéronefs. Des inspections de routine aux révisions majeures, chaque aspect de la maintenance des avions nécessite une planification et une exécution minutieuses. Dans le monde du conseil en ingénierie aéronautique, la planification de la maintenance est un domaine d'intérêt clé, car les consultants travaillent avec les compagnies aériennes...  <br>  <br></font></font></p>

									<ul class="stuff">
										<li><i class="icon-heart2"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1,2K</font></font></li>
										<li><i class="icon-eye2"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2K</font></font></li>
										<li><a href="blog3.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">En savoir plus</font></font><i class="icon-arrow-right22"></i></a>
										</li>
									</ul>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

		</div>


		<div id="fh5co-about" class="fh5co-section">
			<h2 style="text-align: center; color: white;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
				Nos partenaires
			</font></font></h2>
			<h3 style="text-align: center; color: white;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
				Améliorez votre expérience avec nous
			</font></font></h3>

			<div class="carousel-container">
				<div class="carousel-wrapper" id="carouselWrapper" style="transform: translateX(0%);">

					<img src="images/WhatsApp Image 2024-04-01 à 10.53.51_4245b520.jpg" class="sponsorImg carousel-item ">


					<img src="images/sponsor1.png" class="sponsorImg carousel-item ">
					<img src="images/sponsor2.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor3.jpeg" class="sponsorImg carousel-item ">
					<img src="images/WhatsApp Image 2024-04-01 à 10.53.51_b2491137.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor4.png" class="sponsorImg carousel-item ">
					<img src="images/sponsor5.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor6.png" class="sponsorImg carousel-item ">
					<img src="images/WhatsApp Image 2024-04-01 à 10.53.51_26d81b91.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor7.png" class="sponsorImg carousel-item ">


				</div>
				<div class="carousel-wrapper" id="carouselWrapper1" style="transform: translateX(0%);">
					<img src="images/WhatsApp Image 2024-04-01 à 10.53.51_b2491137.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor1.png" class="sponsorImg carousel-item ">
					<img src="images/sponsor2.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor3.jpeg" class="sponsorImg carousel-item ">
					<img src="images/sponsor4.png" class="sponsorImg carousel-item ">
					<img src="images/WhatsApp Image 2024-04-01 à 10.53.51_26d81b91.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor5.jpg" class="sponsorImg carousel-item ">
					<img src="images/sponsor6.png" class="sponsorImg carousel-item ">
					<img src="images/sponsor7.png" class="sponsorImg carousel-item ">
					<img src="images/WhatsApp Image 2024-04-01 à 10.53.51_4245b520.jpg" class="sponsorImg carousel-item ">

				</div>

			</div>


		</div>



		<footer style="padding: 0px;" id="fh5co-footer" role="contentinfo" class="fh5co-section">
			<div style="padding:3% 2% 0% 2%;">
				<div class="row ">
					<div class="col-md-3 fh5co-widget">
						<a href="./index.html"><img src="images/logoaero (2).png"></a>
					</div>
					<div class="col-md-1 col-md-push-1 fh5co-widget">
						<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Liens</font></font></h4>
						<ul class="fh5co-footer-links">
							<li><a href="/index.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Maison</font></font></a></li>
							<li><a href="/about.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">À propos</font></font></a></li>
							<li><a href="technical training.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prestations de service</font></font></a></li>
						</ul>
					</div>

					<div class="col-md-2 col-md-push-1 fh5co-widget">
						<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Catégories</font></font></h4>
						<div style="display: flex;">
							<ul class="fh5co-footer-links">
								<li><a href="/project support.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Accompagnement de projet</font></font></a></li>
								<li><a href="/AIRCRAFT LEASE TRANSFERS.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Soutien à la transition</font></font></a></li>
								<li><a href="/BASE MAINTENANCE SUPPORT & OVERSIGHT SERVICE.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Représentant de l'entretien de la base</font></font></a></li>
								<li><a href="/engineering service.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Support technique</font></font></a></li>
							</ul>

						</div>
					</div>
					<div class="col-md-2 col-md-push-1 fh5co-widget">
						<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Catégories</font></font></h4>
						<div style="display: flex;">

							<ul class="fh5co-footer-links">
								<li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Examen EASA partie 66</font></font></a></li>
								<li><a href="type rating courses.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">COURS DE QUALIFICATION DE TYPE</font></font></a></li>

							</ul>
						</div>
					</div>

					<div class="col-md-4 col-md-push-1 fh5co-widget">
						<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Coordonnées</font></font></h4>
						<ul class="fh5co-footer-links">
							<li><a href="tel://212698977462"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+212698977462</font></font></a></li>
							<li><a href="mailto:contact@aertecsupport.com"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">contact@aertecsupport.com</font></font></a></li>
						</ul>

						<div class="newFooter ">
							<div class="rounded-social-buttons">
								<a class="social-button facebook" href="https://www.facebook.com/" target="_blank"><svg class="svg-inline--fa fa-facebook-f fa-w-10" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg><!-- <i class="fab fa-facebook-f"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button twitter" href="https://www.twitter.com/" target="_blank"><svg class="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg><!-- <i class="fab fa-twitter"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><svg class="svg-inline--fa fa-linkedin-in fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg><!-- <i class="fab fa-linkedin-in"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button tiktok" href="whatsapp://send?phone=+212698977462"><svg class="svg-inline--fa fa-whatsapp fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg><!-- <i class="fab fa-whatsapp"></i> Font Awesome fontawesome.com --></a>

								<a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><svg class="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg><!-- <i class="fab fa-instagram"></i> Font Awesome fontawesome.com --></a>
							</div>
						</div>

					</div>

				</div>


			</div>
		</footer>
	</div>

	<div class="gototop js-top">
		<a href="#" class="js-gotop"><i class="icon-arrow-up22"></i></a>
	</div>


    </div>

    `
}


try {
	if (localStorage.getItem("lang") == "fr") {
		set2french()

	} else {
		set2english()
	}

} catch (error) {
	set2english()
}
