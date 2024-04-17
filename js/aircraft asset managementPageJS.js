
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
								<a href="CABIN CREW INITIAL TRAINING.html"> CABIN CREW  TRAINING </a>
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
				style="background-image: url(images/61cf08b19698d3bb94c3aee4_Aviation-Asset-Management.jpeg);"
				data-stellar-background-ratio="0.5">
				<div class="overlay"></div>
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-center">
							<div class="display-t js-fullheight">
								<div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
									<h1>AIRCRAFT ASSET MANAGEMENT</h1>
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div class="fh5co-section">

				<div class="slideshow-container">
					<div class="mySlides1">
						<p>Staying in control of a complex asset an aircraft is one of the most complex and dynamic
							assets if you compare it some other classes of assets. Being a vital part of the constantly
							changing aviation market it is important to be aware of what the true status of the aircraft
							is.</p>

						<span>
							<span class="dot activeDot"></span>
							<span class="dot"></span>
							<span class="dot "></span>
							<span class="dot"></span>
						</span>

						<img src="images/b1.jpg" style="width:100%;height:80vh;">
					</div>

					<div class="mySlides1">
						<p>Our professionals all have years of experience in the market of aircraft asset management and
							technical management. Not only the knowledge is in hands, but we are also continuously
							involved in the airline management and maintenance organizations.</p>

						<span>
							<span class="dot"></span>
							<span class="dot activeDot"></span>
							<span class="dot "></span>
							<span class="dot"></span>
						</span>

						<img src="images/b2.jpg" style="width:100%;height:80vh;">
					</div>

					<div class="mySlides1">
						<p>We provide a fully comprehensive aircraft management product. We can advise on and support on
							technical inspections, maintenance management, records management as well as support on
							aircraft investments, delivery and re-delivery and remarketing. Thanks to our dedicated team
							you and your aircraft will always keep our focus.

						</p>

						<span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot activeDot "></span>
							<span class="dot"></span>
						</span>

						<img src="images/b3.jpg" style="width:100%;height:80vh;">
					</div>

					<div class="mySlides1">
						<p>Our dedicated software presents a clear dashboard overview on the status of the aircraft and
							records and provides all information you need to take decisions at any given moment. The
							assigned Consultant professional is always available to provide additional advises where
							needed, anytime, anywhere.


						</p>

						<span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot "></span>
							<span class="dot activeDot"></span>
						</span>

						<img src="images/b4.jpg" style="width:100%;height:80vh;">
					</div>


					<a class="prev" onclick="plusSlides(-1, 0)">&#10094;</a>
					<a class="next" onclick="plusSlides(1, 0)">&#10095;</a>
				</div>

				<!-- Inspired by: https://try.alexa.com/marketing-stack/seo-tools/ and https://stratus.hr/

