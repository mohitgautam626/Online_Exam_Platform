-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 29, 2020 at 07:00 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_exam`
--

-- --------------------------------------------------------

--
-- Table structure for table `cs1301`
--

DROP TABLE IF EXISTS `cs1301`;
CREATE TABLE IF NOT EXISTS `cs1301` (
  `QID` int(100) NOT NULL AUTO_INCREMENT,
  `Ques` varchar(600) NOT NULL,
  `Opt_A` varchar(200) NOT NULL,
  `Opt_B` varchar(200) NOT NULL,
  `Opt_C` varchar(200) NOT NULL,
  `Opt_D` varchar(200) NOT NULL,
  PRIMARY KEY (`QID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cs1301`
--

INSERT INTO `cs1301` (`QID`, `Ques`, `Opt_A`, `Opt_B`, `Opt_C`, `Opt_D`) VALUES
(1, 'Who is your favourite Cricket player in Indian Cricket Team?          ', 'Sachin Tendulkar', 'Virat Kohli', 'Virendra Sehwag', 'Gautam Gambhir'),
(2, 'Which Country Lose World War 2?', 'Germany', 'Japan', 'Italy', 'All of these'),
(3, 'What was the ancient name of Delhi?', 'Indraprastha', 'Prayagraj', 'Khandavprasth', 'Hastinapur');

-- --------------------------------------------------------

--
-- Table structure for table `cs1301_ans`
--

DROP TABLE IF EXISTS `cs1301_ans`;
CREATE TABLE IF NOT EXISTS `cs1301_ans` (
  `QID` int(100) NOT NULL AUTO_INCREMENT,
  `Ans` varchar(10) NOT NULL,
  PRIMARY KEY (`QID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cs1301_ans`
--

INSERT INTO `cs1301_ans` (`QID`, `Ans`) VALUES
(1, 'C');

-- --------------------------------------------------------

--
-- Table structure for table `exam_details`
--

DROP TABLE IF EXISTS `exam_details`;
CREATE TABLE IF NOT EXISTS `exam_details` (
  `EID` int(11) NOT NULL AUTO_INCREMENT,
  `Examiner` varchar(50) NOT NULL,
  `Obtained` bigint(100) NOT NULL,
  `Submission` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Subject` varchar(100) NOT NULL,
  `Student_ID` varchar(100) NOT NULL,
  PRIMARY KEY (`EID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exam_details`
--

INSERT INTO `exam_details` (`EID`, `Examiner`, `Obtained`, `Submission`, `Subject`, `Student_ID`) VALUES
(1, 'Dr.Mohit Gautam', 20, '2020-06-17 07:30:42', 'Theory Of Computation End SeM', '2018ugcs099'),
(2, 'Dr. Ajloo Pajloo', 25, '2020-06-17 07:42:48', 'Operating System End SeM', '2018ugcs099');

-- --------------------------------------------------------

--
-- Table structure for table `exam_papers`
--

DROP TABLE IF EXISTS `exam_papers`;
CREATE TABLE IF NOT EXISTS `exam_papers` (
  `Paper_ID` int(100) NOT NULL AUTO_INCREMENT,
  `Subject_Code` varchar(10) NOT NULL,
  `Subject_Name` varchar(100) NOT NULL,
  `Total_MCQ` int(100) NOT NULL,
  `From` datetime NOT NULL,
  `To` datetime NOT NULL,
  `Programme` varchar(30) NOT NULL,
  `Branch` varchar(30) NOT NULL,
  `Year` varchar(10) NOT NULL,
  PRIMARY KEY (`Paper_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exam_papers`
--

INSERT INTO `exam_papers` (`Paper_ID`, `Subject_Code`, `Subject_Name`, `Total_MCQ`, `From`, `To`, `Programme`, `Branch`, `Year`) VALUES
(1, 'CS1301', 'Microprocessor & Microcontroller End SeM', 30, '2020-06-18 10:30:00', '2020-06-18 11:30:00', 'UnderGraduate Course', 'Computer Science', 'IInd'),
(2, 'CS1302', 'Database Management System End SeM', 35, '2020-06-19 10:30:00', '2020-06-19 11:30:00', 'UnderGraduate Course', 'Computer Science', 'IInd');

-- --------------------------------------------------------

--
-- Table structure for table `response`
--

DROP TABLE IF EXISTS `response`;
CREATE TABLE IF NOT EXISTS `response` (
  `RID` int(10) NOT NULL AUTO_INCREMENT,
  `Subject_Code` varchar(20) NOT NULL,
  `Reg_No` varchar(50) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Q1` varchar(5) DEFAULT NULL,
  `Q2` varchar(5) DEFAULT NULL,
  `Q3` varchar(5) DEFAULT NULL,
  `Q4` varchar(5) DEFAULT NULL,
  `Q5` varchar(5) DEFAULT NULL,
  `Q6` varchar(5) DEFAULT NULL,
  `Q7` varchar(5) DEFAULT NULL,
  `Q8` varchar(5) DEFAULT NULL,
  `Q9` varchar(5) DEFAULT NULL,
  `Q10` varchar(5) DEFAULT NULL,
  `Q11` varchar(5) DEFAULT NULL,
  `Q12` varchar(5) DEFAULT NULL,
  `Q13` varchar(5) DEFAULT NULL,
  `Q14` varchar(5) DEFAULT NULL,
  `Q15` varchar(5) DEFAULT NULL,
  `Q16` varchar(5) DEFAULT NULL,
  `Q17` varchar(5) DEFAULT NULL,
  `Q18` varchar(5) DEFAULT NULL,
  `Q19` varchar(5) DEFAULT NULL,
  `Q20` varchar(5) DEFAULT NULL,
  `Q21` varchar(5) DEFAULT NULL,
  `Q22` varchar(5) DEFAULT NULL,
  `Q23` varchar(5) DEFAULT NULL,
  `Q24` varchar(5) DEFAULT NULL,
  `Q25` varchar(5) DEFAULT NULL,
  `Q26` varchar(5) DEFAULT NULL,
  `Q27` varchar(5) DEFAULT NULL,
  `Q28` varchar(5) DEFAULT NULL,
  `Q29` varchar(5) DEFAULT NULL,
  `Q30` varchar(5) DEFAULT NULL,
  `checked` int(10) DEFAULT NULL,
  PRIMARY KEY (`RID`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `response`
--

INSERT INTO `response` (`RID`, `Subject_Code`, `Reg_No`, `Name`, `Q1`, `Q2`, `Q3`, `Q4`, `Q5`, `Q6`, `Q7`, `Q8`, `Q9`, `Q10`, `Q11`, `Q12`, `Q13`, `Q14`, `Q15`, `Q16`, `Q17`, `Q18`, `Q19`, `Q20`, `Q21`, `Q22`, `Q23`, `Q24`, `Q25`, `Q26`, `Q27`, `Q28`, `Q29`, `Q30`, `checked`) VALUES
(5, 'cs1301', '2018ugcs099', 'Mohit Gautam', 'c', 'd', '', 'n', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'cs1301', '2018ugcs099', 'Mohit Gautam', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `student_login`
--

DROP TABLE IF EXISTS `student_login`;
CREATE TABLE IF NOT EXISTS `student_login` (
  `Student_ID` int(100) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `Reg_No` varchar(20) NOT NULL,
  `Pass` varchar(20) NOT NULL,
  `DOB` date NOT NULL,
  `Gender` varchar(15) NOT NULL,
  `HA` varchar(100) DEFAULT NULL,
  `PA` varchar(100) DEFAULT NULL,
  `BG` varchar(5) DEFAULT NULL,
  `DP_source` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Student_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_login`
--

INSERT INTO `student_login` (`Student_ID`, `Name`, `Reg_No`, `Pass`, `DOB`, `Gender`, `HA`, `PA`, `BG`, `DP_source`) VALUES
(2, 'Aman Gautam', '2018ugcs100', 'aman@123', '2002-02-01', 'Male', NULL, NULL, NULL, NULL),
(1, 'Mohit Gautam', '2018ugcs099', 'mgranger', '2000-06-09', 'Male', 'D-409, Hostel K NIT Jamshedpur, Jamshedpur-831014', '7 Vaibhavpuri, Pushpanjali Road, Dayalbagh, Agra-282005', 'B+', './DP/1.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
