
if (!('open' in document.createElement('details'))) {
    (function(){
        var faqItems = document.querySelectorAll('.faq-item');
        for (var i = 0; i < faqItems.length; i++) {
            faqItems[i].className += ' toggle';
            var el = faqItems[i];
            faqItems[i].addEventListener('click', function(e) {
                toggle(e, el);
            });
        }

        function toggle(e, el) {
            e.preventDefault();
            if (el.className == 'faq-item toggle') {
                el.className = 'faq-item toggle open';
            } else {
                el.className = 'faq-item toggle';
            }
        }
    })();

}