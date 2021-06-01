import React from 'react';

const getDistance = async (origin, destination) => {
    let origin_id = await fetch(`https://dev.virtualearth.net/REST/v1/Locations?countryRegion=BY&locality=${origin}}&key=AlzOO402HVqZ7XJ2fIUVY5N-noS8iyZqLrLQXUK1dFjip843l1iKap1VeB3Lc_64`)
    .then(response => response.json())
    .then(data => data.resourceSets[0].resources[0].point.coordinates)

    let destination_id = await fetch(`https://dev.virtualearth.net/REST/v1/Locations?countryRegion=BY&locality=${destination}&key=AlzOO402HVqZ7XJ2fIUVY5N-noS8iyZqLrLQXUK1dFjip843l1iKap1VeB3Lc_64`)
    .then(response => response.json())
    .then(data => data.resourceSets[0].resources[0].point.coordinates)

    let distance = await fetch(`https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=${origin_id[0]},${origin_id[1]}&destinations=${destination_id[0]},${destination_id[1]}&travelMode=Driving&key=AlzOO402HVqZ7XJ2fIUVY5N-noS8iyZqLrLQXUK1dFjip843l1iKap1VeB3Lc_64`)
    .then(response => response.json())
    .then(data => data.resourceSets[0].resources[0].results[0].travelDistance)

    return distance
}

export default getDistance;
