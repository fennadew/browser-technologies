(function () {
    var faqItems = document.querySelectorAll('.faq-item');

    if (!('open' in document.createElement('details'))) {
        (function () {
            for (var i = 0; i < faqItems.length; i++) {
                var item = faqItems[i];
                item.className += ' toggle';
                item.addEventListener('click', (function (i, item) {
                    return function () {
                        toggleFaq(i, item);
                    }
                })(i, item));
            }

            function toggleFaq(i, item) {
                for (var y = 0; y < faqItems.length; y++) {
                    if (y !== i) {
                        faqItems[y].className = 'faq-item toggle';
                    } else {
                        if (item.className == 'faq-item toggle') {
                            item.className = 'faq-item toggle open';
                        } else {
                            item.className = 'faq-item toggle';
                        }
                    }
                }
            }
        })();
    } else {
        (function () {
            for (var i = 0; i < faqItems.length; i++) {
                var item = faqItems[i];
                item.addEventListener('click', (function (i) {
                    return function () {
                        toggleFaq(i);
                    }
                })(i));
            }

            function toggleFaq(i) {
                for (var y = 0; y < faqItems.length; y++) {
                    if (y !== i) {
                        faqItems[y].removeAttribute("open");
                    }
                }
            }
        })();
    }

    if (window.FileReader) {
        var label = document.getElementById('image-picker');
        var placeholder = document.createElement('img');
        var figure = document.createElement('figure');
        var inputFile = document.querySelector('input[type=file]');
        var button = document.createElement('span');
        button.textContent = 'Upload image'

        label.className = 'enriched';
        placeholder.setAttribute('src', 'img/placeholder.png');
        placeholder.setAttribute('alt', 'Placeholder upload image');
        placeholder.setAttribute('class', 'placeholder');
        figure.appendChild(placeholder);
        label.appendChild(figure);
        label.appendChild(button);

        inputFile.addEventListener('change', function () {
            showImage();
        });

        function showImage() {
            var file = inputFile.files[0];
            var placeholderImg = document.querySelector('.placeholder')
            var reader = new FileReader();

            if (file) {
                reader.readAsDataURL(file);
            } else {
                placeholderImg.setAttribute('src', 'img/placeholder.png');
            }

            reader.onload = function () {
                placeholderImg.setAttribute('src', reader.result);
            }
        }
    }

})();
