import $ from 'jquery';
import anime from 'animejs';

class ClickAnimation {
    constructor() {
        this.attachEvent();
        this.isAnimation = false;
    }

    attachEvent() {
        $('.click-area').on('click', () => {
            // this.onClickEvent();
            this.showCircle();
        });
    }

    onClickEvent() {
        if (this.isAnimation === false) {
            anime({
                targets: '.click-area .square',
                backgroundColor: '#000',
                borderRadius: 100
            });
            this.isAnimation = true;
        } else if (this.isAnimation === true) {
            anime({
                targets: '.click-area .square',
                borderRadius: 0
            });
            this.isAnimation = false;
        }
    }

    showCircle() {
        const targetId = $('.click-area ul li');
        let i = 0;
        let positionX = 0;
        let positionY = 0;
        let widthData = 0;
        targetId.each(function () {
            positionY = Math.random() * 200;
            positionX = Math.random() * 200;
            widthData = Math.random() * 20;
            let randomColor = "rgb(" + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ")";
            anime({
                targets: targetId[i],
                backgroundColor: randomColor,
                width: widthData,
                height: widthData,
                borderRadius: 20,
                top: positionY,
                left: positionX
            }, 1000);
            i++;
        })
    }
    

}
module.exports = ClickAnimation;