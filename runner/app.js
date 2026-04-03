const { Builder, By, until, logging } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


const test_plan = {
    "project_id": "proj-001",
    "start_url": "https://www.w3schools.com/w3css/w3css_templates.asp",
    "total_steps": 92,
    "steps": [
      {
        "id": "step_1",
        "index": 1,
        "type": "navigate",
        "url": "https://www.w3schools.com/w3css/w3css_templates.asp"
      },
      {
        "id": "step_2",
        "index": 2,
        "type": "navigate",
        "url": "https://www.w3schools.com/w3css/w3css_templates.asp"
      },
      {
        "id": "step_3",
        "index": 3,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_4",
        "index": 4,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_5",
        "index": 5,
        "type": "click",
        "action_text": "HTML",
        "selector": "text=HTML",
        "selectors": [
          "text=HTML",
          "#subtopnav .ga-nav",
          ".ga-nav",
          "div:nth-of-type(4) > div > a:nth-of-type(1)",
          "a"
        ]
      },
      {
        "id": "step_6",
        "index": 6,
        "type": "navigate",
        "url": "https://www.w3schools.com/html/default.asp"
      },
      {
        "id": "step_7",
        "index": 7,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_8",
        "index": 8,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_9",
        "index": 9,
        "type": "click",
        "action_text": "CSS",
        "selector": "text=CSS",
        "selectors": [
          "text=CSS",
          "#subtopnav .ga-nav",
          ".ga-nav",
          "div:nth-of-type(4) > div > a:nth-of-type(2)",
          "a"
        ]
      },
      {
        "id": "step_10",
        "index": 10,
        "type": "navigate",
        "url": "https://www.w3schools.com/css/default.asp"
      },
      {
        "id": "step_11",
        "index": 11,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_12",
        "index": 12,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_13",
        "index": 13,
        "type": "click",
        "action_text": "CSS Icons",
        "selector": "text=CSS Icons",
        "selectors": [
          "text=CSS Icons",
          "div > div:nth-of-type(1) > div > div > a:nth-of-type(18)",
          "a"
        ]
      },
      {
        "id": "step_14",
        "index": 14,
        "type": "navigate",
        "url": "https://www.w3schools.com/css/css_icons.asp"
      },
      {
        "id": "step_15",
        "index": 15,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_16",
        "index": 16,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_17",
        "index": 17,
        "type": "click",
        "action_text": "JAVASCRIPT",
        "selector": "text=JAVASCRIPT",
        "selectors": [
          "text=JAVASCRIPT",
          "#subtopnav .ga-nav",
          ".ga-nav",
          "div:nth-of-type(4) > div > a:nth-of-type(3)",
          "a"
        ]
      },
      {
        "id": "step_18",
        "index": 18,
        "type": "navigate",
        "url": "https://www.w3schools.com/js/default.asp"
      },
      {
        "id": "step_19",
        "index": 19,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_20",
        "index": 20,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_21",
        "index": 21,
        "type": "click",
        "action_text": "C",
        "selector": "text=C",
        "selectors": [
          "text=C",
          "#subtopnav .ga-nav",
          ".ga-nav",
          "div:nth-of-type(4) > div > a:nth-of-type(10)",
          "a"
        ]
      },
      {
        "id": "step_22",
        "index": 22,
        "type": "navigate",
        "url": "https://www.w3schools.com/c/index.php"
      },
      {
        "id": "step_23",
        "index": 23,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_24",
        "index": 24,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_25",
        "index": 25,
        "type": "click",
        "action_text": "W3.CSS",
        "selector": "text=W3.CSS",
        "selectors": [
          "text=W3.CSS",
          "#subtopnav .ga-nav",
          ".ga-nav",
          "div:nth-of-type(4) > div > a:nth-of-type(9)",
          "a"
        ]
      },
      {
        "id": "step_26",
        "index": 26,
        "type": "navigate",
        "url": "https://www.w3schools.com/w3css/default.asp"
      },
      {
        "id": "step_27",
        "index": 27,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_28",
        "index": 28,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_29",
        "index": 29,
        "type": "click",
        "action_text": "PYTHON",
        "selector": "text=PYTHON",
        "selectors": [
          "text=PYTHON",
          "#subtopnav .ga-nav",
          ".ga-nav",
          "div:nth-of-type(4) > div > a:nth-of-type(5)",
          "a"
        ]
      },
      {
        "id": "step_30",
        "index": 30,
        "type": "navigate",
        "url": "https://www.w3schools.com/python/default.asp"
      },
      {
        "id": "step_31",
        "index": 31,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_32",
        "index": 32,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_33",
        "index": 33,
        "type": "click",
        "action_text": "Python Syntax",
        "selector": "text=Python Syntax",
        "selectors": [
          "text=Python Syntax",
          "div > div:nth-of-type(1) > div > div > a:nth-of-type(4)",
          "a"
        ]
      },
      {
        "id": "step_34",
        "index": 34,
        "type": "navigate",
        "url": "https://www.w3schools.com/python/python_syntax.asp"
      },
      {
        "id": "step_35",
        "index": 35,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_36",
        "index": 36,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_37",
        "index": 37,
        "type": "click",
        "action_text": "Python Output",
        "selector": "text=Python Output",
        "selectors": [
          "text=Python Output",
          "div > div:nth-of-type(1) > div > div > a:nth-of-type(5)",
          "a"
        ]
      },
      {
        "id": "step_38",
        "index": 38,
        "type": "navigate",
        "url": "https://www.w3schools.com/python/python_output.asp"
      },
      {
        "id": "step_39",
        "index": 39,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_40",
        "index": 40,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_41",
        "index": 41,
        "type": "click",
        "action_text": "Python Data Types",
        "selector": "text=Python Data Types",
        "selectors": [
          "text=Python Data Types",
          "div > div:nth-of-type(1) > div > div > a:nth-of-type(8)",
          "a"
        ]
      },
      {
        "id": "step_42",
        "index": 42,
        "type": "navigate",
        "url": "https://www.w3schools.com/python/python_datatypes.asp"
      },
      {
        "id": "step_43",
        "index": 43,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_44",
        "index": 44,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_45",
        "index": 45,
        "type": "click",
        "action_text": "JQUERY",
        "selector": "text=JQUERY",
        "selectors": [
          "text=JQUERY",
          "#subtopnav .ga-nav",
          ".ga-nav",
          "div:nth-of-type(4) > div > a:nth-of-type(16)",
          "a"
        ]
      },
      {
        "id": "step_46",
        "index": 46,
        "type": "navigate",
        "url": "https://www.w3schools.com/jquery/default.asp"
      },
      {
        "id": "step_47",
        "index": 47,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_48",
        "index": 48,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_49",
        "index": 49,
        "type": "click",
        "action_text": "jQuery Hide/Show",
        "selector": "text=jQuery Hide/Show",
        "selectors": [
          "text=jQuery Hide/Show",
          "div > div:nth-of-type(1) > div > div > a:nth-of-type(7)",
          "a"
        ]
      },
      {
        "id": "step_50",
        "index": 50,
        "type": "navigate",
        "url": "https://www.w3schools.com/jquery/jquery_hide_show.asp"
      },
      {
        "id": "step_51",
        "index": 51,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_52",
        "index": 52,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_53",
        "index": 53,
        "type": "click",
        "action_text": "jQuery Animate",
        "selector": "text=jQuery Animate",
        "selectors": [
          "text=jQuery Animate",
          "div > div:nth-of-type(1) > div > div > a:nth-of-type(10)",
          "a"
        ]
      },
      {
        "id": "step_54",
        "index": 54,
        "type": "navigate",
        "url": "https://www.w3schools.com/jquery/jquery_animate.asp"
      },
      {
        "id": "step_55",
        "index": 55,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_56",
        "index": 56,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_57",
        "index": 57,
        "type": "click",
        "action_text": "jQuery Set",
        "selector": "text=jQuery Set",
        "selectors": [
          "text=jQuery Set",
          "div > div:nth-of-type(1) > div > div > a:nth-of-type(15)",
          "a"
        ]
      },
      {
        "id": "step_58",
        "index": 58,
        "type": "navigate",
        "url": "https://www.w3schools.com/jquery/jquery_dom_set.asp"
      },
      {
        "id": "step_59",
        "index": 59,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_60",
        "index": 60,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_61",
        "index": 61,
        "type": "click",
        "action_text": "EXCEL",
        "selector": "text=EXCEL",
        "selectors": [
          "text=EXCEL",
          "#subtopnav .ga-nav",
          ".ga-nav",
          "div:nth-of-type(4) > div > a:nth-of-type(17)",
          "a"
        ]
      },
      {
        "id": "step_62",
        "index": 62,
        "type": "navigate",
        "url": "https://www.w3schools.com/excel/index.php"
      },
      {
        "id": "step_63",
        "index": 63,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_64",
        "index": 64,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_65",
        "index": 65,
        "type": "click",
        "action_text": "Excel Overview",
        "selector": "text=Excel Overview",
        "selectors": [
          "text=Excel Overview",
          "div > div:nth-of-type(1) > div > div > a:nth-of-type(4)",
          "a"
        ]
      },
      {
        "id": "step_66",
        "index": 66,
        "type": "navigate",
        "url": "https://www.w3schools.com/excel/excel_overview.php"
      },
      {
        "id": "step_67",
        "index": 67,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_68",
        "index": 68,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_69",
        "index": 69,
        "type": "click",
        "action_text": "Excel Fill",
        "selector": "text=Excel Fill",
        "selectors": [
          "text=Excel Fill",
          "div > div:nth-of-type(1) > div > div > a:nth-of-type(7)",
          "a"
        ]
      },
      {
        "id": "step_70",
        "index": 70,
        "type": "navigate",
        "url": "https://www.w3schools.com/excel/excel_filling.php"
      },
      {
        "id": "step_71",
        "index": 71,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_72",
        "index": 72,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_73",
        "index": 73,
        "type": "click",
        "action_text": "Excel Add Cells",
        "selector": "text=Excel Add Cells",
        "selectors": [
          "text=Excel Add Cells",
          "div > div:nth-of-type(1) > div > div > a:nth-of-type(9)",
          "a"
        ]
      },
      {
        "id": "step_74",
        "index": 74,
        "type": "navigate",
        "url": "https://www.w3schools.com/excel/excel_add_cells.php"
      },
      {
        "id": "step_75",
        "index": 75,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_76",
        "index": 76,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_77",
        "index": 77,
        "type": "click",
        "action_text": "Excel Relative Reference",
        "selector": "text=Excel Relative Reference",
        "selectors": [
          "text=Excel Relative Reference",
          "div > div:nth-of-type(1) > div > div > a:nth-of-type(13)",
          "a"
        ]
      },
      {
        "id": "step_78",
        "index": 78,
        "type": "navigate",
        "url": "https://www.w3schools.com/excel/excel_rel_ref.php"
      },
      {
        "id": "step_79",
        "index": 79,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_80",
        "index": 80,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_81",
        "index": 81,
        "type": "click",
        "action_text": "Excel Functions",
        "selector": "text=Excel Functions",
        "selectors": [
          "text=Excel Functions",
          "div > div:nth-of-type(1) > div > div > a:nth-of-type(17)",
          "a"
        ]
      },
      {
        "id": "step_82",
        "index": 82,
        "type": "navigate",
        "url": "https://www.w3schools.com/excel/excel_functions.php"
      },
      {
        "id": "step_83",
        "index": 83,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_84",
        "index": 84,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_85",
        "index": 85,
        "type": "click",
        "action_text": "Excel Conditional Format",
        "selector": "text=Excel Conditional Format",
        "selectors": [
          "text=Excel Conditional Format",
          "div > div:nth-of-type(1) > div > div > a:nth-of-type(29)",
          "a"
        ]
      },
      {
        "id": "step_86",
        "index": 86,
        "type": "navigate",
        "url": "https://www.w3schools.com/excel/excel_conditional_formatting.php"
      },
      {
        "id": "step_87",
        "index": 87,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_88",
        "index": 88,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_89",
        "index": 89,
        "type": "click",
        "action_text": "Excel Color Scales",
        "selector": "text=Excel Color Scales",
        "selectors": [
          "text=Excel Color Scales",
          "div > div:nth-of-type(1) > div > div > a:nth-of-type(33)",
          "a"
        ]
      },
      {
        "id": "step_90",
        "index": 90,
        "type": "navigate",
        "url": "https://www.w3schools.com/excel/excel_cf_color_scales.php"
      },
      {
        "id": "step_91",
        "index": 91,
        "type": "assert",
        "selector": "#fast-cmp-settings",
        "selectors": [
          "#fast-cmp-settings",
          "button[type=\"submit\"]",
          "text=Cookies",
          "button"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Cookies"
      },
      {
        "id": "step_92",
        "index": 92,
        "type": "assert",
        "selector": "#fast-cmp-root",
        "selectors": [
          "#fast-cmp-root",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      }
    ]
  }

const networkMap     = new Map();   
const stepApiCalls   = [];          
let   currentStep    = null;       
function buildApiKeywords() {
  const keywords = new Set();//ithu vanthu duplicate value ahh store panathu only unique values thaan store panum
  for (const step of test_plan.steps) {//testplan objectla  stepsahh target panran ithula irukura navigate,click,fill lam check panum
 
    if (step.url) {
      const parts = new URL(step.url).pathname.split('/').filter(Boolean);
      //url: "http://localhost:5173/app/dashboard"
      //["app", "dashboard"]
      parts.forEach(p => { if (p !== 'app') keywords.add(p.toLowerCase()); });
      //remove unnecessary thing en na app vanthu common aprm ellathaiyum lowercaseahh mathirum
    }
  
    if (step.action_text) {
      step.action_text.trim().split(/\s+/)
        .filter(w => w.length > 3)
        .forEach(w => keywords.add(w.toLowerCase()));
        //text ahh mattum extract pani edukurom  split na add employee ipdi marirum ["Add", "Employee"] split use panra naala
        //  .filter(w => w.length > 3) ithu vanthu add employee laa employee ahh matum edukum en na greater than 3 aprm lowercaseahh change panirum
    }
  }
  // Always include these core auth keywords
  ['login', 'auth', 'signin', 'logout', 'token', 'employee', 'create', 'user'].forEach(k => keywords.add(k));
  return [...keywords]; //These are always included because:Most APIs use these terms
}

const API_KEYWORDS = buildApiKeywords();


function isTestRelevantUrl(url) {
  const u = (url || '').toLowerCase();
 
  if (u.match(/\.(js|css|png|jpg|jpeg|svg|ico|woff|woff2|ttf|map|html)(\?|$)/)) return false;
 //theva illathathu like js file cssfile ,png ithulam eduka venam intha function la mention panirukan
  return API_KEYWORDS.some(kw => u.includes(kw)); //intha build api keyword functionla itha pass panrom
  //Filters network requests and keeps only API calls related to the test by removing static files and matching keywords."
}


async function collectNetworkLogs(driver) {
  try {
    const logs = await driver.manage().logs().get('performance');
    //go to performance in cdp chrome dev tool and capture the network events

    for (const entry of logs) {
      try {
        const msg    = JSON.parse(entry.message);
        //vantha api callsahh  parse panum 
        const method = msg?.message?.method;
        //method like postahh getahh 
        const params = msg?.message?.params;
        if (!method || !params) continue;
//ignore useless entries
        if (method === 'Network.requestWillBeSent') {//request start namba send panum bothuu
          const url = params.request?.url || '';//entha request url
          networkMap.set(params.requestId, {//request id 
            requestId  : params.requestId,
            url        : url,
            method     : params.request?.method || 'GET',//methodahh get panrom like postahh getahh nuuu
            postData   : params.request?.postData || null,//post panna datavva capture panrom 
            reqHeaders : params.request?.headers  || {},//headeresahh eudkurom like content-type vanthu json fileahh nu
            time       : new Date().toLocaleTimeString(),//current timeahh get panrom
            triggeredBy: currentStep   
                          ? `Step ${currentStep.index} — ${currentStep.type.toUpperCase()}${currentStep.action_text ? ' "' + currentStep.action_text + '"' : currentStep.url ? ' → ' + currentStep.url : ''}`
                          : 'background',//enthat step odathu apdinu print panrom like create button kudukurapa antha mathiri
            status     : null,
            statusText : null,
            resHeaders : {},
            mimeType   : ''
          });
        }

  
        if (method === 'Network.responseReceived') {//ithu response receive agurapa eduthathu
          const req = networkMap.get(params.requestId);
          if (req) {
            req.status     = params.response?.status;
            req.statusText = params.response?.statusText;
            req.resHeaders = params.response?.headers || {};
            req.mimeType   = params.response?.mimeType || '';
          }
        }

        //I implemented network log collection using Chrome DevTools Protocol. It captures request and response events, stores them using requestId, and maps each API call to the corresponding test step. This allows us to trace UI actions to backend API behavior.

      } catch (_) {}
    }
  } catch (e) {
    console.log('   Could not read logs:', e.message.split('\n')[0]);
  }
}


async function getResponseBody(driver, requestId) {// request id ahh vechu enaku bodyla send pana details enaku return pannuu
  try {
    const r = await driver.sendDevToolsCommand('Network.getResponseBody', { requestId });
    return r?.body || null;
  } catch (_) { return null; }
}

// Mask sensitive fields
function maskSensitive(obj) {
    //password antha mathiri iruntha hide paniruu
  if (!obj || typeof obj !== 'object') return obj;
  //ipa input vanthu null undefined  not an object apdina apdiayee return paniru
  const clone = JSON.parse(JSON.stringify(obj));//capture panna valueahh stringify pani objecla store paniruu aana original valueahh touch panama clone eduthu use panuu
  function walk(o) {
    for (const k of Object.keys(o)) {
      if (['password','pass','pwd','secret'].some(s => k.toLowerCase().includes(s))) {
        o[k] = String(o[k]).substring(0, 4) + '***';//password ahh vanthu first 4 letter mattum mathatha hide paniruu
      } else if (typeof o[k] === 'object' && o[k]) walk(o[k]);
    }
  }
  walk(clone);
  return clone;
}

//format panrom vara data vaa json datava format panrom  athu stringahh iruntha parse pannu apdi ilana as it is enna irunthuccho apdiyaee vangikoo ahat makesensitive function push panrom push panitu hide panatha indent panrom space alignment console la show panrathuku 
function prettyPrint(data, indent = 8) {
  try {
    const obj    = typeof data === 'string' ? JSON.parse(data) : data;
    const masked = maskSensitive(obj);
    return JSON.stringify(masked, null, 2)
      .split('\n').map(l => ' '.repeat(indent) + l).join('\n');
  } catch (_) {
    return ' '.repeat(indent) + String(data).substring(0, 300);
  }
}


function decodeJwt(token) {
    //json web token extract panni split pani header ,payload and signature payload mattum seperate pani eduthutu binary ahh mathurom utf8 stringahh readable ahh mathuroom
  try {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('utf8'));
  } catch (_) { return null; }
}


async function printTestApiCalls(driver) {
  await collectNetworkLogs(driver);
  //intha function ella network callsum pull pani edukum


  
  const testCalls = [...networkMap.values()].filter(r =>
    r.triggeredBy !== 'background' && isTestRelevantUrl(r.url)
  );
  //ithu vanthu test steps related ahh irukura endpointsahh call panum istestreleventurl function vanthu .cssfile js image avoid panirum

  console.log('\n' + '═'.repeat(65));
  console.log('  TEST PLAN API CALLS — Requests triggered by your test steps');
  console.log('═'.repeat(65));

  if (testCalls.length === 0) {
    console.log('\n    No test-plan API calls captured.');
    console.log('  Check if your app uses /api/ paths or different URL patterns.');

    const allCalls = [...networkMap.values()].filter(r =>
      !( r.url.match(/\.(js|css|png|jpg|svg|ico|woff|ttf|map)(\?|$)/) )
    );
    if (allCalls.length > 0) {
      console.log('\n  💡 All non-static calls seen (add matching keywords if needed):');
      allCalls.forEach(r => console.log(`     ${r.method} ${r.url}`));
    }
    return;
  }

  for (let i = 0; i < testCalls.length; i++) {
    //api call action nadakuthu find aana tick mark show agum 
    const r    = testCalls[i];
    const icon = !r.status      ? '⏳' :
                  r.status < 300 ? '✅' :
                  r.status < 400 ? '↩️ ' :
                  r.status < 500 ? '⚠️ ' : '❌';

    console.log(`\n  ┌─ [${i+1}] ${icon}  ${r.method}  ${r.url}`);
    console.log(`  │     Triggered by : ${r.triggeredBy}`);//entha step trigger naala api call aacchu
    console.log(`  │    Time          : ${r.time}`);//api fetching time
    console.log(`  │    Status        : ${r.status || 'pending'} ${r.statusText || ''}`);//status 200 or 500 like that

   
    const impReqH = Object.entries(r.reqHeaders)
    //ithula filter nadakuthu headers like authorization,content-type,accept
      .filter(([k]) => ['authorization','content-type','accept','x-auth'].some(h => k.toLowerCase().includes(h)));
    if (impReqH.length) {
      console.log('  │');
      console.log('  │  Request Headers:');
      impReqH.forEach(([k, v]) => {
        const val = k.toLowerCase().includes('authorization') ? v.substring(0, 20) + '***' : v;
        console.log(`  │      ${k}: ${val}`);
      });
    }

   //request payload eduthatha print paniru post la send panathaa
    if (r.postData) {
      console.log('  │');
      console.log('  │   ── 📤 Payload sent to server:');
      console.log(prettyPrint(r.postData));
    }

   
    const impResH = Object.entries(r.resHeaders)
    //so ithu enna content type apdi ngrathu show panum
      .filter(([k]) => ['content-type','set-cookie','x-auth','authorization'].some(h => k.toLowerCase().includes(h)));
    if (impResH.length) {
      console.log('  │');
      console.log('  │   ── Response Headers:');
      impResH.forEach(([k, v]) => console.log(`  │      ${k}: ${v.substring(0, 80)}`));
    }

    const body = await getResponseBody(driver, r.requestId);
    if (body) {
      console.log('  │');
      console.log('  │   Response from server:');
      console.log(prettyPrint(body));
    }

    console.log(`  └${'─'.repeat(60)}`);
  }

  console.log(`\n   Total test-plan API calls : ${testCalls.length}`);
  console.log(`      Success (2xx) : ${testCalls.filter(r => r.status >= 200 && r.status < 300).length}`);
  console.log(`       Client error  : ${testCalls.filter(r => r.status >= 400 && r.status < 500).length}`);
  console.log(`     Server error  : ${testCalls.filter(r => r.status >= 500).length}`);
}


async function printStorageAndToken(driver) {
  console.log('\n' + '═'.repeat(65));
  console.log('   STORAGE + TOKEN DETAILS');
  console.log('═'.repeat(65));

  const local = await driver.executeScript(() => {
    const d = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i); d[k] = localStorage.getItem(k);
    }
    return d;
  });

  const session = await driver.executeScript(() => {
    const d = {};
    for (let i = 0; i < sessionStorage.length; i++) {
      const k = sessionStorage.key(i); d[k] = sessionStorage.getItem(k);
    }
    return d;
  });

  console.log('\n   localStorage:');
  if (!Object.keys(local).length) {
    console.log('     (empty)');
  } else {
    for (const [k, v] of Object.entries(local)) {
      const isToken = ['token','jwt','auth','access'].some(t => k.toLowerCase().includes(t))
                   || (typeof v === 'string' && v.startsWith('eyJ'));
      console.log(`\n     ${isToken ? '🔑' : '📄'} Key   : ${k}`);
      if (isToken && typeof v === 'string' && v.startsWith('eyJ')) {
        console.log(`        Token : ${v.substring(0, 30)}...${v.slice(-10)}`);
        const payload = decodeJwt(v);
        if (payload) {
          console.log('        Decoded JWT:');
          for (const [pk, pv] of Object.entries(payload)) {
            if (pk === 'exp') console.log(`            exp : ${new Date(pv * 1000).toLocaleString()} (expiry)`);
            else if (pk === 'iat') console.log(`            iat : ${new Date(pv * 1000).toLocaleString()} (issued)`);
            else console.log(`           ${pk.padEnd(8)}: ${JSON.stringify(pv)}`);
          }
        }
      } else {
        try {
          const parsed = JSON.parse(v);
          if (typeof parsed === 'object') {
            console.log('        Parsed:');
            for (const [pk, pv] of Object.entries(parsed)) {
              const masked = ['password','pass','pwd'].some(s => pk.toLowerCase().includes(s)) ? '***' : JSON.stringify(pv);
              console.log(`           ${pk.padEnd(12)}: ${masked}`);
            }
          } else {
            console.log(`        Value : ${v}`);
          }
        } catch (_) {
          console.log(`        Value : ${v.length > 80 ? v.substring(0, 60) + '...' : v}`);
        }
      }
    }
  }

  console.log('\n  sessionStorage:');
  if (!Object.keys(session).length) {
    console.log('     (empty)');
  } else {
    for (const [k, v] of Object.entries(session)) {
      console.log(`     📄 ${k} = ${v.length > 80 ? v.substring(0, 60) + '...' : v}`);
    }
  }
  console.log('\n' + '═'.repeat(65) + '\n');
}


