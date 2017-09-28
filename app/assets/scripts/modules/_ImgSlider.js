
import $ from 'jquery';

class ImgSlider {
    constructor() {
        this.portfolioShowcase = $('.portfolio__showcase');
        this.addImagesToTheDOM();
    }

    addImagesToTheDOM() {
        var html = '<img src="./assets/images/mikymeals-mac-frame.png" alt="mikeyMeals">';
        
        this.portfolioShowcase.innerHtml = html;
    }
}

export default ImgSlider;