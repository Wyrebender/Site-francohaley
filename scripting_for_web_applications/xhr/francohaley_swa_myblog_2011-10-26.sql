# ************************************************************
# Sequel Pro SQL dump
# Version 3348
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.5.9-log)
# Database: francohaley_swa
# Generation Time: 2011-10-26 21:34:01 -0400
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table myblog
# ------------------------------------------------------------

DROP TABLE IF EXISTS `myblog`;

CREATE TABLE `myblog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `author` text NOT NULL,
  `datetime` text NOT NULL,
  `categories` text NOT NULL,
  `content` text NOT NULL,
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

LOCK TABLES `myblog` WRITE;
/*!40000 ALTER TABLE `myblog` DISABLE KEYS */;

INSERT INTO `myblog` (`id`, `title`, `author`, `datetime`, `categories`, `content`)
VALUES
	(1,'My First Post','Mike','0/00/00, 00:00am','random','If you can see this entry, then it would seem your ajax is working successfully!  Well done, you.  Now to move on to the harder part, making the backend.  Don\'t forget to use form validation!'),
	(2,'My Second Post','Mike','00/00/00, 00:00am','random','Another post already?  But it\'s only 00 o\'clock!?'),
	(4,'Another Post','Not Mike','3/14/09, 5:12pm','Random','Making all of these posts sure is a tedious task.'),
	(5,'Yet Another Post','Not Mike','3/14/09, 5:18pm','Random','Another post is I.'),
	(6,'More Posts','Not Mike','3/14/09, 5:50pm','Random','Will these posts seriously ever end?'),
	(7,'More Posts','Not Mike','3/14/09, 6:15pm','Random','Are you having fun coding JavaScript?'),
	(8,'PHP Later','Mike','3/14/09, 6:25pm','Random','You havent learned the php that drives this blog yet, but don\'t worry, you will soon.'),
	(9,'Lord of the Posts','Mike','3/14/09, 6:42pm','Random','One post to rule them all, and in the archives bind them.'),
	(10,'Entry Names','Mike','3/14/09, 6:48pm','Random','Are you sick of my entry names yet?'),
	(11,'Entry Names','Mike','3/14/09, 6:54pm','Random','You will be, after starting at them for several, several hours.'),
	(12,'Enough Already','Mike','3/14/09, 6:58pm','Random','I believe it is time to officially call this the last post.');

/*!40000 ALTER TABLE `myblog` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
