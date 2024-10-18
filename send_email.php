<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $message = $_POST['message'];

    // Format the email body
    $subject = "New Message from gitpage";
    $body = "Name: " . $name . "\n\n" . "Message: " . $message;

    // Send the email
    $to = "qt.makati@gmail.com";
    $headers = "From: " . $name . "\r\n";

    if(mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Error sending email. Please try again.";
    }
}
?>