function isValidCss(sel) { return sel && !sel.startsWith('text='); }

async function findElement(driver, selector, timeoutMs = 8000) {
  try {
    if (!isValidCss(selector)) return null;
    await driver.wait(until.elementLocated(By.css(selector)), timeoutMs);
    return await driver.findElement(By.css(selector));
  } catch (_) { return null; }
}

async function findWithFallback(driver, selectors = [], timeoutMs = 6000) {
  for (const sel of selectors) {
    if (!isValidCss(sel)) continue;
    try {
      await driver.wait(until.elementLocated(By.css(sel)), timeoutMs);
      const el = await driver.findElement(By.css(sel));
      if (el) return el;
    } catch (_) {}
  }
  return null;
}

async function findElementByText(driver, selectors = [], text) {
  const search = (text || '').trim().toLowerCase().substring(0, 40);
  if (!search) return null;
  for (const sel of selectors) {
    if (!isValidCss(sel)) continue;
    try {
      const elements = await driver.findElements(By.css(sel));
      for (let el of elements) {
        try {
          const elText = await el.getText();
          if (elText.toLowerCase().includes(search)) return el;
        } catch (_) {}
      }
    } catch (_) {}
  }
  return null;
}

async function scrollAndClick(driver, el) {
  await driver.executeScript("arguments[0].scrollIntoView({block:'center'});", el);
  await driver.sleep(500);
  await el.click();
}

