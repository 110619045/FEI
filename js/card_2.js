var app = new Vue({
    el: '#app',
    data: {
        // 因為你現在決定都要往右滾，這個變數可以拿掉或留著備用
        isGridView: false, 
        showEnglish: true,
        cards: WORKS_DATA
    },
    methods: {
        openCard: function (card) {
            if (!card || !card.link) return;
            window.location.href = card.link;
        }
    },
    mounted: function() {
        const scrollContainer = document.querySelector('.horizontal-scroll-container');
        if (scrollContainer) {
            scrollContainer.addEventListener('wheel', (evt) => {
                /**
                 * 1. 判斷垂直捲動量 (deltaY)。
                 * 2. 在橫向佈局中，我們將垂直滾動轉向給水平 scrollLeft。
                 * 3. 乘上 1.2 ~ 1.5 可以增加捲動的靈敏度，讓 13 個專案滑起來更快。
                 */
                if (Math.abs(evt.deltaY) > Math.abs(evt.deltaX)) {
                    evt.preventDefault();
                    scrollContainer.scrollLeft += evt.deltaY * 1.2;
                }
            }, { passive: false });
        }
    }
});