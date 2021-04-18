/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : localhost:3306
 Source Schema         : todolist

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 18/04/2021 22:59:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for todolist
-- ----------------------------
DROP TABLE IF EXISTS `todolist`;
CREATE TABLE `todolist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `status` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todolist
-- ----------------------------
BEGIN;
INSERT INTO `todolist` VALUES (1, 'Racing car sprays burning fuel into crowd', '1');
INSERT INTO `todolist` VALUES (2, 'Japanese princess to wed commoner.', '1');
INSERT INTO `todolist` VALUES (3, 'Australian walks 100km after outback crash.', '1');
INSERT INTO `todolist` VALUES (4, 'Man charged over missing wedding girl.', '1');
INSERT INTO `todolist` VALUES (5, 'Los Angeles battles huge wildfires.', '1');
INSERT INTO `todolist` VALUES (25, 'aa', '1');
INSERT INTO `todolist` VALUES (26, '嗷嗷', '1');
INSERT INTO `todolist` VALUES (28, 'what？？？？', '1');
INSERT INTO `todolist` VALUES (29, 'aa2', '0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
