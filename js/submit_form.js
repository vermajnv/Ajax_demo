 document.querySelector("#submitButton").addEventListener('click', submitForm);
 document.querySelector("#file").addEventListener('change', findImageUrl);
 function submitForm() {
     console.log('submit form is called');
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
        console.log(xhr.response);
        displayMsg(xhr);
    });
    const formElement = document.querySelector("#form");
    const formData = new FormData(formElement);
    xhr.open("POST", "./submitForm.php");
    xhr.responseType = 'text';
    xhr.send(formData);
 }

 function findImageUrl() {
    const fileElement = document.querySelector("#file");
    selectedFile = fileElement.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedFile);
    fileReader.addEventListener('load', (event) =>{
        displayImage(fileReader.result);
    });
 }
 
 function displayImage(url) {
    let imgPlaceholder = document.querySelector("#imgPlaceholder");
    imgPlaceholder.src = url;
 }

 function displayMsg(xhr) {
     let msgPnl = document.querySelector("#messagePannel");
     msgPnl.classList.remove("hide");    
    if(xhr.status === 200) {
        console.log('Data is submitted successfully');
        msgPnl.textContent = "Data is submitted successfully";
        msgPnl.classList.add("success");
    }

    else {
        console.log('some error occured');
        msgPnl.textContent = "some error occured";
        msgPnl.classList.add("error");
    }
 }