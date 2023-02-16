<?php
class Reponse
{
    // Declare private variables
    private $_data;
    private $_exception;

    // Declare public getter for the private $_data variable
    public function getData()
    {
        return $this->_data;
    }
    
    // Declare public getter for the private $_data variable
    public function isDataFound()
    {
        return $this->_data != null;
    }
    
    // Declare public getter for the private $_data variable
    public function isSuccessful()
    {
        return $this->_exception == null;
    }
    
    // Declare a constructor for the Reponse class
    public function __construct($pData = false, $pException=NULL)
    {
        $this->_data = $pData;
        $this->_exception = $pException;
    }
}
?>