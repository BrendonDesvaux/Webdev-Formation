<?php
error_reporting(E_ALL); ini_set('display_errors', 1);
   function homeController() {
    ob_start();
        require 'views/main.php';
    $content = ob_get_clean();
    // afficher la vue dans le layout
    require 'views/layout.php';
    }
    function galeryController() {
    ob_start();
    require 'views/galery.php';
    $content = ob_get_clean();
    // afficher la vue dans le layout
    require 'views/layout.php';
    }
    function creationController(){
    ob_start();
    require 'views/creation.php';
    $content = ob_get_clean();
    // afficher la vue dans le layout
    require 'views/layout.php';
    }
    function favorisController(){
    ob_start();
    require 'views/favoris.php';
    $content = ob_get_clean();
    // afficher la vue dans le layout
    require 'views/layout.php';
    }
    function writingController(){
    ob_start();
    require 'views/ecrire.php';
    $content = ob_get_clean();
    // afficher la vue dans le layout
    require 'views/layout.php';
    }
    function writingControllerSecond(){
    ob_start();
    require 'views/ecrire2.php';
    $content = ob_get_clean();
    // afficher la vue dans le layout
    require 'views/layout.php';
    }
    function profilController(){
    ob_start();
    require 'views/profil.php';
    $content = ob_get_clean();
    // afficher la vue dans le layout
    require 'views/layout.php';
    }
    function fofController() {
    ob_start();
    require 'views/404.php';
    $content = ob_get_clean();
    // afficher la vue dans le layout
    require 'views/layout.php';
    }
?>