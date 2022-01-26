const ACCESS_TOKEN = 'pk.eyJ1IjoiaGVvbmEtbGl1IiwiYSI6ImNreTlibG9xMjAzNjQydXM5bHY2ZnI2dWEifQ.oavfDbctrlGqNnjrZSLvaQ'


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function setupMap(centerPosition) {
    const map = new mapboxgl.Map({
        accessToken: ACCESS_TOKEN ,
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: centerPosition,
        zoom: 15
    });

    const navigationControls = new mapboxgl.NavigationControl() 
    map.addControl(navigationControls)

     
    const directionControls = new MapboxDirections({
    accessToken: ACCESS_TOKEN
    })

    map.addControl(directionControls, 'top-left')
        
}



function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
    console.log(position) 
 
}

function errorLocation() {
    setupMap([-2.24,53.48])
}

