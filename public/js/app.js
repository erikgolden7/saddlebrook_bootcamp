angular.module("fitnessApp", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state("home", {
		url: "/",
		urlTemplate: "./views/home/home.html",
		controller: "homeCtrl"
	})
	.state("about", {
		url: "/about",
		urlTemplate: "./views/about/about.html",
		controller: "aboutCtrl"
	})
	.state("contact", {
		url: "/contact",
		urlTemplate: "./views/contact/contact.html",
		controller: "contactCtrl"
	})
});
