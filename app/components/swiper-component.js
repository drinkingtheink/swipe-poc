import Component from '@ember/component';
import accounts from './fixtures/accounts';

const defaultDir = 'horizontal';
const altDir = 'vertical';

export default Component.extend({
    swiperInstance: null,
    accounts: accounts,
    direction: defaultDir,
    loop: false,
    grabCursor: true,
    navigation: true,
    speed: 600,
    slidesPerView: 1,
    pagination: true,
    centeredSlides: true,
    
    actions: {
        updateTiming(time) {
            let newTime = time.target.value;
            this.set('speed', newTime);
        },
        toggleLoop() {
            let currentPref = this.get('loop');
            let updatedPref = !currentPref;
            this.set('loop', updatedPref);
        },
        updateDirection() {
            let currentDir = this.get('direction');
            let updatedDir = (currentDir === defaultDir) ? altDir : defaultDir;
            this.set('direction', updatedDir);
        }
    },
});
