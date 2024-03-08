<?php
require 'vendor/autoload.php'; 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


$mail = new PHPMailer(true);

try {
    // Налаштування сервера
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'annorapermanent@gmail.com'; 
    $mail->Password = 'qnhzuhqzilqpamlc'; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    
    // Налаштування відправника та отримувача
    $mail->setFrom('annorapermanent@gmail.com', 'ANNORA-SITE-NOTIFIER'); 
    $mail->addAddress('annorapermanent@gmail.com'); 
    
    // Ваші дані для листа
    $mail->isHTML(true);
    $mail->Subject = "SITE NOTIFIER";
    $mail->Body = "<h1>$name - $phone</h1>
                       <p>
                        <font size = '3'>
                            Способ связи: <i>viber - $checkViber</i>, <i>telegram - $checkTel</i>, <i>whatsup - $checkWhats</i>, <i>inst - $checkInst</i>
                        </font>
                       </p>
                       <p>
                           <font size = '3'>
                               Instagram: <i>$inst</i>
                            </font>
                       </p>
                       <p> <font size = '3'>Comments: <i>$comments</i></font> </p>";
    
    $mail->send();
        echo 'Email has been sent successfully.';
    } catch (Exception $e) {
        echo 'Email could not be sent. Error: ', $mail->ErrorInfo;
    }


?>
