<?php
class Book {
    public int $id;
    public String $title;
    public String $author;
    public Int $pages;
    public String $chapterTitle;
    public String $chapterContent;
    public String $resume;

    public function __construct($title, $author, $pages, $chapterTitle, $chapterContent, $resume) {
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