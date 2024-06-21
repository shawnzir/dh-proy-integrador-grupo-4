-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-06-2024 a las 20:39:03
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyrctointegrador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL,
  `producto_id` int(10) UNSIGNED DEFAULT NULL,
  `comentario` varchar(3000) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `usuario_id`, `producto_id`, `comentario`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'terrible misil', '2024-04-15 20:46:34', '2024-04-15 20:46:34'),
(2, 1, 2, 'terrible caño', '2024-04-15 20:47:14', '2024-04-15 20:47:14'),
(3, 2, 1, 'terrible caño', '2024-04-15 20:47:53', '2024-04-15 20:47:53'),
(4, 1, 3, 'terrible misil', '2024-04-15 20:51:19', '2024-04-15 20:51:19'),
(5, 1, 4, 'terrible misil', '2024-04-15 20:51:56', '2024-04-15 20:51:56'),
(6, 1, 5, 'terrible misil', '2024-04-15 20:52:03', '2024-04-15 20:52:03'),
(7, 1, 6, 'terrible misil', '2024-04-15 20:52:06', '2024-04-15 20:52:06'),
(8, 1, 7, 'terrible misil', '2024-04-15 20:52:10', '2024-04-15 20:52:10'),
(9, 1, 8, 'terrible misil', '2024-04-15 20:52:13', '2024-04-15 20:52:13'),
(10, 1, 9, 'terrible misil', '2024-04-15 20:52:16', '2024-04-15 20:52:16'),
(11, 1, 10, 'terrible misil', '2024-04-15 20:52:20', '2024-04-15 20:52:20'),
(12, 2, 2, 'que caño', '2024-04-15 21:02:10', '2024-04-15 21:02:10'),
(13, 2, 3, 'que caño', '2024-04-15 21:02:18', '2024-04-15 21:02:18'),
(14, 2, 4, 'que caño', '2024-04-15 21:02:21', '2024-04-15 21:02:21'),
(15, 2, 5, 'que caño', '2024-04-15 21:02:23', '2024-04-15 21:02:23'),
(16, 2, 6, 'que caño', '2024-04-15 21:02:26', '2024-04-15 21:02:26'),
(17, 2, 7, 'que caño', '2024-04-15 21:02:28', '2024-04-15 21:02:28'),
(18, 2, 8, 'que caño', '2024-04-15 21:02:32', '2024-04-15 21:02:32'),
(19, 2, 9, 'que caño', '2024-04-15 21:02:35', '2024-04-15 21:02:35'),
(20, 2, 10, 'que caño', '2024-04-15 21:02:38', '2024-04-15 21:02:38'),
(21, 3, 1, 'tenes los services oficiales?', '2024-04-15 21:13:24', '2024-04-15 21:13:24'),
(22, 4, 2, 'tenes los services oficiales?', '2024-04-15 21:13:35', '2024-04-15 21:13:35'),
(23, 5, 8, 'tenes los services oficiales?', '2024-04-15 21:13:42', '2024-04-15 21:13:42'),
(24, 4, 9, 'tenes los services oficiales?', '2024-04-15 21:13:50', '2024-04-15 21:13:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `producto` varchar(100) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `usuario_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `foto`, `producto`, `descripcion`, `created_at`, `updated_at`, `deleted_at`, `usuario_id`) VALUES
(1, '911turbos.webp\r\n', 'Porsche 911 Turbo s', 'En el 911 Turbo el motor ofrece 580 CV (427 kW)', '2024-04-15 20:02:01', '2024-06-10 18:36:15', NULL, 1),
(2, 'gt3rs.jpeg\r\n', 'Porsche 911 GT3 RS', '911 GT3 RS 525cv 465nm', '2024-04-15 20:07:43', '2024-06-10 18:36:25', NULL, 2),
(3, 'gt2rs.webp', 'Porsche 911 GT2 RS', '911 GT2 RS 700cv 500nm', '2024-04-15 20:09:01', '2024-06-10 18:36:35', NULL, 2),
(4, '488pista.jpg', 'Ferrari 488 Pista', 'Ferrari 488 Pista 720cv 770nm', '2024-04-15 20:10:41', '2024-06-10 18:36:44', NULL, 4),
(5, 'ferrari-458-speciale.avif', 'Ferrari 458 Speciale', 'Ferrari 458 Speciale 650cv', '2024-04-15 20:12:32', '2024-06-10 18:36:56', NULL, 3),
(6, 'lambosvj.jpg', 'Lamborghini Aventador SVJ', 'Lamborghini Aventador SVJ con motor V12 de 6.5 litros y 770 cv', '2024-04-15 20:15:31', '2024-06-10 18:37:21', NULL, 5),
(7, 'audir8.jpg', 'Audi R8 V10 Plus', 'Audi R8 V10 Plus con motor V10 de 5.2 litros y 610 cv', '2024-04-15 20:16:36', '2024-06-10 18:37:31', NULL, 1),
(8, 'bmwm5.jpeg', 'BMW M5', 'BMW M5 con motor V8 de 4.4 litros y 600 cv', '2024-04-15 20:17:19', '2024-06-10 18:37:41', NULL, 4),
(9, 'amggt.jpg', 'Mercedes-Benz AMG GT', 'Mercedes-Benz AMG GT con motor V8 de 4.0 litros y 577 cv', '2024-04-15 20:18:31', '2024-06-10 18:37:51', NULL, 3),
(10, 'mclaren-720s-1.webp', 'McLaren 720S', 'McLaren 720S con motor V8 de 4.0 litros y 710 cv', '2024-04-15 20:19:22', '2024-06-10 18:38:00', NULL, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`,`usuario`, `password`, `fecha`, `dni`, `foto`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'shawnzir@gmai.com','Shawn', '12345', '2024-04-15', 4629873, 'foto.png', '2024-04-15 18:03:04', '2024-04-15 18:03:04', NULL),
(2, 'bautistalignini@gmail.com', 'bauti','54321', '2024-04-15', 46293975, 'foto.png', '2024-04-15 19:09:29', '2024-04-15 19:09:29', NULL),
(3, 'tomasweskam@gmail.com', 'tomas','1111', '2024-04-15', 4648395, 'foto.png', '2024-04-15 19:10:22', '2024-04-15 19:10:22', NULL),
(4, 'manuelsacullo@gmail.com','manu', '2222', '2024-04-15', 463948545, 'foto.png', '2024-04-15 19:43:44', '2024-04-15 19:43:44', NULL),
(5, 'ferminpacheco@gmail.com', 'fermin','33333', '2024-04-15', 22852343, 'foto.png', '2024-04-15 19:45:32', '2024-04-15 19:45:32', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
