<?php

header("Content-type: text/xml");

include("db_conn.php");

//**this function is used for best practices.**
function param($scope, $key, $default){
	return array_key_exists($key, $scope) && is_scalar($scope[$key]) ? $scope[$key] : $default;
}

$cats=param($_GET, 'cats', '');
$title=param($_GET, 'title', '');
$author=param($_GET, 'author', '');
$datetime=param($_GET, 'datetime', '');
$id=param($_GET, 'id', '');
$start=param($_GET, 'start', 0);
$limit=param($_GET, 'limit', 15);


$sql="SELECT * FROM `myblog` WHERE";

if($id!=""){
	$sql.=" id=".$id;
}else{
	$sql.=" id != -1";
	if($cats!=""){
		$sql.=" AND categories LIKE '%".$cats."%'";
	}
	if($title!=""){
		$sql.=" AND title LIKE '%".$title."%'";
	}
	if($author!=""){
		$sql.=" AND author = '".$author."'";
	}
	if($datetime!=""){
		$sql.=" AND datetime LIKE '".$datetime."'";
	}
}

$sql.=" LIMIT $start, $limit";

$query = mysql_query($sql,$connection) or die("<p>$sql</p><p>Fail</p>");/*MySQL_query failed*/

$aReturn = "<?xml version=\"1.0\" ?>\n<posts>";

while($myrow = mysql_fetch_array($query))
{
	$cats=$myrow['categories'];
	$title=$myrow['title'];
	$author=$myrow['author'];
	$datetime=$myrow['datetime'];
	$id=$myrow['id'];
	$content=$myrow['content'];
	
	// ---------------------------- Output: XML
	$aReturn.="<post>";
	$aReturn.="<id>".$id."</id>";
	$aReturn.="<title>".$title."</title>";
	$aReturn.="<author>".$author."</author>";
	$aReturn.="<datetime>".$datetime."</datetime>";
	$aReturn.="<content>".$content."</content>";
	$aReturn.="</post>";

	/* ---------------------------- Alternate Output: HTML return
	$aReturn.="<h2>$title</h1>";
	$aReturn.="<h3>by $author</h3>";
	$aReturn.="<h4>$datetime</h4>";
	$aReturn.="<span class='entry'>$content</span>";
	*/
}

$aReturn.="</posts>";

echo $aReturn;
?>