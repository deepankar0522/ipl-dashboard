package com.dashboard.ipl.controller;

import com.dashboard.ipl.model.Match;
import com.dashboard.ipl.repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/ipl-dashboard")
public class MatchController {

    @Autowired
    MatchRepository matchRepository;

    @RequestMapping("/teams/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
        return matchRepository.getMatchesByTeamBetweenDates(teamName, LocalDate.of(year, 1, 1), LocalDate.of(year + 1, 1, 1));

    }

}
