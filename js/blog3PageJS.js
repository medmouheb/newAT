
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
	<header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" data-stellar-background-ratio="0.5">
		<div class="overlay">
			<video src="/images/about.mp4" autoplay muted loop></video>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<div class="display-t js-fullheight">
						<div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
							<h2>The Importance of Maintenance Planning for Safe and Reliable <a href="" target="_blank">Aircraft Operation</a></h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>






	<div style="padding-top: 3%;"  id="fh5co-about" class="fh5co-section">
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-md-push-1 animate-box">
					<div class="section-heading">
					<!-- <h1 style="color: white;">Our Experience</p> -->
						<p style="color: white; font-size: larger;">Aircraft maintenance is a critical component of ensuring safe and reliable aircraft operation. From routine inspections to major overhauls, every aspect of aircraft maintenance requires careful planning and execution. In the world of aircraft engineering consulting, maintenance planning is a key area of focus, as consultants work with airlines and other operators to optimize their maintenance strategies and keep their fleets in top condition.

							There are several reasons why maintenance planning is so important in aircraft engineering consulting. First and foremost, effective maintenance planning is essential for ensuring the safety of aircraft and their passengers. By following a well-designed maintenance plan, operators can identify and address potential problems before they become major safety hazards. This helps to reduce the risk of accidents and incidents, and ensures that aircraft remain in compliance with relevant regulations and standards.

							Maintenance planning is also important for ensuring the reliability and efficiency of aircraft. By carefully scheduling and executing maintenance tasks, operators can minimize downtime and keep their aircraft operating at peak performance. This not only reduces the risk of delays and cancellations, but also helps to maximize the lifespan of the aircraft and its components, ultimately saving operators money in the long run.

							In the world of aircraft engineering consulting, maintenance planning is a complex and multifaceted process. Consultants must work closely with their clients to understand their specific needs and requirements, and to develop customized maintenance plans that take into account factors such as aircraft type, usage, and operating environment. They must also stay up to date with the latest maintenance technologies and best practices, and be able to provide guidance and support throughout the implementation process.
						</p>
						<!-- <p style="color: white;">Aero Training & Engineering Consulting was founded by a passionate aviation professional. working within the world of airplane manufacturing, airline operations and consultancy they both gained their extensive experience. They convey their passion for aviation to the whole AeroTEC team and make sure that all team members understand the requirements and exceed the expectations of the customers </p>
						<p><a href="#" class="btn btn-primary btn-outline">Our History</a></p> -->
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

	<header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" data-stellar-background-ratio="0.5" style="height: 765px; background-position: 0px -500px;">
		<div class="overlay">
			<video src="/images/about.mp4" autoplay="" muted="" loop=""></video>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<div class="display-t js-fullheight" style="height: 765px;">
						<div class="display-tc js-fullheight animate-box fadeIn animated-fast" data-animate-effect="fadeIn" style="height: 765px;">
							<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">L’importance de la planification de la maintenance pour </font></font><a href="" target="_blank"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">une exploitation sûre et fiable des aéronefs</font></font></a></h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>






	<div style="padding-top: 3%;" id="fh5co-about" class="fh5co-section">
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-md-push-1 animate-box fadeInUp animated-fast">
					<div class="section-heading">
					<!-- <h1 style="color: white;">Our Experience</p> -->
						<p style="color: white; font-size: larger;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">La maintenance des aéronefs est un élément essentiel pour garantir une exploitation sûre et fiable des aéronefs. Des inspections de routine aux révisions majeures, chaque aspect de la maintenance des avions nécessite une planification et une exécution minutieuses. Dans le monde du conseil en ingénierie aéronautique, la planification de la maintenance est un domaine d'intérêt clé, car les consultants travaillent avec les compagnies aériennes et d'autres opérateurs pour optimiser leurs stratégies de maintenance et maintenir leurs flottes en parfait état. Il existe plusieurs raisons pour lesquelles la planification de la maintenance est si importante dans le conseil en ingénierie aéronautique. Avant tout, une planification efficace de la maintenance est essentielle pour garantir la sécurité des avions et de leurs passagers. En suivant un plan de maintenance bien conçu, les opérateurs peuvent identifier et résoudre les problèmes potentiels avant qu'ils ne deviennent des risques majeurs pour la sécurité. Cela contribue à réduire le risque d’accidents et d’incidents et garantit que les avions restent conformes aux réglementations et normes en vigueur. La planification de la maintenance est également importante pour garantir la fiabilité et l’efficacité des aéronefs. En planifiant et en exécutant soigneusement les tâches de maintenance, les opérateurs peuvent minimiser les temps d'arrêt et maintenir leurs avions en fonctionnement à des performances optimales. Cela réduit non seulement le risque de retards et d’annulations, mais contribue également à maximiser la durée de vie de l’avion et de ses composants, permettant ainsi aux opérateurs d’économiser de l’argent à long terme. Dans le monde du conseil en ingénierie aéronautique, la planification de la maintenance est un processus complexe et multiforme. Les consultants doivent travailler en étroite collaboration avec leurs clients pour comprendre leurs besoins et exigences spécifiques et pour développer des plans de maintenance personnalisés qui tiennent compte de facteurs tels que le type d'avion, son utilisation et l'environnement d'exploitation. Ils doivent également se tenir au courant des dernières technologies de maintenance et des meilleures pratiques, et être en mesure de fournir des conseils et un soutien tout au long du processus de mise en œuvre.
						</font></font></p>
						<!-- <p style="color: white;">Aero Training & Engineering Consulting was founded by a passionate aviation professional. working within the world of airplane manufacturing, airline operations and consultancy they both gained their extensive experience. They convey their passion for aviation to the whole AeroTEC team and make sure that all team members understand the requirements and exceed the expectations of the customers </p>
						<p><a href="#" class="btn btn-primary btn-outline">Our History</a></p> -->
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
				</div>

			</div>


		</div>
	</footer>
	</div>

	<div class="gototop js-top active">
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
