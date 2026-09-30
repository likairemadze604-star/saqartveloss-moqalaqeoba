const pages = [
    "home",
    "citizenship",
    "rights",
    "getting",
    "dual",
    "quiz"
];

let currentPage = 0;

let currentLanguage = "ka";


/* =========================
   PAGE NAVIGATION
========================= */

function showCurrentPage() {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document
        .getElementById(pages[currentPage])
        .classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (pages[currentPage] === "quiz") {
        loadQuiz();
    }
}


function nextPage() {

    if (currentPage < pages.length - 1) {

        currentPage++;

        showCurrentPage();
    }
}


function previousPage() {

    if (currentPage > 0) {

        currentPage--;

        showCurrentPage();
    }
}


/* =========================
   LANGUAGE
========================= */

function changeLanguage(language) {

    currentLanguage = language;

    document.querySelectorAll("[data-ka]").forEach(element => {

        if (language === "ka") {

            element.textContent = element.getAttribute("data-ka");

        } else {

            element.textContent = element.getAttribute("data-en");

        }

    });

    if (pages[currentPage] === "quiz") {
        loadQuiz();
    }
}


/* =========================
   QUESTIONS
========================= */

const questions = [

    {
        ka: "რას ნიშნავს მოქალაქეობა?",
        en: "What does citizenship mean?",
        answersKa: [
            "კავშირი ადამიანს და სახელმწიფოს შორის",
            "მხოლოდ საცხოვრებელი ადგილი",
            "სამუშაო ადგილი",
            "სკოლაში სწავლა"
        ],
        answersEn: [
            "A connection between a person and a state",
            "Only a place of residence",
            "A workplace",
            "Studying at school"
        ],
        correct: 0
    },

    {
        ka: "რომელი ქვეყნის მოქალაქეობა განიხილება ამ პროექტში?",
        en: "Citizenship of which country is discussed in this project?",
        answersKa: [
            "საქართველოს",
            "საფრანგეთის",
            "იაპონიის",
            "კანადის"
        ],
        answersEn: [
            "Georgia",
            "France",
            "Japan",
            "Canada"
        ],
        correct: 0
    },

    {
        ka: "ვისი უფლებები არის დაცული კანონით?",
        en: "Whose rights are protected by law?",
        answersKa: [
            "ადამიანების",
            "მხოლოდ ტურისტების",
            "მხოლოდ მოსწავლეების",
            "არავის"
        ],
        answersEn: [
            "People",
            "Only tourists",
            "Only students",
            "Nobody"
        ],
        correct: 0
    },

    {
        ka: "რა არის მოქალაქის ერთ-ერთი მოვალეობა?",
        en: "What is one duty of a citizen?",
        answersKa: [
            "კანონის პატივისცემა",
            "კანონის დარღვევა",
            "სხვა ადამიანების უფლებების შეზღუდვა",
            "სახელმწიფოსთვის ზიანის მიყენება"
        ],
        answersEn: [
            "Respecting the law",
            "Breaking the law",
            "Limiting other people's rights",
            "Damaging the state"
        ],
        correct: 0
    },

    {
        ka: "რას ნიშნავს ორმაგი მოქალაქეობა?",
        en: "What does dual citizenship mean?",
        answersKa: [
            "ორი სახელმწიფოს მოქალაქეობის ქონა",
            "ორ სკოლაში სწავლა",
            "ორ სახლში ცხოვრება",
            "ორი სამსახურის ქონა"
        ],
        answersEn: [
            "Having citizenship of two states",
            "Studying at two schools",
            "Living in two houses",
            "Having two jobs"
        ],
        correct: 0
    },

    {
        ka: "რა განსაზღვრავს მოქალაქის უფლებებსა და მოვალეობებს?",
        en: "What defines the rights and duties of a citizen?",
        answersKa: [
            "კანონმდებლობა",
            "მხოლოდ მეგობრები",
            "სოციალური ქსელები",
            "სკოლის წესები"
        ],
        answersEn: [
            "Legislation",
            "Only friends",
            "Social networks",
            "School rules"
        ],
        correct: 0
    },

    {
        ka: "რატომ არის მნიშვნელოვანი მოქალაქეობრივი განათლება?",
        en: "Why is civic education important?",
        answersKa: [
            "უფლებებისა და მოვალეობების გასაგებად",
            "მხოლოდ გართობისთვის",
            "მხოლოდ სპორტისთვის",
            "მხოლოდ მოგზაურობისთვის"
        ],
        answersEn: [
            "To understand rights and duties",
            "Only for entertainment",
            "Only for sports",
            "Only for travel"
        ],
        correct: 0
    },

    {
        ka: "რა უნდა გააკეთოს მოქალაქემ სხვა ადამიანების უფლებების მიმართ?",
        en: "What should a citizen do regarding other people's rights?",
        answersKa: [
            "პატივი სცეს მათ",
            "დაარღვიოს ისინი",
            "უგულებელყოს ისინი",
            "შეზღუდოს ისინი"
        ],
        answersEn: [
            "Respect them",
            "Break them",
            "Ignore them",
            "Limit them"
        ],
        correct: 0
    },

    {
        ka: "რა არის სახელმწიფო?",
        en: "What is a state?",
        answersKa: [
            "ორგანიზებული პოლიტიკური და სამართლებრივი სისტემა",
            "მხოლოდ ერთი შენობა",
            "მხოლოდ ქალაქი",
            "მხოლოდ სკოლა"
        ],
        answersEn: [
            "An organized political and legal system",
            "Only one building",
            "Only a city",
            "Only a school"
        ],
        correct: 0
    },

    {
        ka: "მოქალაქეობა რას ქმნის ადამიანსა და სახელმწიფოს შორის?",
        en: "What does citizenship create between a person and a state?",
        answersKa: [
            "სამართლებრივ კავშირს",
            "სპორტულ კავშირს",
            "მეგობრობას",
            "სასწავლო კავშირს"
        ],
        answersEn: [
            "A legal connection",
            "A sports connection",
            "Friendship",
            "An educational connection"
        ],
        correct: 0
    },

    {
        ka: "რა არის ადამიანის ერთ-ერთი ძირითადი უფლება?",
        en: "What is one fundamental human right?",
        answersKa: [
            "ღირსების დაცვა",
            "კანონის დარღვევა",
            "სხვა ადამიანის დაზიანება",
            "სხვისი ნივთის წაღება"
        ],
        answersEn: [
            "Protection of dignity",
            "Breaking the law",
            "Hurting another person",
            "Taking another person's property"
        ],
        correct: 0
    },

    {
        ka: "რა ეხმარება ადამიანს საკუთარი უფლებების გაცნობიერებაში?",
        en: "What helps a person understand their rights?",
        answersKa: [
            "განათლება",
            "დეზინფორმაცია",
            "კანონის უგულებელყოფა",
            "დაუდევრობა"
        ],
        answersEn: [
            "Education",
            "Disinformation",
            "Ignoring the law",
            "Negligence"
        ],
        correct: 0
    },

    {
        ka: "როგორ მიიღება მოქალაქეობასთან დაკავშირებული გადაწყვეტილებები?",
        en: "How are citizenship-related decisions made?",
        answersKa: [
            "კანონით დადგენილი წესების შესაბამისად",
            "შემთხვევით",
            "მხოლოდ მეგობრების გადაწყვეტილებით",
            "სოციალური ქსელის გამოკითხვით"
        ],
        answersEn: [
            "According to procedures established by law",
            "Randomly",
            "Only by friends",
            "Through a social media poll"
        ],
        correct: 0
    },

    {
        ka: "რა შეიძლება იყოს საჭირო მოქალაქეობის პროცედურის დროს?",
        en: "What may be required during a citizenship procedure?",
        answersKa: [
            "განაცხადი და შესაბამისი დოკუმენტები",
            "მხოლოდ ფოტო",
            "მხოლოდ ტელეფონი",
            "მხოლოდ წიგნი"
        ],
        answersEn: [
            "An application and relevant documents",
            "Only a photo",
            "Only a phone",
            "Only a book"
        ],
        correct: 0
    },

    {
        ka: "რას უნდა სცემდეს მოქალაქე პატივს?",
        en: "What should a citizen respect?",
        answersKa: [
            "კანონსა და სხვა ადამიანების უფლებებს",
            "მხოლოდ საკუთარ აზრს",
            "მხოლოდ სოციალურ ქსელებს",
            "არაფერს"
        ],
        answersEn: [
            "The law and other people's rights",
            "Only their own opinion",
            "Only social networks",
            "Nothing"
        ],
        correct: 0
    },

    {
        ka: "რა არის პასუხისმგებლიანი მოქალაქეობა?",
        en: "What is responsible citizenship?",
        answersKa: [
            "უფლებებისა და მოვალეობების გაცნობიერება",
            "კანონის დარღვევა",
            "საზოგადოების პრობლემების უგულებელყოფა",
            "სხვა ადამიანების უფლებების დარღვევა"
        ],
        answersEn: [
            "Understanding rights and duties",
            "Breaking the law",
            "Ignoring social problems",
            "Violating other people's rights"
        ],
        correct: 0
    },

    {
        ka: "ორმაგი მოქალაქეობის საკითხები რით რეგულირდება?",
        en: "What regulates matters of dual citizenship?",
        answersKa: [
            "კანონმდებლობით",
            "მხოლოდ მეგობრების აზრით",
            "სოციალური ქსელებით",
            "შემთხვევით"
        ],
        answersEn: [
            "Legislation",
            "Only friends' opinions",
            "Social networks",
            "Randomly"
        ],
        correct: 0
    },

    {
        ka: "რა აკავშირებს მოქალაქეს სახელმწიფოსთან?",
        en: "What connects a citizen with the state?",
        answersKa: [
            "სამართლებრივი კავშირი",
            "მხოლოდ საცხოვრებელი ადგილი",
            "მხოლოდ სკოლა",
            "მხოლოდ სამსახური"
        ],
        answersEn: [
            "A legal connection",
            "Only a place of residence",
            "Only school",
            "Only work"
        ],
        correct: 0
    },

    {
        ka: "რატომ უნდა იცოდეს მოქალაქემ საკუთარი მოვალეობები?",
        en: "Why should a citizen know their duties?",
        answersKa: [
            "პასუხისმგებლიანი მოქალაქეობისათვის",
            "მხოლოდ თამაშისთვის",
            "მხოლოდ მოგზაურობისთვის",
            "ამის საჭიროება არ არის"
        ],
        answersEn: [
            "For responsible citizenship",
            "Only for games",
            "Only for travel",
            "There is no need"
        ],
        correct: 0
    },

    {
        ka: "რა არის ამ პროექტის მთავარი თემა?",
        en: "What is the main topic of this project?",
        answersKa: [
            "საქართველოს მოქალაქეობა",
            "სპორტი",
            "მუსიკა",
            "კულინარია"
        ],
        answersEn: [
            "Georgian citizenship",
            "Sports",
            "Music",
            "Cooking"
        ],
        correct: 0
    }

];


