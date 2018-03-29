(function () {
        'use strict';
        var app = {
            init: function () {
                if (document.addEventListener) {
                    var form = document.getElementById('form-contacts');
                    var input = document.getElementById('input-name');
                    form.setAttribute('class', 'enriched');
                    input.addEventListener('keyup', function (e) {
                        filterContacts(this.value);
                    });
                    form.addEventListener('submit', function (e) {
                        e.preventDefault();
                    });

                }
            }
        };

        function filterContacts(input) {
            var list = document.getElementById("contacts");
            var names = list.getElementsByTagName("a");
            var inputNew = input.toLowerCase();

            for (var i = 0; i < names.length; i++) {
                var name = names[i].innerText.toLowerCase();
                if (!String.prototype.startsWith) {
                    if (name.innerHTML.toLowerCase().indexOf(inputNew) > -1) {
                        names[i].parentNode.setAttribute('class', '')
                    } else {
                        names[i].parentNode.setAttribute('class', 'hidden')
                    }
                } else {
                    if (name.startsWith(inputNew)) {
                        names[i].parentNode.setAttribute('class', '')
                    } else {
                        names[i].parentNode.setAttribute('class', 'hidden')
                    }
                }
            }
        }


        app.init();
    }

)();