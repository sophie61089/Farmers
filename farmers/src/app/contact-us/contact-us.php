<?php
if($_POST["submit"]) {
    $recipient="yourmailid@domain.com"; //Enter your mail address
    $subject="Contact from Website"; //Subject 
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $message=$_POST["comments"];
    $mailBody="Name: $sender\nEmail Address: $senderEmail\n\nMessage: $message";
    mail($recipient, $subject, $mailBody);
    sleep(1);
    header("Location:http://blog.antonyraphel.in/sample/"); // Set here redirect page or destination page
}
?>