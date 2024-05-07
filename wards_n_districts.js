// Dados

const wards_n_districts = {
    "Cliffside": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 629
        },
        "description": "Cliffside encompasses the docks and waterfront of Sharn, running along the edge of the Dagger River and up the cliff above it. Massive lifts levitate goods up to the skydocks in the district of Precarious. The area's rough and poor, filled with sailors and dockworkers. Many of these boisterous folk love the life in Cliffside; as a common saying goes, \"Better a tankard of ale in Cliffside than a barrel of Central wine.\"\nPlenty of legitimate services can be found here—ships need supplies and repairs, goods need to be stored, captains need to hire crew, and sailors need a dry bed to sleep in once in a while—but other businesses meet different kinds of demands. These services include bordellos, taverns, gaming dens, and shadier entertainments for sailors to spend their off duty hours and wages on.",
        "districts": {
            "Grayflood": {
                "arrow_positions": {
                    "slice_x": 120,
                    "slice_y": 440
                },
                "connections": [
                    "Ship's Towers",
                    "Sharn's Welcome"
                ],
                "description": "A seedy waterfront district",
                "locations": {
                    "Mud Caves": {
                        "description": "This shantytown sits on the edge of Cliffside, where generations of destitute people have carved out homes in the cliff walls. It's a wretched existence, but most of the inhabitants have no other options. It also makes an excellent hiding place for fugitives."
                    }
                }
            },
            "Sharn's Welcome": {
                "arrow_positions": {
                    "slice_x": 135,
                    "slice_y": 675
                },
                "connections": [
                    "Grayflood",
                    "Ship's Towers",
                    "Oldkeep",
                    "Precarious",
                    "The Stores",
                    "Fallen",
                    "Foundation"
                ],
                "description": "Also known as the docks of Cliffside, this area is rough and dirty. Its taverns frequently host brawls, while the inns offer travelers a wide variety of ways to be cheated or robbed.",
                "locations": {}
            },
            "Ship's Towers": {
                "arrow_positions": {
                    "slice_x": 220,
                    "slice_y": 950
                },
                "connections": [
                    "Grayflood",
                    "Sharn's Welcome"
                ],
                "description": "Drifting alongside the Cliffside docks is a collection of rafts, ships, and houseboats lashed together to form a floating",
                "locations": {}
            }
        }
    },
    "Lower Central": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 629
        },
        "councilor": {
            "Sava Kharisa": {
                "description": "Since taking her seat, she has fought to improve conditions for the lower classes of Sharn, and she has made many enemies on the council and beyond.",
                "race": "Human"
            }
        },
        "description": "This district is peaceful and largely residential; it's the safest and most pleasant of the lower wards. Goods and services are largely priced for those with a comfortable lifestyle, and the Sharn Watch is plentiful and well paid.",
        "districts": {
            "Boldrei's Hearth": {
                "arrow_positions": {
                    "slice_x": 610,
                    "slice_y": 505
                },
                "connections": [
                    "North Towers",
                    "Olladra's Kitchen",
                    "North Market",
                    "Sovereign Towers"
                ],
                "description": "A haven for travelers, this district contains reliable inns ranging from modest to comfortable quality.",
                "locations": {}
            },
            "Granite Halls": {
                "arrow_positions": {
                    "slice_x": 480,
                    "slice_y": 650
                },
                "connections": [
                    "Olladra's Kitchen",
                    "Vallia Towers",
                    "Forgelight Towers",
                    "Center Bridge",
                    "Dragon Towers"
                ],
                "description": "Quirky boutiques and art galleries stand out among a host of more mundane shops.",
                "locations": {}
            },
            "Myshan Gardens": {
                "arrow_positions": {
                    "slice_x": 470,
                    "slice_y": 506
                },
                "connections": [
                    "Boldrei's Hearth",
                    "Vallia Towers",
                    "Ambassador Towers"
                ],
                "description": "A residential district that caters to affluent artists",
                "locations": {}
            },
            "North Towers": {
                "arrow_positions": {
                    "slice_x": 515,
                    "slice_y": 425
                },
                "connections": [
                    "Boldrei's Hearth",
                    "Myshan Gardens",
                    "Longstairs",
                    "Tradefair"
                ],
                "description": "Quirky boutiques and small bookstores stand out among a host of more mundane shops.",
                "locations": {}
            },
            "Olladra's Kitchen": {
                "arrow_positions": {
                    "slice_x": 525,
                    "slice_y": 594
                },
                "connections": [
                    "Boldrei's Hearth",
                    "Granite Halls",
                    "Vallia Towers",
                    "Torchfire",
                    "Swordpoint"
                ],
                "description": "Neither the best nor worst Sharn has to offer, Olladra's Kitchen is home to a wide number of taverns and restaurants of modest to comfortable quality.",
                "locations": {}
            },
            "Vallia Towers": {
                "arrow_positions": {
                    "slice_x": 440,
                    "slice_y": 577
                },
                "connections": [
                    "Myshan Gardens",
                    "Olladra's Kitchen",
                    "Granite Halls",
                    "Dava Gate"
                ],
                "description": "Has a large community of half-elves",
                "locations": {}
            }
        }
    },
    "Lower Dura": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 629
        },
        "councilor": {
            "Ilyra Boromar": {
                "description": "It's common knowledge that her true allegiance is to her family and its criminal empire. The current ongoing conflict with Daask has weakened her family and her position.",
                "race": "Halfling"
            }
        },
        "description": "The aptly named Precarious district in Lower Dura leans out over the edge of the cliffs, and the Skydocks—a system using gigantic arcane cranes and levitation—carry material up from Cliffside and the docks. Precarious is also filled with warehouses that hold these goods. Because Precarious plays an important role in the economy of the city, it's the only district in Lower Dura where the Sharn Watch maintains a significant presence.\nThe rest of Lower Dura, in stark contrast, has been left to rot. Ignored by the Watch, it is the domain of gangs and crime lords. The inhabitants of the ward are often protected from violence by their criminal connections or by virtue of having nothing worth stealing, but adventurers ought to tread lightly here, especially those who display the trappings of a wealthy lifestyle.",
        "districts": {
            "Callestan": {
                "arrow_positions": {
                    "slice_x": 308,
                    "slice_y": 493
                },
                "connections": [
                    "Gate of Gold",
                    "Precarious",
                    "The Stores",
                    "The Bazaar"
                ],
                "description": "Home to an assortment of squalid and poor businesses, Callestan is a nexus for criminal activity and known as a stronghold of the Boromar Clan.",
                "locations": {
                    "The Anvil": {
                        "description": "This fading Ghallanda inn struggles to maintain its poor to modest quality. It's known to be under the protection of the Boromar Clan, which makes it one of the safest establishments in Lower Dura."
                    },
                    "The Broken Mirror": {
                        "description": "A curious tavern owned by a family of changelings, the Broken Mirror changes its appearance and theme every week. It's rumored to be connected to the Tyrants."
                    },
                    "The Silvermist Theater": {
                        "description": "A remnant of Callestan's glory days, this place is a shadow of the grand establishment it once was. The current owners are known for staging bizarre events at the Silvermist. Since the Sharn Watch stays out of Callestan, anything can happen here."
                    }
                }
            },
            "Fallen": {
                "arrow_positions": {
                    "slice_x": 260,
                    "slice_y": 837
                },
                "connections": [
                    "The Stores",
                    "Foundation",
                    "Downstairs",
                    "Sharn's Welcome",
                    "Rattlestones"
                ],
                "description": "Sharn's oldest temple district, Fallen was abandoned after a floating tower crashed into the district during the Last War. Now it's a collection of wretched ruins.",
                "locations": {
                    "Silver Flame Shrine": {
                        "description": "The priestess Faela is doing what she can to help the wretched people of this forsaken district."
                    }
                }
            },
            "Gate of Gold": {
                "arrow_positions": {
                    "slice_x": 390,
                    "slice_y": 340
                },
                "connections": [
                    "Callestan",
                    "Oldkeep",
                    "Malleon's Gate"
                ],
                "description": "A squalid slum, providing miserable housing for desperate people.",
                "locations": {}
            },
            "Malleon's Gate": {
                "arrow_positions": {
                    "slice_x": 492,
                    "slice_y": 133
                },
                "connections": [
                    "Oldkeep",
                    "Gate of Gold",
                    "Tumbledown"
                ],
                "description": "A poor district originally inhabited by goblins, Malleon's Gate has become a haven for monstrous immigrants from Droaam and Darguun, along with members of Daask.",
                "locations": {}
            },
            "Oldkeep": {
                "arrow_positions": {
                    "slice_x": 300,
                    "slice_y": 270
                },
                "connections": [
                    "Malleon's Gate",
                    "Gate of Gold",
                    "Precarious",
                    "Sharn's Welcome",
                    "Broken Arch"
                ],
                "description": "Another poor slum, largely home to dockworkers from Precarious.",
                "locations": {}
            },
            "Precarious": {
                "arrow_positions": {
                    "slice_x": 220,
                    "slice_y": 430
                },
                "connections": [
                    "Oldkeep",
                    "Callestan",
                    "The Stores",
                    "Sharn's Welcome",
                    "Underlook"
                ],
                "description": "The skydocks of Precarious pass goods between the towers and the port on the Dagger River below. The district is filled with warehouses, along with a handful of poor taverns. A small community of Sarlonans lives here.",
                "locations": {}
            },
            "The Stores": {
                "arrow_positions": {
                    "slice_x": 230,
                    "slice_y": 700
                },
                "connections": [
                    "Callestan",
                    "Fallen",
                    "Precarious",
                    "Sharn's Welcome",
                    "Stormhold",
                    "Rattlestone",
                    "Ashblack"
                ],
                "description": "A warehouse district with a large halfling population, with ties to the Boromar Clan.",
                "locations": {}
            }
        }
    },
    "Lower Menthis": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 629
        },
        "councilor": {
            "Savia Potellas": {
                "description": "She hopes to reduce the influence of organized crime in her district, but it's a dangerous game.",
                "race": "Human"
            }
        },
        "description": "Providing cheap entertainment for the masses, Lower Menthis is crowded.",
        "districts": {
            "Center Bridge": {
                "arrow_positions": {
                    "slice_x": 554,
                    "slice_y": 841
                },
                "connections": [
                    "Granite Halls",
                    "Torchfire",
                    "Forgelight Towers",
                    "Firelight",
                    "Downstairs",
                    "Everbright"
                ],
                "description": "Orderly collections of townhouses ring the towers of this district.",
                "locations": {}
            },
            "Downstairs": {
                "arrow_positions": {
                    "slice_x": 455,
                    "slice_y": 855
                },
                "connections": [
                    "Center Bridge",
                    "Forgelight Towers",
                    "Foundation",
                    "Fallen",
                    "Cassan Bridge"
                ],
                "description": "The Downstairs district is primarily known for food and drink. Though most of its taverns and inns are only modest in quality, the Four Sails serves some of the finest seafood in Sharn. The recent success of the Diamond Theater has also drawn travelers to the district.",
                "locations": {
                    "Diamond Theater": {
                        "description": "A cheap theater once known for bawdy humor, the Diamond has gained fame due to its playwright in residence and has produced several plays about the impact of the Last War."
                    }
                }
            },
            "Firelight": {
                "arrow_positions": {
                    "slice_x": 635,
                    "slice_y": 822
                },
                "connections": [
                    "Torchfire",
                    "Center Bridge",
                    "Dragoneyes",
                    "Little Plains"
                ],
                "description": "This district is a destination for those who seek illicit forms of entertainment. Many forms of illegal gambling and paid companionship can be found in Firelight. It's also the most common location of the Burning Ring.",
                "locations": {
                    "The Burning Ring": {
                        "description": "The Ring offers blood sport and gladiatorial combat. These dangerous matches aren't sanctioned by law, and the Burning Ring constantly changes locations to avoid the Sharn Watch. It's always last seen somewhere in Lower Menthis."
                    }
                }
            },
            "Forgelight Towers": {
                "arrow_positions": {
                    "slice_x": 444,
                    "slice_y": 766
                },
                "connections": [
                    "Granite Halls",
                    "Downstairs",
                    "Center Bridge",
                    "Warden Towers"
                ],
                "description": "Orderly collections of townhomes ring the towers of this quiet district. Children play in the streets and couples stroll arm in arm.",
                "locations": {}
            },
            "Torchfire": {
                "arrow_positions": {
                    "slice_x": 609,
                    "slice_y": 737
                },
                "connections": [
                    "Center Bridge",
                    "Firelight",
                    "Olladra's Kitchen",
                    "Smoky Towers"
                ],
                "description": "A district with a notorious reputation, celebrated for cheap entertainment and infamous for its dangerous alleys. Its theaters specialize in musical comedy and lowbrow entertainment, and there are lots of opportunities for hopeful amateurs to get on a stage in Torchfire.",
                "locations": {
                    "Ten Torches": {
                        "description": "The cheapest ticket in Sharn's theater scene, Ten Torches alternates between lowbrow comedy and bizarre shows that no respectable theater would stage."
                    }
                }
            }
        }
    },
    "Lower Northedge": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 629
        },
        "councilor": {
            "Shassa Tarr": {
                "description": "She represents the interests of the merchants and shifters of her ward. She is a cunning diplomat and devoted to her constituents.",
                "race": "Shifter"
            }
        },
        "description": "Although it's poverty-stricken, Lower Northedge is a significant step up from the slums of Lower Dura. The people of Lower Northedge don't look for trouble, and they don't like it coming to their doorstep.",
        "districts": {
            "Longstairs": {
                "arrow_positions": {
                    "slice_x": 685,
                    "slice_y": 222
                },
                "connections": [
                    "Stoneyard",
                    "North Towers",
                    "High Hope"
                ],
                "description": "The population of this peaceful residential district is mostly made up of dwarves, humans, and half-elves. Neighbors here generally stand together to deal with any trouble.",
                "locations": {}
            },
            "North Market": {
                "arrow_positions": {
                    "slice_x": 741,
                    "slice_y": 391
                },
                "connections": [
                    "Stoneyard",
                    "Boldrei's Hearth",
                    "Terminus",
                    "Wroann's Gate",
                    "Holdfast"
                ],
                "description": "The open market in this region largely deals in simple, locally produced goods. Due to the significant shifter population in Lower Northedge, North Market offers goods and services aimed at shifters (grooming services, claw care, and so forth) as well as those reflecting an Eldeen influence.",
                "locations": {
                    "The Shrine of Fathen the Martyr": {
                        "description": "Dedicated to a crusading priest of the Silver Flame who uncovered a group of wererats in the early days of Sharn. Fathen was torn apart by the wererats he had exposed, and in his honor the Church of the Silver Flame raised the shrine on this site."
                    }
                }
            },
            "Stoneyard": {
                "arrow_positions": {
                    "slice_x": 680,
                    "slice_y": 327
                },
                "connections": [
                    "Longstairs",
                    "North Market",
                    "Oakbridge"
                ],
                "description": "This residential district is home to the majority of Sharn's shifters, including both recent immigrants from the Eldeen Reaches and long-established local families. The district includes a makeshift hrazhak court and a shrine devoted to the Wardens of the Wood. Conditions are poor to modest.",
                "locations": {
                    "Hrazhak Court": {
                        "description": "A makeshift court."
                    },
                    "Shrine of the Wardens of the Wood": {
                        "description": "Devoted to the Wardens of the Wood."
                    }
                }
            }
        }
    },
    "Lower Tavick's Landing": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 629
        },
        "councilor": {
            "Kilk": {
                "description": "Whispered rumors suggest that the changeling has ties to the mysterious Tyrants. Some insist that Kilk is actually an identity shared by a group of changelings.",
                "race": "Changeling"
            }
        },
        "description": "Two land routes to Sharn both end at Lower Tavick's Landing. The Orien lightning rail deposits passengers in the district of Terminus, while those who travel to Sharn on the Old Road arrive at Wroann's Gate.",
        "districts": {
            "Black Arch": {
                "arrow_positions": {
                    "slice_x": 660,
                    "slice_y": 956
                },
                "connections": [
                    "Dragoneyes",
                    "Foundation",
                    "Little Barrington"
                ],
                "description": "This district is filled with checkpoints and enchanted gates. These portals are generally open, but in times of trouble, Black Arch can become an impassable fortress. The Sharn Watch maintains the local garrison. House Orien and House Sivis both maintain outposts here, ensuring that messages can be swiftly delivered through the city and beyond.",
                "locations": {}
            },
            "Cogsgate": {
                "arrow_positions": {
                    "slice_x": 770,
                    "slice_y": 716
                },
                "connections": [
                    "Terminus",
                    "High Walls",
                    "Wroann's Gate",
                    "Graywalls",
                    "Blackbones"
                ],
                "description": "This warehouse district is the gateway to the Cogs, and shipments of ore and other goods regularly pass through here. House Kundarak has high-security storage facilities for rent, and a House Deneith outpost hires out Blademark mercenaries for venturing below.",
                "locations": {}
            },
            "Dragoneyes": {
                "arrow_positions": {
                    "slice_x": 742,
                    "slice_y": 919
                },
                "connections": [
                    "Black Arch",
                    "Firelight",
                    "Deathsgate",
                    "High Walls"
                ],
                "description": "Dragoneyes tends to the needs of weary travelers, providing a wide range of lodging, food, and entertainment for tourists. It's also the home of most of Sharn's changeling population, and many changelings use their gifts to entertain and amuse travelers. Some say that it's the home of the Tyrants criminal guild, but if so, that place is well hidden.",
                "locations": {
                    "Chance": {
                        "description": "A legendary gambling hall. In addition to standard games, it's said that the host can cover a wide range of unusual wagers."
                    },
                    "Velvet's": {
                        "description": "Staffed by changelings, this comfortable inn specializes in fulfilling fantasies; both the staff and the rooms can be adapted to fit any scenario. Though some clients have romance in mind, others come to Velvet's to relive triumphs, to prepare for debates or trials, or for help in developing a new identity."
                    }
                }
            },
            "Foundation": {
                "arrow_positions": {
                    "slice_x": 448,
                    "slice_y": 955
                },
                "connections": [
                    "Black Arch",
                    "Fallen",
                    "Downstairs",
                    "Sharn's Welcome",
                    "Kenton"
                ],
                "description": "",
                "locations": {}
            },
            "High Walls": {
                "arrow_positions": {
                    "slice_x": 829,
                    "slice_y": 823
                },
                "connections": [
                    "Cogsgate",
                    "Dragoneyes",
                    "Dancing Shadows"
                ],
                "description": "This district was converted into an internment center during the Last War. Since the end of the war, it has been transformed into a refugee camp. Most of the residents are Cyrans who fled the Mourning, but High Walls also includes Brelish citizens who lost their homes in the war. It's a crowded and dangerous place, but it allows residents to maintain a squalid lifestyle at no cost. Currently the gates are open, but the Sharn Watch could seal them at any time.",
                "locations": {}
            },
            "Terminus": {
                "arrow_positions": {
                    "slice_x": 767,
                    "slice_y": 562
                },
                "connections": [
                    "Wroann's Gate",
                    "Cogsgate",
                    "North Market",
                    "Tavick's Market"
                ],
                "description": "This district is based around Terminus Station, where the lightning rail enters and leaves Sharn. Most local businesses serve the station or travelers.",
                "locations": {
                    "QG dos Bravos Companheiros": {
                        "description": "Um vagão estacionado no Pátio de Manobras IV"
                    },
                    "Terminus Station": {
                        "description": "An enclave of House Orien, this site contains the lightning rail station. The administrators coordinate the many Orien caravans that come and go from Sharn. Many of the other dragonmarked houses have small outposts in or around Terminus Station, allowing travelers to immediately access the services of House Sivis, House Deneith, and others."
                    }
                }
            },
            "Wroann's Gate": {
                "arrow_positions": {
                    "slice_x": 885,
                    "slice_y": 593
                },
                "connections": [
                    "Cogsgate",
                    "Terminus",
                    "North Market",
                    "Cornerstone"
                ],
                "description": "Travelers who arrive on the main road enter Sharn through Wroann's Gate, passing below a huge statue of the legendary Queen Wroaan. Many of the dragonmarked houses maintain shops here so travelers can send messages, hire bodyguards, or make use of other services.",
                "locations": {}
            }
        }
    },
    "Middle Central": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 470
        },
        "councilor": {
            "Sorik Sensos": {
                "description": "An elder statesman and a brilliant orator, he is rumored to be involved in a web of bribery and graft.",
                "race": "Human"
            }
        },
        "description": "This part of the city is a center for intrigue. The district of Ambassador Towers contains embassies and consulates from the Thronehold Nations, as well as Aerenal and Sarlona. Ambassador Towers is also home to the King's Citadel, the headquarters of Brelish intelligence. Across the ward, the district of Dragon Towers holds the primary enclaves of the dragonmarked houses.",
        "districts": {
            "Ambassador Towers": {
                "arrow_positions": {
                    "slice_x": 470,
                    "slice_y": 506
                },
                "connections": [
                    "Tradefair",
                    "Sovereign Towers",
                    "Dava Gate",
                    "Myshan Gardens",
                    "Korranath"
                ],
                "description": "This district contains the embassies to the Thronehold nations, along with Aerenal and Riedra. It's also the seat of the Citadel and home to the Brelish Museum of Fine Art.",
                "locations": {
                    "Brelish Museum of Fine Art": {
                        "description": "The museum displays work produced by Brelish artists and relics recovered from Xen'drik."
                    },
                    "The Citadel": {
                        "description": "The headquarters of the King's Citadel, Breland's elite military and intelligence service. The Citadel is also a high-security prison holding Sharn's most dangerous criminals."
                    }
                }
            },
            "Dava Gate": {
                "arrow_positions": {
                    "slice_x": 440,
                    "slice_y": 577
                },
                "connections": [
                    "Ambassador Towers",
                    "Swordpoint",
                    "Dragon Towers",
                    "Vallia Towers",
                    "Mithral Tower"
                ],
                "description": "",
                "locations": {}
            },
            "Dragon Towers": {
                "arrow_positions": {
                    "slice_x": 480,
                    "slice_y": 650
                },
                "connections": [
                    "Swordpoint",
                    "Dava Gate",
                    "Warden Towers",
                    "Little Plains",
                    "Granite Halls",
                    "Highest Towers"
                ],
                "description": "This is the primary place to do business with representatives of the dragonmarked houses. All the houses have outposts here, and Sivis, Tharashk, Jorasco, and Cannith have their primary enclaves in Dragon Towers.",
                "locations": {
                    "The Panaceum": {
                        "description": "The largest House Jorasco enclave in Sharn provides high-priced healing services to all who can pay for them."
                    }
                }
            },
            "Sovereign Towers": {
                "arrow_positions": {
                    "slice_x": 610,
                    "slice_y": 505
                },
                "connections": [
                    "Tradefair",
                    "Ambassador Towers",
                    "Swordpoint",
                    "Boldrei's Hearth",
                    "Korran-Thiven"
                ],
                "description": "A district filled with a vast assortment of temples and shrines. It is home to the two most important temples in Sharn: the Pavilion of the Host and the Cathedral of the Cleansing Flame.",
                "locations": {
                    "Cathedral of the Cleansing Flame": {
                        "description": "The central temple of the Church of the Silver Flame serves both as a templar garrison and the site of grand rituals and celebrations."
                    },
                    "Pavilion of the Host ": {
                        "description": "The center for worship of the Sovereign Host is a grand open tower surrounded by nine temples, each dedicated to one of the Sovereigns."
                    }
                }
            },
            "Swordpoint": {
                "arrow_positions": {
                    "slice_x": 525,
                    "slice_y": 594
                },
                "connections": [
                    "Dava Gate",
                    "Dragon Towers",
                    "Sovereign Towers",
                    "Olladra's Kitchen",
                    "Skysedge Park"
                ],
                "description": "This garrison district houses the forces that police and defend Central Plateau, including the Sharn Watch and a detachment of the royal army.",
                "locations": {}
            },
            "Tradefair": {
                "arrow_positions": {
                    "slice_x": 515,
                    "slice_y": 425
                },
                "connections": [
                    "Sovereign Towers",
                    "Ambassador Towers",
                    "Oakbridge",
                    "High Hope",
                    "North Towers",
                    "Platinum Heights"
                ],
                "description": "A merchant district offering legal goods and services of modest to comfortable quality.",
                "locations": {}
            }
        }
    },
    "Middle Dura": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 470
        },
        "councilor": {
            "Hruitt": {
                "description": "A giant owl who can assume human form. A former aerial racer, he's a clever negotiator who fights for the good of the Bazaar and Middle Dura, often opposing the Boromar Clan and its allies."
            }
        },
        "description": "Middle Dura caters to the working class. Its taverns are modestly priced, but there's gold among the dross.",
        "districts": {
            "Broken Arch": {
                "arrow_positions": {
                    "slice_x": 300,
                    "slice_y": 270
                },
                "connections": [
                    "Tumbledown",
                    "Harreth's Folly",
                    "Underlook",
                    "Oldkeep",
                    "High Water"
                ],
                "description": "Once a proud residential district, Broken Arch has fallen into disrepair. Its housing is poor to modest in quality, though the shells of wealthy manors can still be seen.",
                "locations": {}
            },
            "Harreth's Folly": {
                "arrow_positions": {
                    "slice_x": 390,
                    "slice_y": 340
                },
                "connections": [
                    "Tumbledown",
                    "Broken Arch",
                    "The Bazaar",
                    "Gate of Gold",
                    "Hope's Peak"
                ],
                "description": "A jumble of architectural styles, Hareth's Folly is a place to gamble and enjoy modest food and drink. The Hollow Tower is a center for aerial sports, and Hareth's Folly is where the Race of Eight Winds begins and ends.",
                "locations": {
                    "The Hollow Tower": {
                        "description": "A vertically oriented arena used for aerial jousting and other unusual sporting events."
                    },
                    "The King of Fire": {
                        "description": "A comfortable tavern and gambling hall, known as one of the safest places to bet on the Race of Eight Winds and the events at the Hollow Tower."
                    }
                }
            },
            "Rattlestone": {
                "arrow_positions": {
                    "slice_x": 260,
                    "slice_y": 807
                },
                "connections": [
                    "Stormhold",
                    "Kenton",
                    "Cassan Bridge",
                    "Warden Towers",
                    "The Stores",
                    "Fallen",
                    "Highhold"
                ],
                "description": "Rattlestone is a tenement district. Its people have little but their pride, but there's a strong camaraderie between them.",
                "locations": {}
            },
            "Stormhold": {
                "arrow_positions": {
                    "slice_x": 230,
                    "slice_y": 640
                },
                "connections": [
                    "Rattlestone",
                    "Underlook",
                    "The Bazaar",
                    "The Stores",
                    "Daggerwatch"
                ],
                "description": "A comfortable residential district, Stormhold is home to the few powerful families that have remained in Dura. It's in better condition than most of Middle Dura, and Deneith mercenaries protect the streets.",
                "locations": {}
            },
            "The Bazaar": {
                "arrow_positions": {
                    "slice_x": 308,
                    "slice_y": 493
                },
                "connections": [
                    "Harreth's Folly",
                    "Underlook",
                    "Stormhold",
                    "Callestan",
                    "Redstone"
                ],
                "description": "The largest commercial district in Sharn, an excellent place to buy or sell used—and possibly stolen—goods.",
                "locations": {
                    "Borran's Blades": {
                        "description": "Borran is one of the few halfling smiths in Sharn. He specializes in knives and daggers."
                    },
                    "Hearty Scales": {
                        "description": "A stall serving grilled lizard meat and other Talentan delicacies."
                    },
                    "Illumination": {
                        "description": "This shop sells lamps, lanterns, candles, and torches. Some are magical."
                    },
                    "Korryn's Quill": {
                        "description": "A reliable source for cartographers, calligraphers, and scribes of all stripes."
                    },
                    "Roll and Conquer": {
                        "description": "One of Sharn's only game stores. It does most of its business in cards and dice."
                    },
                    "Secondhand Strings": {
                        "description": "A must-stop shop for the bard on a budget, with a variety of gently used instruments."
                    },
                    "Seven Leagues": {
                        "description": "Owned by the cobbler Boots, this small stall has a remarkable selection of footwear."
                    },
                    "Sundry's Shop": {
                        "description": "A gnome named Sundry runs a pawn shop filled with all manner of trinkets."
                    },
                    "The Magewright's Miscellany": {
                        "description": "This little shop deals in spell components. The clerks love to discuss magic."
                    },
                    "The Old Apothecary": {
                        "description": "Selling supplies for herbalists and alchemists, this claims to be Bazaar's oldest shop."
                    }
                }
            },
            "Tumbledown": {
                "arrow_positions": {
                    "slice_x": 492,
                    "slice_y": 133
                },
                "connections": [
                    "Broken Arch",
                    "Harreth's Folly",
                    "Clifftop"
                ],
                "description": "A poor residential district, Tumbledown has experienced recent incursions from Daask.",
                "locations": {}
            },
            "Underlook": {
                "arrow_positions": {
                    "slice_x": 220,
                    "slice_y": 430
                },
                "connections": [
                    "The Bazaar",
                    "Stormhold",
                    "Broken Arch",
                    "Precarious",
                    "Overlook"
                ],
                "description": "The center of Sharn's nightlife before Menthis Plateau was built, Underlook is a collection of poor taverns and inns.",
                "locations": {
                    "Ghallanda Hall": {
                        "description": "This proud Ghallanda enclave continues to operate amid the fading squalor of Middle Dura, and has become a tourist attraction. It offers a range of services, with food and lodging of poor to comfortable quality."
                    }
                }
            }
        }
    },
    "Middle Menthis": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 470
        },
        "description": "Middle Menthis boasts the most diverse population of any ward in Sharn.",
        "districts": {
            "Cassan Bridge": {
                "arrow_positions": {
                    "slice_x": 455,
                    "slice_y": 855
                },
                "connections": [
                    "Rattlestone",
                    "Everbright",
                    "Downstairs",
                    "Seventh Tower"
                ],
                "description": "A mercantile district with goods of modest to comfortable quality. Home to a significant number of immigrants from the Shadow Marches, Cassan Bridge is the place to visit for exotic Marcher herbs and cuisine.",
                "locations": {}
            },
            "Everbright": {
                "arrow_positions": {
                    "slice_x": 554,
                    "slice_y": 841
                },
                "connections": [
                    "Cassan Bridge",
                    "Warden Towers",
                    "Little Plains",
                    "Smoky Towers",
                    "Little Barrington",
                    "Center Bridge",
                    "University"
                ],
                "description": "This district is a source of magical goods and services. Exotic components, magewrights for hire, common or uncommon magic items—all of these and more can be found here.",
                "locations": {}
            },
            "Little Plains": {
                "arrow_positions": {
                    "slice_x": 635,
                    "slice_y": 822
                },
                "connections": [
                    "Everbright",
                    "Smoky Towers",
                    "Dragon Towers",
                    "Graywalls",
                    "Firelight",
                    "Platinate"
                ],
                "description": "Founded by Talenta halflings, this district includes a central campground for visiting halfling nomads. The permanent residents are mostly halflings as well. Talentan foods and crafts can be found here, along with displays of traditional skills and pastimes.",
                "locations": {}
            },
            "Smoky Towers": {
                "arrow_positions": {
                    "slice_x": 609,
                    "slice_y": 737
                },
                "connections": [
                    "Everbright",
                    "Little Plains",
                    "Dancing Shadows",
                    "Torchfire",
                    "Den'iyas"
                ],
                "description": "Safer than the lower wards and less expensive than Upper Menthis, Smoky Towers has plenty of entertainment options. The Classic Theater is its most popular venue, but Smoky Towers offers a wide variety of more exotic fare. Dinner theater, changeling burlesque, and other diversions can be found in Smoky Towers. Thovanic Hall has begun performing works from Darguun and Droaam featuring monstrous performers. Smoky Towers has also become a haven for Cyran refugees wealthy enough to avoid High Walls.",
                "locations": {
                    "Classic Theater": {
                        "description": "A small and inexpensive theater, the Classic performs only works written before the start of the Last War."
                    },
                    "The Carnival of Shadows": {
                        "description": "House Phiarlan's traveling circus, a mesmerizing blend of illusions, physical arts, and exotic beasts. The traveling troupe always visits Smoky Towers"
                    },
                    "Thovanic Hall": {
                        "description": "The place to go if you`re insterested in seeing works from Darguun and Droaam featuring monstrous performers"
                    }
                }
            },
            "Warden Towers": {
                "arrow_positions": {
                    "slice_x": 444,
                    "slice_y": 766
                },
                "connections": [
                    "Rattlestone",
                    "Everbright",
                    "Cassan Bridge",
                    "Dragon Towers",
                    "Forgelight Towers",
                    "Ivy Towers"
                ],
                "description": "This district is the primary garrison of the Sharn Watch in Menthis. It's home to a community of Lhazaar immigrants, and the Broken Anchor is a tavern catering to Lhazaar travelers.",
                "locations": {}
            }
        }
    },
    "Middle Northedge": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 470
        },
        "description": "This ward caters to the middle class of Sharn, offering a wide range of comfortable housing. Dwarves make up most of the population, with the highest concentration in the district of Holdfast.",
        "districts": {
            "High Hope": {
                "arrow_positions": {
                    "slice_x": 685,
                    "slice_y": 222
                },
                "connections": [
                    "Oakbridge",
                    "Tradefair",
                    "Longstairs",
                    "Shae Lias"
                ],
                "description": "A center for worship for the people of Northedge, High Hope includes temples of the Silver Flame and the Sovereign Host, along with many smaller shrines. It lacks the grandeur of Sovereign Towers in Central Plateau, but has an atmosphere of solemn devotion.",
                "locations": {}
            },
            "Holdfast": {
                "arrow_positions": {
                    "slice_x": 741,
                    "slice_y": 391
                },
                "connections": [
                    "Cornerstone",
                    "Tavick's Market",
                    "Oakbridge",
                    "North Market",
                    "Crystal Bridge"
                ],
                "description": "Holdfast is the heart of Sharn's native dwarf population. The ancestors of the Holdfast dwarves helped build Sharn, and many of its people are stonemasons, architects, and smiths. Holdfast dwarves are proud of their Sharn roots and have little interest in Mror customs or traditions.",
                "locations": {}
            },
            "Oakbridge": {
                "arrow_positions": {
                    "slice_x": 680,
                    "slice_y": 327
                },
                "connections": [
                    "High Hope",
                    "Holdfast",
                    "Tradefair",
                    "Stoneyard",
                    "Oak Towers"
                ],
                "description": "",
                "locations": {}
            }
        }
    },
    "Middle Tavick's Landing": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 470
        },
        "description": "Unlike the upper ward, Middle Tavick's Landing welcomes travelers and tourists. The ward features a host of lively taverns and excellent inns.",
        "districts": {
            "Cornerstone": {
                "arrow_positions": {
                    "slice_x": 885,
                    "slice_y": 593
                },
                "connections": [
                    "Tavick's Market",
                    "Graywalls",
                    "Holdfast",
                    "Wroann's Gate",
                    "Pinnacle"
                ],
                "description": "A haven for travelers, Cornerstone has a range of comfortable inns and taverns. It's built around the vast Cornerstone arena and is a center of activity for many major sporting events.",
                "locations": {
                    "The Cornerstone ": {
                        "description": "A massive arena that hosts a wide array of sporting events. These include jousts and races, both on foot and through the air. The Stone Trees is an offshoot of the Cornerstone that serves as the playing field for hrazhak competitions."
                    },
                    "Tooth and Nail": {
                        "description": "A comfortable tavern devoted to the sport of hrazhak. Most of the clientele are shifters, but anyone willing to talk hrazhak will find friends here."
                    }
                }
            },
            "Dancing Shadows": {
                "arrow_positions": {
                    "slice_x": 829,
                    "slice_y": 823
                },
                "connections": [
                    "Graywalls",
                    "Deathsgate",
                    "Smoky Towers",
                    "High Walls",
                    "Copper Arch"
                ],
                "description": "",
                "locations": {}
            },
            "Deathsgate": {
                "arrow_positions": {
                    "slice_x": 742,
                    "slice_y": 919
                },
                "connections": [
                    "Dancing Shadows",
                    "Little Barrington",
                    "Dragoneyes",
                    "Dalan's Refuge"
                ],
                "description": "Named for the nearby City of the Dead, this district houses the Deathsgate Guild and businesses that cater to adventurers. House Deneith recruits mercenaries at its outpost here.",
                "locations": {
                    "Maynard's Menagerie": {
                        "description": "This Vadalis storefront deals in exotic pets and animal companions, along with barding and other useful gear."
                    },
                    "Redblade's": {
                        "description": "A comfortable tavern catering to the adventurers of the Deathsgate Guild. Redblade is rumored to have a side business selling poison and venoms."
                    },
                    "The Deathsgate Guild": {
                        "description": "A society where adventurers can hone their skills and seek profitable work. The Deathsgate Guild has a sinister reputation, earned because its members will do anything in pursuit of success."
                    },
                    "The Guild of Starlight and Shadows": {
                        "description": "The guildhall of one of Sharn's most prestigious arcane orders. A reliable source for arcane spellcasting services."
                    }
                }
            },
            "Graywalls": {
                "arrow_positions": {
                    "slice_x": 770,
                    "slice_y": 716
                },
                "connections": [
                    "Cornerstone",
                    "Tavick's Market",
                    "Dancing Shadows",
                    "Little Plains",
                    "Cogsgate",
                    "Twelve Pillars"
                ],
                "description": "This district was founded long ago by Karrnathi immigrants, and its people are proud of their heritage. It is a haven for any Karrnathi travelers passing through Sharn. Rumors say there's a temple devoted to the Blood of Vol in Graywall, but if that's the case, it's kept hidden.",
                "locations": {
                    "Slogar's": {
                        "description": "This modest restaurant serves traditional Karrnathi cuisine. The ambience is a bit gloomy, but the prices are reasonable, and the food is very filling."
                    },
                    "The Bloody Mug": {
                        "description": "A comfortable tavern catering to Sharn's Karrnathi immigrants. Travelers from Karrnath always receive a warm welcome and a tankard of nightwood ale in exchange for stories from the old country."
                    }
                }
            },
            "Kenton": {
                "arrow_positions": {
                    "slice_x": 448,
                    "slice_y": 955
                },
                "connections": [
                    "Little Barrington",
                    "Rattlestone",
                    "Foundation",
                    "Sunrise"
                ],
                "description": "",
                "locations": {}
            },
            "Little Barrington": {
                "arrow_positions": {
                    "slice_x": 660,
                    "slice_y": 956
                },
                "connections": [
                    "Kenton",
                    "Deathsgate",
                    "Everbright",
                    "Black Arch",
                    "Oceanview"
                ],
                "description": "",
                "locations": {}
            },
            "Tavick's Market": {
                "arrow_positions": {
                    "slice_x": 767,
                    "slice_y": 562
                },
                "connections": [
                    "Graywalls",
                    "Cornerstone",
                    "Holdfast",
                    "Terminus",
                    "Silvergate"
                ],
                "description": "This district specializes in produce and other goods brought in by the farmers from the surrounding countryside. It's located directly above the Terminus lightning rail station",
                "locations": {}
            }
        }
    },
    "Skyway": {
        "arrow_positions": {
            "vert_x": 370,
            "vert_y": 112
        },
        "councilor": {
            "Evix ir'Marasha": {
                "description": "Lady Marasha owns the Celestial Vista restaurant, along with several other valuable businesses. She's an eloquent speaker who supports many radical positions, including abolishing the monarchy after the death of King Boranel and recognizing Sharn as an independent province.",
                "race": "Human"
            }
        },
        "description": "A number of floating towers drift above the upper wards of Sharn, but these are dwarfed by Skyway, an entire district suspended above and between Central Plateau and Menthis Plateau. Built on an island of solidified cloud, Skyway holds the mansions of the wealthiest people in Khorvaire—nobles whose feet never touch the ground. It's a realm of wonders, filled with the finest examples of luxury and extravagance that gold can buy and magic can produce. For instance, Cloudpool Park is formed from sculpted cloudstuff, with window panels of ice that provide a view of the city below.\nSkyway is home to lavish estates. Prior to the Last War, noble families from across the Five Nations maintained mansions here. Though some of these places remain in the hands of their original owners, others were seized by the crown during the Last War and sold to wealthy citizens of Breland. The resulting influx of residents has brought more diversity to the district, with dragonmarked heirs and even wealthy criminals living alongside the nobility. The grandest estate in Skyway is Tain Manor, home of the ir'Tain family and the monthly Tain Gala",
        "districts": {
            "Azure": {
                "arrow_positions": {
                    "slice_x": 600,
                    "slice_y": 600
                },
                "connections": [
                    "Brilliant"
                ],
                "description": "",
                "locations": {
                    "The Azure Gateway": {
                        "description": "This luxurious hotel and restaurant recently replaced an old Ghallanda inn. The menu is a 'Galifar fusion' combining styles from across the Five Nations."
                    },
                    "The Cloud Dragon ": {
                        "description": "This restaurant serves traditional Brelish cuisine, and it does so exceptionally well. It's rarely as crowded as the other venues in Skyway, but locals know its value."
                    },
                    "The Dragon's Hoard": {
                        "description": "This resort, maintained by House Ghallanda, offers every luxury for those who can afford its high prices."
                    }
                }
            },
            "Brilliant": {
                "arrow_positions": {
                    "slice_x": 600,
                    "slice_y": 400
                },
                "connections": [
                    "Azure"
                ],
                "description": "",
                "locations": {
                    "Tain Manor ": {
                        "description": "Sharn's social life revolves around the ir'Tain family. The monthly Tain Gala is the hottest ticket in town, and it's held at the family estate in Skyway."
                    },
                    "The Celestial Vista": {
                        "description": "This legendary restaurant is owned by Skyway's city councilor, Lady Evix ir'Marasha. The floor is studded with crystal windows, allowing diners to look down into the city below. The food isn't incredible, but tourist crowds keep the Vista filled with customers."
                    }
                }
            }
        }
    },
    "The City of the Dead": {
        "arrow_positions": {
            "vert_x": 0,
            "vert_y": 0
        },
        "description": "Look to the cliffs to the north of Sharn, and you'll see a collection of crypts embedded into the cliff face. This is the City of the Dead, the final resting place of the wealthiest citizens of Sharn. Common folk are cremated after death, but members of the Sixty Families and others with sufficient wealth have their remains interred in the tombs and tunnels of this necropolis.\bFew people reside in this area. Among its major features are Aureon's Holt, a temple of the Restful Watch, where Sovereign priests conduct funerals and serve as the caretakers of the tombs. Warden Tower is an outpost of the Church of the Silver Flame, staffed by a single hermit tasked to watch for supernatural threats.\bThough the City of the Dead is largely peaceful, stories circulate about dark powers lurking there. Some parents warn their children of the Lich-Priest Gath, who steals disobedient children and forces them to work in his kingdom of the dead, polishing the bones of his skeletal subjects.",
        "districts": {
            "Dead Temples": {
                "arrow_positions": {
                    "slice_x": 820,
                    "slice_y": 230
                },
                "connections": [
                    "Dragon Crypts",
                    "Halden's Tomb",
                    "Oak Towers"
                ],
                "description": "This section of the City of the Dead holds temples used during funeral services.",
                "locations": {
                    "Aureon's Holt": {
                        "description": "A temple of the Restful Watch, where Sovereign priests conduct funerals and serve as the caretakers of the tombs."
                    },
                    "Warden Tower": {
                        "description": "An outpost of the Church of the Silver Flame."
                    }
                }
            },
            "Dragon Crypts": {
                "arrow_positions": {
                    "slice_x": 857,
                    "slice_y": 125
                },
                "connections": [
                    "Dead Temples"
                ],
                "description": "Deep into the necropolis.",
                "locations": {}
            },
            "Halden's Tomb": {
                "arrow_positions": {
                    "slice_x": 935,
                    "slice_y": 473
                },
                "connections": [
                    "Pinnacle",
                    "Dead Temples"
                ],
                "description": "Silent tombs stand nestled among the rocky crags of the cliff top, keeping silent watch over the dead.",
                "locations": {
                    "Gareth Halden's Mausoleum": {
                        "description": "The incredibly ancient mausoleum of Gareth Halden, a great hero of the War of the Mark. His tomb naturally predates most of the buildings of modern Sharn, and has been thoroughly cleaned out by tomb robbers, but it still stands in silent monument to the ancient glory of the first period of human inhabitation of the city."
                    },
                    "The Mausoleum of Gath": {
                        "description": "This is not a mausoleum at all, but rather a temple dedicated to the Keeper. Its cleric is a lich called Gath, who built it centuries ago. Gath does not reside here or stay here for long, but visits often enough that any who want to talk (rather than intend to fight) seem to manage to find him here. Most of the time, he haunts various hideouts around the necropolis, mentoring other would-be necromancers and clerics of the Keeper and practicing his dark rites in other mausoleum-temples."
                    }
                }
            }
        }
    },
    "The Cogs": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 815
        },
        "councilor": {
            "Nolan Toranak": {
                "description": "Largely seen as a tool of the industrialists who own the foundries there. Members of his family were killed by warforged during the Last War, and Toranak harbors a bitter grudge against House Cannith and the warforged. He has tried to have warforged reclassified as property, and seeks to suppress warforged activists in the Cogs.",
                "race": "Dwarf"
            }
        },
        "description": "The Cogs lie deep beneath Sharn, below the sewers and Old Sharn (described later in this chapter). Streams of Fernian lava flow through this area, and over the centuries, House Cannith has helped Breland establish vast foundries that tap this mystic resource. Ashblack and Blackbones are industrial districts, largely inhabited by warforged laborers and miserable workers of other races. It is said that House Cannith maintains a forgehold in the Ashblack district, and that this is where Baron Merrix d'Cannith conducts his experiments.",
        "districts": {
            "Ashblack": {
                "arrow_positions": {
                    "slice_x": 220,
                    "slice_y": 540
                },
                "connections": [
                    "Khyber's Gate",
                    "The Stores"
                ],
                "description": "The first foundries of Sharn were built here. The district is devoted to industry, and the environment here is sweltering and claustrophobic.",
                "locations": {
                    "Keldoran Forge": {
                        "description": "Home to the dwarf Keldoran, where he produces high-quality metal arms and armor."
                    },
                    "Cannith Forgehold": {
                        "description": "This subterranean fortress includes a wide range of forges, alchemical workshops, and mystical facilities. It is an artificer’s dream, and Merrix d'Cannith spends most of his time there. The Forgehold has many secrets."
                    }
                }
            },
            "Blackbones": {
                "arrow_positions": {
                    "slice_x": 555,
                    "slice_y": 840
                },
                "connections": [
                    "Khyber's Gate",
                    "Cogsgate"
                ],
                "description": "Blackbones is newer than Ashblack, and it shows. The district's corridors are wider and better lit. The foundries are well maintained, and the district has a few thriving businesses. Most of the warforged that reside in Sharn work in Blackbones.",
                "locations": {
                    "The Pool of Onatar's Tears": {
                        "description": "It is said to impart a blessing to any smith who bathes their hands in its waters"
                    },
                    "The Red Hammer Inn": {
                        "description": "This inn has a mostly Warforged patronage."
                    }
                }
            },
            "Khyber's Gate": {
                "arrow_positions": {
                    "slice_x": 515,
                    "slice_y": 590
                },
                "connections": [
                    "Blackbones",
                    "Ashblack"
                ],
                "description": "A tenement district",
                "locations": {
                    "Shamukaar": {
                        "description": ""
                    },
                    "The Wounded Dragon": {
                        "description": ""
                    },
                    "Temple of the Six": {
                        "description": ""
                    },
                    "Citadel of the Closed Circle": {
                        "description": ""
                    },
                    "Workshop of Tyrial Dashar": {
                        "description": ""
                    }
                }
            }
        }
    },
    "Upper Central": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 240
        },
        "description": "Gold and power flow down from Upper Central. The district of Highest Towers is the seat of government, where city hall and the municipal archives are located. The Korranath is the name of both the central financial district and the grand temple of Kol Korran that dominates it. This district also houses the Kundarak Bank of Sharn and the Vaults, House Kundarak's ostensibly impenetrable storage facility.\nSome of Sharn's wealthiest citizens live in the Mithral Tower district, and Platinum Heights is the most expensive market district in Sharn. It has fewer shops than the Bazaar of Dura, but if you're looking for top-quality goods or services, there's no finer—or more expensive—source to be found.\nIf you maintain no better than a poor lifestyle, many people in Upper Central will assume you're a servant or vagrant; this could cause you to have disadvantage on Charisma checks involving residents.",
        "districts": {
            "Highest Towers": {
                "arrow_positions": {
                    "slice_x": 480,
                    "slice_y": 650
                },
                "connections": [
                    "Mithral Tower",
                    "Skysedge Park",
                    "Ivy Towers",
                    "University",
                    "Dragon Towers"
                ],
                "description": "The seat of city government, this district is also where airships arrive and depart.",
                "locations": {
                    "City Archive": {
                        "description": "This enormous edifice holds the historical and legal records of Sharn and the surrounding regions."
                    },
                    "Council Hall": {
                        "description": "The seat of city government and the site of City Council meetings. The council meets weekly, and visitors can watch from the gallery."
                    },
                    "Lyrandar Tower": {
                        "description": "The most prestigious auction house in Sharn, Aurora deals in magic items, exotic finds from Xen'drik, and other wonders."
                    }
                }
            },
            "Korran-Thiven": {
                "arrow_positions": {
                    "slice_x": 610,
                    "slice_y": 505
                },
                "connections": [
                    "Korranath",
                    "Skysedge Park",
                    "Platinum Heights",
                    "Crystal Bridge",
                    "Sovereign Towers"
                ],
                "description": "",
                "locations": {}
            },
            "Korranath": {
                "arrow_positions": {
                    "slice_x": 470,
                    "slice_y": 506
                },
                "connections": [
                    "Platinum Heights",
                    "Korran-Thiven",
                    "Mithral Tower",
                    "Ambassador Towers"
                ],
                "description": "Named for the great temple of Kol Korran that lies at its center, this district is dedicated to wealth and finance. Moneychangers, banks, and grand vaults are found here, in addition to the estates of powerful merchants.",
                "locations": {
                    "Kundarak Bank of Sharn": {
                        "description": "This is the largest bank in Sharn and the center of House Kundarak urban operations in the city."
                    },
                    "The Korranath": {
                        "description": "The temple of Kol Korran is an ostentatious display of wealth and a popular tourist attraction, since many believe praying at the Korranath ensures success in business"
                    },
                    "The Vaults": {
                        "description": "Located below the Kundarak Bank, the Vaults are Kundarak's heavily guarded storage facility."
                    },
                    "Wayfinder Foundation": {
                        "description": "The guildhall for this legendary association of explorers."
                    }
                }
            },
            "Mithral Tower": {
                "arrow_positions": {
                    "slice_x": 440,
                    "slice_y": 577
                },
                "connections": [
                    "Korranath",
                    "Skysedge Park",
                    "Highest Towers",
                    "Dava Gate"
                ],
                "description": "",
                "locations": {}
            },
            "Platinum Heights": {
                "arrow_positions": {
                    "slice_x": 515,
                    "slice_y": 425
                },
                "connections": [
                    "Korran-Thiven",
                    "Korranath",
                    "Oak Towers",
                    "Tradefair"
                ],
                "description": "Catering to Sharn's elite, this district provides a wide range of shops and services of wealthy to aristocratic quality.",
                "locations": {
                    "Aurora Gallery": {
                        "description": "The most prestigious auction house in Sharn, Aurora deals in magic items, exotic finds from Xen'drik, and other wonders."
                    },
                    "Gray Dragon Inn": {
                        "description": "This inn provides aristocratic and wealthy lodging for those who can afford it."
                    },
                    "Sannid's": {
                        "description": "One of Sharn's most celebrated restaurants, Sannid's serves Brelish cuisine of wealthy quality and has a legendary wine cellar."
                    }
                }
            },
            "Skysedge Park": {
                "arrow_positions": {
                    "slice_x": 525,
                    "slice_y": 594
                },
                "connections": [
                    "Korran-Thiven",
                    "Highest Towers",
                    "Mithral Tower",
                    "Den'iyas",
                    "Swordpoint"
                ],
                "description": "Home to three sprawling rooftop parks, this district provides a touch of wilderness in the heart of the city. A small community of immigrants from the Eldeen Reaches maintains these groves and gardens.",
                "locations": {}
            }
        }
    },
    "Upper Dura": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 240
        },
        "description": "This ward is full of activity. Its people are prospering, but there's an edge of desperation about them; many folk are on the lookout for opportunities to better themselves. Upper Dura has the general properties of a middle ward, with most goods and services priced for a modest or comfortable lifestyle. The merchants and artisans are accustomed to dealing with unusual individuals, and adventurers receive a warm welcome here.",
        "districts": {
            "Clifftop": {
                "arrow_positions": {
                    "slice_x": 492,
                    "slice_y": 133
                },
                "connections": [
                    "Hope's Peak",
                    "Highwater",
                    "Tumbledown"
                ],
                "description": "This district caters to adventurers, with a wide array of businesses aimed at explorers and fortune hunters. It is the home base of the Clifftop Adventurer's Guild.",
                "locations": {
                    "The Clifftop Adventurer's Guild": {
                        "description": "An institution that provides adventurers with camaraderie and profitable work."
                    },
                    "The Drunken Dragon": {
                        "description": "A tavern frequented by members of the Clifftop Adventurer's Guild. The food is modest, but it has the widest selection of exotic alcohol in Sharn."
                    },
                    "The Esoteric Order of Aureon": {
                        "description": "The guildhall of one of Sharn's most prestigious arcane orders. A reliable source for arcane spellcasting services."
                    },
                    "The Mystic Market": {
                        "description": "A collection of shops specializing in different categories of magic items. Most merchandise is common or uncommon, but rare items are occasionally available."
                    }
                }
            },
            "Daggerwatch": {
                "arrow_positions": {
                    "slice_x": 230,
                    "slice_y": 640
                },
                "connections": [
                    "Redstone",
                    "Overlook",
                    "Highhold",
                    "Stormhold"
                ],
                "description": "Daggerwatch holds garrisons for both the Sharn Watch and the Brelish army, along with business and residences for those who support the garrisons.",
                "locations": {
                    "The Gold & White": {
                        "description": "This tavern offers fare of comfortable quality at modest prices. It caters to members of the Sharn Watch and Brelish veterans, but others will receive a cold welcome."
                    }
                }
            },
            "Highhold": {
                "arrow_positions": {
                    "slice_x": 260,
                    "slice_y": 807
                },
                "connections": [
                    "Daggerwatch",
                    "Sunrise",
                    "Ivy Towers",
                    "Rattlestone"
                ],
                "description": "A district built by dwarves for dwarves, Highhold has strong Mror influences in its architecture. It's a good place to find Mror goods and is home to talented smiths and brewers.",
                "locations": {
                    "Moraggan's": {
                        "description": "A posh tavern specializing in strong Mror spirits. Food and drink are wealthy in quality and cost."
                    }
                }
            },
            "Highwater": {
                "arrow_positions": {
                    "slice_x": 300,
                    "slice_y": 270
                },
                "connections": [
                    "Hope's Peak",
                    "Overlook",
                    "Clifftop",
                    "Broken Arch"
                ],
                "description": "The finest residential district in Dura and the seat of House Vadalis, Highwater is largely comfortable in quality with a few wealthy estates.",
                "locations": {
                    "Pegasus Spire": {
                        "description": "The seat of House Vadalis in Sharn is one of the few enclaves where pegasi are raised and trained. Native to Syrania, these celestial beasts can become stranded in Sharn; Vadalis heirs care for them and match them with virtuous companions."
                    }
                }
            },
            "Hope's Peak": {
                "arrow_positions": {
                    "slice_x": 390,
                    "slice_y": 340
                },
                "connections": [
                    "Highwater",
                    "Clifftop",
                    "Redstone",
                    "Harreth's Folly"
                ],
                "description": "A relatively new temple district, with shrines and churches that have relocated from Fallen in Lower Dura. Hope's Peak includes several monasteries and a sacred grove.",
                "locations": {
                    "The Citadel of the Sun": {
                        "description": "A temple devoted to Dol Arrah, noteworthy for the three blessed griffons that reside there."
                    }
                }
            },
            "Overlook": {
                "arrow_positions": {
                    "slice_x": 220,
                    "slice_y": 430
                },
                "connections": [
                    "Daggerwatch",
                    "Highwater",
                    "Redstone",
                    "Underlook"
                ],
                "description": "Overlook is noteworthy for its kalashtar community, which maintains a community center, a shrine devoted to the Path of Light, and a few restaurants serving Sarlonan cuisine.",
                "locations": {
                    "Shrine of il-Yannah": {
                        "description": "It is dedicated to the Path of Light"
                    }
                }
            },
            "Redstone": {
                "arrow_positions": {
                    "slice_x": 308,
                    "slice_y": 493
                },
                "connections": [
                    "Daggerwatch",
                    "Hope's Peak",
                    "Overlook",
                    "The Bazaar"
                ],
                "description": "",
                "locations": {}
            }
        }
    },
    "Upper Menthis": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 240
        },
        "councilor": {
            "Thurik Davandi": {
                "description": "He is known to have ties to Zilargo and the Boromar Clan, and reportedly loves intrigues and blackmail.",
                "race": "Gnome"
            }
        },
        "description": "Elegant and civilized, Upper Menthis is home to four of the finest theaters in Breland: the cutting-edge Art Temple, the colorful Khavish Theater, the traditional Grand Stage, and the open-air Stargazer Theater, as well as the Kavarrah Concert Hall.\nThe shops in Upper Menthis deal mainly in fine food, fashion, and exotic goods. For instance, in the Seventh Tower district, Window on Yesterday, Echoes of the Past, the Mekdall Gallery, and Cloud Antiquities all buy and sell interesting antiques and trinkets from distant lands.",
        "districts": {
            "Den'iyas": {
                "arrow_positions": {
                    "slice_x": 609,
                    "slice_y": 737
                },
                "connections": [
                    "University",
                    "Platinate",
                    "Skysedge Park",
                    "Twelve Pillars",
                    "Smoky Towers"
                ],
                "description": "Founded by gnome immigrants from Zilargo, Den'iyas is a haven for those interested in Zil culture. It's home to many sages and artisans, and a hotbed of schemes and intrigue.",
                "locations": {
                    "Davandi Fine Tailoring": {
                        "description": "In addition to being the city councilor representing Upper Menthis, the gnome Thurik Davandi is an accomplished tailor and magewright who produces the finest glamerweave clothing available in Sharn."
                    },
                    "Kavarrah Concert Hall": {
                        "description": ""
                    },
                    "Khavish Theater": {
                        "description": "Established by and for gnomes, the Khavish has ample seating for small creatures, and its shows make extensive use of illusions."
                    }
                }
            },
            "Ivy Towers": {
                "arrow_positions": {
                    "slice_x": 444,
                    "slice_y": 766
                },
                "connections": [
                    "Seventh Tower",
                    "University",
                    "Highest Towers",
                    "Highhold",
                    "Warden Towers"
                ],
                "description": "This residential district includes comfortable homes and modest apartments. Many of the students and faculty of Morgrave University live in Ivy Towers.",
                "locations": {}
            },
            "Platinate": {
                "arrow_positions": {
                    "slice_x": 635,
                    "slice_y": 822
                },
                "connections": [
                    "University",
                    "Den'iyas",
                    "Dalan's Refuge",
                    "Little Plains"
                ],
                "description": "",
                "locations": {}
            },
            "Seventh Tower": {
                "arrow_positions": {
                    "slice_x": 455,
                    "slice_y": 855
                },
                "connections": [
                    "Sunrise",
                    "Ivy Towers",
                    "University",
                    "Cassan Bridge"
                ],
                "description": "A shopping district, with restaurants and goods of comfortable to wealthy quality. Seventh Tower is especially noteworthy for Little Xen'drik, a collection of galleries whose owners buy and sell goods from Xen'drik.",
                "locations": {
                    "Little Xen'drik": {
                        "description": "This area of small shops deals in antiquities and relics recovered from Xen'drik and the ruins below Sharn. Cloud Antiquities specializes in giant artifacts, while the Mekdall Gallery deals in ancient elven and drow goods. Windows on Yesterday looks for items with historical significance, and Echoes of the Past deals in magic items with practical uses."
                    }
                }
            },
            "University": {
                "arrow_positions": {
                    "slice_x": 554,
                    "slice_y": 841
                },
                "connections": [
                    "Platinate",
                    "Seventh Tower",
                    "Den'iyas",
                    "Highest Towers",
                    "Everbright"
                ],
                "description": "This district is dominated by Morgrave University. It's also a nexus for sophisticated entertainment, including the Art Temple, the Grand Stage, and the Great Hall of Aureon.",
                "locations": {
                    "Art Temple": {
                        "description": "This theater is renowned for its avant-garde techniques and subjects."
                    },
                    "Dezina Museum of Antiquities": {
                        "description": "Attached to Morgrave University, this building displays the relics recovered on the university's many expeditions."
                    },
                    "Golden Horn": {
                        "description": "This wealthy inn includes a library, a few large meeting rooms, and a small concert hall. Performing at the Horn is an excellent opportunity for aspiring bards."
                    },
                    "Grand Stage": {
                        "description": "This stage hosts grand performances of the beloved classics of Galifar, along with more modern works that follow classical traditions."
                    },
                    "Great Hall of Aureon": {
                        "description": "Sharn's largest temple to the Sovereign Aureon, the Great Hall celebrates knowledge and learning. The clergy are sages and savants in a wide variety of fields."
                    },
                    "Morgrave University": {
                        "description": "While not the most reputable university academically speaking, it has made great gains in research regarding the continent of Xen'drik, mostly by funding expeditions of Wayfinders and adventurers, who bring back artifacts and information to fill the university's museums and libraries."
                    },
                    "Sharn Opera House": {
                        "description": "Performances at the Sharn Opera are one of the most highbrow forms of entertainment in the city."
                    },
                    "Stargazer Theater": {
                        "description": "This open-air theater focuses on popular entertainment with family appeal."
                    }
                }
            }
        }
    },
    "Upper Northedge": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 240
        },
        "councilor": {
            "Maza Thadian": {
                "description": "A venerable elf and owner of one of the finest restaurants in Sharn, she fights to maintain tradition but definitely puts the needs of the wealthy ahead of the poor.",
                "race": "Elf"
            }
        },
        "description": "Upper Northedge is the perfect place for the noble who can afford a manor in the clouds but wants to avoid the bustle of Upper Central. The districts of Crystal Bridge and Oak Towers are filled with spire-topped manors and grand estates. A host of rooftop parks and gardens provide lovely spaces to sit and reflect.",
        "districts": {
            "Crystal Bridge": {
                "arrow_positions": {
                    "slice_x": 741,
                    "slice_y": 391
                },
                "connections": [
                    "Oak Towers",
                    "Korran-Thiven",
                    "Pinnacle",
                    "Silvergate",
                    "Holdfast"
                ],
                "description": "A peaceful residential district with many wealthy and aristocratic estates.",
                "locations": {}
            },
            "Oak Towers": {
                "arrow_positions": {
                    "slice_x": 680,
                    "slice_y": 327
                },
                "connections": [
                    "Shae Lias",
                    "Crystal Bridge",
                    "Platinum Heights",
                    "Oakbridge",
                    "Dead Temples"
                ],
                "description": "A residential district where housing ranges from comfortable to aristocratic. Construction in Oak Towers uses materials and styles drawn from Aerenal, and the district is home to many of Sharn's established elf and half-elf families.",
                "locations": {}
            },
            "Shae Lias": {
                "arrow_positions": {
                    "slice_x": 685,
                    "slice_y": 222
                },
                "connections": [
                    "Oak Towers",
                    "High Hope"
                ],
                "description": "This district is a bastion for the culture and traditions of the elves of Aerenal. It includes a variety of businesses specializing in Aereni goods, as well as a temple of the Undying Court.",
                "locations": {
                    "The Gates of Passage": {
                        "description": "A temple of the Undying Court"
                    }
                }
            }
        }
    },
    "Upper Tavick's Landing": {
        "arrow_positions": {
            "vert_x": 20,
            "vert_y": 240
        },
        "councilor": {
            "Bestan ir'Tonn": {
                "description": "Largely views his ward as a separate city within the city. He has a reputation for stirring up conflict and setting the other councilors against one another.",
                "race": "Halfling"
            }
        },
        "description": "This ward is effectively a self-contained city catering to the nobles that live there. It has fine housing, skilled services, a luxurious mercantile district, and even an entire district—Sunrise—designed for the servants of the nobles. The services and lodging in Sunrise accommodate those with poor or modest lifestyles, as opposed to the higher-priced goods found elsewhere in the ward.\nFor those willing to put up with its restrictive laws, Upper Tavick's Landing has many fine features. Wyredd's Spirits is the best source for wine in Sharn. The shop Crystals of Denion buys and sells rare magic items, though it only has a handful of such items at any given time. Transmutation is a renowned beauty salon providing both mundane and arcane services. House Deneith maintains a fortified garrison and training facility in the Copper Arch district.",
        "districts": {
            "Copper Arch": {
                "arrow_positions": {
                    "slice_x": 829,
                    "slice_y": 823
                },
                "connections": [
                    "Twelve Pillars",
                    "Dalan's Refuge",
                    "Dancing Shadows"
                ],
                "description": "This district is built around the Deneith garrison that polices the upper ward. It contains shops and services catering to the wealthy elite.",
                "locations": {
                    "The Three Towers": {
                        "description": "A fortress enclave of House Deneith. One tower is a garrison for the Blademark mercenary forces that police Upper Tavick's Landing. The second is dedicated to house business and training. The third is a private mansion for Deneith heirs."
                    },
                    "Transmutation": {
                        "description": "A beauty salon that employs both magical and mundane cosmetic techniques."
                    },
                    "Wyredd's Spirits": {
                        "description": "Wyredd deals in fine wines and exotic spirits. Wyredd's has the finest selection in Sharn, but his prices are high."
                    }
                }
            },
            "Dalan's Refuge": {
                "arrow_positions": {
                    "slice_x": 742,
                    "slice_y": 919
                },
                "connections": [
                    "Copper Arch",
                    "Oceanview",
                    "Platinate",
                    "Deathsgate"
                ],
                "description": "",
                "locations": {}
            },
            "Oceanview": {
                "arrow_positions": {
                    "slice_x": 660,
                    "slice_y": 956
                },
                "connections": [
                    "Dalan's Refuge",
                    "Sunrise",
                    "Little Barrington",
                    "University"
                ],
                "description": "This residential district is home to some of the most influential citizens of Sharn. It has a mix of wealthy mansions and aristocratic estates.",
                "locations": {}
            },
            "Pinnacle": {
                "arrow_positions": {
                    "slice_x": 885,
                    "slice_y": 593
                },
                "connections": [
                    "Silvergate",
                    "Twelve Pillars",
                    "Crystal Bridge",
                    "Cornerstone"
                ],
                "description": "",
                "locations": {}
            },
            "Silvergate": {
                "arrow_positions": {
                    "slice_x": 767,
                    "slice_y": 562
                },
                "connections": [
                    "Pinnacle",
                    "Twelve Pillars",
                    "Crystal Bridge",
                    "Tavick's Market"
                ],
                "description": "This shopping district is patronized by those with gold to spare. All manner of fine jewelry and expensive clothing can be found here, along with aristocratic food and lodging.",
                "locations": {
                    "Crystals of Denion": {
                        "description": "This gallery deals in rare and expensive magic items. The selection is limited, and Denion looks for items that are both beautiful and powerful."
                    }
                }
            },
            "Sunrise": {
                "arrow_positions": {
                    "slice_x": 448,
                    "slice_y": 955
                },
                "connections": [
                    "Seventh Tower",
                    "Oceanview",
                    "Highhold",
                    "Kenton"
                ],
                "description": "This district provides housing for the shopkeepers and servants who keep Upper Tavick's Landing running. Housing is largely modest in quality, with a few comfortable towers.",
                "locations": {}
            },
            "Twelve Pillars": {
                "arrow_positions": {
                    "slice_x": 770,
                    "slice_y": 716
                },
                "connections": [
                    "Pinnacle",
                    "Silvergate",
                    "Copper Arch",
                    "Den'iyas",
                    "Graywalls"
                ],
                "description": "This is the civic heart of Upper Tavick's Landing. The twelve pillars it's named for surround a courthouse, the Tower of Law, where visitors can get licenses to carry weapons in the ward.",
                "locations": {
                    "Courthouse": {
                        "description": "The place to go if you want to get Upper Menthis' licenses for weapons or spellcasting."
                    }
                }
            }
        }
    }
};