"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Michael Kroth
   Date:   4/17/19

*/

var thisTime = new Date("February 3, 2018 3:15:28");
var timeStr = thisTime.toLocaleString();

document.getElementById("timeStamp").innerHTML = timeStr;

var thisMonth = thisTime.getMonth();
var thisHour = thisTime.getHours();

var mapNum = (2 * thisMonth + thisHour) % 4;

var imgStr = "<img src='sd_sky' + mapNum + '.png' />";

document.getElementById("planisphere").insertAdjacentHTML("afterbegin",imgStr);

