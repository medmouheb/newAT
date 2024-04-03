
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
							<!-- <h1>About <em>US</em></h1> -->
							<h2>The Benefits of Advanced Simulation Tools in Aircraft Engineering Consulting<a href="" target="_blank"> Engineering Consulting</a></h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>





	<div  style="padding-top: 3%;"   id="fh5co-about" class="fh5co-section">
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-md-push-1 animate-box">
					<div class="section-heading">
					<!-- <h1 style="color: white;">Our Experience</p> -->
						<p style="color: white; font-size: larger;">When it comes to designing and optimizing aircraft, simulation tools have become an essential part of the process. These tools allow engineers to create virtual models of aircraft, which can be used to test different design variations, predict performance under different conditions, and identify potential problems before a physical prototype is built. In aircraft engineering consulting, advanced simulation tools are becoming increasingly important, as they offer a range of benefits to both consultants and their clients.

							One of the main benefits of advanced simulation tools is that they allow aircraft engineering consultants to work more efficiently. With these tools, consultants can quickly create and test multiple design variations, without the need for costly physical prototypes. This saves time and money, as well as reducing the risk of errors and design flaws. It also allows consultants to explore new design concepts and push the boundaries of what is possible, without the fear of failure.

							Another benefit of advanced simulation tools is that they provide more accurate results than traditional design methods. By simulating the performance of an aircraft under different conditions, such as altitude, speed, and weather, engineers can gain a better understanding of how the aircraft will perform in the real world. This allows them to make more informed design decisions, and to optimize the aircraft’s performance for specific mission requirements.

							In addition to these benefits, advanced simulation tools can also help aircraft engineering consultants to communicate their design concepts more effectively to their clients. By creating realistic virtual models of the aircraft, consultants can give their clients a better idea of what the finished product will look like, and how it will perform. This can help to build trust and confidence between the consultant and the client, and can ultimately lead to more successful projects.
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
	<header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" data-stellar-background-ratio="0.5" style="height: 765px; background-position: 0px -250px;">
		<div class="overlay">
			<video src="/images/about.mp4" autoplay="" muted="" loop=""></video>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<div class="display-t js-fullheight" style="height: 765px;">
						<div class="display-tc js-fullheight animate-box fadeIn animated-fast" data-animate-effect="fadeIn" style="height: 765px;">
							<!-- <h1>About <em>US</em></h1> -->
							<h2><font style="vertical-align: inherit;"><a href="" target="_blank"><font style="vertical-align: inherit;">Les avantages des outils de simulation avancés dans le conseil en ingénierie</font></a><font style="vertical-align: inherit;"> aéronautique</font></font><a href="" target="_blank"><font style="vertical-align: inherit;"></font></a></h2>
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
						<p style="color: white; font-size: larger;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lorsqu’il s’agit de concevoir et d’optimiser des avions, les outils de simulation sont devenus un élément essentiel du processus. Ces outils permettent aux ingénieurs de créer des modèles virtuels d'avions, qui peuvent être utilisés pour tester différentes variantes de conception, prédire les performances dans différentes conditions et identifier les problèmes potentiels avant la construction d'un prototype physique. Dans le conseil en ingénierie aéronautique, les outils de simulation avancés deviennent de plus en plus importants, car ils offrent de nombreux avantages à la fois aux consultants et à leurs clients. L’un des principaux avantages des outils de simulation avancés est qu’ils permettent aux consultants en ingénierie aéronautique de travailler plus efficacement. Grâce à ces outils, les consultants peuvent rapidement créer et tester plusieurs variantes de conception, sans avoir besoin de prototypes physiques coûteux. Cela permet d'économiser du temps et de l'argent, tout en réduisant le risque d'erreurs et de défauts de conception. Cela permet également aux consultants d’explorer de nouveaux concepts de conception et de repousser les limites du possible, sans craindre l’échec. Un autre avantage des outils de simulation avancés est qu’ils fournissent des résultats plus précis que les méthodes de conception traditionnelles. En simulant les performances d'un avion dans différentes conditions, telles que l'altitude, la vitesse et la météo, les ingénieurs peuvent mieux comprendre les performances de l'avion dans le monde réel. Cela leur permet de prendre des décisions de conception plus éclairées et d'optimiser les performances de l'avion pour les exigences spécifiques de la mission. En plus de ces avantages, les outils de simulation avancés peuvent également aider les consultants en ingénierie aéronautique à communiquer plus efficacement leurs concepts de conception à leurs clients. En créant des modèles virtuels réalistes de l’avion, les consultants peuvent donner à leurs clients une meilleure idée de ce à quoi ressemblera le produit fini et de ses performances. Cela peut contribuer à renforcer la confiance entre le consultant et le client et peut finalement conduire à des projets plus réussis.
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
