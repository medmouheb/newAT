
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
						<ul style="top: 110% !important;"  class="dropdown hideNonMobile" >
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
			style="background-image: url(images/confident-bearded-pilot-cockpit_236854-15646.jpg);"
			data-stellar-background-ratio="0.5">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="display-t js-fullheight">
							<div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
								<h1  >ENGINEERING SUPPORT
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<div id="fh5co-featured-menu" style="padding-top: 5%;">
			<div class="container">
				<div class="row">
					<div style="margin-bottom: 5%;" class="col-md-12 fh5co-heading animate-box">

						<h1 style="color: white; font-size: larger !important;">Our Engineering professionals support your organization in getting
							better. Our engineers
							all have an Aviation Engineering bachelor degree and experience in different
							organizations. From aircraft manufacturing to airlines, our professionals are there to
							supply the best support in your daily business and projects.</p>
					</div>

					<div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap" >
						<div class="fh5co-item animate-box">
							<img src="images/pilot-mechanic-full-flight-gear-checks-propeller-his-retro-military-aircraft-before-flight_613910-17899.jpg"
								class="img-responsive" alt="">
							<h3 style="color: #bd9973; padding-bottom: 2%;"> Engineering manpower </h3>
							<!-- <span class="fh5co-price">$20<sup>.50</sup></span> -->
							<p  style="color: #6f7075 !important;">
								Flexibility is the key for companies to be profitable all the time. Markets are
								changing, especially in aviation, more rapidly than ever before. To be able to keep that
								flexibility, you need to have the option to add (and dispose) the manpower to your teams
								when you need them.
							</p>
							<p  style="color: #6f7075 !important;">
								Our Engineering professionals are always up to speed and able to support your
								organization when you need it most. We are able to support in Continued Airworthiness
								Management, Engineering, Maintenance and other operational departments where our
								experience is needed.
							</p>
							<p  style="color: #6f7075 !important;">
								Our CAMO & Maintenance engineers have knowledge of Aircraft Maintenance Programs,
								Reliability processes, Records keeping and Planning. We have knowledge of a lot of
								maintenance systems and type of aircraft. Basically, we can help you in your day-to-day
								operations
							</p>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap" style="">
						<div class="fh5co-item margin_top animate-box">
							<img src="images/white-alarm-clock-computer-mouse-calendar-airplane-model-top-view_169016-34096.jpg"
								class="img-responsive" alt="">
							<h3 style="color: #bd9973; padding-bottom: 2%;"> Project management </h3>
							<!-- <span class="fh5co-price">$19<sup>.00</sup></span> -->
							<p  style="color: #6f7075 !important;">You probably experienced it before, new opportunities for the company, base maintenance
								projects, new legislation, projects that come and go. But who can do the job? Everybody
								is busy doing his own job and managing the daily operations. Our Engineering
								professionals have a lot of experience in managing projects. From introducing a new type
								of operation like ETOPS or managing the base maintenance activities. We have the
								experience in house.</p>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div id="fh5co-featured-testimony" style="    margin-bottom: 5%;
		">
			<div class="container">
				<div class="row">
					<div class="col-md-5 animate-box img-to-responsive">
						<img style="filter: brightness(0.7);" src="images/engineer-working-with-airplane_1098-12545.jpg"
							alt="">
					</div>
					<div class="col-md-7 animate-box">
						<blockquote>
							<p style="text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);" class="author"><cite>&mdash; Base
									Maintenance</cite></p>

							<p style="font-size: 22px;text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);"> &ldquo; Maintenance
								is a critical part of minimizing costs and ensuring operational availability, as well as
								conserving asset value. Limitless has the know-how to manage the heavy maintenance
								needs, technical know-how, project management, cost awareness and experience. From
								signing up and planning the maintenance at the MRO, preparing the needs during the
								maintenance visit, being on-site with the airplane and always challenging the best and
								most cost-effective solutions for those findings you experience. Finally finishing up
								the paperwork in such a way you, the authorities and the owner of the aircraft have
								everything you need and how you need it.&rdquo;</p>
						</blockquote>
					</div>
				</div>

				<div class="row" style="position: relative;">
					<div class="col-md-7 animate-box">
						<blockquote>
							<p style="text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);" class="author"><cite>&mdash; New
									legislation and change of operations</cite></p>

							<p style="font-size: 22px;text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);"> &ldquo; Every now
								and then new legislation is mandated or operations are changing or even moved. Normally
								not a big issue managing the implementation. However, when your processes, location or
								type of operations really change, it’s great to have someone on-board that can help you
								manage the introduction of it. We have seen it all before and know how to support you in
								the change management. &rdquo;</p>
						</blockquote>
					</div>
					<div style="position: absolute; left: 25% ;z-index: -1;"
						class="col-md-5 animate-box img-to-responsive">
						<img style="filter: brightness(0.7);     width: 820px;height: 600px;"
							src="images/model-wooden-plane-background-laptop-business-development-success-dream-fly-your-favorite-business_158518-15931.jpg"
							alt="">
					</div>
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
                    <a class="social-button facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a class="social-button twitter" href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a class="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a class="social-button tiktok" href="whatsapp://send?phone=+212698977462"><i class="fab fa-whatsapp"></i></a>

                    <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
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

		<header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" style="background-image: url(&quot;images/confident-bearded-pilot-cockpit_236854-15646.jpg&quot;); height: 765px; background-position: 0px -0.5px;" data-stellar-background-ratio="0.5">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="display-t js-fullheight" style="height: 765px;">
							<div class="display-tc js-fullheight animate-box fadeIn animated-fast" data-animate-effect="fadeIn" style="height: 765px;">
								<h1><font style="vertical-align: inherit;"><font class="" style="vertical-align: inherit;">SUPPORT TECHNIQUE
								</font></font></h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<div id="fh5co-featured-menu" style="padding-top: 5%;">
			<div class="container">
				<div class="row">
					<div style="margin-bottom: 5%;" class="col-md-12 fh5co-heading animate-box fadeInUp animated-fast">

						<h1 style="color: white; font-size: larger !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nos professionnels en ingénierie aident votre organisation à s’améliorer. Nos ingénieurs sont tous titulaires d’un baccalauréat en génie aéronautique et d’une expérience dans différentes organisations. De la construction aéronautique aux compagnies aériennes, nos professionnels sont là pour vous accompagner au mieux dans vos activités et projets quotidiens.</font></font><p></p>
					</h1></div>

					<div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
						<div class="fh5co-item animate-box fadeInUp animated-fast">
							<img src="images/pilot-mechanic-full-flight-gear-checks-propeller-his-retro-military-aircraft-before-flight_613910-17899.jpg" class="img-responsive" alt="">
							<h3 style="color: #bd9973; padding-bottom: 2%;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Personnel d'ingénierie</font></font></h3>
							<!-- <span class="fh5co-price">$20<sup>.50</sup></span> -->
							<p  style="color: #6f7075 !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
								La flexibilité est la clé pour que les entreprises soient rentables à tout moment. Les marchés évoluent, notamment dans le secteur de l’aviation, plus rapidement que jamais. Pour pouvoir conserver cette flexibilité, vous devez avoir la possibilité d'ajouter (et de disposer) de main d'œuvre dans vos équipes lorsque vous en avez besoin.
							</font></font></p>
							<p  style="color: #6f7075 !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
								Nos professionnels de l’ingénierie sont toujours à l’écoute et capables de soutenir votre organisation lorsque vous en avez le plus besoin. Nous sommes en mesure de soutenir la gestion du maintien de la navigabilité, l'ingénierie, la maintenance et d'autres départements opérationnels où notre expérience est nécessaire.
							</font></font></p>
							<p  style="color: #6f7075 !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
								Nos ingénieurs CAMO et maintenance ont des connaissances sur les programmes de maintenance des aéronefs, les processus de fiabilité, la tenue des dossiers et la planification. Nous connaissons de nombreux systèmes de maintenance et types d’avions. En gros, nous pouvons vous aider dans vos opérations quotidiennes
							</font></font></p>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap" style="">
						<div class="fh5co-item margin_top animate-box fadeInUp animated-fast">
							<img src="images/white-alarm-clock-computer-mouse-calendar-airplane-model-top-view_169016-34096.jpg" class="img-responsive" alt="">
							<h3 style="color: #bd9973; padding-bottom: 2%;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gestion de projet</font></font></h3>
							<!-- <span class="fh5co-price">$19<sup>.00</sup></span> -->
							<p  style="color: #6f7075 !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vous en avez probablement déjà fait l'expérience, de nouvelles opportunités pour l'entreprise, des projets de maintenance des bases, des nouvelles législations, des projets qui vont et viennent. Mais qui peut faire le travail ? Chacun est occupé à faire son propre travail et à gérer les opérations quotidiennes. Nos professionnels en ingénierie ont beaucoup d’expérience dans la gestion de projets. De l'introduction d'un nouveau type d'opération comme ETOPS à la gestion des activités de maintenance de la base. Nous avons l'expérience en interne.</font></font></p>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div id="fh5co-featured-testimony" style="    margin-bottom: 5%;
		">
			<div class="container">
				<div class="row">
					<div class="col-md-5 animate-box img-to-responsive fadeInUp animated-fast">
						<img style="filter: brightness(0.7);" src="images/engineer-working-with-airplane_1098-12545.jpg" alt="">
					</div>
					<div class="col-md-7 animate-box fadeInUp animated-fast">
						<blockquote>
							<p style="text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);" class="author"><cite><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">— Entretien des bases</font></font></cite></p>

							<p style="font-size: 22px;text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">« La maintenance est un élément essentiel pour minimiser les coûts et garantir la disponibilité opérationnelle, ainsi que pour conserver la valeur des actifs. Limitless possède le savoir-faire nécessaire pour gérer les besoins de maintenance lourde, le savoir-faire technique, la gestion de projet, la connaissance des coûts et l'expérience. Depuis l'inscription et la planification de la maintenance au MRO, la préparation des besoins lors de la visite de maintenance, la présence sur place avec l'avion et la recherche toujours des solutions les meilleures et les plus rentables pour les découvertes que vous rencontrez. Enfin, terminer les formalités administratives de manière à ce que vous, les autorités et le propriétaire de l'avion ayez tout ce dont vous avez besoin et comment vous en avez besoin.</font></font></p>
						</blockquote>
					</div>
				</div>

				<div class="row" style="position: relative;">
					<div class="col-md-7 animate-box fadeInUp animated-fast">
						<blockquote>
							<p style="text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);" class="author"><cite><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">— Nouvelle législation et changement d'exploitation</font></font></cite></p>

							<p style="font-size: 22px;text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">« De temps en temps, une nouvelle législation est imposée ou les opérations changent, voire sont déplacées. Normalement, ce n'est pas un gros problème pour gérer la mise en œuvre. Cependant, lorsque vos processus, votre emplacement ou votre type d'opérations changent réellement, il est formidable d'avoir quelqu'un à bord qui peut vous aider à gérer leur introduction. Nous avons tout vu et savons vous accompagner dans la conduite du changement. »</font></font></p>
						</blockquote>
					</div>
					<div style="position: absolute; left: 25% ;z-index: -1;" class="col-md-5 animate-box img-to-responsive fadeInUp animated-fast">
						<img style="filter: brightness(0.7);     width: 820px;height: 600px;" src="images/model-wooden-plane-background-laptop-business-development-success-dream-fly-your-favorite-business_158518-15931.jpg" alt="">
					</div>
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
								<li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Examen ESA partie 66</font></font></a></li>
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
                    <a class="social-button facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a class="social-button twitter" href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a class="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a class="social-button tiktok" href="whatsapp://send?phone=+212698977462"><i class="fab fa-whatsapp"></i></a>

                    <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
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


try {
    if (localStorage.getItem("lang") == "fr") {
        set2french()
    } else {
        set2english()
    }

} catch (error) {
    set2english()
}
