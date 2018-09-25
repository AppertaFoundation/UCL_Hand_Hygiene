
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$servername = "localhost";
$username = "UCLAdmin";
$password = "UjiR9wXkxLZv1A96";
$errors = array();
$conn = new mysqli($servername, $username, $password);
$db_selected = mysqli_select_db( $conn,'audits');

if(isset($_GET["audits"])){
	if($_GET["audits"] == -1){
    
		$result = mysqli_query($conn, "SELECT * FROM audits") ;	
		returnElements($result);

	    mysqli_free_result($result);
    }else{
   		$result = mysqli_query($conn, "SELECT * FROM audits WHERE id = " . $_GET["audits"]);	
		returnElements($result);

	    mysqli_free_result($result);
    }
}



else if(isset($_POST["audits"])){
	if($_POST["audits"] == 1){
	if(isset($_POST["ward_name"]) && isset($_POST["directorate"]) && isset($_POST["auditor_name"]) && isset($_POST["audit_date"]) && isset($_POST["BBE_ID"]) &&  isset($_POST["HH_ID"])){
    
	$date=date("Y-m-d",strtotime($_POST["audit_date"]));

    	$result = mysqli_query($conn,'INSERT INTO audits (id, ward_name, directorate,auditor_name, audit_date, BBE_ID, HH_ID)  VALUES (NULL,"'.$conn->real_escape_string($_POST['directorate']).'" , "'.$conn->real_escape_string($_POST['ward_name']).'", "'.$conn->real_escape_string($_POST['auditor_name']).'","'.$date.'",'.$conn->real_escape_string($_POST['BBE_ID']).','.$conn->real_escape_string($_POST['HH_ID']).')');
    $result = mysqli_query($conn, "SELECT * FROM audits where id = ".$conn->insert_id) ;
    returnElements($result);
    }
    	
    }

}

else if(isset($_GET["BBE"])){
	if($_GET["BBE"] == -1){
    
		$result = mysqli_query($conn, "SELECT * FROM BBE") ;	
		returnElements($result);

	    mysqli_free_result($result);
    }else{
   		$result = mysqli_query($conn, "SELECT * FROM BBE WHERE id = " . $_GET["BBE"]);	
		returnElements($result);

	    mysqli_free_result($result);
    }
}



else if(isset($_POST["BBE"])){
	if($_POST["BBE"] == 1){
	if(isset($_POST["department"]) && isset($_POST["bbe_at_start"]) && isset($_POST["total_nb_staff_begin"]) && isset($_POST["percentage"]) && isset($_POST["totals_bore_below_the_elbow"]) &&  isset($_POST["comment"]) && isset($_POST["total_nb_staff_ward"])){
    
	

    	$result = mysqli_query($conn,'INSERT INTO BBE (id, department, bbe_at_start, total_nb_staff_begin, percentage, totals_bore_below_the_elbow, comment, total_nb_staff_ward)  VALUES (NULL,"'.$conn->real_escape_string($_POST['department']).'" , '.$conn->real_escape_string($_POST['bbe_at_start']).', '.$conn->real_escape_string($_POST['total_nb_staff_begin']).', '.$conn->real_escape_string($_POST['percentage']).','.$conn->real_escape_string($_POST['totals_bore_below_the_elbow']).', "'.$conn->real_escape_string($_POST['comment']).'", '.$conn->real_escape_string($_POST['total_nb_staff_ward']).')');
    $result = mysqli_query($conn, "SELECT * FROM BBE where id = ".$conn->insert_id) ;
    returnElements($result);
    }
    	
    }

}

else if(isset($_GET["HH"])){
	if($_GET["HH"] == -1){
    
		$result = mysqli_query($conn, "SELECT * FROM HH") ;	
		returnElements($result);

	    mysqli_free_result($result);
    }else{
   		$result = mysqli_query($conn, "SELECT * FROM HH WHERE id = " . $_GET["HH"]);	
		returnElements($result);

	    mysqli_free_result($result);
    }
}



else if(isset($_POST["HH"])){
	if($_POST["HH"] == 1){
	if(isset($_POST["department"]) && isset($_POST["indication"]) && isset($_POST["count"]) && isset($_POST["action"]) && isset($_POST["comment"]) &&  isset($_POST["nb_taken_hh_opp"]) && isset($_POST["nb_possible_hh_opp"]) && isset($_POST["percentage"])){
    	
	

    	$result = mysqli_query($conn,'INSERT INTO HH (id, department, indication,`count`, `action`, `comment`, nb_taken_hh_opp,nb_possible_hh_opp, percentage)  VALUES (NULL,"'.$conn->real_escape_string($_POST['department']).'" , "'.$conn->real_escape_string($_POST['indication']).'", '.$conn->real_escape_string($_POST['count']).', "'.$conn->real_escape_string($_POST['action']).'","'.$conn->real_escape_string($_POST['comment']).'", '.$conn->real_escape_string($_POST['nb_taken_hh_opp']).', '.$conn->real_escape_string($_POST['nb_possible_hh_opp']).', '.$conn->real_escape_string($_POST['percentage']).')');
    $result = mysqli_query($conn, "SELECT * FROM HH where id = ".$conn->insert_id) ;

    returnElements($result);
    }
    	
    }

}

function returnElements($result){
	$myArray = array();
	 while($row = $result->fetch_array()) {
            $myArray[] = $row;
    }
    echo json_encode($myArray);
}

function returnElement($result){
	
}
?>