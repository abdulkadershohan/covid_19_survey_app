-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2021 at 04:13 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `covid-19-survey-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `name` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `region` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `area` varchar(20) NOT NULL,
  `address` varchar(80) NOT NULL,
  `score` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`name`, `phone`, `region`, `city`, `area`, `address`, `score`) VALUES
('Abdul Kader', '01766614798', 'Rajshahi', 'Bogra', 'bogra', 'Dhunat', '4'),
('a', '11111111111', 'Dhaka', '1', '1', '1', '4'),
('1', '11111111111', 'Dhaka', '1', '1', '1', '3'),
('2', '11111111111', 'Dhaka', '1', '1', '1', '3'),
('11', '11111111111', 'Dhaka', '1', '1', '1', '2'),
('333', '33333333333', 'Dhaka', '3', '3', '3', '0'),
('11111111111111', '11333333333', 'Dhaka', '1', '1', '1', '1'),
('Sabbir', '01766666666', 'Dhaka', 'Mirpur', 'Mirpur', 'none', '5');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
