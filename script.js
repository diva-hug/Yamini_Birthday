
const app = document.getElementById("app");

const memories = [
    {
        image: "assets/baby/baby1.jpg",
        title: "ఒక అందమైన ఆరంభం ❤️",
        caption: "నీ చిన్ననాటి మధుర జ్ఞాపకం"
    },
    {
        image: "assets/baby/baby2.jpg",
        title: "నా చిన్నారి పాప ❤️",
        caption: "నీ నవ్వే మా ఆనందం"
    },
    {
        image: "assets/grandpa/grandpa1.jpg",
        title: "తాతయ్యతో మధుర క్షణాలు ❤️",
        caption: "ఎప్పటికీ గుర్తుండిపోయే జ్ఞాపకం"
    },
    {
        image: "assets/amma_mini/amma_mini1.jpg",
        title: "అమ్మా నేను ❤️",
        caption: "మన ఇద్దరి అందమైన ప్రపంచం"
    },
    {
        image: "assets/amma_mini/amma_mini2.jpg",
        title: "నా బంగారు తల్లి ❤️",
        caption: "నీతో గడిపిన ప్రతి క్షణం ప్రత్యేకమే"
    },
    {
        image: "assets/present/present1.jpg",
        title: "మరచిపోలేని రోజులు ❤️",
        caption: "మన జీవితంలోని అందమైన క్షణాలు"
    },
    {
        image: "assets/present/present2.jpg",
        title: "ఎప్పటికీ ఇలాగే నవ్వుతూ ఉండు ❤️",
        caption: "నీ సంతోషమే నా సంతోషం"
    },
    {
        image: "assets/present/present3.jpg",
        title: "నా ప్రపంచం నువ్వే ❤️",
        caption: "ఇంకెన్నో జ్ఞాపకాలు మన కోసం"
    }
];

let currentMemory = 0;

function showWelcome() {
    app.innerHTML = `
        <div class="welcome-card">
            <div class="heart">❤️</div>
            <h1>నా బంగారు తల్లి Mini ❤️</h1>
            <p>నీ కోసం ఒక చిన్న ప్రేమతో నిండిన సర్‌ప్రైజ్...</p>
            <button onclick="showGift()">Let's Start ❤️</button>
        </div>
    `;
}

function showGift() {
    app.innerHTML = `
        <div class="gift-card">
            <div class="heart">🎁</div>
            <h1>A Gift For You ❤️</h1>
            <p>నీ కోసం అమ్మ దాచిన ఒక చిన్న బహుమతి!</p>
            <button onclick="showSurprise()">Open Gift 🎁</button>
        </div>
    `;
}

function showSurprise() {
    app.innerHTML = `
        <div class="surprise-card">
            <div class="heart">🥰</div>
            <h1>Surprise! ❤️</h1>
            <p>You are loved more than you know!</p>
            <p>మన అందమైన జ్ఞాపకాలను చూద్దామా?</p>
            <button onclick="showMemory(0)">Start Memories ❤️</button>
        </div>
    `;
}

function showMemory(index) {
    currentMemory = index;
    const memory = memories[currentMemory];

    app.innerHTML = `
        <div class="memory-card">
            <h1>Our Beautiful Memories ❤️</h1>
            <div class="memory-count">
                Memory ${currentMemory + 1} of ${memories.length}
            </div>

            <div class="memory-frame">
                <img src="${memory.image}"
                     alt="${memory.title}"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div class="photo-placeholder" style="display:none;">
                    <p>ఈ ఫోటో కనిపించడం లేదు ❤️</p>
                    <p>${memory.image}</p>
                </div>
            </div>

            <h2 class="memory-caption">${memory.title}</h2>
            <p>${memory.caption}</p>

            <div class="navigation-buttons">
                <button onclick="previousMemory()"
                    ${currentMemory === 0 ? "disabled" : ""}>
                    ← Previous
                </button>

                <button onclick="nextMemory()">
                    ${currentMemory === memories.length - 1
                        ? "Finish ❤️"
                        : "Next →"}
                </button>
            </div>
        </div>
    `;
}

function previousMemory() {
    if (currentMemory > 0) {
        showMemory(currentMemory - 1);
    }
}

function nextMemory() {
    if (currentMemory < memories.length - 1) {
        showMemory(currentMemory + 1);
    } else {
        showBirthdayWish();
    }
}

function showBirthdayWish() {
    app.innerHTML = `
        <div class="final-card">
            <div class="heart">🎂❤️</div>
            <h1>Happy Birthday, Mini! ❤️</h1>
            <p>నీ జీవితం ఎప్పుడూ ఆనందం, ప్రేమ, విజయాలతో నిండిపోవాలి.</p>
            <p>ఎప్పుడూ ఇలాగే నవ్వుతూ సంతోషంగా ఉండు నా బంగారు తల్లి!</p>
            <button onclick="showLetter()">One Last Surprise ❤️</button>
        </div>
    `;
}

function showLetter() {
    app.innerHTML = `
        <div class="final-card">
            <div class="heart">💌</div>
            <h1>నా బంగారు తల్లి Mini ❤️</h1>

            <div class="final-letter">
                <p>
                    నువ్వు నా జీవితంలోకి వచ్చిన రోజు నుంచి
                    నా ప్రపంచం మరింత అందంగా మారింది.

                    నీ ప్రతి నవ్వు నాకు ఆనందం.
                    నీ ప్రతి విజయం నాకు గర్వం.

                    జీవితంలో ఎన్ని కష్టాలు వచ్చినా
                    ధైర్యంగా ముందుకు సాగాలి.

                    నువ్వు ఎప్పుడూ సంతోషంగా ఉండాలి.
                    నీ కలలన్నీ నిజం కావాలి.

                    నువ్వు నాకు ఎప్పటికీ నా చిన్న పాపవే.
                    చాలా చాలా ప్రేమిస్తున్నాను తల్లీ! ❤️
                </p>
            </div>

            <p class="signature">ప్రేమతో, నీ అమ్మ ❤️</p>
        </div>
    `;
}

showWelcome();
