<?php 
    // echo "Submit dorm";
    $name = $_POST['name'];
    $address = $_POST['address'];
    $fileDetailArr = $_FILES['file'];
    $fileName = $fileDetailArr['name'];
    $fileSize = $fileDetailArr['size'];
    $fileTempPath = $fileDetailArr['tmp_name'];
    $moveStatus = move_uploaded_file($fileTempPath, "uploads/" . $fileName);
    echo $moveStatus;
    echo "name : " . $name . " " ."address :" . " " .$address;
    echo "File Name :" . $fileName . "File Size :" . $fileSize . "File Temp Path" . $fileTempPath;  
?>