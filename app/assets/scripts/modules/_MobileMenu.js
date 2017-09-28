import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class MobileMenu {
    constructor() {
		this.menuContent = $('.menu-content');
		this.menuIcon = $('.site-header__menu-icon');
		this.navBarMenuIcon = $('.nav-bar__menu-icon');
		this.primaryNav = $('.primary-nav');
		this.waypointTrigger = $('.about'); 
		this.navBarLinks = $('.primary-nav a');
		this.createMenuWaypoint();
		this.event();
	}
	
	event() {
		this.menuIcon.click(this.toggleClass.bind(this));
		this.navBarMenuIcon.click(this.navToogleClass.bind(this));
		this.navBarLinks.click(() => {
			this.primaryNav.removeClass('primary-nav--is-visible');
			this.navBarMenuIcon.removeClass('nav-bar__menu-icon--close')
		});
	}
	
	toggleClass() {
		this.menuContent.toggleClass('menu-content--is-visible');
		this.menuIcon.toggleClass('menu-icon--close');
	}

	navToogleClass() {
		this.primaryNav.toggleClass('primary-nav--is-visible');
		this.navBarMenuIcon.toggleClass('nav-bar__menu-icon--close')
	}
	
	createMenuWaypoint() {
		var that = this;
		new Waypoint({
			element: this.waypointTrigger[0],
			handler: function(){
				that.menuContent.removeClass('menu-content--is-visible');
				that.menuIcon.removeClass('menu-icon--close');
			},
			offset: '20%'
		})
	}
}

export default MobileMenu;