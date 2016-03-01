<?php

if(isset($_POST['message'])){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
    
	
	$to      = 'info@milspousecoders.org';
	$subject = 'Site Contact Form';

	$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	if($status == TRUE){	
		$res['sendstatus'] = 'done';
	
		//Edit your message here
		$res['message'] = 'Thanks for the email. We will get back to you as soon as we can. ';
    }
	else{
		$res['message'] = 'Oops, something went wrong.  Please email toanh.t.tran@gmail.com';
	}
	
	
	echo json_encode($res);
}

?>