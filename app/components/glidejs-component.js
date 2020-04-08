import Component from '@ember/component';
import accounts from './fixtures/accounts';
import Glide from '@glidejs/glide'

export default Component.extend({
    accounts: accounts,
    glidejs: Glide,
    glidejsInstance: null,
    startAt: 0,
    perView: 1,
    gap: 40,
    autoPlay: false,
    swipeThreshold: 80,
    dragThreshold: 120,
    animationDuration: 400,
    rewind: false,
    rewindDuration: 800,

    actions: {
        updateAnimationDuration(speed) {
            let newSpeed = speed.target.value;
            this.set('animationDuration', newSpeed);
        },
        toggleAutoPlay() {
            let newCont = !this.autoPlay;
            this.set('autoPlay', newCont);
        },
        toggleRewind() {
            let newCont = !this.rewind;
            this.set('rewind', newCont);
        },
        updateRewindDuration(rewDur) {
            let newDur = rewDur.target.value;
            this.set('rewindDuration', newDur);
        },
        updateSlidesPerView(cardCount) {
            let newCount = cardCount.target.value;
            this.set('perView', newCount);
        },
        updateSlideGap(newGap) {
            let newGapCount = newGap.target.value;
            this.set('gap', newGapCount);
        },
        updateSwipeThreshold(newThresh) {
            let newThreshCount = newThresh.target.value;
            this.set('swipeThreshold', newThreshCount);
        },
        updateDragThreshold(newThresh) {
            let newDragCount = newThresh.target.value;
            this.set('dragThreshold', newDragCount);
        }
    },

    initGlidejs() {
        if(this.glidejsInstance) {
            this.set('glidejsInstance', null);
        }

        this.glidejsInstance = new Glide('.glide', {
            type: 'carousel',
            startAt: this.startAt,
            perView: this.perView,
            gap: this.gap,
            autoPlay: this.autoPlay,
            keyboard: true,
            swipeThreshold: this.swipeThreshold,
            dragThreshold: this.dragThreshold,
            animationDuration: this.animationDuration,
            rewind: this.rewind,
        }).mount();
    },

    didRender() {
        this.initGlidejs();
    },
});
