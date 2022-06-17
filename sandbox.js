const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
let final = document.querySelector(".result");


form.addEventListener("submit", event =>{
    event.preventDefault();

    let score = 0;

    const userinput = [form.q1.value, form.q2.value, form.q3.value, form.q4.value ];

    userinput.forEach((answer, index) =>{
        if (answer == correctAnswers[index]){
            score = score + 25;
        }
        
    });

   //showing result
    scrollTo(0,0); // scroll to is from window object which is the mother of all objects, it taks in 2 parameters x and y co-ordinates
    final.querySelector("span").textContent = `${score}% `;
    final.classList.remove("d-none");
    let opCounter = 0;
    const timer = setInterval(() => { // set inter val takes two parameters 1, what its going to do and the interval in millliseconds
        final.querySelector("span").textContent = `${opCounter}% `;
        if (opCounter === score){
            clearInterval(timer)
        }

        else{
            opCounter++;
        }

    }, 10 );
});

