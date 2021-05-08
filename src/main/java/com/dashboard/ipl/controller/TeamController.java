package com.dashboard.ipl.controller;

import com.dashboard.ipl.model.Team;
import com.dashboard.ipl.repository.MatchRepository;
import com.dashboard.ipl.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/ipl-dashboard")
public class TeamController {

    @Autowired
    TeamRepository teamRepository;

    @Autowired
    MatchRepository matchRepository;

    @GetMapping("/teams/{teamName}")
    public Team getTeam(@PathVariable String teamName){
        Team team =  teamRepository.findByTeamName(teamName);
        team.setMatches(matchRepository.getLatestMatchedByTeam(teamName,4));
        return team;
    }
}
