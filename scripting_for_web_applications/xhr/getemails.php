<?php
include("db_conn.php");
$dbsel=mysql_select_db('francohaley_swa_contactlist', $connection) or die(mysql_error());
$sfield=$_GET['sfield'];

$sql="SELECT * FROM `contactlist` WHERE email LIKE '".$sfield."%' LIMIT 0,8";

$query = mysql_query($sql,$connection) or die("<p>$sql</p><p>Fail</p>");/*MySQL_query failed*/

$aReturn = "<?xml version=\"1.0\" ?>\n<posts>";

while($myrow = mysql_fetch_array($query))
{
	$email=$myrow['email'];
	$name=$myrow['name'];
	$friends=$myrow['friends'];
	// ---------------------------- Output: XML
	$aReturn.="<email><address>$email</address><name>$name</name><friends>$friends</friends></email>";

}

$aReturn.="</posts>";
header("Content-type: text/xml");

echo $aReturn;
?>