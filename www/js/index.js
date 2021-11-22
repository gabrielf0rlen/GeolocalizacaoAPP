/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        alert("Aceite a localização");
        this.receivedEvent('deviceready');
        navigator.geolocation.getCurrentPosition(
            this.onGeolocationSucess,
            this.onGeolocationError,
            { timeout: 120000 }
        );
    },

    //update DOM on a Received Event
    receivedEvent: function(id) {

    },

    onGeolocationSucess: function(position) {
        alert("Localização encontrada: Apresentando Localização");
        alert('Latitude: ' + position.coords.latitude + '\n' +
              'Longitude: ' + position.coords.longitude + '\n' +
              'Altitude: ' + position.coords.altitude + '\n' +
              'Precisão: ' + position.coords.accuracy + '\n' +
              'Precisão da Altitude: ' + position.coords.altitudeAccuracy + '\n' +
              'Heading: ' + position.coords.heading + '\n' +
              'Velocidade: ' + position.coords.speed + '\n' +
              'Timestamp: ' + position.timestamp + '\n'
              );

        document.getElementById("lat").value = position.coords.latitude;
        document.getElementById("lng").value = position.coords.longitude;
    },

    onGeolocationError: function(err) {
        alert("Erro ao pegar localização");
        alert(err.code + " " + err.message);
    }
};

app.initialize();