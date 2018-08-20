<?php 
    $branchCode = $_POST["branchCode"];
    // echo "hoiiii";
    // $branchCode = 100;
    require("./students.php");
    $filteredStudents = ($branchCode != "" || $branchCode != "") ? $students[$branchCode] : array();
    echo json_encode($filteredStudents);
?>