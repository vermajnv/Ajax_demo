<?php 
    define("CS", 100);
    define("IT", 200);
    define("ME", 300);

    function createStudents($name, $branch) {
        $stu = new stdClass();
        $stu->name = $name;
        $stu->branch = $branch;
        return $stu;
    }

    $studentsOfCs = array(
        createStudents("Neeraj", CS), 
        createStudents("Pankaj", CS),
        createStudents("Omprakash", CS)
    );

    $studentsOfIt = array(
        createStudents("Suresh", IT), 
        createStudents("Rakesh", IT),
        createStudents("Sunil", IT)
    );

    $studentsOfMe = array(
        createStudents("Ayush", ME), 
        createStudents("Rishabh", ME),
        createStudents("Dinesh", ME)
    );

    $students = array(
        CS => $studentsOfCs,
        IT => $studentsOfIt,
        ME => $studentsOfMe
    );

    // print_r($students);
?>