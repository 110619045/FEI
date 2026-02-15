// js/core.js
var app = new Vue({
    el: '#app',
    data: {
        showEnglish: true,
        cards: WORKS_DATA // 直接引用 data_works.js 裡的變數
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
                 * 智慧型捲動轉向邏輯：
                 * 1. 判斷使用者是否主要在進行「垂直滾動」(deltaY > deltaX)。
                 * 2. 如果是，則將其垂直位移量 (deltaY) 轉嫁給水平捲軸 (scrollLeft)。
                 * 3. 這樣 Windows/Mac 滑鼠向下滾 = 向右滑；
                 * Mac 觸控板「自然捲動」向上推 = 向右滑，兩者都會符合系統原生直覺。
                 */
                if (Math.abs(evt.deltaY) > Math.abs(evt.deltaX)) {
                    evt.preventDefault();
                    
                    // 使用原生 scrollBy 搭配 behavior: 'auto' 能確保響應最即時
                    // 如果想要更絲滑一點，可以把 behavior 改成 'smooth'
                    scrollContainer.scrollBy({
                        left: evt.deltaY * 1.2, // 1.2 為靈敏度，你可以依手感調整為 1.0 或 1.5
                        behavior: 'auto'
                    });
                }
            }, { passive: false }); // 必須加上 passive: false 才能禁用預設垂直捲動
        }
    }
});