const results = [];
function logResult(step, passed, message = '') {
  const icon = passed ? ' PASS' : ' FAIL';
  console.log(`  [${icon}] Step ${step.index} (${step.id}) — ${step.type.toUpperCase()}${message ? ': ' + message : ''}`);
  results.push({ index: step.index, id: step.id, type: step.type, passed, message });
}

async function handleNavigate(driver, step) {
  await collectNetworkLogs(driver);  
  await driver.get(step.url);
  await driver.sleep(2000);
  logResult(step, true, step.url);
  if (step.url.includes('/app/')) {
    await collectNetworkLogs(driver);
    await printStorageAndToken(driver);
  }
}

async function handleClick(driver, step) {
  try {
    const allSelectors = step.selectors || [step.selector];
    let el = await findElementByText(driver, allSelectors, step.action_text || '');
    if (!el) el = await findWithFallback(driver, allSelectors);
    if (el) {
      await scrollAndClick(driver, el);
      logResult(step, true, `Clicked "${(step.action_text || '').substring(0, 50)}"`);
    } else {
      logResult(step, false, `Not found — tried: ${allSelectors.filter(isValidCss).join(' | ')}`);
    }
  } catch (err) {
    logResult(step, false, err.message.split('\n')[0]);
  }
}

async function handleFill(driver, step) {
  try {
    const allSelectors = step.selectors || [step.selector];
    let el = await findWithFallback(driver, allSelectors);
    if (!el) el = await findElement(driver, step.selector);
    if (!el) { logResult(step, false, `Not found: "${step.selector}"`); return; }

    const tagName   = await el.getTagName();
    const inputType = (await el.getAttribute('type') || '').toLowerCase();

    if (inputType === 'checkbox') {
      const shouldCheck = ['on','true','1'].includes(step.value.toLowerCase());
      const isChecked   = await el.isSelected();
      if (shouldCheck !== isChecked) await driver.executeScript("arguments[0].click();", el);
      logResult(step, true, `Checkbox "${step.selector}" → ${shouldCheck ? 'checked ✔' : 'unchecked'}`);
    } else if (inputType === 'date') {
      await driver.executeScript(
        `arguments[0].value='${step.value}';
         arguments[0].dispatchEvent(new Event('input',{bubbles:true}));
         arguments[0].dispatchEvent(new Event('change',{bubbles:true}));`, el);
      logResult(step, true, `Date → "${step.value}"`);
    } else if (tagName === 'input' || tagName === 'textarea') {
      await el.clear();
      await el.sendKeys(step.value);
      await driver.executeScript(
        `arguments[0].dispatchEvent(new Event('input',{bubbles:true}));
         arguments[0].dispatchEvent(new Event('blur',{bubbles:true}));`, el);
      logResult(step, true, `Typed "${step.value.substring(0,60)}" → "${step.selector}"`);
    } else {
      await scrollAndClick(driver, el);
      logResult(step, true, `Clicked "${step.selector}"`);
    }
  } catch (err) {
    logResult(step, false, err.message.split('\n')[0]);
  }
}