With help from https://24ways.org/2010/intro-to-css-3d-transforms/-->

				<div style="padding-top: 3%;" class="container">

					<div class="row">
						<div class="col-md-2"></div>
						<div style="text-align: center;" class="col-md-8">
							<h1 style="color: white;">
								HIGH QUALITY SERVICE
							</h1>
							<p>
								When it comes to Project Management, our team acts as a seamless extension to your
								organisation and can manage the projects from start to finish, allowing you to manage
								your time and resources in a better way.
							</p>
						</div>
						<div class="col-md-2"></div>
					</div>

					<div class="row flip-boxes">
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front"
								style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);">
								<div class="content text-center">
									Aviation Asset Management<br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p>
										We are specialised in providing Techno-Commercial advisory for all transport
										aircraft. Services are offered to manage the aircraft operating under lease by
										carrying out periodic inspections and record review.
									</p>
									<p>
										This includes Lease contract Management and Negotiation, Lease Structure
										formulation, Transition Management and Maintenance Reserve Monitoring. Besides
										the commercial advisory, we have a team of technocrats to provide a full range
										of services to include Maintenance Review, Major Check Monitoring and
										Annual/Mid-Lease Inspection, thereby keeping our clients updated.
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front"
								style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);">
								<div class="content text-center">
									Aircraft Redeliveries/Delivery<br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p>
										We specialise in project planning, In-Depth records review and thorough physical
										inspections to confirm compliance with delivery/redelivery conditions. Our
										expert team provides customised solutions for different aircraft redelivery
										processes, worldwide. The service involves complete liaising with Technical
										Management teams, reporting and resolving non-compliance issues, creating
										aircraft redelivery binders and coordinating with potential customers as well.
										We also offer services for on-site EOL Check monitoring, Work-pack compilation
										and review including verification of Engine and APU Borescope reports.
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front"
								style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);">
								<div class="content text-center">
									Pre - Purchase Inspection<br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p>
										A thorough pre-purchase inspection is the best investment, as this can reduce
										potential exposure in the future. At AeroTec Managers, we go above and beyond
										industry standards, to ensure that our clients have all the information needed
										to make educated decisions. This is done by conducting a thorough audit of asset
										in the form of In-Depth Records Review and Detailed Physical Inspection of
										aircraft, as well as cross verification of both and providing un-biased
										technical advisory. AeroTec Managers has handled hundreds of pre-purchase
										inspections on a wide variety of aircraft and to put it simply, we know WHAT TO
										LOOK FOR.


									</p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front"
								style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);">
								<div class="content text-center">
									Engine and APU Management Services<br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p>
										With significant experience covering all aspects of aircraft engine management
										across wide range of engine types, AeroTec Managers offers a wide variety of
										services to its global clients. The services include but are not limited to
										Lease Return Condition Review, Maintenance Event Analysis, Oversight and
										Management of Engine Shop Visit, LLP Back-to-Birth trace report, Borescope
										reports review and interpretation, Engine Trend Charts Monitoring and
										Interpretation, Table Top inspection, LRU/QEC Inventory Audit, Maintenance
										Reserve claims and negotiation.


									</p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front"
								style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);">
								<div class="content text-center">
									Aircraft records digitisation and management<br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p>With our Records Digitisation service, you can keep your records safe and
										accessible anytime, from anywhere in the world. We specialise in making the data
										easily accessible in a digital format. With the latest technology and an
										experienced team, we provide one of the most cost effective solutions for
										records management. We have our in-house data management system - “AFM Vault”,
										where you can store the data and access it anytime. This service is FREE for our
										clients. Our records management services include, Digitisation and Indexing of
										Hard copies of Aircraft Records, Records Inventory Listing, Technical Review,
										Records Life Cycle Management, Back to Birth Tracing and reporting of
										discrepancies.

									</p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front"
								style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);">
								<div class="content text-center">
									Aircraft Maintenance Audit<br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p>
										Our highly motivated in-house team of enthusiastic aviators are well experienced
										to conduct your Annual/ Mid-term records review, involving thorough Physical
										inspection and Detailed Records Review of aircraft and associated engines. With
										our experience on a wide variety of fleet, we are able to provide “tailor made
										services” for up-keep of your Aircraft’s status. We carry out due diligence of
										assets, Major Maintenance Check-pack Review and Monitoring, Maintenance Reserve
										Claims Negotiation and Verification and Reporting of Non-Compliance issues.


									</p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front"
								style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);">
								<div class="content text-center">
									Aircraft and Engine Re-Marketing<br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p>
										Sourcing, Trading, Re-marketing - Our Extensive global network enables us to
										cater for our client’s requirements. AeroTec Managers’ specialised team for
										remarketing of aviation assets, deliver a discreet and targeted service. Our
										market knowledge and vast database allows us to align the expectations of both
										the parties to ensure a positive outcome within minimum time.
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front"
								style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);">
								<div class="content text-center">
									Component Sourcing<br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p>
										We offer a full range of aircraft components for sale, lease and exchange. A
										dedicated technical team is always on work to manage and fulfil your inventory
										requirements. With our global network of suppliers and repair stations, we work
										24/7 to make sure your aircraft keeps flying. Our services also include
										inventory management, parts procurement, exchange/leasing programs, repair
										administration and initial provisioning. Please contact us through our contact
										form and we will be happy to explore and determine how we can assist with your
										part sourcing requirements.
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front"
								style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);">
								<div class="content text-center">
									Aircraft Ferry<br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p>
										AeroTec Managers has strategic partnerships with some of the leading ferry
										flight agencies. We can provide cost effective and smooth ferry flights
										solutions around the globe.


									</p>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front"
								style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);">
								<div class="content text-center">
									Aircraft and Engine Re-Marketing<br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p>
										Sourcing, Trading, Re-marketing - Our Extensive global network enables us to
										cater for our client’s requirements. AeroTec Managers’ specialised team for
										remarketing of aviation assets, deliver a discreet and targeted service. Our
										market knowledge and vast database allows us to align the expectations of both
										the parties to ensure a positive outcome within minimum time.
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front"
								style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);">
								<div class="content text-center">
									Component Sourcing<br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p>
										We offer a full range of aircraft components for sale, lease and exchange. A
										dedicated technical team is always on work to manage and fulfil your inventory
										requirements. With our global network of suppliers and repair stations, we work
										24/7 to make sure your aircraft keeps flying. Our services also include
										inventory management, parts procurement, exchange/leasing programs, repair
										administration and initial provisioning. Please contact us through our contact
										form and we will be happy to explore and determine how we can assist with your
										part sourcing requirements.
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front"
								style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);">
								<div class="content text-center">
									Aircraft Ferry<br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p>
										AeroTec Managers has strategic partnerships with some of the leading ferry
										flight agencies. We can provide cost effective and smooth ferry flights
										solutions around the globe.


									</p>
								</div>
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
									<li><a href="/AIRCRAFT LEASE TRANSFERS.html">Transition Support</a></li>
									<li><a href="BASE MAINTENANCE SUPPORT & OVERSIGHT SERVICE.html">Base Maintenance Representative</a></li>
									<li><a href="/engineering service.html">Engineering support</a></li>
								</ul>

							</div>
						</div>
						<div class="col-md-2 col-md-push-1 fh5co-widget">
							<h4>Categories</h4>
							<div style="display: flex;">

								<ul class="fh5co-footer-links">
									<li><a href="esa part 66 examination.html">EASA Part 66 Examination</a></li>
									<li><a href="type rating courses.html">TYPE RATING COURSES</a></li>

								</ul>
							</div>
						</div>

						<div class="col-md-4 col-md-push-1 fh5co-widget">
							<h4>Contact Information</h4>
							<ul class="fh5co-footer-links">
								<li><a href="tel://212698977462">+212698977462</a></li>
								<li><a href="mailto:contact@aerotecsupport.com">contact@aerotecsupport.com</a></li>
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

			<header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" style="background-image: url(&quot;images/61cf08b19698d3bb94c3aee4_Aviation-Asset-Management.jpeg&quot;); height: 730px; " data-stellar-background-ratio="0.5">
				<div class="overlay"></div>
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-center">
							<div class="display-t js-fullheight" style="height: 730px;">
								<div class="display-tc js-fullheight animate-box fadeIn animated-fast" data-animate-effect="fadeIn" style="height: 730px;">
									<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GESTION DES ACTIFS AÉRONEFS</font></font></h1>

								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div class="fh5co-section">

				<div class="slideshow-container">
					<div class="mySlides1" style="display: block;">
						<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Garder le contrôle d'un actif complexe : un avion est l'un des actifs les plus complexes et les plus dynamiques si on le compare à d'autres classes d'actifs. Étant un élément essentiel d’un marché de l’aviation en constante évolution, il est important de connaître le véritable statut de l’avion.</font></font></p>

						<span>
							<span class="dot activeDot"></span>
							<span class="dot"></span>
							<span class="dot "></span>
							<span class="dot"></span>
						</span>

						<img src="images/b1.jpg" style="width:100%;height:80vh;">
					</div>

					<div class="mySlides1" style="display: none;">
						<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nos professionnels ont tous des années d’expérience sur le marché de la gestion d’actifs aéronautiques et de la gestion technique. Non seulement nous disposons de connaissances, mais nous sommes également impliqués en permanence dans les organisations de gestion et de maintenance des compagnies aériennes.</font></font></p>

						<span>
							<span class="dot"></span>
							<span class="dot activeDot"></span>
							<span class="dot "></span>
							<span class="dot"></span>
						</span>

						<img src="images/b2.jpg" style="width:100%;height:80vh;">
					</div>

					<div class="mySlides1" style="display: none;">
						<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nous fournissons un produit de gestion d’avions entièrement complet. Nous pouvons vous conseiller et vous assister en matière d'inspections techniques, de gestion de la maintenance, de gestion des dossiers ainsi qu'en matière d'investissements, de livraison, de relivraison et de recommercialisation d'avions. Grâce à notre équipe dévouée, vous et votre avion resterez toujours concentrés.

						</font></font></p>

						<span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot activeDot "></span>
							<span class="dot"></span>
						</span>

						<img src="images/b3.jpg" style="width:100%;height:80vh;">
					</div>

					<div class="mySlides1" style="display: none;">
						<p>Our dedicated software presents a clear dashboard overview on the status of the aircraft and
							records and provides all information you need to take decisions at any given moment. The
							assigned Consultant professional is always available to provide additional advises where
							needed, anytime, anywhere.


						</p>

						<span>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot "></span>
							<span class="dot activeDot"></span>
						</span>

						<img src="images/b4.jpg" style="width:100%;height:80vh;">
					</div>


					<a class="prev" onclick="plusSlides(-1, 0)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">❮</font></font></a>
					<a class="next" onclick="plusSlides(1, 0)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">❯</font></font></a>
				</div>

				<!-- Inspired by: https://try.alexa.com/marketing-stack/seo-tools/ and https://stratus.hr/

