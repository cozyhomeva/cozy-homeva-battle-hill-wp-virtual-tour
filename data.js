var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-of-house",
      "name": "Front of House",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.7043225975548104,
        "pitch": -0.059844479621744995,
        "fov": 1.8038257175344352
      },
      "linkHotspots": [
        {
          "yaw": -0.6332491950599,
          "pitch": 0.09081354374972861,
          "rotation": 0,
          "target": "1-front-entrance"
        },
        {
          "yaw": -2.4845750648328178,
          "pitch": 0.350656999168633,
          "rotation": 0,
          "target": "18-driveway--parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front-entrance",
      "name": "Front Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.0682925663775364,
        "pitch": 0.09159397457776919,
        "fov": 1.8038257175344352
      },
      "linkHotspots": [
        {
          "yaw": -2.3348951750572056,
          "pitch": 0.24247750418404834,
          "rotation": 0,
          "target": "2-first-floor"
        },
        {
          "yaw": 1.345256069299456,
          "pitch": 0.15121702855041974,
          "rotation": 0,
          "target": "0-front-of-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-first-floor",
      "name": "First Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.5811087540788975,
        "pitch": 0.060696124556749,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": 2.207244835097881,
          "pitch": 0.5192981173977351,
          "rotation": 1.5707963267948966,
          "target": "7-living-room"
        },
        {
          "yaw": 0.04672633383640701,
          "pitch": 0.3184873410999156,
          "rotation": 0,
          "target": "5-dining-area"
        },
        {
          "yaw": 1.5840990497177794,
          "pitch": 0.21528418569115715,
          "rotation": 6.283185307179586,
          "target": "3-hallway"
        },
        {
          "yaw": 1.3666715419012405,
          "pitch": -0.13963592457892204,
          "rotation": 0,
          "target": "10-second-floor"
        },
        {
          "yaw": -1.5532298010907457,
          "pitch": 0.5862591190493127,
          "rotation": 0,
          "target": "1-front-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.20609606788988444,
        "pitch": 0.157653123944673,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": -2.616007558746425,
          "pitch": 0.33033800007130054,
          "rotation": 0,
          "target": "4-hallway-ii"
        },
        {
          "yaw": 2.928308517350728,
          "pitch": 0.321687633916639,
          "rotation": 4.71238898038469,
          "target": "2-first-floor"
        },
        {
          "yaw": 0.27317183991450555,
          "pitch": 0.27705440923847924,
          "rotation": 0,
          "target": "8-comfy-room-at-cozy-homeva-battle-hill-wp"
        },
        {
          "yaw": -0.24321607801402934,
          "pitch": 0.2753744902358335,
          "rotation": 4.71238898038469,
          "target": "9-shared-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hallway-ii",
      "name": "Hallway II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.6708049327102863,
        "pitch": 0.13141721759620495,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": -1.4238229112632919,
          "pitch": 0.49785419456135216,
          "rotation": 0,
          "target": "3-hallway"
        },
        {
          "yaw": -1.0277819896183296,
          "pitch": 0.4517588324003121,
          "rotation": 1.5707963267948966,
          "target": "2-first-floor"
        },
        {
          "yaw": 0.8177517445041893,
          "pitch": 0.34331843989048494,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": 2.3524018950778096,
          "pitch": 0.36079510096203293,
          "rotation": 0,
          "target": "17-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining-area",
      "name": "Dining Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.06294853198642514,
        "pitch": 0.34891154365691435,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": -0.6806296493938575,
          "pitch": 0.28228183798809603,
          "rotation": 0,
          "target": "2-first-floor"
        },
        {
          "yaw": -1.4192575768662454,
          "pitch": 0.2785093927015865,
          "rotation": 4.71238898038469,
          "target": "6-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.34598018542293474,
        "pitch": 0.0996092286239012,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": -3.0430684079348893,
          "pitch": 0.39056021229969673,
          "rotation": 0,
          "target": "4-hallway-ii"
        },
        {
          "yaw": -0.8937133551313234,
          "pitch": 0.26865430907920285,
          "rotation": 0,
          "target": "5-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.05378102604983681,
        "pitch": 0.1966605009557476,
        "fov": 1.8038257175344352
      },
      "linkHotspots": [
        {
          "yaw": 3.0018998789002707,
          "pitch": 0.2563322797509695,
          "rotation": 0,
          "target": "2-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-comfy-room-at-cozy-homeva-battle-hill-wp",
      "name": "Comfy Room At Cozy Homeva Battle Hill WP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.045128950987473715,
        "pitch": 0.14501931814360347,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": 3.063132181590584,
          "pitch": 0.3980925893483356,
          "rotation": 0,
          "target": "3-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-shared-bathroom",
      "name": "Shared Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.18096186081992727,
        "pitch": 0.2057705266921097,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": 1.8754474349827275,
          "pitch": 0.5491871381451219,
          "rotation": 0,
          "target": "3-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-second-floor",
      "name": "Second Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.4432385819000757,
        "pitch": 0.17723770272651151,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": 0.7072221005452572,
          "pitch": 0.29787073493572436,
          "rotation": 0,
          "target": "11-skyline-view-at-cozy-homeva-battle-hill-wp"
        },
        {
          "yaw": -0.9062214574568905,
          "pitch": 0.10548627152122414,
          "rotation": 0,
          "target": "13-historic-view-at-cozy-homeva-battle-hill-wp"
        },
        {
          "yaw": -1.3982741959572706,
          "pitch": 0.12238914226720254,
          "rotation": 4.71238898038469,
          "target": "14-penthouse-suite-at-cozy-homeva-battle-hill-wp"
        },
        {
          "yaw": -0.8385974270670147,
          "pitch": 0.9039525370996913,
          "rotation": 0,
          "target": "2-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-skyline-view-at-cozy-homeva-battle-hill-wp",
      "name": "Skyline View At Cozy Homeva Battle Hill WP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.5587628966816105,
        "pitch": 0.18428533290633098,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": -0.19106221439213478,
          "pitch": 0.14354640623140646,
          "rotation": 0,
          "target": "12-upstairs-shared-bathroom"
        },
        {
          "yaw": -2.127280497349645,
          "pitch": 0.44034575359552974,
          "rotation": 0,
          "target": "10-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-upstairs-shared-bathroom",
      "name": "Upstairs Shared Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.14359346036427212,
        "pitch": 0.2083713458182075,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": 2.0472512189946093,
          "pitch": 0.23694324824905877,
          "rotation": 0,
          "target": "11-skyline-view-at-cozy-homeva-battle-hill-wp"
        },
        {
          "yaw": -1.5106546794832028,
          "pitch": 0.30620669686901003,
          "rotation": 0,
          "target": "13-historic-view-at-cozy-homeva-battle-hill-wp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-historic-view-at-cozy-homeva-battle-hill-wp",
      "name": "Historic View At Cozy Homeva Battle Hill WP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.919582947294991,
        "pitch": 0.3685791349742509,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": 1.7414268965256614,
          "pitch": 0.1650014486150866,
          "rotation": 0,
          "target": "12-upstairs-shared-bathroom"
        },
        {
          "yaw": 2.9418012588984226,
          "pitch": 0.1807922137259439,
          "rotation": 0,
          "target": "10-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-penthouse-suite-at-cozy-homeva-battle-hill-wp",
      "name": "Penthouse Suite At Cozy Homeva Battle Hill WP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.42849550150476645,
        "pitch": 0.17315405595164535,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": -1.8593890482825586,
          "pitch": 0.21995615398779123,
          "rotation": 0,
          "target": "15-private-balcony"
        },
        {
          "yaw": -2.4576974411753056,
          "pitch": 0.21037172155305583,
          "rotation": 0,
          "target": "16-private-bathroom"
        },
        {
          "yaw": 2.792710485936877,
          "pitch": 0.2883940210649385,
          "rotation": 1.5707963267948966,
          "target": "10-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-private-balcony",
      "name": "Private Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.2033604767435655,
        "pitch": 0.10829063488665724,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": -2.452737654817291,
          "pitch": 0.21830127569883295,
          "rotation": 0,
          "target": "14-penthouse-suite-at-cozy-homeva-battle-hill-wp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-private-bathroom",
      "name": "Private Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 3.0460472416574174,
        "pitch": 0.2626251721070574,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": 1.4327734098388287,
          "pitch": 0.28942902143090876,
          "rotation": 0,
          "target": "14-penthouse-suite-at-cozy-homeva-battle-hill-wp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": 2.2552310910047897,
          "pitch": 0.23467384765368138,
          "rotation": 1.5707963267948966,
          "target": "4-hallway-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-driveway--parking",
      "name": "Driveway + Parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.6507609929944707,
        "pitch": 0.046652133071152235,
        "fov": 1.6276449896986258
      },
      "linkHotspots": [
        {
          "yaw": -0.9572386117444758,
          "pitch": 0.2938497807744138,
          "rotation": 0,
          "target": "19-parking"
        },
        {
          "yaw": 0.9966227275914932,
          "pitch": 0.09565333087680372,
          "rotation": 0,
          "target": "0-front-of-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-parking",
      "name": "Parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.06711321322583075,
        "pitch": 0.03662103993522692,
        "fov": 1.63915774750161
      },
      "linkHotspots": [
        {
          "yaw": 2.6854486903525014,
          "pitch": 0.10230920287391498,
          "rotation": 0,
          "target": "18-driveway--parking"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
