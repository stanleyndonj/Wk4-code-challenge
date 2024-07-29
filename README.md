# Wk4-code-challenge
# Flatdango

## Introduction

Flatiron Movie Theater is open for business! Flatdango is an application that allows users to purchase movie tickets from the theater. This project involves fetching movie data from a local JSON server, displaying it on a webpage, and providing functionalities to interact with the movie data.

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Pre-requisite Data](#pre-requisite-data)
- [Project Setup](#project-setup)
- [Core Deliverables](#core-deliverables)
- [Bonus Deliverables](#bonus-deliverables)
- [Extra Bonus](#extra-bonus)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Requirements

For this project, you must:

- Have a well-written README file.
- Fetch data from a local server running JSON DB server.

## Pre-requisite Data

You can use this JSON file for your server DB.

```json
{
  "films": [
    {
      "id": "1",
      "title": "The Giant Gila Monster",
      "runtime": "108",
      "capacity": 30,
      "showtime": "04:00PM",
      "tickets_sold": 27,
      "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
      "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
    },
    {
      "id": "2",
      "title": "Manos: The Hands Of Fate",
      "runtime": "118",
      "capacity": 50,
      "showtime": "06:45PM",
      "tickets_sold": 44,
      "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
      "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
    }
  ]
}
