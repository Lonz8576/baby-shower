<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['name'])
        && !empty($_POST['email'])
        && !empty($_POST['message'])
    ){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $attend = $_POST["attend"];


        $to = "customovement@gmail.com";
        $subject = "Guest Book Info";
        $body = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$attend}";
        $headers = "From: {$email}";



            echo(<p> "Signed successfully!</p>");

    }
}
