// Задача 1
// const regExp = /^\d+$/;
// const containsOnlyDigits = (str) => {
//     return regExp.test(str);
// }
// console.log(containsOnlyDigits("12345")); 
// console.log(containsOnlyDigits("12a45"));   


//  Задача 2
// setInterval(() => {
//     console.log("Прошла секунда");
//     console.log("Прошла секунда");
//     console.log("Прошла секунда");
// }, 1000);


// Задача 3
// const count = () => {
//     let i = 1;
//     const interval = setInterval(() => {
//         console.log(i);
//         i++;
//     if (i > 10) {
//         clearInterval(interval)
//         }
//     }, 1000);
// }
// count()



// Задача 4
// const box = document.getElementById("box");

// box.addEventListener("click", () => {
//     box.classList.toggle("active");
// });


// Задача 5

const xhr = new XMLHttpRequest();
    xhr.open('GET', '/data.json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send()
    xhr.onload = () => {
        console.log(xhr.response);
}