async function handleAssert(driver, step) {
  try {
    const allSelectors = step.selectors || [step.selector];
    let el = await findWithFallback(driver, allSelectors, 6000);
    if (!el) el = await findElement(driver, step.selector, 6000);
    if (!el) {
      const optional = ['toast','warning','error','info','success'].includes(step.message_type);
      logResult(step, optional,
        optional ? `(optional ${step.message_type} — skipped)` :
        `Not found — tried: ${allSelectors.filter(isValidCss).join(' | ')}`);
      return;
    }
    if (step.assert_type === 'element_visible') {
      const visible = await el.isDisplayed().catch(() => false);
      logResult(step, visible, visible ? 'Visible ✔' : 'Not visible');
    } else if (step.assert_type === 'text_contains') {
      const actualText = await el.getText();
      const match = actualText.includes((step.expected || '').trim());
      logResult(step, match,
        match ? `Text matched ✔ — "${step.expected}"` :
        `Expected: "${(step.expected||'').substring(0,60)}" | Got: "${actualText.substring(0,80)}"`);
    } else if (step.assert_type === 'element_not_visible') {
      const visible = await el.isDisplayed().catch(() => false);
      logResult(step, !visible, !visible ? 'Hidden ✔' : 'Still visible');
    } else if (step.assert_type === 'has_attribute') {
      const val = await el.getAttribute(step.attribute);
      const match = val !== null && val.includes(step.expected);
      logResult(step, match, match ? 'Attribute matched ✔' : 'Attribute mismatch');
    } else {
      logResult(step, false, `Unknown assert_type: "${step.assert_type}"`);
    }
  } catch (err) {
    logResult(step, false, err.message.split('\n')[0]);
  }
}


