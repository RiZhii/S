const { Builder, By, until, logging } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


const test_plan = {
    "project_id": "proj-001",
    "start_url": "https://www.odoo.com/",
    "total_steps": 223,
    "steps": [
      {
        "id": "step_1",
        "index": 1,
        "type": "navigate",
        "url": "https://chatgpt.com/c/69ce6d6a-df6c-83e8-a850-bb2f33aef493"
      },
      {
        "id": "step_2",
        "index": 2,
        "type": "navigate",
        "url": "https://www.odoo.com/"
      },
      {
        "id": "step_3",
        "index": 3,
        "type": "assert",
        "selector": "text=Skip to Content",
        "selectors": [
          "text=Skip to Content",
          "#wrapwrap .btn.rounded-0",
          ".btn.rounded-0",
          ".btn",
          "div:nth-of-type(1) > a",
          "a"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Skip to Content"
      },
      {
        "id": "step_4",
        "index": 4,
        "type": "assert",
        "selector": "#top_menu .start-0.dropdown-menu",
        "selectors": [
          "#top_menu .start-0.dropdown-menu",
          ".start-0.dropdown-menu",
          ".start-0",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Finance\n                                        \n                                            Account"
      },
      {
        "id": "step_5",
        "index": 5,
        "type": "assert",
        "selector": "#wrap .dropdown-menu",
        "selectors": [
          "#wrap .dropdown-menu",
          ".dropdown-menu",
          "section:nth-of-type(1) > div > div > div > ul",
          "ul"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Demo with an Expert (1-250 employees)\n                                        \n                     "
      },
      {
        "id": "step_6",
        "index": 6,
        "type": "assert",
        "selector": "#wrap .top-0.bottom-0",
        "selectors": [
          "#wrap .top-0.bottom-0",
          ".top-0.bottom-0",
          ".top-0",
          "main > div:nth-of-type(1) > section:nth-of-type(10) > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Join 15 million \nhappy\nusers\nwho grow their business with Odoo"
      },
      {
        "id": "step_7",
        "index": 7,
        "type": "assert",
        "selector": "#footer [role=\"menu\"]",
        "selectors": [
          "#footer [role=\"menu\"]",
          "[role=\"menu\"]",
          "#footer .dropdown-menu",
          ".dropdown-menu",
          "div > div:nth-of-type(2) > div:nth-of-type(1) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "الْعَرَبيّة\n                    \n                    \n    \n                         Català\n         "
      },
      {
        "id": "step_8",
        "index": 8,
        "type": "assert",
        "selector": "[role=\"dialog\"]",
        "selectors": [
          "[role=\"dialog\"]",
          "#o_live_modal",
          ".modal.fade",
          ".modal",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_9",
        "index": 9,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div",
        "selectors": [
          "div:nth-of-type(2) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_10",
        "index": 10,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div",
        "selectors": [
          "div:nth-of-type(2) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_11",
        "index": 11,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_12",
        "index": 12,
        "type": "assert",
        "selector": "#o_live_modal .modal-body.bg-200",
        "selectors": [
          "#o_live_modal .modal-body.bg-200",
          ".modal-body.bg-200",
          ".modal-body",
          "div:nth-of-type(2) > div > div > div:nth-of-type(2)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_13",
        "index": 13,
        "type": "assert",
        "selector": "text=Watch now",
        "selectors": [
          "text=Watch now",
          "div:nth-of-type(2) > div > div > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Watch now"
      },
      {
        "id": "step_14",
        "index": 14,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_15",
        "index": 15,
        "type": "assert",
        "selector": "#three-ds-container",
        "selectors": [
          "#three-ds-container",
          "div:nth-of-type(4) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_16",
        "index": 16,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_17",
        "index": 17,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(6)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(6)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_18",
        "index": 18,
        "type": "click",
        "action_text": "Apps",
        "selector": "[aria-label=\"Apps: use the dropdown menu to switch apps\"]",
        "selectors": [
          "[aria-label=\"Apps: use the dropdown menu to switch apps\"]",
          "text=Apps",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > a",
          "a"
        ]
      },
      {
        "id": "step_19",
        "index": 19,
        "type": "click",
        "action_text": "Accounting",
        "selector": "text=Accounting",
        "selectors": [
          "text=Accounting",
          ".dropdown-item",
          "div:nth-of-type(1) > div:nth-of-type(1) > ul > li:nth-of-type(1) > a",
          "a"
        ]
      },
      {
        "id": "step_20",
        "index": 20,
        "type": "navigate",
        "url": "https://www.odoo.com/app/accounting"
      },
      {
        "id": "step_21",
        "index": 21,
        "type": "assert",
        "selector": "text=Skip to Content",
        "selectors": [
          "text=Skip to Content",
          "#wrapwrap .btn.rounded-0",
          ".btn.rounded-0",
          ".btn",
          "div:nth-of-type(1) > a",
          "a"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Skip to Content"
      },
      {
        "id": "step_22",
        "index": 22,
        "type": "assert",
        "selector": "#top_menu .start-0.dropdown-menu",
        "selectors": [
          "#top_menu .start-0.dropdown-menu",
          ".start-0.dropdown-menu",
          ".start-0",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Finance\n                                        \n                                            Account"
      },
      {
        "id": "step_23",
        "index": 23,
        "type": "assert",
        "selector": ".dropdown-menu",
        "selectors": [
          ".dropdown-menu",
          "div > div > div > div > ul",
          "ul"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Demo with an Expert (1-250 employees)\n                                        \n                     "
      },
      {
        "id": "step_24",
        "index": 24,
        "type": "assert",
        "selector": "#wrap .o_illustration_doodle_01",
        "selectors": [
          "#wrap .o_illustration_doodle_01",
          ".o_illustration_doodle_01",
          "div:nth-of-type(1) > main > div:nth-of-type(1) > section:nth-of-type(2) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_25",
        "index": 25,
        "type": "assert",
        "selector": "#wrap .top-0.bottom-0",
        "selectors": [
          "#wrap .top-0.bottom-0",
          ".top-0.bottom-0",
          ".top-0",
          "main > div:nth-of-type(1) > section:nth-of-type(10) > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Join 15 million \nhappy\nusers\nwho grow their business with Odoo"
      },
      {
        "id": "step_26",
        "index": 26,
        "type": "assert",
        "selector": "#footer [role=\"menu\"]",
        "selectors": [
          "#footer [role=\"menu\"]",
          "[role=\"menu\"]",
          "#footer .dropdown-menu",
          ".dropdown-menu",
          "div > div:nth-of-type(2) > div:nth-of-type(1) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "الْعَرَبيّة\n                    \n                    \n    \n                         Català\n         "
      },
      {
        "id": "step_27",
        "index": 27,
        "type": "assert",
        "selector": "[role=\"dialog\"]",
        "selectors": [
          "[role=\"dialog\"]",
          "#o_live_modal",
          ".modal.fade",
          ".modal",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_28",
        "index": 28,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div",
        "selectors": [
          "div:nth-of-type(2) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_29",
        "index": 29,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div",
        "selectors": [
          "div:nth-of-type(2) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_30",
        "index": 30,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_31",
        "index": 31,
        "type": "assert",
        "selector": "#o_live_modal .modal-body.bg-200",
        "selectors": [
          "#o_live_modal .modal-body.bg-200",
          ".modal-body.bg-200",
          ".modal-body",
          "div:nth-of-type(2) > div > div > div:nth-of-type(2)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_32",
        "index": 32,
        "type": "assert",
        "selector": "text=Watch now",
        "selectors": [
          "text=Watch now",
          "div:nth-of-type(2) > div > div > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Watch now"
      },
      {
        "id": "step_33",
        "index": 33,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_34",
        "index": 34,
        "type": "assert",
        "selector": "#three-ds-container",
        "selectors": [
          "#three-ds-container",
          "div:nth-of-type(4) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_35",
        "index": 35,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_36",
        "index": 36,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(6)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(6)",
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
        "action_text": "Features",
        "selector": "text=Features",
        "selectors": [
          "text=Features",
          "div > ul:nth-of-type(2) > li:nth-of-type(3) > a > span",
          "span"
        ]
      },
      {
        "id": "step_38",
        "index": 38,
        "type": "navigate",
        "url": "https://www.odoo.com/app/accounting-features"
      },
      {
        "id": "step_39",
        "index": 39,
        "type": "assert",
        "selector": "text=Skip to Content",
        "selectors": [
          "text=Skip to Content",
          "#wrapwrap .btn.rounded-0",
          ".btn.rounded-0",
          ".btn",
          "div:nth-of-type(1) > a",
          "a"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Skip to Content"
      },
      {
        "id": "step_40",
        "index": 40,
        "type": "assert",
        "selector": "#top_menu .start-0.dropdown-menu",
        "selectors": [
          "#top_menu .start-0.dropdown-menu",
          ".start-0.dropdown-menu",
          ".start-0",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Finance\n                                        \n                                            Account"
      },
      {
        "id": "step_41",
        "index": 41,
        "type": "assert",
        "selector": "#footer [role=\"menu\"]",
        "selectors": [
          "#footer [role=\"menu\"]",
          "[role=\"menu\"]",
          "#footer .dropdown-menu",
          ".dropdown-menu",
          "div > div:nth-of-type(2) > div:nth-of-type(1) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "الْعَرَبيّة\n                    \n                    \n    \n                         Català\n         "
      },
      {
        "id": "step_42",
        "index": 42,
        "type": "assert",
        "selector": "[role=\"dialog\"]",
        "selectors": [
          "[role=\"dialog\"]",
          "#o_live_modal",
          ".modal.fade",
          ".modal",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_43",
        "index": 43,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div",
        "selectors": [
          "div:nth-of-type(2) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_44",
        "index": 44,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div",
        "selectors": [
          "div:nth-of-type(2) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_45",
        "index": 45,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_46",
        "index": 46,
        "type": "assert",
        "selector": "#o_live_modal .modal-body.bg-200",
        "selectors": [
          "#o_live_modal .modal-body.bg-200",
          ".modal-body.bg-200",
          ".modal-body",
          "div:nth-of-type(2) > div > div > div:nth-of-type(2)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_47",
        "index": 47,
        "type": "assert",
        "selector": "text=Watch now",
        "selectors": [
          "text=Watch now",
          "div:nth-of-type(2) > div > div > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Watch now"
      },
      {
        "id": "step_48",
        "index": 48,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_49",
        "index": 49,
        "type": "assert",
        "selector": "#three-ds-container",
        "selectors": [
          "#three-ds-container",
          "div:nth-of-type(4) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_50",
        "index": 50,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_51",
        "index": 51,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(6)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(6)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_52",
        "index": 52,
        "type": "click",
        "action_text": "Automation",
        "selector": "text=Automation",
        "selectors": [
          "text=Automation",
          "div > ul:nth-of-type(2) > li:nth-of-type(4) > a > span",
          "span"
        ]
      },
      {
        "id": "step_53",
        "index": 53,
        "type": "navigate",
        "url": "https://www.odoo.com/app/invoice-automation"
      },
      {
        "id": "step_54",
        "index": 54,
        "type": "assert",
        "selector": "text=Skip to Content",
        "selectors": [
          "text=Skip to Content",
          "#wrapwrap .btn.rounded-0",
          ".btn.rounded-0",
          ".btn",
          "div:nth-of-type(1) > a",
          "a"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Skip to Content"
      },
      {
        "id": "step_55",
        "index": 55,
        "type": "assert",
        "selector": "#top_menu .start-0.dropdown-menu",
        "selectors": [
          "#top_menu .start-0.dropdown-menu",
          ".start-0.dropdown-menu",
          ".start-0",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Finance\n                                        \n                                            Account"
      },
      {
        "id": "step_56",
        "index": 56,
        "type": "assert",
        "selector": "#footer [role=\"menu\"]",
        "selectors": [
          "#footer [role=\"menu\"]",
          "[role=\"menu\"]",
          "#footer .dropdown-menu",
          ".dropdown-menu",
          "div > div:nth-of-type(2) > div:nth-of-type(1) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "الْعَرَبيّة\n                    \n                    \n    \n                         Català\n         "
      },
      {
        "id": "step_57",
        "index": 57,
        "type": "assert",
        "selector": "[role=\"dialog\"]",
        "selectors": [
          "[role=\"dialog\"]",
          "#o_live_modal",
          ".modal.fade",
          ".modal",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_58",
        "index": 58,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div",
        "selectors": [
          "div:nth-of-type(2) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_59",
        "index": 59,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div",
        "selectors": [
          "div:nth-of-type(2) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_60",
        "index": 60,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_61",
        "index": 61,
        "type": "assert",
        "selector": "#o_live_modal .modal-body.bg-200",
        "selectors": [
          "#o_live_modal .modal-body.bg-200",
          ".modal-body.bg-200",
          ".modal-body",
          "div:nth-of-type(2) > div > div > div:nth-of-type(2)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_62",
        "index": 62,
        "type": "assert",
        "selector": "text=Watch now",
        "selectors": [
          "text=Watch now",
          "div:nth-of-type(2) > div > div > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Watch now"
      },
      {
        "id": "step_63",
        "index": 63,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_64",
        "index": 64,
        "type": "assert",
        "selector": "#three-ds-container",
        "selectors": [
          "#three-ds-container",
          "div:nth-of-type(4) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_65",
        "index": 65,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_66",
        "index": 66,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(6)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(6)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_67",
        "index": 67,
        "type": "click",
        "action_text": "Find an Accountant",
        "selector": "text=Find an Accountant",
        "selectors": [
          "text=Find an Accountant",
          "div > ul:nth-of-type(2) > li:nth-of-type(5) > a > span",
          "span"
        ]
      },
      {
        "id": "step_68",
        "index": 68,
        "type": "navigate",
        "url": "https://www.odoo.com/accounting-firms"
      },
      {
        "id": "step_69",
        "index": 69,
        "type": "assert",
        "selector": "text=Skip to Content",
        "selectors": [
          "text=Skip to Content",
          "#wrapwrap .btn.rounded-0",
          ".btn.rounded-0",
          ".btn",
          "div:nth-of-type(1) > a",
          "a"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Skip to Content"
      },
      {
        "id": "step_70",
        "index": 70,
        "type": "assert",
        "selector": "#top_menu .start-0.dropdown-menu",
        "selectors": [
          "#top_menu .start-0.dropdown-menu",
          ".start-0.dropdown-menu",
          ".start-0",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Finance\n                                        \n                                            Account"
      },
      {
        "id": "step_71",
        "index": 71,
        "type": "assert",
        "selector": "#wrap .dropdown-menu",
        "selectors": [
          "#wrap .dropdown-menu",
          ".dropdown-menu",
          "div:nth-of-type(1) > div > div:nth-of-type(1) > div:nth-of-type(2) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "All levels\n                        Ready"
      },
      {
        "id": "step_72",
        "index": 72,
        "type": "assert",
        "selector": "[role=\"dialog\"]",
        "selectors": [
          "[role=\"dialog\"]",
          "#wrap [role=\"dialog\"]",
          "text=World Map",
          "#wrap .modal.fade",
          ".modal.fade",
          ".modal",
          "div:nth-of-type(1) > div > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "World Map"
      },
      {
        "id": "step_73",
        "index": 73,
        "type": "assert",
        "selector": "text=World Map",
        "selectors": [
          "text=World Map",
          "[role=\"dialog\"] .modal-lg",
          ".modal-lg",
          "div > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "World Map"
      },
      {
        "id": "step_74",
        "index": 74,
        "type": "assert",
        "selector": "#o_wcrm_offcanvas",
        "selectors": [
          "#o_wcrm_offcanvas",
          "#wrap .offcanvas.offcanvas-end",
          ".offcanvas.offcanvas-end",
          ".offcanvas",
          "main > div:nth-of-type(1) > div:nth-of-type(1) > div > div:nth-of-type(2)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Filters\n                \n            \n            \n                \n                    \n           "
      },
      {
        "id": "step_75",
        "index": 75,
        "type": "assert",
        "selector": "#footer [role=\"menu\"]",
        "selectors": [
          "#footer [role=\"menu\"]",
          "[role=\"menu\"]",
          "#footer .dropdown-menu",
          ".dropdown-menu",
          "div > div:nth-of-type(2) > div:nth-of-type(1) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "الْعَرَبيّة\n                    \n                    \n    \n                         Català\n         "
      },
      {
        "id": "step_76",
        "index": 76,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div",
        "selectors": [
          "div:nth-of-type(2) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_77",
        "index": 77,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div",
        "selectors": [
          "div:nth-of-type(2) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_78",
        "index": 78,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_79",
        "index": 79,
        "type": "assert",
        "selector": "#o_live_modal .modal-body.bg-200",
        "selectors": [
          "#o_live_modal .modal-body.bg-200",
          ".modal-body.bg-200",
          ".modal-body",
          "div:nth-of-type(2) > div > div > div:nth-of-type(2)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_80",
        "index": 80,
        "type": "assert",
        "selector": "text=Watch now",
        "selectors": [
          "text=Watch now",
          "div:nth-of-type(2) > div > div > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Watch now"
      },
      {
        "id": "step_81",
        "index": 81,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_82",
        "index": 82,
        "type": "assert",
        "selector": "#three-ds-container",
        "selectors": [
          "#three-ds-container",
          "div:nth-of-type(4) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_83",
        "index": 83,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_84",
        "index": 84,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(6)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(6)",
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
        "action_text": "AGARWAL SHUBHAM & ASSOCIATES, CA SHUBHAM AGARWAL",
        "selector": "text=AGARWAL SHUBHAM & ASSOCIATES, CA SHUBHAM AGARWAL",
        "selectors": [
          "text=AGARWAL SHUBHAM & ASSOCIATES, CA SHUBHAM AGARWAL",
          "div:nth-of-type(1) > div > div > h5 > a",
          "a"
        ]
      },
      {
        "id": "step_86",
        "index": 86,
        "type": "navigate",
        "url": "https://www.odoo.com/accounting-firms/agarwal-shubham-associates-ca-shubham-agarwal-12715582?country_id=101"
      },
      {
        "id": "step_87",
        "index": 87,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_88",
        "index": 88,
        "type": "assert",
        "selector": "#three-ds-container",
        "selectors": [
          "#three-ds-container",
          "div:nth-of-type(4) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_89",
        "index": 89,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_90",
        "index": 90,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(6)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(6)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_91",
        "index": 91,
        "type": "click",
        "action_text": "Accounting",
        "selector": "text=Accounting",
        "selectors": [
          "text=Accounting",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > a",
          "a"
        ]
      },
      {
        "id": "step_92",
        "index": 92,
        "type": "assert",
        "selector": "#top_menu .start-0.dropdown-menu",
        "selectors": [
          "#top_menu .start-0.dropdown-menu",
          ".start-0.dropdown-menu",
          ".start-0",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Finance\n                                        \n                                            Account"
      },
      {
        "id": "step_93",
        "index": 93,
        "type": "click",
        "action_text": "Invoicing",
        "selector": "text=Invoicing",
        "selectors": [
          "text=Invoicing",
          ".dropdown-item",
          "div:nth-of-type(1) > div:nth-of-type(1) > ul > li:nth-of-type(2) > a",
          "a"
        ]
      },
      {
        "id": "step_94",
        "index": 94,
        "type": "navigate",
        "url": "https://www.odoo.com/app/invoicing"
      },
      {
        "id": "step_95",
        "index": 95,
        "type": "assert",
        "selector": "text=Skip to Content",
        "selectors": [
          "text=Skip to Content",
          "#wrapwrap .btn.rounded-0",
          ".btn.rounded-0",
          ".btn",
          "div:nth-of-type(1) > a",
          "a"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Skip to Content"
      },
      {
        "id": "step_96",
        "index": 96,
        "type": "assert",
        "selector": "#top_menu .start-0.dropdown-menu",
        "selectors": [
          "#top_menu .start-0.dropdown-menu",
          ".start-0.dropdown-menu",
          ".start-0",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Finance\n                                        \n                                            Account"
      },
      {
        "id": "step_97",
        "index": 97,
        "type": "assert",
        "selector": ".dropdown-menu",
        "selectors": [
          ".dropdown-menu",
          "div > div > div > div > ul",
          "ul"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Demo with an Expert (1-250 employees)\n                                        \n                     "
      },
      {
        "id": "step_98",
        "index": 98,
        "type": "assert",
        "selector": "#wrap .top-0.bottom-0",
        "selectors": [
          "#wrap .top-0.bottom-0",
          ".top-0.bottom-0",
          ".top-0",
          "main > div:nth-of-type(1) > section:nth-of-type(9) > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Join 15 million \nhappy\nusers\nwho grow their business with Odoo"
      },
      {
        "id": "step_99",
        "index": 99,
        "type": "assert",
        "selector": "#footer [role=\"menu\"]",
        "selectors": [
          "#footer [role=\"menu\"]",
          "[role=\"menu\"]",
          "#footer .dropdown-menu",
          ".dropdown-menu",
          "div > div:nth-of-type(2) > div:nth-of-type(1) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "الْعَرَبيّة\n                    \n                    \n    \n                         Català\n         "
      },
      {
        "id": "step_100",
        "index": 100,
        "type": "assert",
        "selector": "[role=\"dialog\"]",
        "selectors": [
          "[role=\"dialog\"]",
          "#o_live_modal",
          ".modal.fade",
          ".modal",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_101",
        "index": 101,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div",
        "selectors": [
          "div:nth-of-type(2) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_102",
        "index": 102,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div",
        "selectors": [
          "div:nth-of-type(2) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_103",
        "index": 103,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_104",
        "index": 104,
        "type": "assert",
        "selector": "#o_live_modal .modal-body.bg-200",
        "selectors": [
          "#o_live_modal .modal-body.bg-200",
          ".modal-body.bg-200",
          ".modal-body",
          "div:nth-of-type(2) > div > div > div:nth-of-type(2)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_105",
        "index": 105,
        "type": "assert",
        "selector": "text=Watch now",
        "selectors": [
          "text=Watch now",
          "div:nth-of-type(2) > div > div > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Watch now"
      },
      {
        "id": "step_106",
        "index": 106,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_107",
        "index": 107,
        "type": "assert",
        "selector": "#three-ds-container",
        "selectors": [
          "#three-ds-container",
          "div:nth-of-type(4) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_108",
        "index": 108,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_109",
        "index": 109,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(6)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(6)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_110",
        "index": 110,
        "type": "click",
        "action_text": "Features",
        "selector": "text=Features",
        "selectors": [
          "text=Features",
          "div > ul:nth-of-type(2) > li:nth-of-type(3) > a > span",
          "span"
        ]
      },
      {
        "id": "step_111",
        "index": 111,
        "type": "navigate",
        "url": "https://www.odoo.com/app/invoicing-features"
      },
      {
        "id": "step_112",
        "index": 112,
        "type": "assert",
        "selector": "text=Skip to Content",
        "selectors": [
          "text=Skip to Content",
          "#wrapwrap .btn.rounded-0",
          ".btn.rounded-0",
          ".btn",
          "div:nth-of-type(1) > a",
          "a"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Skip to Content"
      },
      {
        "id": "step_113",
        "index": 113,
        "type": "assert",
        "selector": "#top_menu .start-0.dropdown-menu",
        "selectors": [
          "#top_menu .start-0.dropdown-menu",
          ".start-0.dropdown-menu",
          ".start-0",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Finance\n                                        \n                                            Account"
      },
      {
        "id": "step_114",
        "index": 114,
        "type": "assert",
        "selector": "#footer [role=\"menu\"]",
        "selectors": [
          "#footer [role=\"menu\"]",
          "[role=\"menu\"]",
          "#footer .dropdown-menu",
          ".dropdown-menu",
          "div > div:nth-of-type(2) > div:nth-of-type(1) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "الْعَرَبيّة\n                    \n                    \n    \n                         Català\n         "
      },
      {
        "id": "step_115",
        "index": 115,
        "type": "assert",
        "selector": "[role=\"dialog\"]",
        "selectors": [
          "[role=\"dialog\"]",
          "#o_live_modal",
          ".modal.fade",
          ".modal",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_116",
        "index": 116,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div",
        "selectors": [
          "div:nth-of-type(2) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_117",
        "index": 117,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div",
        "selectors": [
          "div:nth-of-type(2) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_118",
        "index": 118,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_119",
        "index": 119,
        "type": "assert",
        "selector": "#o_live_modal .modal-body.bg-200",
        "selectors": [
          "#o_live_modal .modal-body.bg-200",
          ".modal-body.bg-200",
          ".modal-body",
          "div:nth-of-type(2) > div > div > div:nth-of-type(2)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_120",
        "index": 120,
        "type": "assert",
        "selector": "text=Watch now",
        "selectors": [
          "text=Watch now",
          "div:nth-of-type(2) > div > div > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Watch now"
      },
      {
        "id": "step_121",
        "index": 121,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_122",
        "index": 122,
        "type": "assert",
        "selector": "#three-ds-container",
        "selectors": [
          "#three-ds-container",
          "div:nth-of-type(4) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_123",
        "index": 123,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_124",
        "index": 124,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(6)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(6)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_125",
        "index": 125,
        "type": "click",
        "action_text": "Invoicing",
        "selector": "text=Invoicing",
        "selectors": [
          "text=Invoicing",
          "div > ul:nth-of-type(2) > li:nth-of-type(1) > a > span",
          "span"
        ]
      },
      {
        "id": "step_126",
        "index": 126,
        "type": "click",
        "action_text": "CRM",
        "selector": "text=CRM",
        "selectors": [
          "text=CRM",
          ".dropdown-item",
          "div:nth-of-type(1) > div:nth-of-type(2) > ul > li:nth-of-type(1) > a",
          "a"
        ]
      },
      {
        "id": "step_127",
        "index": 127,
        "type": "navigate",
        "url": "https://www.odoo.com/app/crm"
      },
      {
        "id": "step_128",
        "index": 128,
        "type": "assert",
        "selector": "text=Skip to Content",
        "selectors": [
          "text=Skip to Content",
          "#wrapwrap .btn.rounded-0",
          ".btn.rounded-0",
          ".btn",
          "div:nth-of-type(1) > a",
          "a"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Skip to Content"
      },
      {
        "id": "step_129",
        "index": 129,
        "type": "assert",
        "selector": "#top_menu .start-0.dropdown-menu",
        "selectors": [
          "#top_menu .start-0.dropdown-menu",
          ".start-0.dropdown-menu",
          ".start-0",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Finance\n                                        \n                                            Account"
      },
      {
        "id": "step_130",
        "index": 130,
        "type": "assert",
        "selector": ".dropdown-menu",
        "selectors": [
          ".dropdown-menu",
          "div > div > div > div > ul",
          "ul"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Demo with an Expert (1-250 employees)\n                                        \n                     "
      },
      {
        "id": "step_131",
        "index": 131,
        "type": "assert",
        "selector": "#wrap .o_illustration_doodle_01",
        "selectors": [
          "#wrap .o_illustration_doodle_01",
          ".o_illustration_doodle_01",
          "div:nth-of-type(1) > main > div:nth-of-type(1) > section:nth-of-type(2) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_132",
        "index": 132,
        "type": "assert",
        "selector": "#wrap .top-0.bottom-0",
        "selectors": [
          "#wrap .top-0.bottom-0",
          ".top-0.bottom-0",
          ".top-0",
          "main > div:nth-of-type(1) > section:nth-of-type(11) > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Join 15 million \nhappy\nusers\nwho grow their business with Odoo"
      },
      {
        "id": "step_133",
        "index": 133,
        "type": "assert",
        "selector": "#footer [role=\"menu\"]",
        "selectors": [
          "#footer [role=\"menu\"]",
          "[role=\"menu\"]",
          "#footer .dropdown-menu",
          ".dropdown-menu",
          "div > div:nth-of-type(2) > div:nth-of-type(1) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "الْعَرَبيّة\n                    \n                    \n    \n                         Català\n         "
      },
      {
        "id": "step_134",
        "index": 134,
        "type": "assert",
        "selector": "[role=\"dialog\"]",
        "selectors": [
          "[role=\"dialog\"]",
          "#o_live_modal",
          ".modal.fade",
          ".modal",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_135",
        "index": 135,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div",
        "selectors": [
          "div:nth-of-type(2) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_136",
        "index": 136,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div",
        "selectors": [
          "div:nth-of-type(2) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_137",
        "index": 137,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_138",
        "index": 138,
        "type": "assert",
        "selector": "#o_live_modal .modal-body.bg-200",
        "selectors": [
          "#o_live_modal .modal-body.bg-200",
          ".modal-body.bg-200",
          ".modal-body",
          "div:nth-of-type(2) > div > div > div:nth-of-type(2)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_139",
        "index": 139,
        "type": "assert",
        "selector": "text=Watch now",
        "selectors": [
          "text=Watch now",
          "div:nth-of-type(2) > div > div > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Watch now"
      },
      {
        "id": "step_140",
        "index": 140,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_141",
        "index": 141,
        "type": "assert",
        "selector": "#three-ds-container",
        "selectors": [
          "#three-ds-container",
          "div:nth-of-type(4) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_142",
        "index": 142,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_143",
        "index": 143,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(6)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(6)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_144",
        "index": 144,
        "type": "click",
        "action_text": "Features",
        "selector": "text=Features",
        "selectors": [
          "text=Features",
          "div > ul:nth-of-type(2) > li:nth-of-type(3) > a > span",
          "span"
        ]
      },
      {
        "id": "step_145",
        "index": 145,
        "type": "navigate",
        "url": "https://www.odoo.com/app/crm-features"
      },
      {
        "id": "step_146",
        "index": 146,
        "type": "assert",
        "selector": "text=Skip to Content",
        "selectors": [
          "text=Skip to Content",
          "#wrapwrap .btn.rounded-0",
          ".btn.rounded-0",
          ".btn",
          "div:nth-of-type(1) > a",
          "a"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Skip to Content"
      },
      {
        "id": "step_147",
        "index": 147,
        "type": "assert",
        "selector": "#top_menu .start-0.dropdown-menu",
        "selectors": [
          "#top_menu .start-0.dropdown-menu",
          ".start-0.dropdown-menu",
          ".start-0",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Finance\n                                        \n                                            Account"
      },
      {
        "id": "step_148",
        "index": 148,
        "type": "assert",
        "selector": "#footer [role=\"menu\"]",
        "selectors": [
          "#footer [role=\"menu\"]",
          "[role=\"menu\"]",
          "#footer .dropdown-menu",
          ".dropdown-menu",
          "div > div:nth-of-type(2) > div:nth-of-type(1) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "الْعَرَبيّة\n                    \n                    \n    \n                         Català\n         "
      },
      {
        "id": "step_149",
        "index": 149,
        "type": "assert",
        "selector": "[role=\"dialog\"]",
        "selectors": [
          "[role=\"dialog\"]",
          "#o_live_modal",
          ".modal.fade",
          ".modal",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_150",
        "index": 150,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div",
        "selectors": [
          "div:nth-of-type(2) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_151",
        "index": 151,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div",
        "selectors": [
          "div:nth-of-type(2) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_152",
        "index": 152,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_153",
        "index": 153,
        "type": "assert",
        "selector": "#o_live_modal .modal-body.bg-200",
        "selectors": [
          "#o_live_modal .modal-body.bg-200",
          ".modal-body.bg-200",
          ".modal-body",
          "div:nth-of-type(2) > div > div > div:nth-of-type(2)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_154",
        "index": 154,
        "type": "assert",
        "selector": "text=Watch now",
        "selectors": [
          "text=Watch now",
          "div:nth-of-type(2) > div > div > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Watch now"
      },
      {
        "id": "step_155",
        "index": 155,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_156",
        "index": 156,
        "type": "assert",
        "selector": "#three-ds-container",
        "selectors": [
          "#three-ds-container",
          "div:nth-of-type(4) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_157",
        "index": 157,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_158",
        "index": 158,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(6)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(6)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_159",
        "index": 159,
        "type": "click",
        "action_text": "Opportunities",
        "selector": "text=Opportunities",
        "selectors": [
          "text=Opportunities",
          "#features_affix .list-group-item.py-1",
          ".list-group-item.py-1",
          ".list-group-item",
          "div > div > div:nth-of-type(1) > nav > a:nth-of-type(3)",
          "a"
        ]
      },
      {
        "id": "step_160",
        "index": 160,
        "type": "navigate",
        "url": "https://www.odoo.com/app/crm-features#part_3"
      },
      {
        "id": "step_161",
        "index": 161,
        "type": "click",
        "action_text": "Efficient Communication",
        "selector": "text=Efficient Communication",
        "selectors": [
          "text=Efficient Communication",
          "#features_affix .list-group-item.py-1",
          ".list-group-item.py-1",
          ".list-group-item",
          "div > div > div:nth-of-type(1) > nav > a:nth-of-type(5)",
          "a"
        ]
      },
      {
        "id": "step_162",
        "index": 162,
        "type": "navigate",
        "url": "https://www.odoo.com/app/crm-features#part_5"
      },
      {
        "id": "step_163",
        "index": 163,
        "type": "click",
        "action_text": "Integrations",
        "selector": "text=Integrations",
        "selectors": [
          "text=Integrations",
          "#features_affix .list-group-item.py-1",
          ".list-group-item.py-1",
          ".list-group-item",
          "div > div > div:nth-of-type(1) > nav > a:nth-of-type(7)",
          "a"
        ]
      },
      {
        "id": "step_164",
        "index": 164,
        "type": "navigate",
        "url": "https://www.odoo.com/app/crm-features#part_7"
      },
      {
        "id": "step_165",
        "index": 165,
        "type": "click",
        "action_text": "Sell Faster",
        "selector": "text=Sell Faster",
        "selectors": [
          "text=Sell Faster",
          "#features_affix .list-group-item.py-1",
          ".list-group-item.py-1",
          ".list-group-item",
          "div > div > div:nth-of-type(1) > nav > a:nth-of-type(1)",
          "a"
        ]
      },
      {
        "id": "step_166",
        "index": 166,
        "type": "navigate",
        "url": "https://www.odoo.com/app/crm-features#part_1"
      },
      {
        "id": "step_167",
        "index": 167,
        "type": "click",
        "action_text": "CRM",
        "selector": "text=CRM",
        "selectors": [
          "text=CRM",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > a",
          "a"
        ]
      },
      {
        "id": "step_168",
        "index": 168,
        "type": "click",
        "action_text": "Website Builder",
        "selector": "text=Website Builder",
        "selectors": [
          "text=Website Builder",
          ".dropdown-item",
          "div:nth-of-type(1) > div:nth-of-type(3) > ul > li:nth-of-type(1) > a",
          "a"
        ]
      },
      {
        "id": "step_169",
        "index": 169,
        "type": "navigate",
        "url": "https://www.odoo.com/app/website"
      },
      {
        "id": "step_170",
        "index": 170,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_171",
        "index": 171,
        "type": "assert",
        "selector": "#three-ds-container",
        "selectors": [
          "#three-ds-container",
          "div:nth-of-type(4) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_172",
        "index": 172,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_173",
        "index": 173,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(6)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(6)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_174",
        "index": 174,
        "type": "click",
        "action_text": "Features",
        "selector": "text=Features",
        "selectors": [
          "text=Features",
          "div > ul:nth-of-type(2) > li:nth-of-type(3) > a > span",
          "span"
        ]
      },
      {
        "id": "step_175",
        "index": 175,
        "type": "navigate",
        "url": "https://www.odoo.com/app/website-features"
      },
      {
        "id": "step_176",
        "index": 176,
        "type": "assert",
        "selector": "text=Skip to Content",
        "selectors": [
          "text=Skip to Content",
          "#wrapwrap .btn.rounded-0",
          ".btn.rounded-0",
          ".btn",
          "div > a",
          "a"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Skip to Content"
      },
      {
        "id": "step_177",
        "index": 177,
        "type": "assert",
        "selector": "#top_menu .start-0.dropdown-menu",
        "selectors": [
          "#top_menu .start-0.dropdown-menu",
          ".start-0.dropdown-menu",
          ".start-0",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Finance\n                                        \n                                            Account"
      },
      {
        "id": "step_178",
        "index": 178,
        "type": "assert",
        "selector": "#footer [role=\"menu\"]",
        "selectors": [
          "#footer [role=\"menu\"]",
          "[role=\"menu\"]",
          "#footer .dropdown-menu",
          ".dropdown-menu",
          "div > div:nth-of-type(2) > div:nth-of-type(1) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "الْعَرَبيّة\n                    \n                    \n    \n                         Català\n         "
      },
      {
        "id": "step_179",
        "index": 179,
        "type": "assert",
        "selector": "[role=\"dialog\"]",
        "selectors": [
          "[role=\"dialog\"]",
          "#o_live_modal",
          ".modal.fade",
          ".modal",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_180",
        "index": 180,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div",
        "selectors": [
          "div:nth-of-type(2) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_181",
        "index": 181,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div",
        "selectors": [
          "div:nth-of-type(2) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_182",
        "index": 182,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_183",
        "index": 183,
        "type": "assert",
        "selector": "#o_live_modal .modal-body.bg-200",
        "selectors": [
          "#o_live_modal .modal-body.bg-200",
          ".modal-body.bg-200",
          ".modal-body",
          "div:nth-of-type(2) > div > div > div:nth-of-type(2)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_184",
        "index": 184,
        "type": "assert",
        "selector": "text=Watch now",
        "selectors": [
          "text=Watch now",
          "div:nth-of-type(2) > div > div > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Watch now"
      },
      {
        "id": "step_185",
        "index": 185,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_186",
        "index": 186,
        "type": "assert",
        "selector": "#three-ds-container",
        "selectors": [
          "#three-ds-container",
          "div:nth-of-type(4) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_187",
        "index": 187,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_188",
        "index": 188,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(6)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(6)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_189",
        "index": 189,
        "type": "click",
        "action_text": "Showcase",
        "selector": "text=Showcase",
        "selectors": [
          "text=Showcase",
          "div > ul:nth-of-type(2) > li:nth-of-type(4) > a > span",
          "span"
        ]
      },
      {
        "id": "step_190",
        "index": 190,
        "type": "navigate",
        "url": "https://www.odoo.com/website-builder-showcase"
      },
      {
        "id": "step_191",
        "index": 191,
        "type": "assert",
        "selector": "text=Skip to Content",
        "selectors": [
          "text=Skip to Content",
          "#wrapwrap .btn.rounded-0",
          ".btn.rounded-0",
          ".btn",
          "div:nth-of-type(1) > a",
          "a"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Skip to Content"
      },
      {
        "id": "step_192",
        "index": 192,
        "type": "assert",
        "selector": "#top_menu .start-0.dropdown-menu",
        "selectors": [
          "#top_menu .start-0.dropdown-menu",
          ".start-0.dropdown-menu",
          ".start-0",
          "header > div > ul:nth-of-type(2) > li:nth-of-type(1) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Finance\n                                        \n                                            Account"
      },
      {
        "id": "step_193",
        "index": 193,
        "type": "assert",
        "selector": "div:nth-of-type(1) > main > div:nth-of-type(1) > section:nth-of-type(1) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(1) > main > div:nth-of-type(1) > section:nth-of-type(1) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_194",
        "index": 194,
        "type": "assert",
        "selector": "#footer [role=\"menu\"]",
        "selectors": [
          "#footer [role=\"menu\"]",
          "[role=\"menu\"]",
          "#footer .dropdown-menu",
          ".dropdown-menu",
          "div > div:nth-of-type(2) > div:nth-of-type(1) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "الْعَرَبيّة\n                    \n                    \n    \n                         Català\n         "
      },
      {
        "id": "step_195",
        "index": 195,
        "type": "assert",
        "selector": "[role=\"dialog\"]",
        "selectors": [
          "[role=\"dialog\"]",
          "#o_live_modal",
          ".modal.fade",
          ".modal",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_196",
        "index": 196,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div",
        "selectors": [
          "div:nth-of-type(2) > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_197",
        "index": 197,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div",
        "selectors": [
          "div:nth-of-type(2) > div > div",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_198",
        "index": 198,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(2) > div > div > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Odoo Experience on YouTube\n                            \n                            \n               "
      },
      {
        "id": "step_199",
        "index": 199,
        "type": "assert",
        "selector": "#o_live_modal .modal-body.bg-200",
        "selectors": [
          "#o_live_modal .modal-body.bg-200",
          ".modal-body.bg-200",
          ".modal-body",
          "div:nth-of-type(2) > div > div > div:nth-of-type(2)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_200",
        "index": 200,
        "type": "assert",
        "selector": "text=Watch now",
        "selectors": [
          "text=Watch now",
          "div:nth-of-type(2) > div > div > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Watch now"
      },
      {
        "id": "step_201",
        "index": 201,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_202",
        "index": 202,
        "type": "assert",
        "selector": "#three-ds-container",
        "selectors": [
          "#three-ds-container",
          "div:nth-of-type(4) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_203",
        "index": 203,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_204",
        "index": 204,
        "type": "assert",
        "selector": "div:nth-of-type(4) > div:nth-of-type(6)",
        "selectors": [
          "div:nth-of-type(4) > div:nth-of-type(6)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_205",
        "index": 205,
        "type": "click",
        "action_text": "Services",
        "selector": "text=Services",
        "selectors": [
          "text=Services",
          "div > ul:nth-of-type(2) > li:nth-of-type(5) > a > span",
          "span"
        ]
      },
      {
        "id": "step_206",
        "index": 206,
        "type": "navigate",
        "url": "https://design.odoo.com/"
      },
      {
        "id": "step_207",
        "index": 207,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(2) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_208",
        "index": 208,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div:nth-of-type(3)",
        "selectors": [
          "div:nth-of-type(2) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_209",
        "index": 209,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(2) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_210",
        "index": 210,
        "type": "click",
        "action_text": "about us",
        "selector": "text=about us",
        "selectors": [
          "text=about us",
          "ul > ul > li:nth-of-type(2) > a > span",
          "span"
        ]
      },
      {
        "id": "step_211",
        "index": 211,
        "type": "navigate",
        "url": "https://design.odoo.com/about-us"
      },
      {
        "id": "step_212",
        "index": 212,
        "type": "assert",
        "selector": "[role=\"presentation\"] [role=\"menu\"]",
        "selectors": [
          "[role=\"presentation\"] [role=\"menu\"]",
          "[role=\"menu\"]",
          "[role=\"presentation\"] .dropdown-menu",
          ".dropdown-menu",
          "div > ul > ul > li:nth-of-type(4) > ul",
          "ul"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Web design\n        \n    \n    \n        \n            Logo design\n        \n    \n    \n        \n         "
      },
      {
        "id": "step_213",
        "index": 213,
        "type": "assert",
        "selector": "div > footer > div > video",
        "selectors": [
          "div > footer > div > video",
          "video"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Your browser does not support the video tag."
      },
      {
        "id": "step_214",
        "index": 214,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(2) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_215",
        "index": 215,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div:nth-of-type(3)",
        "selectors": [
          "div:nth-of-type(2) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_216",
        "index": 216,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(2) > div:nth-of-type(4)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_217",
        "index": 217,
        "type": "click",
        "action_text": "services",
        "selector": "[role=\"presentation\"] [role=\"menuitem\"]",
        "selectors": [
          "[role=\"presentation\"] [role=\"menuitem\"]",
          "[role=\"menuitem\"]",
          "text=services",
          "[role=\"presentation\"] .nav-link",
          ".nav-link",
          "div > ul > ul > li:nth-of-type(4) > a",
          "a"
        ]
      },
      {
        "id": "step_218",
        "index": 218,
        "type": "click",
        "action_text": "Photography",
        "selector": "text=Photography",
        "selectors": [
          "text=Photography",
          "li:nth-of-type(4) > ul > li:nth-of-type(3) > a > span",
          "span"
        ]
      },
      {
        "id": "step_219",
        "index": 219,
        "type": "navigate",
        "url": "https://design.odoo.com/services/web-design#photography"
      },
      {
        "id": "step_220",
        "index": 220,
        "type": "assert",
        "selector": "#wrap .h-100.w-100",
        "selectors": [
          "#wrap .h-100.w-100",
          ".h-100.w-100",
          ".h-100",
          "div > div > div:nth-of-type(1) > div:nth-of-type(2) > img",
          "img"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_221",
        "index": 221,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div:nth-of-type(1)",
        "selectors": [
          "div:nth-of-type(2) > div:nth-of-type(1)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_222",
        "index": 222,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div:nth-of-type(3)",
        "selectors": [
          "div:nth-of-type(2) > div:nth-of-type(3)",
          "div"
        ],
        "assert_type": "element_visible",
        "auto_captured": true,
        "captured_text": "Modal opened"
      },
      {
        "id": "step_223",
        "index": 223,
        "type": "assert",
        "selector": "div:nth-of-type(2) > div:nth-of-type(4)",
        "selectors": [
          "div:nth-of-type(2) > div:nth-of-type(4)",
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