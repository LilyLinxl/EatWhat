/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50715
 Source Host           : localhost:3306
 Source Schema         : eat-what

 Target Server Type    : MySQL
 Target Server Version : 50715
 File Encoding         : 65001

 Date: 02/01/2020 17:27:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `menuIds` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `created_time` datetime(6) NOT NULL,
  `last_modified_time` datetime(6) NOT NULL,
  PRIMARY KEY (`userId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'lily', '123', 'lily@163.com', '13988889211', '1,2', NULL, '2020-01-02 00:00:00.000000', '2020-01-02 00:00:00.000000');
INSERT INTO `user` VALUES (2, 'xiaoming', '123', '122@qq.com', '18288889191', NULL, NULL, '2020-01-02 14:44:51.000000', '2020-01-02 14:44:51.000000');
INSERT INTO `user` VALUES (6, '王五', '123456', '1227495160@qq.com', '18788282763', NULL, NULL, '2020-01-02 14:58:58.000000', '2020-01-02 14:58:58.000000');
INSERT INTO `user` VALUES (7, '小张', '14e1b600b1fd579f47433b88e8d85291', '111112222@163.com', '18788282762', NULL, NULL, '2020-01-02 16:59:36.000000', '2020-01-02 16:59:36.000000');

SET FOREIGN_KEY_CHECKS = 1;
