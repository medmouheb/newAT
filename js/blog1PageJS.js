
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

							<h2>How Aircraft Engineering Consultants are Tackling Sustainability <a href="" target="_blank">Challenges in Aviation</a></h2>
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
						<p style="color: white;font-size: larger;">As concerns about climate change continue to grow, the aviation industry is under increasing pressure to become more sustainable. From reducing greenhouse gas emissions to minimizing noise pollution, there are a variety of sustainability challenges facing the industry. In this context, aircraft engineering consultants are playing an increasingly important role, as they work with airlines, manufacturers, and other stakeholders to develop innovative solutions and drive progress towards a more sustainable future.

							One of the main ways in which aircraft engineering consultants are tackling sustainability challenges is through the development of new technologies and materials. For example, consultants may work with manufacturers to design and test new, more fuel-efficient engines, or to develop lighter-weight materials that can reduce the weight of aircraft and improve their performance. They may also explore alternative fuels, such as biofuels or hydrogen, that have the potential to significantly reduce greenhouse gas emissions.

							Another area of focus for aircraft engineering consultants in the sustainability space is noise reduction. Aircraft noise can be a significant source of disturbance for communities around airports, and reducing it is a key priority for many operators. Consultants may work with airlines and airports to identify and implement noise reduction measures, such as altering flight paths or modifying aircraft design features.

							Finally, aircraft engineering consultants are also playing a role in sustainability by helping to educate stakeholders about the importance of sustainable practices and the benefits they can provide. By working with airlines and other operators to develop sustainability strategies and to communicate the importance of sustainability to their customers and other stakeholders, consultants can help to drive broader awareness and action on this critical issue.
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

	<header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" data-stellar-background-ratio="0.5" style="height: 765px; background-position: 0px 0px;">
		<div class="overlay">
			<video src="/images/about.mp4" autoplay="" muted="" loop=""></video>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<div class="display-t js-fullheight" style="height: 765px;">
						<div class="display-tc js-fullheight animate-box fadeIn animated-fast" data-animate-effect="fadeIn" style="height: 765px;">

							<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Comment les consultants en ingénierie aéronautique relèvent </font></font><a href="" target="_blank"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">les défis de durabilité dans l’aviation</font></font></a></h2>
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
						<p style="color: white;font-size: larger;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Alors que les préoccupations concernant le changement climatique continuent de croître, l’industrie aéronautique subit une pression croissante pour devenir plus durable. De la réduction des émissions de gaz à effet de serre à la minimisation de la pollution sonore, l’industrie est confrontée à de nombreux défis en matière de développement durable. Dans ce contexte, les consultants en ingénierie aéronautique jouent un rôle de plus en plus important, car ils travaillent avec les compagnies aériennes, les constructeurs et d'autres parties prenantes pour développer des solutions innovantes et progresser vers un avenir plus durable. L’un des principaux moyens par lesquels les consultants en ingénierie aéronautique s’attaquent aux défis du développement durable consiste à développer de nouvelles technologies et de nouveaux matériaux. Par exemple, les consultants peuvent travailler avec des fabricants pour concevoir et tester de nouveaux moteurs plus économes en carburant, ou pour développer des matériaux plus légers susceptibles de réduire le poids des avions et d'améliorer leurs performances. Ils peuvent également explorer des carburants alternatifs, tels que les biocarburants ou l’hydrogène, susceptibles de réduire considérablement les émissions de gaz à effet de serre. Un autre domaine d’intérêt pour les consultants en ingénierie aéronautique dans le domaine du développement durable est la réduction du bruit. Le bruit des avions peut être une source importante de perturbations pour les communautés autour des aéroports, et le réduire est une priorité essentielle pour de nombreux exploitants. Les consultants peuvent travailler avec des compagnies aériennes et des aéroports pour identifier et mettre en œuvre des mesures de réduction du bruit, telles que la modification des trajectoires de vol ou la modification des caractéristiques de conception des avions. Enfin, les consultants en ingénierie aéronautique jouent également un rôle en matière de développement durable en aidant à sensibiliser les parties prenantes à l'importance des pratiques durables et aux avantages qu'elles peuvent apporter. En travaillant avec les compagnies aériennes et d'autres opérateurs pour développer des stratégies de développement durable et communiquer l'importance du développement durable à leurs clients et autres parties prenantes, les consultants peuvent contribuer à une sensibilisation et à une action plus larges sur cette question cruciale.
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