async function runTestPlan() {
  console.log('\n' + '═'.repeat(65));
  console.log(`   Project   : ${test_plan.project_id}`);
  console.log(`  Start URL : ${test_plan.start_url}`);
  console.log(`   Steps     : ${test_plan.total_steps}`);
  console.log(`   API keywords tracked : ${API_KEYWORDS.join(', ')}`);
  console.log('═'.repeat(65) + '\n');

  // const prefs = new logging.Preferences();
  // prefs.setLevel(logging.Type.PERFORMANCE, logging.Level.ALL);

  // const options = new chrome.Options();
  // options.addArguments('--disable-blink-features=AutomationControlled');
  // options.addArguments('--no-sandbox');
  // options.addArguments('--disable-dev-shm-usage');
  // options.addArguments('--start-maximized');
  // options.excludeSwitches(['enable-automation']);
  // options.setLoggingPrefs(prefs);

  // const driver = await new Builder()
  //   .forBrowser('chrome')
  //   .setChromeOptions(options)
  //   .build();

  const prefs = new logging.Preferences();
  prefs.setLevel(logging.Type.PERFORMANCE, logging.Level.ALL);

  const options = new chrome.Options();
  options.addArguments('--disable-blink-features=AutomationControlled');
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');
  options.addArguments('--start-maximized');
  options.addArguments('--ignore-certificate-errors'); // 
  options.addArguments('--allow-insecure-localhost');   // 
  options.excludeSwitches(['enable-automation']);
  options.setLoggingPrefs(prefs);

  const driver = await new Builder()
    .usingServer('http://browser-box:4444/wd/hub') // 
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();


  try {
    await driver.sendDevToolsCommand('Network.enable', {});
    console.log('   CDP Network.enable — response body capture ON\n');
  } catch (_) {
    console.log('  CDP not available — response bodies skipped\n');
  }

  try {
    for (const step of test_plan.steps) {
     
      currentStep = step;

      console.log(`\n▶  Step ${step.index}/${test_plan.total_steps}  [${step.type.toUpperCase()}]`);
      switch (step.type) {
        case 'navigate':    await handleNavigate(driver, step); break;
        case 'click':       await handleClick(driver, step);    break;
        case 'fill':        await handleFill(driver, step);     break;
        case 'assert':      await handleAssert(driver, step);   break;
        case 'auto_assert': await handleAssert(driver, step);   break;
        default: console.log(`    Unknown type: "${step.type}" — skipping`);
      }

      await collectNetworkLogs(driver);  
      await driver.sleep(800);
    }
  } catch (err) {
    console.error('\n Fatal error:', err.message);
  } finally {
    await driver.sleep(1500);
    await printTestApiCalls(driver);   
    await driver.quit();
  }

  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;

  console.log('\n' + '═'.repeat(65));
  console.log(`   Test Summary — ${test_plan.project_id}`);
  console.log(`  Passed : ${passed}`);
  console.log(`   Failed : ${failed}`);
  console.log(`  Total    : ${results.length}`);
  if (failed > 0) {
    console.log('\n  Failed Steps:');
    results.filter(r => !r.passed)
      .forEach(r => console.log(`    ✗ Step ${r.index} (${r.id}) [${r.type}] — ${r.message}`));
  }
  console.log('═'.repeat(65) + '\n');
}

runTestPlan();