With help from https://24ways.org/2010/intro-to-css-3d-transforms/-->

				<div style="padding-top: 3%;" class="container">

					<div class="row">
						<div class="col-md-2"></div>
						<div style="text-align: center;" class="col-md-8">
							<h1 style="color: white;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
								SERVICE DE HAUTE QUALITÉ
							</font></font></h1>
							<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
								En matière de gestion de projet, notre équipe agit comme une extension transparente de votre organisation et peut gérer les projets du début à la fin, vous permettant ainsi de mieux gérer votre temps et vos ressources.
							</font></font></p>
						</div>
						<div class="col-md-2"></div>
					</div>

					<div class="row flip-boxes">
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front" style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350);">
								<div class="content text-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
									Gestion des actifs aéronautiques</font></font><br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
										Nous sommes spécialisés dans le conseil Techno-Commercial pour tous les avions de transport. Des services sont proposés pour gérer les avions exploités en location en effectuant des inspections périodiques et un examen des dossiers.
									</font></font></p>
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
										Cela comprend la gestion et la négociation des contrats de location, la formulation de la structure du bail, la gestion de la transition et le suivi des réserves de maintenance. Outre le conseil commercial, nous disposons d'une équipe de technocrates pour fournir une gamme complète de services comprenant l'examen de la maintenance, la surveillance des contrôles majeurs et l'inspection annuelle/de mi-location, tenant ainsi nos clients informés.
									</font></font></p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front" style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350);">
								<div class="content text-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
									Relivraisons/livraison d'avions</font></font><br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
										Nous sommes spécialisés dans la planification de projets, l'examen approfondi des dossiers et les inspections physiques approfondies pour confirmer le respect des conditions de livraison/relivraison. Notre équipe d'experts propose des solutions personnalisées pour différents processus de relivraison d'avions, dans le monde entier. Le service implique une liaison complète avec les équipes de gestion technique, le reporting et la résolution des problèmes de non-conformité, la création de classeurs de relivraison des avions et la coordination avec les clients potentiels. Nous proposons également des services de surveillance des contrôles EOL sur site, de compilation et d'examen des lots de travaux, y compris la vérification des rapports d'endoscope du moteur et de l'APU.
									</font></font></p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front" style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350);">
								<div class="content text-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
									Inspection pré-achat</font></font><br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
										Une inspection minutieuse avant l’achat constitue le meilleur investissement, car elle peut réduire l’exposition potentielle à l’avenir. Chez AeroTec Managers, nous allons au-delà des normes de l'industrie pour garantir que nos clients disposent de toutes les informations nécessaires pour prendre des décisions éclairées. Cela se fait en effectuant un audit approfondi des actifs sous la forme d'un examen approfondi des dossiers et d'une inspection physique détaillée de l'avion, ainsi que d'une vérification croisée des deux et en fournissant des conseils techniques impartiaux. AeroTec Managers a effectué des centaines d'inspections pré-achat sur une grande variété d'avions et, pour faire simple, nous savons CE QU'IL FAUT RECHERCHER.


									</font></font></p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front" style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350);">
								<div class="content text-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
									Services de gestion de moteur et d'APU</font></font><br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
										Fort d'une expérience significative couvrant tous les aspects de la gestion des moteurs d'avion sur une large gamme de types de moteurs, AeroTec Managers propose une grande variété de services à ses clients mondiaux. Les services comprennent, sans toutefois s'y limiter, l'examen des conditions de retour du bail, l'analyse des événements de maintenance, la surveillance et la gestion des visites d'atelier de moteurs, le rapport de suivi de retour à la naissance LLP, l'examen et l'interprétation des rapports d'endoscope, la surveillance et l'interprétation des graphiques de tendance du moteur, l'inspection sur table. , Audit d'inventaire LRU/QEC, réclamations de réserve de maintenance et négociation.


									</font></font></p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front" style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350);">
								<div class="content text-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
									Numérisation et gestion des dossiers aéronautiques</font></font><br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Avec notre service de numérisation des dossiers, vous pouvez garder vos dossiers en sécurité et accessibles à tout moment, de n'importe où dans le monde. Nous sommes spécialisés dans la rendre les données facilement accessibles dans un format numérique. Avec les dernières technologies et une équipe expérimentée, nous proposons l’une des solutions les plus rentables pour la gestion des dossiers. Nous disposons de notre système interne de gestion des données - « AFM Vault », dans lequel vous pouvez stocker les données et y accéder à tout moment. Ce service est GRATUIT pour nos clients. Nos services de gestion des dossiers comprennent la numérisation et l'indexation des copies papier des dossiers d'aéronefs, la liste de l'inventaire des dossiers, l'examen technique, la gestion du cycle de vie des dossiers, le suivi de la naissance et le rapport des écarts.

									</font></font></p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front" style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350);">
								<div class="content text-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
									Audit de maintenance des aéronefs</font></font><br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
										Notre équipe interne très motivée d'aviateurs enthousiastes est bien expérimentée pour mener votre examen annuel/à mi-parcours des dossiers, impliquant une inspection physique approfondie et un examen détaillé des dossiers des avions et des moteurs associés. Forts de notre expérience sur une grande variété de flottes, nous sommes en mesure de fournir des « services sur mesure » pour le maintien de l'état de votre avion. Nous effectuons une diligence raisonnable des actifs, un examen et une surveillance des dossiers de contrôle de maintenance majeure, une négociation et une vérification des réclamations de réserve de maintenance et un signalement des problèmes de non-conformité.


									</font></font></p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front" style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350);">
								<div class="content text-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
									Remarketing des avions et des moteurs</font></font><br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
										Sourcing, Trading, Re-marketing - Notre vaste réseau mondial nous permet de répondre aux exigences de nos clients. L'équipe spécialisée d'AeroTec Managers pour le remarketing des actifs aéronautiques, délivre un service discret et ciblé. Notre connaissance du marché et notre vaste base de données nous permettent d'aligner les attentes des deux parties pour garantir un résultat positif dans un délai minimum.
									</font></font></p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front" style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350);">
								<div class="content text-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
									Approvisionnement en composants</font></font><br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
										Nous proposons une gamme complète de composants d'avions à vendre, à louer et à échanger. Une équipe technique dédiée est toujours à l’œuvre pour gérer et répondre à vos besoins en matière d’inventaire. Grâce à notre réseau mondial de fournisseurs et de stations de réparation, nous travaillons 24h/24 et 7j/7 pour garantir que votre avion continue de voler. Nos services comprennent également la gestion des stocks, l'approvisionnement en pièces détachées, les programmes d'échange/location, l'administration des réparations et l'approvisionnement initial. Veuillez nous contacter via notre formulaire de contact et nous serons heureux d'explorer et de déterminer comment nous pouvons vous aider avec vos besoins en matière d'approvisionnement en pièces.
									</font></font></p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front" style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350);">
								<div class="content text-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
									Ferry pour avions</font></font><br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
										AeroTec Managers a des partenariats stratégiques avec certaines des principales agences de vols en ferry. Nous pouvons fournir des solutions de vols en ferry rentables et fluides dans le monde entier.


									</font></font></p>
								</div>
							</div>
						</div>

						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front" style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350);">
								<div class="content text-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
									Remarketing des avions et des moteurs</font></font><br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
										Sourcing, Trading, Re-marketing - Notre vaste réseau mondial nous permet de répondre aux exigences de nos clients. L'équipe spécialisée d'AeroTec Managers pour le remarketing des actifs aéronautiques, délivre un service discret et ciblé. Notre connaissance du marché et notre vaste base de données nous permettent d'aligner les attentes des deux parties pour garantir un résultat positif dans un délai minimum.
									</font></font></p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front" style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350);">
								<div class="content text-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
									Approvisionnement en composants</font></font><br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
										Nous proposons une gamme complète de composants d'avions à vendre, à louer et à échanger. Une équipe technique dédiée est toujours à l’œuvre pour gérer et répondre à vos besoins en matière d’inventaire. Grâce à notre réseau mondial de fournisseurs et de stations de réparation, nous travaillons 24h/24 et 7j/7 pour garantir que votre avion continue de voler. Nos services comprennent également la gestion des stocks, l'approvisionnement en pièces détachées, les programmes d'échange/location, l'administration des réparations et l'approvisionnement initial. Veuillez nous contacter via notre formulaire de contact et nous serons heureux d'explorer et de déterminer comment nous pouvons vous aider avec vos besoins en matière d'approvisionnement en pièces.
									</font></font></p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-4 col-8 flip-box">
							<div class="front" style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350);">
								<div class="content text-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
									Ferry pour avions</font></font><br>
									<span class="click-for-more">
									</span>
								</div>
							</div>
							<div class="back">
								<div class="content">
									<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
										AeroTec Managers a des partenariats stratégiques avec certaines des principales agences de vols en ferry. Nous pouvons fournir des solutions de vols en ferry rentables et fluides dans le monde entier.


									</font></font></p>
								</div>
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
								<li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EASA Part 66 Examination</font></font></a></li>
								<li><a href="type rating courses.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TYPE RATING COURSES</font></font></a></li>

							</ul>
						</div>
					</div>

					<div class="col-md-4 col-md-push-1 fh5co-widget">
						<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Coordonnées</font></font></h4>
						<ul class="fh5co-footer-links">
							<li><a href="tel://212698977462"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+212698977462</font></font></a></li>
							<li><a href="mailto:contact@aerotecsupport.com"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">contact@aerotecsupport.com</font></font></a></li>
						</ul>

						<div class="newFooter ">
							<div class="rounded-social-buttons">
								<a class="social-button facebook" href="https://www.facebook.com/profile.php?id=61557399107688" target="_blank"><svg class="svg-inline--fa fa-facebook-f fa-w-10" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg><!-- <i class="fab fa-facebook-f"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button twitter" href="https://twitter.com/AeroTecTraining" target="_blank"><svg class="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg><!-- <i class="fab fa-twitter"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button linkedin" href="https://www.linkedin.com/in/aerotech-support-a19791300/" target="_blank"><svg class="svg-inline--fa fa-linkedin-in fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg><!-- <i class="fab fa-linkedin-in"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button tiktok" href="whatsapp://send?phone=+212698977462"><svg class="svg-inline--fa fa-whatsapp fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg><!-- <i class="fab fa-whatsapp"></i> Font Awesome fontawesome.com --></a>
								<a class="social-button instagram" href="https://www.instagram.com/aerotecsupport24/" target="_blank"><svg class="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg><!-- <i class="fab fa-instagram"></i> Font Awesome fontawesome.com --></a>
							</div>
						</div>
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
