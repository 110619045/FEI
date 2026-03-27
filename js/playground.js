const WORKS_DATA = [
    {
        img: './image/play around with LoRA/0.webp',
        link: './image/play around with LoRA/0.webp',
        Ename: 'play around with LoRA',
        badge: 'CREATIVE',
        tool: [
            { tools: 'Python' },
        ],
        synopsis: '',
        Esynopsis: '',
        intro: '嘗試使用LoRA訓練不同風格的模型。從網路上蒐集了20張漫畫風格肖像畫作品進行訓練。',
        Eintro: "I tried using LoRA to train models in different styles. I collected 20 manga-style portrait artworks from the internet for training.",
        layout: 'short', // tall / mid / short
        imgPosition: ''
    },
    {
        img: 'image/inkpaint/daydream.webp',
        link: 'image/inkpaint/daydream.webp',
        Ename: 'Daydream',
        badge: 'PAINTING',
        tool: [
            { tools: 'Ink' },
        ],
        synopsis: '',
        Esynopsis: '',
        intro: '',
        Eintro: "",
        layout: 'tall',
        imgPosition: 'center 65%'
    },
    {
        img: 'image/watercolor/181120_0026.webp',
        link: 'image/watercolor/181120_0026.webp',
        name: '',
        badge: 'PAINTING',
        tool: [
            { tools: 'Watercolor' },
        ],
        synopsis: '',
        Esynopsis: '',
        intro: '',
        Eintro: "",
        layout: 'mid',
        // imgPosition: 'center 30%'
    },
    {
        img: 'image/故事盒/box.webp',
        link: 'image/故事盒/box.webp',
        name: '"?"',
        Ename: '"?"',
        badge: 'CREATIVE',
        tool: [
            { tools: 'AI' },
            { tools: 'Electronics' },
        ],
        synopsis: '',
        Esynopsis: '',
        intro: '',
        Eintro: "",
        layout: 'mid',
        imgPosition: ''
    },
    {
        img: 'image/inkpaint/blessed.webp',
        link: 'image/inkpaint/blessed.webp',
        name: '為美好的世界獻上祝福',
        Ename: 'May this beautiful world be blessed',
        badge: 'PAINTING',
        tool: [
            { tools: 'Ink' },
        ],
        synopsis: '',
        Esynopsis: '',
        intro: '',
        Eintro: "",
        layout: 'tall',
        imgPosition: ''
    },
    {
        img: './image/電子雞/0.png',
        link: './image/電子雞/0.png',
        name: '電子寵物雞',
        Ename: 'Electronic Pet',
        badge: 'DEVICE & SYSTEM',
        tool: [
            { tools: 'C++' }
        ],
        synopsis: '',
        Esynopsis: '',
        intro: '使用WiFiBoy開發的掌上型電子寵物。使用者必須隨時注意寵物的狀態，適當清掃他的環境以及適量餵食他。妥善照顧他可以使其進化，但如果疏於照顧他除了會使他不健康，甚至會讓他死掉喔！',
        Eintro: "Developed using WiFiBoy, this handheld electronic pet requires users to constantly monitor its status, clean its environment appropriately, and feed it in moderation. Proper care can lead to its evolution, but neglecting it will not only make it unhealthy but could even lead to its demise!",
        layout: 'short',
        imgPosition: ''
    },
    {
        img: 'image/watercolor/jiufen.webp',
        link: 'image/watercolor/jiufen.webp',
        name: '九份',
        Ename: 'Jiufen',
        badge: 'PAINTING',
        tool: [
            { tools: 'Watercolor' },
        ],
        synopsis: '',
        Esynopsis: '',
        intro: '',
        Eintro: "",
        layout: 'mid',
        imgPosition: ''
    },
    {
        img: 'image/inkpaint/moon.webp',
        link: 'image/inkpaint/moon.webp',
        name: '迢迢新秋夕 亭亭月將圓',
        Ename: 'The pale moon slowly rounds',
        badge: 'PAINTING',
        tool: [
            { tools: 'Ink' },
        ],
        synopsis: '',
        Esynopsis: '',
        intro: '',
        Eintro: "",
        layout: 'tall',
        imgPosition: 'center 28%'
    },
    {
        img: 'image/inkpaint/forgetting.webp',
        link: 'image/inkpaint/forgetting.webp',
        name: '相望相忘',
        Ename: 'A glance into forgetting',
        badge: 'PAINTING',
        tool: [
            { tools: 'Ink' },
        ],
        synopsis: '',
        Esynopsis: '',
        intro: '',
        Eintro: "",
        layout: 'tall',
        imgPosition: 'center 58%'
    },
    {
        img: 'image/線上演唱會模擬系統/0.png',
        name: '線上演唱會模擬系統',
        Ename: 'Online Concert Simulation System',
        badge: 'DEVICE & SYSTEM',
        tool: [
            { tools: 'Unity' }
        ],
        synopsis: '',
        Esynopsis: '',
        intro: '在後疫情社會中，我們常常要面臨大型活動臨時取消的可能性，現在也有不少音樂團體與虛擬偶像會舉行線上演唱會。為了讓觀眾在家中也可以享有實體演唱會的氣氛，我們使用Arduino、Unity開發，用電腦與3D投影模擬實際舞台，並提供觀眾有互動功能的手燈與發送即時彈幕的平台，提升在家中參與演唱會的互動體驗。',
        Eintro: "In a post-pandemic society, we often face the possibility of large events being canceled at the last minute, leading many music groups and virtual idols to hold online concerts. To allow audiences to enjoy the atmosphere of a live concert from home, we used Arduino and Unity to develop a system that simulates an actual stage with computers and 3D projection. Additionally, we provide interactive light sticks and a platform for sending real-time comments, enhancing the interactive experience of attending concerts from home.In a post-pandemic society, we often face the possibility of large events being canceled at the last minute, leading many music groups and virtual idols to hold online concerts. To allow audiences to enjoy the atmosphere of a live concert from home, we used Arduino and Unity to develop a system that simulates an actual stage with computers and 3D projection. Additionally, we provide interactive light sticks and a platform for sending real-time comments, enhancing the interactive experience of attending concerts from home.",
        layout: 'short',
        imgPosition: ''
    },
    {
        img: 'image/watercolor/tranquil.webp',
        link: 'image/watercolor/tranquil.webp',
        name: '靜',
        Ename: 'Tranquil',
        badge: 'PAINTING',
        tool: [
            { tools: 'Watercolor' },
        ],
        synopsis: '',
        Esynopsis: '',
        intro: '',
        Eintro: "",
        layout: 'mid',
        imgPosition: 'center 0%'
    },
    



];