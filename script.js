// set initial aka default count
let count = 0;

// select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles= e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 10) {
            value.style.color = "purple"
        }
        if (count < 0){
            value.style.color = "brown"
        }
        if(count === 0) {
            value.style.color = "blue"
        }
        value.textContent = count;
    });

});

