<?php

$from="noreply@neighborlys.com";
$email="lfagel84@gmail.com";
$subject=$_POST['subject'];
$message=$_POST['message'];

mail ( 'From: '.$from, $email, "New Customer Request".$subject, $message );
print "Your message sent to ".$email;

?>