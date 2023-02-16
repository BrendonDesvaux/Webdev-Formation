<?php
class Book {
    public int $id; // The id of the book
    public String $title; // The title of the book
    public String $author; // The author of the book
    public Int $pages; // The number of pages of the book
    public String $chapterTitle; // The title of the first chapter of the book
    public String $chapterContent; // The content of the first chapter of the book
    public String $resume; // The resume of the book

    public function __construct($id, $title, $author, $pages, $chapterTitle, $chapterContent, $resume) {
        $this -> id = $id;
        $this->title = htmlentities($title); // htmlentities() is used to prevent XSS attacks and add accents
        $this->author = $author;
        $this->pages = $pages;
        $this->chapterTitle = $chapterTitle;
        $this->chapterContent = $chapterContent;
        $this->resume = $resume;
    }

    public function __toString() {
        return json_encode($this);
    }
}
?>