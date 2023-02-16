-- creation database
CREATE DATABASE IF NOT EXISTS `mybooksdb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
-- creation table books in database
CREATE TABLE IF NOT EXISTS `mybooksdb`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `author` VARCHAR(45) NULL,
  `pages` INT NULL,
  `chapterTitle` VARCHAR(45) NULL,
  `chapterContent` LONGTEXT NULL,
    `resume` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

-- ajouter livres dans table books
INSERT INTO `mybooksdb`.`books` (`id`, `title`, `author`, `pages`, `chapterTitle`, `chapterContent`, `resume`) VALUES (1, 'Le Petit Prince', 'Antoine de Saint-Exupéry', 96, 'Le Petit Prince', 'Le Petit Prince est un conte philosophique écrit par Antoine de Saint-Exupéry et publié en 1943. Il est dédié à « un ami », le pilote de ligne Robert de La Rochefoucauld, qui s''est écrasé en 1942 en Afrique du Nord. Le Petit Prince est un conte philosophique écrit par Antoine de Saint-Exupéry et publié en 1943. Il est dédié à « un ami », le pilote de ligne Robert de La Rochefoucauld, qui s''est écrasé en 1942 en Afrique du Nord.', 'Le Petit Prince est un conte philosophique écrit par Antoine de Saint-Exupéry et publié en 1943. Il est dédié à « un ami », le pilote de ligne Robert de La Rochefoucauld, qui s''est écrasé en 1942 en Afrique du Nord.');

--replace books number of pages of the book with id 1
UPDATE `mybooksdb`.`books` SET `pages` = '1000' WHERE (`id` = '1');