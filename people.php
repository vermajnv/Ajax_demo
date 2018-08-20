<?php

$student1 = new stdClass();
$student1->name = "Ayush";
$student1->Branch = "IT";
$student1->DOB = "20/12/2012";

$student2 = new stdClass();
$student2->name = "Ayush";
$student2->Branch = "IT";
$student2->DOB = "20/12/2012";

$student3 = new stdClass();
$student3->name = "Ayush";
$student3->Branch = "IT";
$student3->DOB = "20/12/2012";

$students = array();

array_push($students, $student1);
array_push($students, $student2);
array_push($students, $student3);

$dataObj = array("students" => $students);
echo json_encode($dataObj);