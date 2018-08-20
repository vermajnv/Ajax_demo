"use strict";
import {AjaxProgress} from './AjaxProgress.js';
import {count} from './timing.js';
$qs("#fetchJSON").addEventListener('click', fetchJson);
$qs("#fetchHtml").addEventListener('click', fetchFragment);
$qs("#fetchImage").addEventListener('click', fetchImage);
$qs("#branchDropdown").addEventListener('change', fetchStudents);
const loaderGif = $qs(".LoaderGif");
function fetchJson(event) {
	let promise = fetch("./people.php");
	console.log("promise", promise);
	promise.then((promise) => {
		return promise.json();
	}).then((response) => {
		let students = response.students;
		$qs(".jsonContent").innerHTML = render(students);
	});
}

function render(students) {
	return `<ul class="dynamicUl">
		${students.map((student) => {
			return `<li>${student.name}</li>
					<li>${student.Branch}</li>
					<li>${student.DOB}</li>
			`;
		}).join("")}
	</ul>`;
}

function fetchFragment() {
	let xhr = new AjaxProgress(event.target, loaderGif);
	xhr.addEventListener('load', function () {
		$qs(".htmlContent").innerHTML = xhr.response;
		});

	xhr.open('GET', './fragment.html');
	xhr.responseType = "text";
	xhr.send();
	// let promise = fetch("./fragment.html");
	// promise.then((promise) => {
	// 	console.log(promise);
	// 	return promise.text();
	// }).then((response) => {
	// 	$qs(".htmlContent").innerHTML = response;
	// 	fetchHTMLBtn.disabled = false;
	// 	loaderGif.classList.add("hidden");
	// });
}

function fetchImage(event) {
	let fetchImageBtn = $qs("#fetchImage");
	let loaderGif = $qs(".LoaderGif");
	fetchImageBtn.disabled = true;
	loaderGif.classList.remove("hidden");
	let promise = fetch("./data/blown_dandelion-1920x1080.jpg");
	promise.then((promise) => {
		return promise.blob();
	}).then((response) => {
		console.log(response);
		let url = URL.createObjectURL(response);
		console.log(url);
		$qs("#imgPlaceholder").src = url;
		fetchImageBtn.disabled = false;
		loaderGif.classList.add("hidden");
	});
}

function fetchStudents(changeEvent) {
	const selectedValue = changeEvent.target.value;
	console.log(selectedValue);
	let xhr = new XMLHttpRequest();
	xhr.addEventListener('load', function () {
		const response = xhr.response;
		let studentDropdown = $qs("#studentDropdown");
		studentDropdown.innerHTML = response.map((student) => {
			return `<option value="${student.name}">${student.name}</option>`;
		}).join("");
	});
	const formData = new FormData();
	formData.set("branchCode", selectedValue);
	console.log(formData);
	xhr.open("POST", "./branchData.php");
	xhr.responseType = "json";
	xhr.send(formData);

	// data = new FormData();
	// data.set("branchCode", selectedValue);
	// let response = fetch("./branchData.php", 
	// {
	// 	method: "POST", // *GET, POST, PUT, DELETE, etc.
	//     mode: "cors", // no-cors, cors, *same-origin
	//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
	//     credentials: "same-origin", // include, same-origin, *omit
	//     headers: {
	//         "Content-Type": "application/json; charset=utf-8",
	//         // "Content-Type": "application/x-www-form-urlencoded",
	//     },
	//     redirect: "follow", // manual, *follow, error
	//     referrer: "no-referrer", // no-referrer, *client
	//     body: JSON.stringify(data)
	// });

}

function $qs(element) {
	return document.querySelector(element);
}

// PROGRESS UPDATOR
// function progressMonitor(event) {
// 	// console.log("progress monitor is fired");
// 	console.log("loded data :", event.loaded);
// 	console.log("Total data :", event.total);
// 	let percentComplete = Number.parseInt((event.loaded / event.total) * 100);
// 	console.log(percentComplete);
// }