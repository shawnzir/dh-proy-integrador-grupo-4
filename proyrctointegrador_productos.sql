CREATE DATABASE  IF NOT EXISTS `proyrctointegrador` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `proyrctointegrador`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proyrctointegrador
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `foto` varchar(500) DEFAULT NULL,
  `producto` varchar(100) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `usuario_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'foto.png','Porsche 911 Turbo s','En el 911 Turbo el motor ofrece 580 CV (427 kW)','2024-04-15 20:02:01','2024-04-15 20:02:01',NULL,1),(2,'foto.png','Porsche 911 GT3 RS','911 GT3 RS 525cv 465nm','2024-04-15 20:07:43','2024-04-15 20:07:43',NULL,2),(3,'foto.png','Porsche 911 GT2 RS','911 GT2 RS 700cv 500nm','2024-04-15 20:09:01','2024-04-15 20:09:01',NULL,2),(4,'foto.png','Ferrari 488 Pista','Ferrari 488 Pista 720cv 770nm','2024-04-15 20:10:41','2024-04-15 20:10:41',NULL,4),(5,'foto.png','Ferrari 458 Speciale','Ferrari 458 Speciale 650cv','2024-04-15 20:12:32','2024-04-15 20:12:32',NULL,3),(6,'lamborghini.jpg','Lamborghini Aventador SVJ','Lamborghini Aventador SVJ con motor V12 de 6.5 litros y 770 cv','2024-04-15 20:15:31','2024-04-15 20:15:31',NULL,5),(7,'foro.png','Audi R8 V10 Plus','Audi R8 V10 Plus con motor V10 de 5.2 litros y 610 cv','2024-04-15 20:16:36','2024-04-15 20:16:36',NULL,1),(8,'foto.png','BMW M5','BMW M5 con motor V8 de 4.4 litros y 600 cv','2024-04-15 20:17:19','2024-04-15 20:17:19',NULL,4),(9,'foto.png','Mercedes-Benz AMG GT','Mercedes-Benz AMG GT con motor V8 de 4.0 litros y 577 cv','2024-04-15 20:18:31','2024-04-15 20:18:31',NULL,3),(10,'foto.png','McLaren 720S','McLaren 720S con motor V8 de 4.0 litros y 710 cv','2024-04-15 20:19:22','2024-04-15 20:19:22',NULL,5);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-15 18:19:42
