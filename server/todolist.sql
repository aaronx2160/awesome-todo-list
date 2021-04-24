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

 Date: 24/04/2021 22:30:20
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
  `timeCreated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todolist
-- ----------------------------
BEGIN;
INSERT INTO `todolist` VALUES (30, '住院', '0', '2021-04-24 22:02:51');
INSERT INTO `todolist` VALUES (31, 'lololo', '0', '2021-04-24 22:28:10');
INSERT INTO `todolist` VALUES (32, '1', '1', '2021-04-24 22:02:51');
INSERT INTO `todolist` VALUES (35, '4', '0', '2021-04-24 22:02:51');
INSERT INTO `todolist` VALUES (36, '5', '0', '2021-04-24 22:02:51');
INSERT INTO `todolist` VALUES (37, '6', '0', '2021-04-24 22:02:51');
INSERT INTO `todolist` VALUES (39, '7', '0', '2021-04-24 22:02:51');
INSERT INTO `todolist` VALUES (41, '1', '0', '2021-04-24 22:02:51');
INSERT INTO `todolist` VALUES (42, '1', '0', '2021-04-24 22:02:51');
INSERT INTO `todolist` VALUES (43, '1', '0', '2021-04-24 22:28:43');
INSERT INTO `todolist` VALUES (44, '1', '1', '2021-04-24 22:02:51');
INSERT INTO `todolist` VALUES (45, '1', '1', '2021-04-24 22:02:51');
INSERT INTO `todolist` VALUES (46, '1', '1', '2021-04-24 22:02:51');
INSERT INTO `todolist` VALUES (47, '22222', '0', '2021-04-24 22:28:05');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
