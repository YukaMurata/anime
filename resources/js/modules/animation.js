import $ from 'jquery';
import anime from 'animejs';
import velocity from 'velocity-animate';

class Animation {
    constructor() {
        this.cssSelector();
        this.cssSelectorVelocity();
        this.cssProperties();
        this.cssPropertiesVelocity();
        this.cssTransforms();
        this.cssTransformsVelocity();
        this.svgAttributes();
        this.svgAttributesVelocity();
        this.textAnimation();
        this.svgAnimation();
        this.itemFade();
        this.lineAnimation();
    }

    cssSelector() {
        anime({
            targets: '#cssSelector .el',
            translateX: 250
        });
    }

    cssSelectorVelocity() {
        const $cssSelectorVelocity = $('#cssSelectorVelocity');
        velocity($cssSelectorVelocity, {
            translateX: 250
        });
    }

    cssProperties() {
        anime({
            targets: '#cssProperties .el',
            left: '250px',
            backgroundColor: '#000',
            borderRadius: 40,
            easing: 'easeInOutQuad'
        });
    }

    cssPropertiesVelocity() {
        const $cssPropertiesVelocity = $('#cssPropertiesVelocity .el');
        velocity($cssPropertiesVelocity, {
            left: '250px',
            backgroundColor: '#000',
            borderRadius: 40,
            easing: 'easeInOutQuad'
        }, 1000);
    }

    cssTransforms() {
        anime({
            targets: '#cssTransforms .el',
            translateX: 250,
            scale: 2,
            rotate: '1turn'
        })
    }

    cssTransformsVelocity() {
        const $cssPropertiesVelocity = $('#cssTransformsVelocity .el');
        velocity($cssPropertiesVelocity, {
            translateX: 250,
            scale: 2,
            rotateZ: 360
        })
    }

    svgAttributes() {
        anime({
            targets: '#svgAttributes polygon',
            points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
            easing: 'easeInOutExpo'
        });
    }

    svgAttributesVelocity() {
        const $svgAttributesVelocity = $('#svgAttributesVelocity polygon');
        velocity($svgAttributesVelocity, {
            duration: 1000,
            easing: 'easeInOutExpo'
        }, {
            complete: function () {
                $svgAttributesVelocity[0].setAttribute('points', '64, 128, 8.574, 96, 8.574, 32, 64, 0, 119.426, 32, 119.426, 96')
            }
        });
    }

    textAnimation() {
        // $('.ml1 .letters').each(function () {
        //     $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        // });
        anime.timeline({loop: false})
            .add({
            targets: '.ml1 .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
            delay: function (el, i, l) {
                return 80 * (l + i);
            }
        }).add({
            targets: '.ml1 .letters',
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=875',
            delay: function (el, i) {
                return 70 * (i + 1) + 700
            }
        });
    }

    svgAnimation() {
        const path = anime.path('#motionPath path');
        anime({
            targets: '#motionPath .el',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 2000,
            loop: false
        });
    }


    itemFade() {
        // anime.timeline({loop: false})
        //     .add({
        //         targets: '.item1',
        //         opacity: [0, 1, 0],
        //         easing: 'easeOutQuad',
        //         duration: 3000
        //     }).add({
        //     targets: '.item2',
        //     opacity: [0, 1],
        //     easing: 'easeOutQuad',
        //     duration: 1000
        // });
        anime({
            targets: ['.item1', '.item2'],
            opacity: [0, 1, 0],
            easing: 'easeInSine',
            duration: 4000,
            delay: function (el, index) {
                return index * 2000;
            }
        })
    }

    lineAnimation(){
        anime({
            targets: '#line .line',
            scaleX: [0, 1],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 700,
            delay: 400
        });

    }

}
module.exports = Animation;