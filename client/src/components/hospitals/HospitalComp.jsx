import React from 'react';
import './hospital.css';
import "../members/assessments.css"
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';


export default class HospitalsPage extends React.Component {
    
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoiam95Y2hlbjUwNjkiLCJhIjoiY2tkc3ZsMWp0MG1hMTJybnhpNW9wbDh3NyJ9.7jiZP4oIoTlXI--KIOjT5A'

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
            else {
                let userLat = 35.78;
                let userLon = -78.64;
            }
        }

        const showPosition = (position) => {
            let userLat = position.coords.latitude.toFixed(2);
            let userLon = position.coords.longitude.toFixed(2);
            console.log(userLat, userLon)

            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [userLon, userLat],
                zoom: 10
            });

            map.addControl(
                new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
                })
                );
        }
        getLocation()
    };



    render() {
        return (
            <>
                <div className="col">
                    <h3 >Search for Health Centers and Hospitals here</h3>
                    <div id='map'></div>
                </div>
            </>
        )
    }
}
