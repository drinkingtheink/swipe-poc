import Component from '@ember/component';
import accounts from './fixtures/accounts';
import Swipe from 'swipejs';

const defaultSpeed = 400;

export default Component.extend({
    accounts: accounts,
    swipejs: Swipe,
    swipejsInstance: null,
    auto: 0,
    speed: defaultSpeed,
    continuous: true,
    componentID: 'swipejs-container',

    actions: {
        updateSpeed(speed) {
            let newSpeed = speed.target.value;
            this.set('speed', newSpeed);
        },
        toggleContinuity() {
            let newCont = !this.continuous;
            this.set('continuous', newCont);
        },
        updateAutoSpeed(speed) {
            let newSpeed = speed.target.value;
            this.set('auto', newSpeed);
        }
    },

    initSwipe() {
        this.swipejsInstance = new Swipe(document.getElementById(this.componentID), {
            startSlide: 0,
            speed: this.speed,
            auto: this.auto,
            draggable: true,
            continuous: this.continuous,
            disableScroll: false,
            stopPropagation: false,
            ignore: ".scroller",
            callback: function(index, elem, dir) {},
            transitionEnd: function(index, elem) {}
        });
    },

    didInsertElement() {
        this.initSwipe();
    },

    didRender() {
        this.initSwipe();
    }
});
