package com.programwithterik.restservice.Restapp;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorlds {
    @RequestMapping("/hei")
    public String index(){
        return "Hello World";
    }
}
