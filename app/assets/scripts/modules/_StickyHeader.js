import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    /*constructor(){
        this.lazyImages = $('.lazyload');
        this.siteHeader = $('.site-header');
        this.headerLinks = $('.primary-nav a');
        this.pageSections = $('.page-section');
        this.pageSectionBlue = $('.page-section--blue');
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.createHeaderWayponits();
        this.refreshWayponits();
    }
    
    refreshWayponits(){
        Waypoint.refreshAll();
    }
    
    addSmoothScrolling(){
        this.headerLinks.smoothScroll();
    }
    
    createPageSectionWaypoints(){
        var that = this;
        this.pageSections.each(function(){
            var currentPage = this;
           new Waypoint({
                element: currentPage,
                handler: function(direction){
                    if (direction === 'down'){
                        var matchingPageLink = currentPage.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        $(matchingPageLink).addClass('is-current-link');
                    }   
                },
               offset: '40%'
            }) 
            
            new Waypoint({
                element: currentPage,
                handler: function(direction){
                    if (direction === 'up'){
                        var matchingPageLink = currentPage.getAttribute('data-matching-link');
                        that.headerLinks.removeClass('is-current-link');
                        $(matchingPageLink).addClass('is-current-link');
                    }   
                },
               offset: '-30%'
            }) 
        });
    }
    
    createHeaderWayponits(){
        var that = this;
        new Waypoint({
            element: this.pageSectionBlue[0],
            handler: function(direction){
                if(direction === 'down'){
                    that.siteHeader.addClass('site-header--orange');
                }
            },
            offset: '10%'
        })
        
        new Waypoint({
            element: this.pageSectionBlue[0],
            handler: function(direction){
                if(direction === 'up'){
                    that.siteHeader.removeClass('site-header--orange');
                }
            },
            offset: '20%'
        })
    }*/
}

export default StickyHeader;