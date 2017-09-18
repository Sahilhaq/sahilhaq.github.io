import $ from 'jquery';

class MobileMenu {
    constructor() {
		this.menuContent = $('.menu-content');
		this.menuIcon = $('.site-header__menu-icon')
		this.event();
	}
	
	event() {
		this.menuIcon.click(this.toggleClass.bind(this));
	}
	
	toggleClass() {
		this.menuContent.toggleClass('menu-content--is-visible');
	}
}

export default MobileMenu;