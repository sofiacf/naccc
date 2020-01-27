package com.naccc2020;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DatabaseLoaderController {
    private final DatabaseLoader databaseLoader;

    @Autowired
    public DatabaseLoaderController(DatabaseLoader databaseLoader) {
        this.databaseLoader = databaseLoader;
    }

    @RequestMapping(value = "/load")
    @GetMapping
    @ResponseBody
    public String load() {
        this.databaseLoader.load();
        return "loaded";
    }
}
