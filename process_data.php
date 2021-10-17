<?php

if(isset($_POST["usertext"]))
{
	//connect to db
	$servername = "localhost";
	$username = "root";
	$password = "";
	$database = "aidata";

	$connect = new PDO("mysql:host=$servername;dbname=$database", $username, $password);

	$usertext = $_POST["usertext"];

	$usertext_error = '';


	if($usertext_error == '')
	{
		//put insert data code here 

		$data = array(
			':usertext'			=>	$usertext
		);

		$query = "
		INSERT INTO userdata 
		(usertext) 
		VALUES (:usertext)
		";

		$statement = $connect->prepare($query);

		$statement->execute($data);

	}

	$output = array(
		'usertext_error'	=>	$usertext_error
	);

	echo json_encode($output);
	
}

?>