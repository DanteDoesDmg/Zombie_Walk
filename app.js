document.addEventListener('DOMContentLoaded', function () {

    var time = null;
    var board = document.querySelector('.board');
    var roulette = getRoulette(3, 5, 7, 2);

    function getRoulette(a, b, c, d) {
        var array = [];
        var length = a + b + c + d;

        for (var i = 0; i <= length; i++) {
            switch (true) {

                case  i < a: {
                    array.push(0.7);
                    break;
                }
                case i < a + b: {
                    array.push(0.86);
                    break;
                }
                case i < a + b + c: {
                    array.push(1);
                    break;
                }
                case i <= length: {
                    array.push(1.2);
                    break;
                }
            }

        }

        return {array: array, firstRange: a, secondRange: a + b, thirdRange: a + b + c, fourthRange: length}
    }


    function start() {

        time = setInterval(function () {

            var zombie = document.createElement('div');
            var rouletteRoll = Math.round(Math.random()) * (roulette.array.length - 1);
            var zombieSize = roulette.array[rouletteRoll];

            switch (true) {
                case rouletteRoll >= roulette.firstRange: {
                    zombie.style.zIndex = '1';
                    break;
                }
                case(rouletteRoll >= roulette.secondRange): {
                    zombie.style.zIndex = '2';
                    break;
                }
                case(rouletteRoll >= roulette.thirdRange): {
                    zombie.style.zIndex = '3';
                    break;
                }
                default: {


                }
            }
            zombie.classList.add('zombie');
            zombie.style.bottom = Math.round(Math.random() * (230) + 50).toString(10);
            zombie.style.animationDuration = '0.8s , ' + (Math.random() * 10 + 10).toString(10) + 's';
            zombie.style.transform = 'scale(' + zombieSize + ')';
            board.appendChild(zombie);
            zombie.addEventListener("animationend", function () {
                this.parentElement.removeChild(this);
            });
        }, 700)

    }

    start()
});