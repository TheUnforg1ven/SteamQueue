// ==UserScript==
// @name         Steam Queue
// @namespace    https://github.com/TheUnforg1ven/SteamQueue
// @version      0.1
// @description  Script for fast steam queue using
// @author       TheUnforg1ven
// @match        *://store.steampowered.com/app/*
// @match        *://store.steampowered.com/explore/*
// @match        *://store.steampowered.com/agecheck/app/*
// ==/UserScript==

(function() {
    'use strict';

    const newQueue = document.getElementsByClassName('btnv6_lightblue_blue btn_medium')["0"]; // new queue
    const firstQueue = document.getElementsByClassName('discovery_queue_overlay_bg')["0"]; // first queue
    const nextGame = document.getElementsByClassName('next_in_queue_content')["0"]; // next game in queue

    try {
        if(firstQueue != undefined) {
            firstQueue.click();
        }
        else if(newQueue != undefined) {
            newQueue.click();
        }
        else {
            nextGame.click();
        }
    }
    catch(err) {
        console.log('Error');
    }
})();