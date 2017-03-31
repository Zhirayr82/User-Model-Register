	validateRegister(user){
		if(user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined ) {
			return false;
		} else {
			return true;
		}
	}

	validateEmail(email){
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}



	<nav class="navbar navbar-default">
	<div class="container">
	<div class="navbar-header">
	<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	<span class="sr-only">Toggle navigation</span>
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
	</button>
	<a class="navbar-brand" href="#">MEAN Auth App</a>
	</div>
	<div id="navbar" class="collapse navbar-collapse">
	<ul class="nav navbar-nav navbar-left">
	<li [routerLinkActive]="['active']" [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="['/']">Home</a></li>
	</ul>

	<ul class="nav navbar-nav navbar-right">
	<li [routerLinkActive]="['active']" [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="['/login']">Login</a></li>
	<li [routerLinkActive]="['active']" [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="['/register']">Register</a></li>
	</ul>
	</div><!--/.nav-collapse -->
	</div>
	</nav>





	<!--                    Router outlet
	Given this configuration, when the browser URL for this application 
	becomes /heroes, the router matches that URL to the route path /heroes 
	and displays the HeroListComponent after a RouterOutlet that you've 
	placed in the host view's HTML.
	-->
	<app-navbar></app-navbar>
	<!-- Routed views go here -->

	<!-- 6) -->
	<div class="container">
	<router-outlet></router-outlet>
	</div>