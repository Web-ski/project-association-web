document.addEventListener('DOMContentLoaded', function () {
    const jumbotronTxt = document.getElementsByClassName('jumbotron__text')[0];
    const text = 'The scientific association which brings together scientists, academics and experts from many European countries.';

    const textPlace = document.createTextNode(' ');
    const spanAfter = document.createElement('span');

    jumbotronTxt.appendChild(textPlace);
    jumbotronTxt.appendChild(spanAfter);

    jumbotronTxt.lastChild.setAttribute('class', 'pulsar');
    const pulsar = document.getElementsByClassName('pulsar')[0];

    console.log(text.length);

    const typeTxt = function () {
        pulsar.style.borderLeft = 'solid 2px #fcc11f';
        pulsar.style.animation = 'pulsar .4s alternate infinite';

        setTimeout(function () {
            for (let i = 0; i < text.length; i++) {
                setTimeout(function () {
                    jumbotronTxt.firstChild.textContent += text[i];
                }, i * 150);
            }

            setTimeout(function () {
                pulsar.removeAttribute('style', 'borderLeft');
                pulsar.style.width = '2px';
            }, 150 * text.length + 2000);
        }, 2000);
    }

    typeTxt();
});