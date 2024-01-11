import { defineStore } from 'pinia'

export default defineStore('homeStore', {
  state: () => {
    return {
      hotNew: [
        {
          title: '秋季旅遊，豪華享受方案',
          descript: '秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。',
          imageUrl: ''
        },
        {
          title: '輕鬆住房專案',
          descript: '我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。',
          imageUrl: ''
        },
        {
          title: '耶誕快樂，住房送禮',
          descript: '聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！',
          imageUrl: ''
        },
      ],
      about: `<p>享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。<br>我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。 </p>
            <p>我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。<br>我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。</p>
            <p>在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。</p>
            <p>享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。</p>`,
      supplyInfo: [
        {
          title: '海霸',
          time: 'SUN-MON 11:00 - 20:30',
          info: '以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。'
        },
        {
          title: '日食',
          time: 'SUN-MON 17:00 - 22:00',
          info: '為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。'
        },
        {
          title: '山臻',
          time: 'SUN-MON 11:30 - 20:30',
          info: '帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。'
        },
        {
          title: '月永',
          time: 'SUN-MON 11:00 - 20:00',
          info: '從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。'
        },
        {
          title: '天潮',
          time: 'SUN-MON 14:00 - 19:30',
          info: '我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。'
        },
      ],
      transportation: [
        {
          title: '自行開車',
          descript: '如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。',
          icon: `<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16">
                 <path d="M15.92 1.01C15.72 0.42 15.16 0 14.5 0H3.5C2.84 0 2.29 0.42 2.08 1.01L0 7V15C0 15.55 0.45 16 1 16H2C2.55 16 3 15.55 3 15V14H15V15C15 15.55 15.45 16 16 16H17C17.55 16 18 15.55 18 15V7L15.92 1.01ZM3.5 11C2.67 11 2 10.33 2 9.5C2 8.67 2.67 8 3.5 8C4.33 8 5 8.67 5 9.5C5 10.33 4.33 11 3.5 11ZM14.5 11C13.67 11 13 10.33 13 9.5C13 8.67 13.67 8 14.5 8C15.33 8 16 8.67 16 9.5C16 10.33 15.33 11 14.5 11ZM2 6L3.5 1.5H14.5L16 6H2Z" />
               </svg>`
        },
        {
          title: '高鐵/火車',
          descript: '如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。',
          icon: `<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g clip-path="url(#clip0_31_1909)">
                  <path d="M12 2C8 2 4 2.5 4 6V15.5C4 17.43 5.57 19 7.5 19L6 20.5V21H8.23L10.23 19H14L16 21H18V20.5L16.5 19C18.43 19 20 17.43 20 15.5V6C20 2.5 16.42 2 12 2ZM7.5 17C6.67 17 6 16.33 6 15.5C6 14.67 6.67 14 7.5 14C8.33 14 9 14.67 9 15.5C9 16.33 8.33 17 7.5 17ZM11 10H6V6H11V10ZM13 10V6H18V10H13ZM16.5 17C15.67 17 15 16.33 15 15.5C15 14.67 15.67 14 16.5 14C17.33 14 18 14.67 18 15.5C18 16.33 17.33 17 16.5 17Z" />
                </g>
                <defs>
                  <clipPath id="clip0_31_1909">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>`
        },
        {
          title: '禮賓車服務',
          descript: '承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567',
          icon: `<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                 <path d="M16 6L19 10H21C22.11 10 23 10.89 23 12V15H21C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18C17.2044 18 16.4413 17.6839 15.8787 17.1213C15.3161 16.5587 15 15.7956 15 15H9C9 15.7956 8.68393 16.5587 8.12132 17.1213C7.55871 17.6839 6.79565 18 6 18C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15H1V12C1 10.89 1.89 10 3 10L6 6H16ZM10.5 7.5H6.75L4.86 10H10.5V7.5ZM12 7.5V10H17.14L15.25 7.5H12ZM6 13.5C5.60218 13.5 5.22064 13.658 4.93934 13.9393C4.65804 14.2206 4.5 14.6022 4.5 15C4.5 15.3978 4.65804 15.7794 4.93934 16.0607C5.22064 16.342 5.60218 16.5 6 16.5C6.39782 16.5 6.77936 16.342 7.06066 16.0607C7.34196 15.7794 7.5 15.3978 7.5 15C7.5 14.6022 7.34196 14.2206 7.06066 13.9393C6.77936 13.658 6.39782 13.5 6 13.5ZM18 13.5C17.6022 13.5 17.2206 13.658 16.9393 13.9393C16.658 14.2206 16.5 14.6022 16.5 15C16.5 15.3978 16.658 15.7794 16.9393 16.0607C17.2206 16.342 17.6022 16.5 18 16.5C18.3978 16.5 18.7794 16.342 19.0607 16.0607C19.342 15.7794 19.5 15.3978 19.5 15C19.5 14.6022 19.342 14.2206 19.0607 13.9393C18.7794 13.658 18.3978 13.5 18 13.5Z" />
               </svg>`
        },
      ]
    }
  }
})