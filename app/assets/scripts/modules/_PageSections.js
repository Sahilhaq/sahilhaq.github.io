import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class pageSections {
	constructor() {
		this.waypoints = $('.waypoint');
		this.createAnimationWaypoints();
		this.footerTrigger = $('.contact');
		this.footer = $('.site-footer');
		this.createFooterWaypoint();
	}
	
	createAnimationWaypoints(){
		var that = this;
		this.waypoints.each(function() {
			var currentWaypoint = this;
			new Waypoint({
				element: currentWaypoint,
				handler: function() {
					var waypointAnimation = currentWaypoint.getAttribute('data-animation');
					$(currentWaypoint).addClass(waypointAnimation);
				},
				offset: '50%'
			})
		})
		
	}

	createFooterWaypoint() {
		var that = this;
		new Waypoint({
			element: this.footerTrigger[0],
			handler() {
				that.footer.toggleClass('site-footer--is-fixed');
			},
			offset: '100%'
		})
		
	}
		
}

export default pageSections;