<?php
require 'ExtDirect.php';

    class Server{

        public function __construct() {           
            $handle = curl_init('https://app.alegra.com/api/v1/contacts/');         
        }

        function showTree(){
             curl_setopt($handle, CURLOPT_HTTPHEADER, array('Authorization: ' . "Basic ZHJodXJ0YWRvMEBtaXNlbmEuZWR1LmNvOmY0OWU2NGQxM2Q0NDRlMTFiMmZh"));
            curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($handle, CURLOPT_SSL_VERIFYHOST, false);
            curl_setopt($handle, CURLOPT_SSL_VERIFYPEER, false);
            $response = curl_exec($handle);
            $code = curl_getinfo($handle, CURLINFO_HTTP_CODE);
            
            curl_close($handle);

            //$result = json_encode($response);

            return $response;
        }
        
    }

ExtDirect::provide( 'Server' );
ExtDirect::$default_api_output = "javascript";