-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.7.26 - MySQL Community Server (GPL)
-- 服务器OS:                        Win64
-- HeidiSQL 版本:                  10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for travel
CREATE DATABASE IF NOT EXISTS `travel` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `travel`;

-- Dumping structure for table travel.banner
CREATE TABLE IF NOT EXISTS `banner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) NOT NULL DEFAULT '0' COMMENT '商品id',
  `pic` varchar(500) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '轮播图片',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='商品轮播图';

-- Dumping data for table travel.banner: 3 rows
DELETE FROM `banner`;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` (`id`, `goods_id`, `pic`) VALUES
	(1, 1, 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png'),
	(2, 1, 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg'),
	(3, 1, 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg');
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;

-- Dumping structure for table travel.city
CREATE TABLE IF NOT EXISTS `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '城市名称',
  `value` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '城市编号',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='城市信息列表';

-- Dumping data for table travel.city: 2 rows
DELETE FROM `city`;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` (`id`, `label`, `value`) VALUES
	(1, '杭州', '10001'),
	(2, '苏州', '10002');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;

-- Dumping structure for table travel.comment
CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar` varchar(500) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '头像',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `info` varchar(500) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '评论信息',
  `username` varchar(500) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '评论用户名',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='评论列表';

-- Dumping data for table travel.comment: 18 rows
DELETE FROM `comment`;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` (`id`, `avatar`, `create_time`, `info`, `username`) VALUES
	(1, 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png', 1595238771, '空气清新', 'user'),
	(2, 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png', 1595238771, '空气清新', 'user'),
	(3, 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png', 1595238771, '空气清新', 'user'),
	(4, 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png', 1595238771, '空气清新', 'user'),
	(5, 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png', 1595238771, '空气清新', 'user'),
	(6, 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png', 1595238771, '空气清新', 'user'),
	(7, 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png', 1595238771, '空气清新', 'user'),
	(8, 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png', 1595238771, '空气清新', 'user'),
	(9, 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg', 123134432, '123111', '5'),
	(10, 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg', 123134432, '123111', '5'),
	(11, 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg', 123134432, '123111', '5'),
	(12, 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg', 1607312136, '123111', '5'),
	(13, 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg', 1607312152, '123111', '5'),
	(14, 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg', 1607312311, '123111', '5'),
	(15, 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg', 1607322305, '123111', '5'),
	(16, 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg', 1607322345, '123111', '5'),
	(17, 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg', 1607322402, '123111', '5'),
	(18, 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg', 1607322434, '123111', '5');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- Dumping structure for table travel.house
CREATE TABLE IF NOT EXISTS `house` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '商品标题',
  `img` varchar(500) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '图片',
  `price` decimal(20,3) NOT NULL DEFAULT '0.000' COMMENT '价格',
  `info` varchar(500) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '信息',
  `start_time` int(11) NOT NULL DEFAULT '0' COMMENT '开始时间',
  `end_time` int(11) NOT NULL DEFAULT '0',
  `update_time` int(11) NOT NULL DEFAULT '0' COMMENT '更新时间',
  `type` varchar(500) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '商品类型',
  `msg` varchar(500) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '商品介绍',
  `publishtime` varchar(500) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0' COMMENT '发布时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='出租房屋信息表';

-- Dumping data for table travel.house: 7 rows
DELETE FROM `house`;
/*!40000 ALTER TABLE `house` DISABLE KEYS */;
INSERT INTO `house` (`id`, `title`, `img`, `price`, `info`, `start_time`, `end_time`, `update_time`, `type`, `msg`, `publishtime`) VALUES
	(1, '东城民宿', 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', 100.000, '东城区交通方便', 1595238771, 1597917171, 1597917171, '1', '东城区交通方便', '1595238771'),
	(2, '西城民宿', 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png', 12.000, '西城区山水怡情', 0, 0, 0, '1', '0', '0'),
	(3, '新区民宿', 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', 200.000, '新区民宿位置优越', 0, 0, 0, '1', '0', '0'),
	(4, '老城民宿', 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg', 220.000, '老城区风景秀美', 0, 0, 0, '1', '0', '0'),
	(5, 'A城民宿', 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', 102.000, '东城区交通方便', 0, 0, 0, '0', '0', '0'),
	(6, 'B城民宿', 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', 1010.000, '东城区交通方便', 0, 0, 0, '0', '0', '0'),
	(7, 'xx民宿', 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', 111.000, '很方便', 1595238771, 1595238771, 0, '0', '东城区交通方便', '1595238771');
/*!40000 ALTER TABLE `house` ENABLE KEYS */;

-- Dumping structure for table travel.t_order
CREATE TABLE IF NOT EXISTS `t_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '创建时间',
  `img` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '留言信息',
  `info` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '订单信息',
  `price` decimal(20,3) DEFAULT NULL COMMENT '价格',
  `title` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '订单标题',
  `status` tinyint(4) DEFAULT NULL COMMENT '订单状态',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='订单表';

-- Dumping data for table travel.t_order: 9 rows
DELETE FROM `t_order`;
/*!40000 ALTER TABLE `t_order` DISABLE KEYS */;
INSERT INTO `t_order` (`id`, `create_time`, `img`, `info`, `price`, `title`, `status`) VALUES
	(1, '2020-07-05', 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', '东城区交通方便', 100.000, '东城民宿', 2),
	(2, '2020-07-05', 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', '东城区交通方便', 100.000, '东城民宿', 1),
	(3, '2020-07-05', 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', '东城区交通方便', 100.000, '东城民宿', 1),
	(4, '2020-07-05', 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', '东城区交通方便', 100.000, '东城民宿', 1),
	(5, '2020-07-05', 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', '东城区交通方便', 100.000, '东城民宿', 1),
	(6, '2020-07-05', 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', '东城区交通方便', 100.000, '东城民宿', 2),
	(7, '2020-07-05', 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', '东城区交通方便', 100.000, '东城民宿', 2),
	(8, '2020-07-05', 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', '东城区交通方便', 100.000, '东城民宿', 2),
	(9, '2020-07-05', 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', '东城区交通方便', 100.000, '东城民宿', 2);
/*!40000 ALTER TABLE `t_order` ENABLE KEYS */;

-- Dumping structure for table travel.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tel` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sign` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='用户表';

-- Dumping data for table travel.user: 1 rows
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `avatar`, `tel`, `sign`, `token`, `username`, `password`) VALUES
	(1, '12313', '12312312311', '2332', '4', '5', ''),
	(2, 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg', '3123', '123', 'I2LPVLG4RQTY65HQYDHXT4Z825L5477N', '51', '202cb962ac59075b964b07152d234b70');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
