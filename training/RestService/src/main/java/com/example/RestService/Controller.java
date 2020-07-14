package com.example.RestService;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @Autowired
    private SukaService sukaService;


    private static final String template = "%s";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/suka")
    public Suka registration() {
        Suka s = new Suka(1L, "Igor");
        return sukaService.save(s);
    }

    @GetMapping("/CarRegistration")
    public Registration registration(@RequestParam(value = "userid", defaultValue = "Pidor") String userid, @RequestParam(value = "car", defaultValue = "BMW")String carNum) {
        return new Registration(String.format(template, userid), String.format(template, carNum));
    }

    @GetMapping("/CarRemove")
    public Remove remove(@RequestParam(value = "userid", defaultValue = "Pidor") String userid, @RequestParam(value = "car", defaultValue = "BMW")String carNum) {
        return new Remove(String.format(template, userid), String.format(template, carNum));
    }

    @GetMapping("/CarCheck")
    public Check check(@RequestParam(value = "userid", defaultValue = "Pidor") String userid, @RequestParam(value = "car", defaultValue = "BMW")String carNum) {
        return new Check(String.format(template, userid), String.format(template, carNum));
    }

}