(function () {
        'use strict';
        var app = {
            names: document.getElementById("contacts").getElementsByTagName("a"),
            init: function () {
                if (document.addEventListener) {
                    var form = document.getElementById('form-contacts');
                    var input = document.getElementById('input-name');

                    form.setAttribute('class', 'enriched');
                    input.addEventListener('input', function (e) {
                        filterContacts(this.value);
                    });
                    form.addEventListener('submit', function (e) {
                        e.preventDefault();
                    });

                    if (window.XMLHttpRequest) {
                        for (var i = 0; i < this.names.length; i++) {
                            var item = this.names[i];
                            item.addEventListener('click', (function (e) {
                                return function (e) {
                                    var pathName = this.href.split('/');
                                    loadContact(this);
                                    e.preventDefault();
                                }
                            })());
                        }
                    }
                }
            }
        };

        function loadContact(link){
            var pathName = link.href.split('/');
            var request = new XMLHttpRequest();
            var requestURL = '/api?href='+  pathName[3];
            request.open('GET', requestURL, true)
            request.onload = function() {
                console.log(request.status)
                if (request.status >= 200 && request.status < 400) {
                    // Success!
                    var data = JSON.parse(request.responseText);
                    renderContact(link, data);
                } else {
                    document.location.href = '/' + contactPath;
                }
            };
            request.onerror = function() {
                document.location.href = '/' + contactPath;
            };
            request.send();

        }

        function renderContact(contactLink, details) {
            var liItem = contactLink.parentNode;

            if (contactLink.className == 'open') {
                var elem = document.querySelector('#contacts ul');
                liItem.removeChild(elem);
                contactLink.setAttribute('class', '');
            } else {
                contactLink.setAttribute('class', 'open');

                var ul = document.createElement('ul');

                var linkPhone = document.createElement('a');
                var linkEmail = document.createElement('a');

                linkPhone.setAttribute('href', 'tel:' + details.phone);
                linkEmail.setAttribute('href', 'mailto:' + details.email);

                var liOne = document.createElement('li');
                var liTwo = document.createElement('li');

                linkPhone.appendChild(document.createTextNode(details.phone));
                linkEmail.appendChild(document.createTextNode(details.email));

                liOne.appendChild(linkPhone);
                liTwo.appendChild(linkEmail);

                liItem.appendChild(ul);
                ul.appendChild(liOne);
                ul.appendChild(liTwo);
            }
        }

        function filterContacts(input) {
            var inputNew = input.toLowerCase();

            for (var i = 0; i < app.names.length; i++) {
                var name = app.names[i].innerText.toLowerCase();

                if (!String.prototype.startsWith) {
                    if (name.indexOf(inputNew) > -1) {
                        app.names[i].parentNode.setAttribute('class', '')
                    } else {
                        app.names[i].parentNode.setAttribute('class', 'hidden')
                    }
                } else {
                    name = name.trim();
                    if (name.startsWith(inputNew)) {
                        app.names[i].parentNode.setAttribute('class', '')
                    } else {
                        app.names[i].parentNode.setAttribute('class', 'hidden')
                    }
                }
            }
        }

        app.init();
    }

)();