-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-11-2022 a las 02:22:04
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `canarioweb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultados`
--

CREATE TABLE `resultados` (
  `id` int(11) NOT NULL,
  `Deporte` varchar(10) NOT NULL,
  `Categoria` varchar(10) NOT NULL,
  `Fecha` int(3) NOT NULL,
  `Cancha` varchar(25) NOT NULL,
  `Local` varchar(25) NOT NULL,
  `PuntosL` int(3) NOT NULL,
  `Visitante` varchar(25) NOT NULL,
  `PuntosV` int(3) NOT NULL,
  `img_id` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `resultados`
--

INSERT INTO `resultados` (`id`, `Deporte`, `Categoria`, `Fecha`, `Cancha`, `Local`, `PuntosL`, `Visitante`, `PuntosV`, `img_id`) VALUES
(2, 'Fútbol', '2009', 14, 'Los Álamos', 'Los Álamos', 6, 'Los Studs', 5, NULL),
(3, 'Básquet', 'U-17', 9, 'Guernica', 'Cultural Guernica', 84, 'Los Álamos', 91, NULL),
(5, '', '', 0, '', '', 0, '', 0, NULL),
(6, 'Básquet', 'Maxi', 0, 'Los Álamos', 'Los Álamos', 57, 'Cultural Guernica', 46, NULL),
(7, 'Básquet', 'U-17', 12, 'Círculo Social Longchamps', 'Círculo Social Longchamps', 15, 'Los Álamos', 27, NULL),
(8, 'Básquet', 'Premini', 1, 'Los Álamos', 'Los Álamos', 24, 'Defensores', 11, NULL),
(9, 'Fútbol', '2009', 4, 'Esperanza', 'Esperanza', 4, 'Los Álamos', 4, 't6bkqyjo6o44eeefg04f'),
(10, 'Básquet', 'U-13', 1, 'Los Álamos', 'Los Álamos', 35, 'Guernica', 34, 'sq7oefrvyksgklm69aj7'),
(11, 'Básquet', 'Maxi', 5, 'Ezeiza', 'Spegazzini', 89, 'Los Álamos', 77, 'mx3eis8omigmn1op0ort');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'juan', 'e10adc3949ba59abbe56e057f20f883e'),
(3, 'eli', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `resultados`
--
ALTER TABLE `resultados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `resultados`
--
ALTER TABLE `resultados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
