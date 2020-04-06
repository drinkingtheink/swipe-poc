import Component from '@ember/component';
import accounts from './fixtures/accounts';
import Swipe from 'swipejs';

export default Component.extend({
    accounts: accounts,
    swipejs: Swipe,
    swipejsInstance: null,

    didInsertElement() {
        this.swipejsInstance = new Swipe(document.getElementById('slider'), {
            startSlide: 0,
            speed: 400,
            auto: 0,
            draggable: true,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            ignore: ".scroller",
            callback: function(index, elem, dir) {},
            transitionEnd: function(index, elem) {}
        });
    }
});