/* =========================
   LOAD QUIZ
========================= */

function loadQuiz() {

    const container =
        document.getElementById("quiz-container");

    if (!container) return;

    container.innerHTML = "";

    questions.forEach((question, index) => {

        const questionBox =
            document.createElement("div");

        questionBox.className =
            "quiz-question";

        const title =
            document.createElement("h3");

        title.textContent =
            `${index + 1}. ${
                currentLanguage === "ka"
                ? question.ka
                : question.en
            }`;

        questionBox.appendChild(title);


        const answers =
            currentLanguage === "ka"
            ? question.answersKa
            : question.answersEn;


        answers.forEach((answer, answerIndex) => {

            const label =
                document.createElement("label");

            label.className = "answer";

            label.innerHTML = `
                <input
                    type="radio"
                    name="question${index}"
                    value="${answerIndex}">
                ${answer}
            `;

            questionBox.appendChild(label);

        });


        container.appendChild(questionBox);

    });

}


/* =========================
   FINISH QUIZ
========================= */

function finishQuiz() {

    let score = 0;

    let mistakes = [];


    questions.forEach((question, index) => {

        const selected =
            document.querySelector(
                `input[name="question${index}"]:checked`
            );


        if (selected) {

            const answer =
                Number(selected.value);

            if (answer === question.correct) {

                score++;

            } else {

                mistakes.push({
                    index: index,
                    selected: answer,
                    correct: question.correct
                });

            }

        } else {

            mistakes.push({
                index: index,
                selected: null,
                correct: question.correct
            });

        }

    });


    const result =
        document.getElementById("result");


    let html = `
        <div class="result-box">

            <h2>
                ${
                    currentLanguage === "ka"
                    ? "შენი შედეგი"
                    : "Your Result"
                }
            </h2>

            <p>
                ${
                    currentLanguage === "ka"
                    ? `სწორი პასუხები: ${score} / ${questions.length}`
                    : `Correct answers: ${score} / ${questions.length}`
                }
            </p>
    `;


    if (mistakes.length === 0) {

        html += `
            <h2 style="margin-top:25px;">
                🎉 ${
                    currentLanguage === "ka"
                    ? "გილოცავ! ყველა პასუხი სწორია!"
                    : "Congratulations! All answers are correct!"
                }
            </h2>
        `;

    } else {

        html += `
            <h3 style="margin-top:30px; color:#f5c640;">
                ${
                    currentLanguage === "ka"
                    ? "შეცდომები:"
                    : "Mistakes:"
                }
            </h3>
        `;


        mistakes.forEach(mistake => {

            const question =
                questions[mistake.index];

            const answers =
                currentLanguage === "ka"
                ? question.answersKa
                : question.answersEn;


            html += `
                <div class="mistake">

                    <p>
                        <strong>
                            ${mistake.index + 1}.
                            ${
                                currentLanguage === "ka"
                                ? question.ka
                                : question.en
                            }
                        </strong>
                    </p>

                    <p>
                        ${
                            currentLanguage === "ka"
                            ? "შენი პასუხი:"
                            : "Your answer:"
                        }

                        ${
                            mistake.selected === null
                            ? (
                                currentLanguage === "ka"
                                ? "პასუხი არ აგირჩევია"
                                : "No answer selected"
                              )
                            : answers[mistake.selected]
                        }
                    </p>

                    <p>
                        ${
                            currentLanguage === "ka"
                            ? "სწორი პასუხი:"
                            : "Correct answer:"
                        }

                        ${answers[question.correct]}
                    </p>

                </div>
            `;

        });

    }


    html += `</div>`;

    result.innerHTML = html;

    result.scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================
   START
========================= */

showCurrentPage();
