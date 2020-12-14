// PRELOADER

$(window).on("load", function () {
  if ($("#preloader").length) {
    $("#preloader")
      .delay(100)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  }
});

// WEATHER STATION API

$("#btnWeatherStation").click(function () {
  $.ajax({
    url: "PHP/getWeatherInfo.php",
    type: "POST",
    dataType: "json",
    data: {
      ICAO: $("#selICAO").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtDatetime").html(result["data"]["datetime"]);
        $("#txtStationName").html(result["data"]["stationName"]);
        $("#txtTemperature").html(result["data"]["temperature"]);
        $("#txtClouds").html(result["data"]["clouds"]);
        $("#txtWind").html(result["data"]["windSpeed"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // your error code
    },
  });
});

// TIMEZONE API

$("#btnTimezone").click(function () {
  $.ajax({
    url: "PHP/getTimezoneInfo.php",
    type: "POST",
    dataType: "json",
    data: {
      lat: "51.476852",
      lng: "-0.000500",
      date: $("#inputDate").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtSunrise").html(result["data"][0]["sunrise"]);
        $("#txtSunset").html(result["data"][0]["sunset"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // your error code
    },
  });
});

// EARTHQUAKE API

$("#btnEarthquake").click(function () {
  $.ajax({
    url: "PHP/getEarthquakesInfo.php",
    type: "POST",
    dataType: "json",
    data: {
      north: "45.7112046",
      south: "20.2145811",
      east: "154.205541",
      west: "122.7141754",
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtDatetime1").html(result["data"][0]["datetime"]);
        $("#txtMagnitude1").html(result["data"][0]["magnitude"]);
        $("#txtDatetime2").html(result["data"][1]["datetime"]);
        $("#txtMagnitude2").html(result["data"][1]["magnitude"]);
        $("#txtDatetime3").html(result["data"][2]["datetime"]);
        $("#txtMagnitude3").html(result["data"][2]["magnitude"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // your error code
    },
  });
});
