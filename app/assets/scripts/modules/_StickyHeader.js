import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor() {
   	this.btn4 = $('.btn-4');
		this.links = $('a');
		this.navbar = $('.nav-bar');
		this.aboutTop = $('.about__top');
		this.pageSections = $('.page-section');
		this.onDocLoad();
		this.addSmoothScrolling();
		this.createHeaderWaypoint();
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
					that.aboutTop.addClass('about__top--large-b-margin');
				}
			},
			offset: '5%'
		})

		new Waypoint({
			element: this.navbar[0],
			handler: function(direction) {
				if(direction === 'up'){
					that.navbar.removeClass('nav-bar--is-visible');
					that.aboutTop.removeClass('about__top--large-b-margin');
				}
			},
			offset: '2%'
		})
		
	}

	createPageSectionWaypoint() {
		this.pageSection.each(() => {
			const currentPage = this;
			new Waypoint({
				element: currentPage,
				handler: () => {
					var matchingLink = currentPage.getAttribute('data-matching-link');
					$(currentPage).addClass('current-link');
				}
			})
		})
	}
}


export default StickyHeader;