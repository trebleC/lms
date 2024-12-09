-- MySQL dump 10.13  Distrib 5.7.35, for osx10.16 (x86_64)
--
-- Host: 0.0.0.0    Database: lms_api
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `admin_id` bigint NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '密码',
  `status` int NOT NULL COMMENT '1正常2禁用',
  `roles` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '角色',
  `nickname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名称',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'xumengqiang','2JUHg/E0DPganhR+jwxfDA==',1,'admin','徐梦强','2024-06-25 05:55:18','2024-07-04 01:26:26'),(2,'wentanshudian','Rll0hQw3v0h7kWIe7CPg1w==',1,'admin','文探书店','2024-06-27 04:28:21','2024-07-04 01:24:14'),(3,'zeshaaipei','Rll0hQw3v0h7kWIe7CPg1w==',1,'admin','谢晒皮','2024-09-23 03:07:01','2024-12-04 02:41:40');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_info`
--

DROP TABLE IF EXISTS `book_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book_info` (
  `book_id` bigint NOT NULL AUTO_INCREMENT COMMENT '图书id\r\n',
  `book_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '书名',
  `author` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '作者',
  `publish` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '出版社',
  `ISBN` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '标准书号',
  `introduction` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '简介',
  `language` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '语言',
  `price` decimal(10,2) NOT NULL COMMENT '价格',
  `pub_date` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '出版时间',
  `class_id` bigint NOT NULL COMMENT '分类号',
  `number` int NOT NULL COMMENT '剩余数量',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `cover` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '封面',
  PRIMARY KEY (`book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_info`
--

LOCK TABLES `book_info` WRITE;
/*!40000 ALTER TABLE `book_info` DISABLE KEYS */;
INSERT INTO `book_info` VALUES (1,'（精装）经典名著 - - 爱丽丝漫游奇境记','（英）卡罗尔','汕头大学出版社','9787565833823','《不能承受的生命之轻》是米兰·昆德拉最负盛名的作品。小说描写了托马斯与特丽莎、萨丽娜之间的感情生活。但它不是一个男人和两个女人的三角性爱故事，它是一部哲理小说，小说从“永恒轮回”的讨论开始，把读者带入了对一系列问题的思考中，比如轻与重、灵与肉。\n\n《不能承受的生命之轻》是一部意象繁复的书，其中装载了多种涵义：被政治化了的社会内涵的揭示、人性考察、个人命运在特定历史与政治语境下的呈现，以及对两性关系本质上的探索等。昆德拉将这些元素糅合在一起，写成一部非同凡响的小说——其中既有隐喻式的哲学思考，也有人的悲欢离合的生命历程的展现。','中文',9.23,'',1,9,'2024-07-04 04:56:57','2024-12-05 09:38:49',NULL),(2,'（精装）经典名著 - - 安妮日记','（德)安妮.费兰克','汕头大学出版社','9787565833489',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:57','2024-07-04 04:56:57',NULL),(3,'（精装）经典名著 - - 安徒生童话','（丹）安徒生','汕头大学出版社','9787565833427',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:57','2024-07-04 04:56:57',NULL),(4,'（精装）经典名著 - - 傲慢与偏见','（苏）奥斯汀','汕头大学出版社','9787565834004',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:57','2024-07-04 04:56:57',NULL),(5,'（精装）经典名著 - - 奥赛罗.李尔王','（英）莎士比亚','汕头大学出版社','9787565833991',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:57','2024-07-04 04:56:57',NULL),(6,'（精装）经典名著 - - 八十天环游地球','（法）凡尔纳','汕头大学出版社','9787565833571',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:58','2024-07-04 04:56:58',NULL),(7,'（精装）经典名著 - - 巴黎圣母院','（法）雨果','汕头大学出版社','9787565834394',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:58','2024-07-04 04:56:58',NULL),(8,'（精装）经典名著 - - 白牙','杰克·伦敦/12','汕头大学出版社','9787565834233',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:58','2024-07-04 04:56:58',NULL),(9,'（精装）经典名著 - - 包法利夫人','（苏）福楼拜','汕头大学出版社','9787565834400',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:58','2024-07-04 04:56:58',NULL),(10,'（精装）经典名著 - - 悲惨世界','雨果','汕头大学出版社','9787565834219',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:58','2024-07-04 04:56:58',NULL),(11,'（精装）经典名著 - - 蓓根的五亿法郎','（法）凡尔纳','汕头大学出版社','9787565834332',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:58','2024-07-04 04:56:58',NULL),(12,'（精装）经典名著 - - 边城','沈从文','民主与建设出版社','9787513913904',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:59','2024-07-04 04:56:59',NULL),(13,'（精装）经典名著 - - 茶花女','（法）小仲马','汕头大学出版社','9787565833892',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:59','2024-07-04 04:56:59',NULL),(14,'（精装）经典名著 - - 朝花夕拾','鲁迅','民主与建设出版社','9787513914611',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:59','2024-07-04 04:56:59',NULL),(15,'（精装）经典名著 - - 吹牛大王历险记','（德）毕尔格','汕头大学出版社','9787565833762',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:59','2024-07-04 04:56:59',NULL),(16,'（精装）经典名著 - - 大卫.科波菲尔','（英）狄更斯','汕头大学出版社','9787565833984',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:59','2024-07-04 04:56:59',NULL),(17,'（精装）经典名著 - - 地心游记','（法）凡尔纳','汕头大学出版社','9787565833779',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:56:59','2024-07-04 04:56:59',NULL),(18,'（精装）经典名著 - - 烽火岛','（法）凡尔纳','汕头大学出版社','9787565834257',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:00','2024-07-04 04:57:00',NULL),(19,'（精装）经典名著 - - 复活','（俄罗斯）托尔斯泰','汕头大学出版社','9787565834196',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:00','2024-07-04 04:57:00',NULL),(20,'（精装）经典名著 - - 钢铁是怎样炼成的','（苏）奥斯特洛夫斯基','汕头大学出版社','9787565833496',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:00','2024-07-04 04:57:00',NULL),(21,'（精装）经典名著 - - 高老头','（法）巴尔扎克','汕头大学出版社','9787565834011',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:00','2024-07-04 04:57:00',NULL),(22,'（精装）经典名著 - - 格兰特船长的儿女','（法）凡尔纳','汕头大学出版社','9787565833472',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:00','2024-07-04 04:57:00',NULL),(23,'（精装）经典名著 - - 格列佛游记','（英）斯威夫特','汕头大学出版社','9787565833465',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:00','2024-07-04 04:57:00',NULL),(24,'（精装）经典名著 - - 格林童话','格林兄弟','汕头大学出版社','9787565833526',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:01','2024-07-04 04:57:01',NULL),(25,'（精装）经典名著 - - 故乡','鲁迅','民主与建设出版社','9787513914604',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:01','2024-07-04 04:57:01',NULL),(26,'（精装）经典名著 - - 归来探案记','（英）啊瑟.柯南.道尔','汕头大学出版社','9787565834356',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:01','2024-07-04 04:57:01',NULL),(27,'（精装）经典名著 - - 过冬的森林','（苏)比安基','汕头大学出版社','9787565834042',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:01','2024-07-04 04:57:01',NULL),(28,'（精装）经典名著 - - 哈克贝利.费恩历险记','（美）马克.吐温','汕头大学出版社','9787565833939',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:01','2024-07-04 04:57:01',NULL),(29,'（精装）经典名著 - - 豪夫童话','（德）威廉.豪夫','汕头大学出版社','9787565833724',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:01','2024-07-04 04:57:01',NULL),(30,'（精装）经典名著 - - 红与黑','（法）司汤达','汕头大学出版社','9787565834165',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:02','2024-07-04 04:57:02',NULL),(31,'（精装）经典名著 - - 呼兰河传','萧红','民主与建设出版社','9787513916882',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:02','2024-07-04 04:57:02',NULL),(32,'（精装）经典名著 - - 呼啸山庄','勃朗特','汕头大学出版社','9787565834288',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:02','2024-07-04 04:57:02',NULL),(33,'（精装）经典名著 - - 基督山伯爵','（法）大仲马','汕头大学出版社','9787565834417',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:02','2024-07-04 04:57:02',NULL),(34,'（精装）经典名著 - - 寂静的春天','蕾切尔','民主与建设出版社','9787513916905',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:02','2024-07-04 04:57:02',NULL),(35,'（精装）经典名著 - - 假如给我三天光明','（美）海伦.凯勤','汕头大学出版社','9787565833694',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:02','2024-07-04 04:57:02',NULL),(36,'（精装）经典名著 - - 简.爱','（英）勃朗特','汕头大学出版社','9787565833502',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:03','2024-07-04 04:57:03',NULL),(37,'（精装）经典名著 - - 金银岛','(英）史蒂文森','汕头大学出版社','9787565834271',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:03','2024-07-04 04:57:03',NULL),(38,'（精装）经典名著 - - 局外人','阿尔贝 加缪','民主与建设出版社','9787513912754',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:03','2024-07-04 04:57:03',NULL),(39,'（精装）经典名著 - - 菊与刀','(美)本尼迪克特','民主与建设出版社','9787513915694',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:03','2024-07-04 04:57:03',NULL),(40,'（精装）经典名著 - - 克雷洛夫寓言','克雷洛夫','汕头大学出版社','9787565833748',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:03','2024-07-04 04:57:03',NULL),(41,'（精装）经典名著 - - 苦儿流浪记','（法）马洛','汕头大学出版社','9787565833601',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:03','2024-07-04 04:57:03',NULL),(42,'（精装）经典名著 - - 昆虫记','（法）法布尔','汕头大学出版社','9787565833922',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:04','2024-07-04 04:57:04',NULL),(43,'（精装）经典名著 - - 拉封丹寓言','拉封丹','汕头大学出版社','9787565833540',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:04','2024-07-04 04:57:04',NULL),(44,'（精装）经典名著 - - 莱辛寓言','莱辛','汕头大学出版社','9787565833649',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:04','2024-07-04 04:57:04',NULL),(45,'（精装）经典名著 - - 狼孩历险记','吉卜林/12','民主与建设出版社','9787565833663',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:04','2024-07-04 04:57:04',NULL),(46,'（精装）经典名著 - - 老人与海 太阳升起','（没）海明威','汕头大学出版社','9787565833960',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:04','2024-07-04 04:57:04',NULL),(47,'（精装）经典名著 - - 了不起的盖茨比','(美)斯科特','民主与建设出版社有限','9787513921664',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:04','2024-07-04 04:57:04',NULL),(48,'（精装）经典名著 - - 列那狐的故事','阿莱','汕头大学出版社','9787565834110',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:04','2024-07-04 04:57:04',NULL),(49,'（精装）经典名著 - - 猎人笔记','（俄罗斯）屠格涅夫','汕头大学出版社','9787565834370',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:05','2024-07-04 04:57:05',NULL),(50,'（精装）经典名著 - - 柳林中的风声','格雷厄姆','汕头大学出版社','9787565833755',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:05','2024-07-04 04:57:05',NULL),(51,'（精装）经典名著 - - 鲁滨逊漂流记','笛福','汕头大学出版社','9787565833564',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:05','2024-07-04 04:57:05',NULL),(52,'（精装）经典名著 - - 罗生门','芥川龙之介','民主与建设出版社','9787513915687',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:05','2024-07-04 04:57:05',NULL),(53,'（精装）经典名著 - - 骆驼祥子','老舍','民主与建设出版社','9787513914628',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:05','2024-07-04 04:57:05',NULL),(54,'（精装）经典名著 - - 绿光','（法）凡尔纳','汕头大学出版社','9787565834066',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:05','2024-07-04 04:57:05',NULL),(55,'（精装）经典名著 - - 绿山墙的安妮','（加）蒙格马利','汕头大学出版社','9787565834264',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:06','2024-07-04 04:57:06',NULL),(56,'（精装）经典名著 - - 绿野仙踪','（美）鲍姆','汕头大学出版社','9787565833786',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:06','2024-07-04 04:57:06',NULL),(57,'（精装）经典名著 - - 麦琪的礼物','（美）欧.亨利','汕头大学出版社','9787565834387',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:06','2024-07-04 04:57:06',NULL),(58,'（精装）经典名著 - - 冒险追踪记','（英）柯南.道尔','汕头大学出版社','9787565834240',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:06','2024-07-04 04:57:06',NULL),(59,'（精装）经典名著 - - 秘密花园','（美）白涅德夫人','汕头大学出版社','9787565833953',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:06','2024-07-04 04:57:06',NULL),(60,'（精装）经典名著 - - 母亲','（苏）高尔基','汕头大学出版社','9787565833816',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:06','2024-07-04 04:57:06',NULL),(61,'（精装）经典名著 - - 木偶奇遇记','科洛迪/12','汕头大学出版社','9787565833533',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:07','2024-07-04 04:57:07',NULL),(62,'（精装）经典名著 - - 呐喊','鲁迅','民主与建设出版社','9787513914598',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:07','2024-07-04 04:57:07',NULL),(63,'（精装）经典名著 - - 纳兰词','纳兰性德','民主与建设出版社','9787513920636',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:07','2024-07-04 04:57:07',NULL),(64,'（精装）经典名著 - - 尼尔斯骑鹅历险记','拉格洛夫','汕头大学出版社','9787565833731',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:07','2024-07-04 04:57:07',NULL),(65,'（精装）经典名著 - - 你是人间的四月天','林徽因','民主与建设出版社','9787513921190',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:07','2024-07-04 04:57:07',NULL),(66,'（精装）经典名著 - - 牛虻','（爱尔兰）伏尼契','汕头大学出版社','9787565833595',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:07','2024-07-04 04:57:07',NULL),(67,'（精装）经典名著 - - 欧也妮·葛朗台','巴尔扎克','汕头大学出版社','9787565834080',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:08','2024-07-04 04:57:08',NULL),(68,'（精装）经典名著 - - 飘','（美）玛格丽特.米切尔','汕头大学出版社','9787565834202',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:08','2024-07-04 04:57:08',NULL),(69,'（精装）经典名著 - - 热爱生命','（美）杰克.伦敦','汕头大学出版社','9787565834349',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:08','2024-07-04 04:57:08',NULL),(70,'（精装）经典名著 - - 人间失格','太宰治','民主与建设出版社','9787513914239',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:08','2024-07-04 04:57:08',NULL),(71,'（精装）经典名著 - - 人类的群星闪耀时','【奥】斯蒂芬·茨威格','民主与建设出版社','9787513922562',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:08','2024-07-04 04:57:08',NULL),(72,'（精装）经典名著 - - 人一生要读的古诗词','泰圃','民主与建设出版社','9787513920629',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:08','2024-07-04 04:57:08',NULL),(73,'（精装）经典名著 - - 三剑客','大仲马/12','汕头大学出版社','9787565834172',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:08','2024-07-04 04:57:08',NULL),(74,'（精装）经典名著 - - 森林的夏日','（苏）比安基','汕头大学出版社','9787565834318',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:09','2024-07-04 04:57:09',NULL),(75,'（精装）经典名著 - - 森林之秋','（苏）比安基','汕头大学出版社','9787565834035',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:09','2024-07-04 04:57:09',NULL),(76,'（精装）经典名著 - - 少年维特之烦恼','（德）歌德','汕头大学出版社','9787565833700',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:09','2024-07-04 04:57:09',NULL),(77,'（精装）经典名著 - - 神秘岛','（法）凡尔纳','汕头大学出版社','9787565834134',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:09','2024-07-04 04:57:09',NULL),(78,'（精装）经典名著 - - 十五少年漂流记','（法）凡尔纳','汕头大学出版社','9787565833670',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:09','2024-07-04 04:57:09',NULL),(79,'（精装）经典名著 - - 水孩子','（英）金斯菜','汕头大学出版社','9787565833878',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:09','2024-07-04 04:57:09',NULL),(80,'（精装）经典名著 - - 苔丝','（英)托马斯.哈代','汕头大学出版社','9787565834127',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:10','2024-07-04 04:57:10',NULL),(81,'（精装）经典名著 - - 泰戈尔诗选','泰戈尔','民主与建设出版社','9787513916875',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:10','2024-07-04 04:57:10',NULL),(82,'（精装）经典名著 - - 探险小队员','（苏）比安基','汕头大学出版社','9787565834325',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:10','2024-07-04 04:57:10',NULL),(83,'（精装）经典名著 - - 汤姆·索亚历险记','马克吐温','汕头大学出版社','9787565833854',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:10','2024-07-04 04:57:10',NULL),(84,'（精装）经典名著 - - 汤姆叔叔的小屋','（美）比彻.斯托','汕头大学出版社','9787565833885',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:10','2024-07-04 04:57:10',NULL),(85,'（精装）经典名著 - - 唐.吉诃德','(西）塞万提斯','汕头大学出版社','9787565833809',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:10','2024-07-04 04:57:10',NULL),(86,'（精装）经典名著 - - 童年','（苏）高尔基','汕头大学出版社','9787565833519',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:10','2024-07-04 04:57:10',NULL),(87,'（精装）经典名著 - - 驼鹿的谜局','（苏）比安基','汕头大学出版社','9787565833656',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:11','2024-07-04 04:57:11',NULL),(88,'（精装）经典名著 - - 瓦尔登湖','亨利、戴维、梭罗','民主与建设出版社','9787513915823',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:11','2024-07-04 04:57:11',NULL),(89,'（精装）经典名著 - - 王尔德童话','王尔德/12','汕头大学出版社','9787565834226',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:11','2024-07-04 04:57:11',NULL),(90,'（精装）经典名著 - - 王子复仇记','（英）莎士比亚','汕头大学出版社','9787565834295',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:11','2024-07-04 04:57:11',NULL),(91,'（精装）经典名著 - - 王子与贫尔','（美）马克.吐温','汕头大学出版社','9787565833793',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:11','2024-07-04 04:57:11',NULL),(92,'（精装）经典名著 - - 我的大学','（苏）高尔基','汕头大学出版社','9787565833717',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:11','2024-07-04 04:57:11',NULL),(93,'（精装）经典名著 - - 雾都孤儿','（英）狄更斯','汕头大学出版社','9787565833908',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:12','2024-07-04 04:57:12',NULL),(94,'（精装）经典名著 - - 湘行散记','沈从文','民主与建设出版社','9787513913911',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:12','2024-07-04 04:57:12',NULL),(95,'（精装）经典名著 - - 项链','（法）莫泊桑/12','汕头大学出版社','9787565834059',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:12','2024-07-04 04:57:12',NULL),(96,'（精装）经典名著 - - 小公主','（美）白','汕头大学出版社','9787565834301',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:12','2024-07-04 04:57:12',NULL),(97,'（精装）经典名著 - - 小公子','（美）白涅德夫人','汕头大学出版社','9787565834141',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:12','2024-07-04 04:57:12',NULL),(98,'（精装）经典名著 - - 小海蒂','（瑞士）斯比丽','汕头大学出版社','9787565834073',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:12','2024-07-04 04:57:12',NULL),(99,'（精装）经典名著 - - 小老鼠琵科','（苏）比安基','汕头大学出版社','9787565833557',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:13','2024-07-04 04:57:13',NULL),(100,'（精装）经典名著 - - 小鹿斑比','（奥）察尔滕','汕头大学出版社','9787565833458',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:13','2024-07-04 04:57:13',NULL),(101,'（精装）经典名著 - - 小王子','（法）埃克苏佩里','汕头大学出版社','9787565833434',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:13','2024-07-04 04:57:13',NULL),(102,'（精装）经典名著 - - 小战马 红脖子','（英）西顿','汕头大学出版社','9787565834028',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:13','2024-07-04 04:57:13',NULL),(103,'（精装）经典名著 - - 辛巴达航海历险记','（阿拉伯）佚名','汕头大学出版社','9787565833915',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:13','2024-07-04 04:57:13',NULL),(104,'（精装）经典名著 - - 新探案记','（英）柯南.道尔','汕头大学出版社','9787565834103',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:13','2024-07-04 04:57:13',NULL),(105,'（精装）经典名著 - - 雪地寻踪','（苏）比安基','汕头大学出版社','9787565833830',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:14','2024-07-04 04:57:14',NULL),(106,'（精装）经典名著 - - 羊脂球','（法）莫泊桑','汕头大学出版社','9787565833977',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:14','2024-07-04 04:57:14',NULL),(107,'（精装）经典名著 - - 一个陌生女人的来信','茨威格','民主与建设出版社','9787513924665',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:14','2024-07-04 04:57:14',NULL),(108,'（精装）经典名著 - - 一九八四','奥威尔','民主与建设出版社','9787513916899',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:14','2024-07-04 04:57:14',NULL),(109,'（精装）经典名著 - - 一千零一夜','（阿拉伯）佚名','汕头大学出版社','9787565833625',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:14','2024-07-04 04:57:14',NULL),(110,'（精装）经典名著 - - 伊索寓言','(古希腊）伊索','汕头大学出版社','9787565833441',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:14','2024-07-04 04:57:14',NULL),(111,'（精装）经典名著 - - 月亮与六便士','毛姆','民主与建设出版社','9787513914222',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:15','2024-07-04 04:57:15',NULL),(112,'（精装）经典名著 - - 在人间','（苏）高尔基','汕头大学出版社','9787565833618',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:15','2024-07-04 04:57:15',NULL),(113,'（精装）经典名著 - - 战争与和平','托尔斯泰','汕头大学出版社','9787565834189',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:15','2024-07-04 04:57:15',NULL),(114,'（精装皮面烫金）茶馆','老舍','民主与建设出版社','9787513915663',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:15','2024-07-04 04:57:15',NULL),(115,'（精装皮面烫金）道德经','老子','民主与建设出版社','9787513922579',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:15','2024-07-04 04:57:15',NULL),(116,'（精装皮面烫金）古文观止.上','思履注译','民主与建设出版社','9787513919562','朋党之说，自古有之。孔子云：君子群而不党。而欧阳修认为小人无朋，君子有之。自古以来士人多以君子自居，然而朋党之争却多次在中国历史上掀起波澜。唐穆宗长庆元年开始，唐朝爆发了严重的朋党之争，这场斗争历经五朝，持续四十余年。唐文宗曾感叹：“去河北贼易，去朝廷朋党难。”作为唐朝三大痼疾之一，朋党之争为何浸淫朝廷多年难以根除？朋党之争又是如何一步步将大唐推向灭亡？答案尽在书中！',NULL,0.00,NULL,1,0,'2024-07-04 04:57:16','2024-12-06 06:43:12','c29dd85d-c93d-4eea-b204-e8f9f7c264e6.jpg'),(117,'（精装皮面烫金）聊斋志异','蒲松龄','民主与建设出版社','9787513925433',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:16','2024-07-04 04:57:16',NULL),(118,'（精装皮面烫金）论语','文若愚注译','民主与建设出版社','9787513922593',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:16','2024-07-04 04:57:16',NULL),(119,'（精装皮面烫金）人间词话','王国维','民主与建设出版社','9787513922333',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:16','2024-07-04 04:57:16',NULL),(120,'（精装皮面烫金）三十六计','思履','民主与建设出版社','9787513925426',NULL,NULL,0.00,NULL,1,0,'2024-07-04 04:57:16','2024-07-04 04:57:16',NULL),(121,'（精装皮面烫金）诗经.上','沐言非注译','民主与建设出版社','9787513925402',NULL,NULL,0.00,NULL,2,0,'2024-07-04 04:57:17','2024-12-06 03:56:23','25a7237c-2196-4e4a-8c2e-83607f443b78.png');
/*!40000 ALTER TABLE `book_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class_info`
--

DROP TABLE IF EXISTS `class_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `class_info` (
  `class_id` bigint NOT NULL AUTO_INCREMENT COMMENT '类别id',
  `class_name` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '类别名',
  `sort` int NOT NULL COMMENT '排序',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`class_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class_info`
--

LOCK TABLES `class_info` WRITE;
/*!40000 ALTER TABLE `class_info` DISABLE KEYS */;
INSERT INTO `class_info` VALUES (1,'默认分类',1,'2024-06-25 05:57:23','2024-06-25 05:57:23'),(2,'测试',1000,'2024-07-06 04:43:35','2024-07-06 04:43:35');
/*!40000 ALTER TABLE `class_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lend_list`
--

DROP TABLE IF EXISTS `lend_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lend_list` (
  `ser_num` bigint NOT NULL AUTO_INCREMENT COMMENT '流水号',
  `book_id` bigint NOT NULL COMMENT '图书号',
  `reader_id` bigint NOT NULL COMMENT '读者证号',
  `lend_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '借出日期',
  `status` int NOT NULL DEFAULT '1' COMMENT '1已借阅2已归还',
  `back_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '归还日期',
  `borrower` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '借阅操作人',
  `reverter` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '归还操作人',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`ser_num`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lend_list`
--

LOCK TABLES `lend_list` WRITE;
/*!40000 ALTER TABLE `lend_list` DISABLE KEYS */;
INSERT INTO `lend_list` VALUES (1,119,1,'2024-07-04 05:10:57',1,NULL,'徐梦强',NULL,'2024-07-04 05:10:57','2024-07-04 05:10:57'),(2,120,1,'2024-07-04 05:10:59',1,NULL,'徐梦强',NULL,'2024-07-04 05:10:59','2024-07-04 05:10:59'),(3,115,1,'2024-07-04 05:11:01',1,NULL,'徐梦强',NULL,'2024-07-04 05:11:01','2024-07-04 05:11:01'),(4,112,1,'2024-07-04 05:11:03',1,NULL,'徐梦强',NULL,'2024-07-04 05:11:03','2024-07-04 05:11:03'),(5,121,1,'2024-07-04 05:11:06',1,NULL,'徐梦强',NULL,'2024-07-04 05:11:06','2024-07-04 05:11:06'),(6,107,1,'2024-07-04 05:26:47',2,'2024-07-04 13:30:54','徐梦强','徐梦强','2024-07-04 05:26:47','2024-07-04 05:30:56'),(7,72,1,'2024-07-04 05:26:55',1,NULL,'徐梦强',NULL,'2024-07-04 05:26:55','2024-07-04 05:26:55'),(8,1,1,'2024-07-04 05:27:25',1,NULL,'徐梦强',NULL,'2024-07-04 05:27:25','2024-07-04 05:27:25');
/*!40000 ALTER TABLE `lend_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reader_info`
--

DROP TABLE IF EXISTS `reader_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reader_info` (
  `reader_id` bigint NOT NULL AUTO_INCREMENT COMMENT '读者id',
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '姓名',
  `phone` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '电话',
  `sex` int NOT NULL COMMENT '性别1:男2女',
  `expire` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '会员到期日期',
  `birth` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '生日',
  `address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '地址',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`reader_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reader_info`
--

LOCK TABLES `reader_info` WRITE;
/*!40000 ALTER TABLE `reader_info` DISABLE KEYS */;
INSERT INTO `reader_info` VALUES (1,'徐梦强','13613977954',1,'2025-07-01','','','2024-07-04 05:10:46','2024-07-04 05:10:46');
/*!40000 ALTER TABLE `reader_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'lms_api'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-06 15:12:10
