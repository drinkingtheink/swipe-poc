import Component from '@ember/component';
import accounts from './fixtures/accounts';

const defaultDir = 'horizontal';
const altDir = 'vertical';

export default Component.extend({
    swiperInstance: null,
    accounts: accounts,
    swiperOptions: {
        direction: defaultDir,
        loop: false,
        grabCursor: true,
        navigation: true,
        speed: 600,
        slidesPerView: 1,
        pagination: true,
    },
    
    actions: {
        updateTiming(time) {
            let newTime = time.target.value;
            this.set('swiperOptions.speed', newTime);
        },
        toggleLoop() {
            let currentPref = this.get('swiperOptions.loop');
            let updatedPref = !currentPref;
            this.set('swiperOptions.loop', updatedPref);
        },
        updateDirection() {
            let currentDir = this.get('swiperOptions.direction');
            let updatedDir = (currentDir === defaultDir) ? altDir : defaultDir;
            this.set('swiperOptions.direction', updatedDir);
        }
    },
});
