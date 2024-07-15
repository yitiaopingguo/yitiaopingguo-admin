package com.lcf.controller;

import com.lcf.entity.Test;
import com.lcf.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TestController {
    @Autowired TestService testService;
    @GetMapping("/test")
    public List<Test> test(){
        return testService.selectTestAll();
    }
}
