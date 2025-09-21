# ************************************************************
# Sequel Pro SQL dump
# Version 3348
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.5.9-log)
# Database: francohaley_swa_contactlist
# Generation Time: 2011-10-26 22:07:25 -0400
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table contactlist
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contactlist`;

CREATE TABLE `contactlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` text NOT NULL,
  `name` varchar(50) NOT NULL DEFAULT 'Mike',
  `friends` varchar(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

LOCK TABLES `contactlist` WRITE;
/*!40000 ALTER TABLE `contactlist` DISABLE KEYS */;

INSERT INTO `contactlist` (`id`, `email`, `name`, `friends`)
VALUES
	(1,'msmotherman@fullsail.com','Michael','1024'),
	(2,'jmadsen@fullsail.com','Jason','1024'),
	(3,'anobody@nowhere.com','Anybody','0'),
	(4,'anothernoone@nowhere.com','Noone','0'),
	(5,'mikeisawesome@awesomeness.org','Mike','768'),
	(6,'flashisbad@usejs.com','JSMan','6656'),
	(7,'zebrafarm@zoo.gov','Zebras','3'),
	(8,'complaints@fullsail.com','Complaints','1'),
	(9,'lotsofemails@bull.edu','Emailtastic','100'),
	(10,'somanyemails@more4u.net','Busy Alot','24'),
	(11,'manyemails@arehere.com','Spamalot','0'),
	(12,'myemail@spamalot.biz','No More Kings','32'),
	(13,'jazzfan@hotmail.com','Lisa Simpson','4'),
	(14,'mozilla@firefox.org','Mozilla Corporation','all'),
	(15,'joinme@facebook.com','Random Guy','1'),
	(16,'yeswecan@obama.gov','Obama','nation'),
	(17,'about@fullsail.edu','Spam Me','0');

/*!40000 ALTER TABLE `contactlist` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
