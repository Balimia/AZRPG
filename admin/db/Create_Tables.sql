CREATE TABLE `User` ( `id` MEDIUMINT UNSIGNED AUTO_INCREMENT, `DiscordId` VARCHAR(20) NOT NULL UNIQUE, `JoinDate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, `LastActive` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `Membership` TINYINT DEFAULT NULL, `MembershipEndDate` DATETIME DEFAULT NULL, `Banned` TINYINT DEFAULT NULL, PRIMARY KEY (`id`));
CREATE TABLE `City` ( `id` TINYINT AUTO_INCREMENT, `Name` VARCHAR(20) NOT NULL UNIQUE, PRIMARY KEY (`id`));
CREATE TABLE `UserStats` ( `id` MEDIUMINT UNSIGNED AUTO_INCREMENT, `id_User` MEDIUMINT UNSIGNED NOT NULL UNIQUE, `CurrentCity` TINYINT NOT NULL DEFAULT 1, `HighestCity` TINYINT NOT NULL DEFAULT 1, `Level` TINYINT NOT NULL DEFAULT 1, `Experience` BIGINT NOT NULL DEFAULT 0, PRIMARY KEY (`id`), FOREIGN KEY (`id_User`) REFERENCES `User` (`id`) ON DELETE CASCADE, FOREIGN KEY (`CurrentCity`) REFERENCES `City` (`id`), FOREIGN KEY (`HighestCity`) REFERENCES `City` (`id`));
CREATE TABLE `Item` ( `id` SMALLINT UNSIGNED AUTO_INCREMENT, `Name` VARCHAR(30) NOT NULL, `StackLimit` BIGINT UNSIGNED NOT NULL DEFAULT 1, PRIMARY KEY (`id`));
CREATE TABLE `UserInventory` ( `id` MEDIUMINT UNSIGNED AUTO_INCREMENT, `id_User` MEDIUMINT UNSIGNED NOT NULL, `id_Item` SMALLINT UNSIGNED NOT NULL, `Quantity` BIGINT NOT NULL DEFAULT 0, PRIMARY KEY (`id`), FOREIGN KEY (`id_User`) REFERENCES `User` (`id`) ON DELETE CASCADE, FOREIGN KEY (`id_Item`) REFERENCES `Item` (`id`) ON DELETE CASCADE);
CREATE TABLE `Cooldown` ( `id` TINYINT AUTO_INCREMENT, `Name` VARCHAR(20) NOT NULL, `Duration` BIGINT NOT NULL, PRIMARY KEY (`id`));
CREATE TABLE `UserCooldown` ( `id` MEDIUMINT UNSIGNED AUTO_INCREMENT, `id_User` MEDIUMINT UNSIGNED NOT NULL, `id_Cooldown` TINYINT NOT NULL, `Cooldown` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`), FOREIGN KEY (`id_User`) REFERENCES `User` (`id`) ON DELETE CASCADE, FOREIGN KEY (`id_Cooldown`) REFERENCES `Cooldown` (`id`) ON DELETE CASCADE);
CREATE TABLE `Skill` ( `id` TINYINT AUTO_INCREMENT, `Name` VARCHAR(20) NOT NULL, PRIMARY KEY (`id`));
CREATE TABLE `UserSkills` ( `id` MEDIUMINT UNSIGNED AUTO_INCREMENT, `id_User` MEDIUMINT UNSIGNED NOT NULL, `id_Skill` TINYINT NOT NULL, `Level` TINYINT NOT NULL DEFAULT 1, `Experience` BIGINT NOT NULL DEFAULT 0, PRIMARY KEY (`id`), FOREIGN KEY (id_User) REFERENCES `User` (`id`) ON DELETE CASCADE, FOREIGN KEY (id_Skill) REFERENCES `Skill` (`id`) ON DELETE CASCADE);
CREATE TABLE `Combat` ( `id` TINYINT AUTO_INCREMENT, `Name` VARCHAR(20) NOT NULL, PRIMARY KEY (`id`));
CREATE TABLE `UserCombat` ( `id` MEDIUMINT UNSIGNED AUTO_INCREMENT, `id_User` MEDIUMINT UNSIGNED NOT NULL, `id_Combat` TINYINT NOT NULL, `Current` INT NOT NULL, `Default` INT NOT NULL, PRIMARY KEY (`id`), FOREIGN KEY (id_User) REFERENCES `User` (`id`) ON DELETE CASCADE, FOREIGN KEY (id_Combat) REFERENCES `Combat` (`id`) ON DELETE CASCADE);