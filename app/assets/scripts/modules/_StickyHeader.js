import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor() {
   	this.btn4 = $('.btn-4');
		this.links = $('a');
		this.navbar = $('.nav-bar');
		this.navLinks = $('.nav-bar a');
		this.pageSections = $('.page-section');
		this.headlines = $('.headline');
		this.onDocLoad();
		this.addSmoothScrolling();
		this.createHeaderWaypoint();
		this.createPageSectionWaypoint();
		this.refreshWaypoints();
	}

	refreshWaypoints(){
        Waypoint.refreshAll();
    }
    
	
	addSmoothScrolling() {
		this.links.smoothScroll();
	}
	
	onDocLoad() {
		var that = this;
		$(document).ready(() => { that.btn4.addClass('btn-4-load')});
		this.btn4.hover(() => { that.btn4.removeClass('btn-4-load')});
	}
		
	createHeaderWaypoint(){
		var that = this;
		new Waypoint({
			element: this.navbar[0],
			handler: function(direction) {
				if(direction === 'down'){
					that.navbar.addClass('nav-bar--is-visible');
				}
			},
			offset: '5%'
		})

		new Waypoint({
			element: this.navbar[0],
			handler: function(direction) {
				if(direction === 'up'){
					that.navbar.removeClass('nav-bar--is-visible');
				}
			},
			offset: '2%'
		})

		this.headlines.each(function(){
			var currentHeadline = this;
			new Waypoint({
				element: currentHeadline,
				handler: () => {
					$(currentHeadline).toggleClass('headline--large-t-margin');
				},
				offset: '30%'
			})
		})
	}

	createPageSectionWaypoint() {
		var that = this;
		this.pageSections.each(function(){
			var currentPage = this;
			new Waypoint({
				element: currentPage,
				handler: (direction) => {
					if(direction === 'down'){
						var matchingLink =	currentPage.getAttribute('data-matching-link');
						that.navLinks.removeClass('current-link');
						$(matchingLink).addClass('current-link');
					}
				},
				offset: '40%'
			});

			new Waypoint({
				element: currentPage,
				handler: (direction) => {
					if(direction === 'up'){
						var matchingLink =	currentPage.getAttribute('data-matching-link');
						that.navLinks.removeClass('current-link');
						$(matchingLink).addClass('current-link');
					}
				},
				offset: '-20%'
			});
			
		})
		
	}
}


export default StickyHeader;