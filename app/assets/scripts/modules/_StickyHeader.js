import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor() {
   	this.btn4 = $('.btn-4');
		this.onDocLoad();
	}
	
	onDocLoad() {
		var that = this;
		$(document).ready(() => { that.btn4.addClass('btn-4-load')});
		this.btn4.hover(() => { that.btn4.removeClass('btn-4-load')});
	}
		
}


export default StickyHeader;