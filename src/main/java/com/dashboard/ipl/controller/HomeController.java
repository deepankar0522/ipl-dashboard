package com.dashboard.ipl.controller;

import com.dashboard.ipl.model.Team;
import com.dashboard.ipl.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/ipl-dashboard")
public class HomeController {
    @Autowired
    TeamRepository teamRepository;

    @RequestMapping("/teams")
    public Iterable<Team> getAllTeams() {
        return teamRepository.findAll();

    }
}
