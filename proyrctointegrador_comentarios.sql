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
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario_id` int(10) unsigned DEFAULT NULL,
  `producto_id` int(10) unsigned DEFAULT NULL,
  `comentario` varchar(3000) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,1,1,'terrible misil','2024-04-15 20:46:34','2024-04-15 20:46:34'),(2,1,2,'terrible caño','2024-04-15 20:47:14','2024-04-15 20:47:14'),(3,2,1,'terrible caño','2024-04-15 20:47:53','2024-04-15 20:47:53'),(4,1,3,'terrible misil','2024-04-15 20:51:19','2024-04-15 20:51:19'),(5,1,4,'terrible misil','2024-04-15 20:51:56','2024-04-15 20:51:56'),(6,1,5,'terrible misil','2024-04-15 20:52:03','2024-04-15 20:52:03'),(7,1,6,'terrible misil','2024-04-15 20:52:06','2024-04-15 20:52:06'),(8,1,7,'terrible misil','2024-04-15 20:52:10','2024-04-15 20:52:10'),(9,1,8,'terrible misil','2024-04-15 20:52:13','2024-04-15 20:52:13'),(10,1,9,'terrible misil','2024-04-15 20:52:16','2024-04-15 20:52:16'),(11,1,10,'terrible misil','2024-04-15 20:52:20','2024-04-15 20:52:20'),(12,2,2,'que caño','2024-04-15 21:02:10','2024-04-15 21:02:10'),(13,2,3,'que caño','2024-04-15 21:02:18','2024-04-15 21:02:18'),(14,2,4,'que caño','2024-04-15 21:02:21','2024-04-15 21:02:21'),(15,2,5,'que caño','2024-04-15 21:02:23','2024-04-15 21:02:23'),(16,2,6,'que caño','2024-04-15 21:02:26','2024-04-15 21:02:26'),(17,2,7,'que caño','2024-04-15 21:02:28','2024-04-15 21:02:28'),(18,2,8,'que caño','2024-04-15 21:02:32','2024-04-15 21:02:32'),(19,2,9,'que caño','2024-04-15 21:02:35','2024-04-15 21:02:35'),(20,2,10,'que caño','2024-04-15 21:02:38','2024-04-15 21:02:38'),(21,3,1,'tenes los services oficiales?','2024-04-15 21:13:24','2024-04-15 21:13:24'),(22,4,2,'tenes los services oficiales?','2024-04-15 21:13:35','2024-04-15 21:13:35'),(23,5,8,'tenes los services oficiales?','2024-04-15 21:13:42','2024-04-15 21:13:42'),(24,4,9,'tenes los services oficiales?','2024-04-15 21:13:50','2024-04-15 21:13:50');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
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
