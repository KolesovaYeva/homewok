// First task 
const homework = confirm('Привіт, перевір домашку, будь ласка)');

if (homework){
    alert('Дякую, ось домашечка)');
    //Minimum
    alert('Зараз будемо виконувати теоретичний мінімум')
    // task 1
        alert('Можливі два способи використання JS: посиланнячком (як зроблено тут) та просто у html у <script></script> писати код')
    // task 2
        alert('Вибачай, другий пункт доведеться вже дивитися у самому коді, а далі третій')
        // right variables 
        const firstName = "Yeva";
        const lastName = "Kolesova";
        const userAge = 16;
        const isUserHaveHigherEducation = false;
        // wrong variables
        /*const 1variant = "couldn`t use number before name" ;
        const /variant = "couldn`t use slash or backslash before name";
        const &variant = "couldn`t use & before name";
        const *variant = "couldn`t use * before name";
        const $variant = "couldn`t use $ before name";*/
    //task 3 
      alert('Для коментування коду є два варіанти: // - для коментування одного рядка та /*something*/ - для двох більше рядків')

    //task 4 
    alert('Четверте питаннячко також дивись у коді, а далі приступимо до наступного блоку завдань')
    const camelCase = "writingLikeThat";
    const PascalCase = "WritingLikeThat";
    const snake_case = "writing_like_that";
    const SCREAMING_SNAKE_CASE = "WRITING_LIKE_THAT ";
    // const kebab-case = "writing-Like-That";
    // const TRAIN-CASE = "WRITING-LIKE-THAT";
    // const Train-Case = "Writing-Like_That";
    const flatcase = "writinglikethat";
    //Norm
    //Username

    const userName = prompt('Як тебе звати?');
    alert("Привіт, " + userName);

    // Data of birth

    const nextStep = alert('Перейдемо до наступного пункту');
    const dateOfBirth = prompt('В який рік ти народився?');
    const currentYear = 2022;
    alert(`Хм, тобі вже ${currentYear - dateOfBirth} `+ 'років •>•');

    //Perimeter Calculations
    const littleBitOfMath = alert('Додамо трошечки математики');
    const sideLength = prompt('Зараз будемо рахувати периметр, тому запропонуй довжину сторони квадрату, будь ласочка)' );
    const convertedSideLength = parseFloat(sideLength);
    if (convertedSideLength > 0){
        alert(`О, дякую, тепер ми маємо периметр квадрату ${convertedSideLength *4}
    •>• Не знаєм навіщо, але він є, просто є - і все)` );
    } 
    alert('Ти молодець, ще трохи математичних мук і ми закінчимо');
    

    //Maximum
    //Area of circle
    const initiaCirleRadius = prompt('Тепер введи радіус кола, який ти хочеш, ось сюди');
    const convertedCirleRadius = parseFloat(initiaCirleRadius);
    if (convertedCirleRadius > 0){
        alert(`Хехе, ми дізнались площу кола, що дорівнює ${convertedCirleRadius * Math.PI} см`)
    } 

    //Remembering4class
    alert('А тепер трохи задачок з молодшої школи)');
    const length = prompt('Запропонуй відстань між містами, будь ласка');
    const convetedLength = parseFloat(length);
    if (convertedSideLength > 0){
        const timeOfWalking = prompt('Дякую, а тепер треба кількість годин для подолання цього шляху');
        const convertedTimeOfWalking = parseFloat(timeOfWalking);
            if (convertedCirleRadius > 0){
                alert(`Дякую, щоб ми дійшли за ${convertedTimeOfWalking} год, треба йти зі швидкістю ${convetedLength / convertedTimeOfWalking} км/год`)
            } 
    } 
    
    //Currency converter

    alert('Ну і наостанок, порахуємо грошики)')
    alert('Зараз будете спрощений конфертор валют, хоч і спрощений, але все ж конвертор)')
    const dollarsToEuro = 1.1; 
    const initialdollarsToEuro = prompt('Тут ти можеш конвертувати доллари у євро, введи кількість доларів, про яку ти хочеш дізнатися');
    const conveteddollarsToEuro = parseFloat(initialdollarsToEuro);
    if (conveteddollarsToEuro > 0){
        alert(`То буде дорівнювати ${conveteddollarsToEuro * dollarsToEuro} €`)
    } 
    const euroToDollar = 0.98; 
    const initialeuroToDollar = prompt('А зараз можеш навпаки евро у доллари :)');
    const convetedeuroToDollar = parseFloat(initialeuroToDollar);
    if (convetedeuroToDollar > 0){
        alert(`То буде дорівнювати ${convetedeuroToDollar * euroToDollar} $`)
    } 
    const finalAlert = confirm('Дякую за увагу, можу запропонувати, тобі декілька серій Ріка та Морті')
    if(finalAlert){
        window.location.replace('https://rick-i-morty.online/')
    } else{
        alert('Не хочеш? Добре, тоді дякую за перевірку домашки)')
    }
    } else {
    const repeat = alert('хм, не хочеш дивитися домашку, тоді тримай серіал •>•')
         window.location.replace('https://kinogo.zone/fantasy/8938-ochen-strannye-dela-4-sezon-hdtv-hdms3.html')
   }