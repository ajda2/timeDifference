"use strict";

$(function () {
    function calculateTimeDifference() {
        var timeFromParts = $(timeFromSelector).val().split(":");
        var timeToParts = $(timeToSelector).val().split(":");
        var timeFrom = new Date();
        var timeTo = new Date();
        var timeDiff;
        var dateDifference = new Date();

        timeFrom.setHours(timeFromParts[0]);
        timeFrom.setMinutes(timeFromParts[1]);

        timeTo.setHours(timeToParts[0]);
        timeTo.setMinutes(timeToParts[1]);


        timeDiff = Math.abs(timeTo.getTime() - timeFrom.getTime());

        dateDifference.setMinutes(timeDiff / 1000 / 60);
        dateDifference.setHours(timeDiff / 1000 / 60 / 60);

        resultElement.text(dateDifference.getHours() + ":" + (dateDifference.getMinutes() < 10 ? "0" : "" ) + dateDifference.getMinutes());
    }

    var actualTime = new Date();
    var dateInputsHolder = $('.clockpicker');
    var dateInputs = dateInputsHolder.children("input");
    var timeFromSelector = "#timeFrom";
    var timeToSelector = "#timeTo";
    var resultElement = $("#result");

    var timeTimeFormatted = actualTime.getHours() + ":" + (actualTime.getMinutes() < 10 ? "0" : "" ) + actualTime.getMinutes();

    dateInputs.val(timeTimeFormatted);
    dateInputs.val(timeTimeFormatted);

    dateInputsHolder.clockpicker({
        'default': 'now',
        placement: 'bottom',
        align:     'left',
        autoclose: true,
        donetext:  'Hotovo'
    });

    calculateTimeDifference();
    dateInputs.change(calculateTimeDifference);
});