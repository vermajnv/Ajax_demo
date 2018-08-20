export function count() {
	var count = 1;
	var timing = document.querySelector(".Timing");
    setInterval(() => {
    	// console.log(count);
        timing.textContent = count;
        count = count+1;
    }, 1000);
}

count();