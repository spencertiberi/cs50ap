---
layout: problempost
title: "Quidditch"
date: 2017-10-24 00:00:00 -0400
categories: practice
image: quidditch.jpg
---

# Quidditch

## Concepts

Functions

## Problem
You want to calculate the final score for a team that has just participated in an exciting quidditch match. Building on the code below, implement a function that takes two variables as input — an int indicating the number of times the team got the quaffle through the other team's hoops, and a bool indicating whether or not they caught the snitch -- and returns that team's final score (what would the return type be?).  

Recall that each 'goal' in quidditch is worth 10 points, and that catching the snitch is worth 150 points.

## Distribution Code
```c
#include <cs50.h>
#include <stdio.h>

// TODO: function prototype for final_score

int main(void)
{
    printf("Number of times your chasers got the quaffle through a hoop: ");
    int goal_num = get_int();
    printf("Did your team's seeker catch the snitch? Enter 1 if true, 0 otherwise: ");
    bool snitch_caught = get_int();
    int score = final_score(goal_num, snitch_caught);
    printf("Your team's final score is: %d\n", score);
}

// TODO: function definition for final_score

```
