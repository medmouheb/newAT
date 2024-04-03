

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
			style="background-image: url(images/Global+8000+ext.jpg);" data-stellar-background-ratio="0.5">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="display-t js-fullheight">
							<div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
								<h1>BASE MAINTENANCE REPRESENTATIVE </h1>
								<h2>Professionals to represent you
									A perfect base maintenance visit makes the profit of your airplane the coming years
								</h2>
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

						<h1 style="color: white; font-size: larger !important;">Our technical representatives have years of experience within
							operators and MRO’s. Hence, we know what it takes to make a base maintenance visit
							successful. This means, on time, high quality and within budget. Our professionals are there
							to guide you through this complex task.</p>
					</div>

					<div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap" >
						<div class="fh5co-item animate-box">
							<img src="images/pilot-mechanic-full-flight-gear-checks-propeller-his-retro-military-aircraft-before-flight_613910-17899.jpg"
								class="img-responsive" alt="">
							<h3 style="color: #bd9973; padding-bottom: 2%;"> Base and paint maintenance representation: </h3>
							<p style="color: #6f7075 !important;" >
								Your aircraft is your money maker when it operates or needs to be marketed. So, no
								matter if you are an operator or owner, it is the asset that should make the money by
								optimal performing. Base maintenance, or heavy maintenance, is a costly exercise that
								needs to be done right. You don’t want to be faced with more work later on when it is
								done incorrectly the first time. Since it is so complex, large and important, you need
								somebody that has the knowledge, drive and oversight to make a project like this
								successful. Limitless technical representatives have the experience to make this happen.
								They have their years of experience from operators and MRO’s and have been involved in
								many base maintenance checks, large modifications and project management. They know what
								needs to be done to get the aircraft in optimal shape, on time and within your budget.
							</p>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap" >
						<div class="fh5co-item margin_top animate-box">
							<img src="images/white-alarm-clock-computer-mouse-calendar-airplane-model-top-view_169016-34096.jpg"
								class="img-responsive" alt="">
							<h3 style="color: #bd9973; padding-bottom: 2%;"> The support you need </h3>
							<!-- <span class="fh5co-price">$19<sup>.00</sup></span> -->
							<p style="color: #6f7075 !important;">Our technical representatives will coordinate the planning with the MRO as per the work
								scope agreed. They not only know the requirements, but also the type of aircraft and the
								things they need to pay attention to. </p>
							<p style="color: #6f7075 !important;">By being on site, with the aircraft, they will conduct their own inspections constantly.
								When areas are opened up, they will have a close look at the surrounding area and
								document that so that you know what the quality is and where future issues might arise.
							</p>
							<p style="color: #6f7075 !important;">Thinking of solutions, we always try to find the most economical and optimal option for
								finding the correct parts and components, taking into account time and costs. When a
								repair is needed, our representatives have the knowledge to think along with the MRO or
								propose repair options that are the most convenient, cost effective and according to the
								standards required for future lease or aircraft sales.</p>
							<p style="color: #6f7075 !important;">A crucial item is documentation. Whatever is done during the base maintenance visit, it
								needs to be correctly documented. The completed task cards are audited, repair documents
								and certification are filed. We make sure that the base maintenance visit is complete
								and compliant</p>

						</div>
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
		<header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" style="background-image: url(&quot;images/Global+8000+ext.jpg&quot;); height: 765px; background-position: 0px 0px;" data-stellar-background-ratio="0.5">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<div class="display-t js-fullheight" style="height: 765px;">
							<div class="display-tc js-fullheight animate-box fadeIn animated-fast" data-animate-effect="fadeIn" style="height: 765px;">
								<h1><font style="vertical-align: inherit;"><font class="" style="vertical-align: inherit;">REPRÉSENTANT DE L'ENTRETIEN DE LA BASE</font></font></h1>
								<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Des professionnels pour vous représenter Une visite de maintenance en base parfaite fait profiter votre avion des années à venir
								</font></font></h2>
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

						<h1 style="color: white; font-size: larger !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nos représentants techniques ont des années d’expérience auprès des opérateurs et des MRO. Par conséquent, nous savons ce qu’il faut pour réussir une visite de maintenance en base. Cela signifie un respect des délais, une qualité élevée et un respect du budget. Nos professionnels sont là pour vous guider dans cette tâche complexe.</font></font><p></p>
					</h1></div>

					<div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
						<div class="fh5co-item animate-box fadeInUp animated-fast">
							<img src="images/pilot-mechanic-full-flight-gear-checks-propeller-his-retro-military-aircraft-before-flight_613910-17899.jpg" class="img-responsive" alt="">
							<h3 style="color: #bd9973; padding-bottom: 2%;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Représentation de l'entretien de la base et de la peinture :</font></font></h3>
							<p style="color: #6f7075 !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
								Votre avion vous rapporte de l’argent lorsqu’il fonctionne ou doit être commercialisé. Ainsi, peu importe si vous êtes exploitant ou propriétaire, c’est l’actif qui devrait rapporter de l’argent grâce à des performances optimales. La maintenance de base, ou maintenance lourde, est un exercice coûteux qui doit être bien fait. Vous ne voulez pas être confronté à davantage de travail plus tard lorsqu'il n'est pas fait correctement la première fois. Puisqu’il s’agit d’un projet si complexe, vaste et important, vous avez besoin de quelqu’un qui possède les connaissances, la motivation et la supervision nécessaires pour réussir un projet comme celui-ci. Les représentants techniques illimités ont l’expérience nécessaire pour y parvenir. Ils ont des années d'expérience auprès des opérateurs et des MRO et ont été impliqués dans de nombreux contrôles de maintenance de base, de grandes modifications et dans la gestion de projets. Ils savent ce qui doit être fait pour remettre l'avion dans un état optimal, dans les délais et dans les limites de votre budget.
							</font></font></p>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
						<div class="fh5co-item margin_top animate-box">
							<img src="images/white-alarm-clock-computer-mouse-calendar-airplane-model-top-view_169016-34096.jpg" class="img-responsive" alt="">
							<h3 style="color: #bd9973; padding-bottom: 2%;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Le soutien dont vous avez besoin</font></font></h3>
							<!-- <span class="fh5co-price">$19<sup>.00</sup></span> -->
							<p  style="color: #6f7075 !important;"> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nos représentants techniques coordonneront la planification avec le MRO selon la portée des travaux convenue. Ils connaissent non seulement les exigences, mais aussi le type d’avion et les éléments auxquels ils doivent prêter attention.</font></font></p>
							<p  style="color: #6f7075 !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">En étant sur place, à bord des avions, ils effectueront constamment leurs propres inspections. Lorsque les zones seront ouvertes, ils examineront de près la zone environnante et documenteront cela afin que vous sachiez quelle est la qualité et où de futurs problèmes pourraient survenir.
							</font></font></p>
							<p  style="color: #6f7075 !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">En réfléchissant à des solutions, nous essayons toujours de trouver l'option la plus économique et la plus optimale pour trouver les bonnes pièces et composants, en tenant compte du temps et des coûts. Lorsqu'une réparation est nécessaire, nos représentants ont les connaissances nécessaires pour réfléchir avec le MRO ou proposer les options de réparation les plus pratiques, les plus rentables et selon les normes requises pour les futures locations ou ventes d'avions.</font></font></p>
							<p  style="color: #6f7075 !important;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Un élément crucial est la documentation. Quoi que soit fait lors de la visite de maintenance de la base, cela doit être correctement documenté. Les fiches de tâches complétées sont auditées, les documents de réparation et les certifications sont classés. Nous nous assurons que la visite de maintenance en base est complète et conforme</font></font></p>

						</div>
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
