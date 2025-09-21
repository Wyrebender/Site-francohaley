-- phpMyAdmin SQL Dump
-- version 2.11.7.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 18, 2009 at 01:12 PM
-- Server version: 5.0.41
-- PHP Version: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `contactlist`
--
CREATE DATABASE `contactlist` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `contactlist`;

-- --------------------------------------------------------

--
-- Table structure for table `contactlist`
--

CREATE TABLE `contactlist` (
  `id` int(11) NOT NULL auto_increment,
  `email` text NOT NULL,
  `name` varchar(50) NOT NULL default 'Mike',
  `friends` varchar(6) NOT NULL,
  PRIMARY KEY  (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `contactlist`
--

INSERT INTO `contactlist` VALUES(1, 'msmotherman@fullsail.com', 'Michael', '1024');
INSERT INTO `contactlist` VALUES(2, 'jmadsen@fullsail.com', 'Jason', '1024');
INSERT INTO `contactlist` VALUES(3, 'anobody@nowhere.com', 'Anybody', '0');
INSERT INTO `contactlist` VALUES(4, 'anothernoone@nowhere.com', 'Noone', '0');
INSERT INTO `contactlist` VALUES(5, 'mikeisawesome@awesomeness.org', 'Mike', '768');
INSERT INTO `contactlist` VALUES(6, 'flashisbad@usejs.com', 'JSMan', '6656');
INSERT INTO `contactlist` VALUES(7, 'zebrafarm@zoo.gov', 'Zebras', '3');
INSERT INTO `contactlist` VALUES(8, 'complaints@fullsail.com', 'Complaints', '1');
INSERT INTO `contactlist` VALUES(9, 'lotsofemails@bull.edu', 'Emailtastic', '100');
INSERT INTO `contactlist` VALUES(10, 'somanyemails@more4u.net', 'Busy Alot', '24');
INSERT INTO `contactlist` VALUES(11, 'manyemails@arehere.com', 'Spamalot', '0');
INSERT INTO `contactlist` VALUES(12, 'myemail@spamalot.biz', 'No More Kings', '32');
INSERT INTO `contactlist` VALUES(13, 'jazzfan@hotmail.com', 'Lisa Simpson', '4');
INSERT INTO `contactlist` VALUES(14, 'mozilla@firefox.org', 'Mozilla Corporation', 'all');
INSERT INTO `contactlist` VALUES(15, 'joinme@facebook.com', 'Random Guy', '1');
INSERT INTO `contactlist` VALUES(16, 'yeswecan@obama.gov', 'Obama', 'nation');
INSERT INTO `contactlist` VALUES(17, 'about@fullsail.edu', 'Spam Me', '0');
