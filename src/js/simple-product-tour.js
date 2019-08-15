window.onload = function() {
    
    if (document.body.classList.contains('simple-product-tour')) {
        tour();
    };

    function tour() {
        var tour = document.createElement('div');
        tour.className = 'tour overlay';
        tour.innerHTML = '<div class="tour-notify" id="notify"><p></p><div class="tour-notify-actions"><button id="btnNext" class="btn btn-next">next</button><button id="btnFinish" class="btn btn-finish" hidden>finish</button></div></div>';
        document.body.append(tour);


        var tourOverlay = document.querySelector('.overlay.tour'),
            tourList = document.querySelectorAll('.point'),
            notify = document.getElementById('notify'),
            sortedList = [],
            i = 0,
            notifyList = [
                '1. notify one',
                '2. notify two',
                '3. notify three'
            ];

        tourList.forEach(function(item) {
            sortedList.push({item});
        });

        sortedList.sort(function(a, b) {
            if (a.item.dataset.step > b.item.dataset.step) {
                return 1;
            }
            if (a.item.dataset.step < b.item.dataset.step) {
                return -1;
            }
            return 0;
        });

        function showNext() {
            if (sortedList.length > 2 && i > 0) {
                sortedList[i - 1].item.classList.remove('tour-point-show');
            }
            if (i < sortedList.length) {
                sortedList[i].item.classList.add('tour-point-show');
            }
            insertNotify(notify.firstChild, notifyList[i]);
            position(notify, sortedList[i].item);
        };

        function getCoordinates(anch) {
            var coord = anch.getBoundingClientRect();
            return {
                top: coord.top + pageYOffset,
                left: coord.left + pageXOffset,
                anchHeight: anch.offsetHeight,
                anchWidth: anch.offsetWidth
            };
        };

        function position(el, anch) {
            var anchCoord = getCoordinates(anch),
                anchSizes = '';
            el.style.left = anchCoord.left + anchCoord.anchWidth + 10 + "px";
            el.style.top = anchCoord.top + anchCoord.anchHeight / 2 - 15 + "px";
        };

        function insertNotify(el, txt) {
            el.textContent = txt;
        };

        function next() {

            i++;
            if (i === sortedList.length) {
                sortedList[i - 1].item.classList.remove('tour-point-show');
                btnNext.innerHTML = "next";
                btnFinish.setAttribute('hidden', true);
                i = 0;
                showNext();
                return
            };

            showNext();

            if (i === sortedList.length - 1) {
                this.innerHTML = "once more";
                btnFinish.removeAttribute('hidden');
            };
        };

        showNext();

        btnNext.onclick = next;

        btnFinish.onclick = function() {
            next();
            tourOverlay.style.display = "none";
        };
    };
};