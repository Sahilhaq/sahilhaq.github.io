import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class pageSections {
	constructor() {
		this.waypoints = $('.waypoint');
		this.createAnimationWaypoints();
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
		
}

export default pageSections;