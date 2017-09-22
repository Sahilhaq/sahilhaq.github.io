import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class MobileMenu {
    constructor() {
		this.menuContent = $('.menu-content');
		this.menuIcon = $('.site-header__menu-icon');
		this.waypointTrigger = $('.about'); 
		this.createMenuWaypoint();
		this.event();
	}
	
	event() {
		this.menuIcon.click(this.toggleClass.bind(this));
	}
	
	toggleClass() {
		this.menuContent.toggleClass('menu-content--is-visible');
		this.menuIcon.toggleClass('menu-icon--close');
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