function button(){
    let grass = document.getElementById('grass');
    let fire = document.getElementById('fire');
    let water = document.getElementById('water');
    let best = document.getElementById('best');

    if(grass.onclick === true){
        document.getElementById('pokeName').innerHTML = 'Mega-venusaur';
        document.getElementById('pokeNumber').innerHTML = '#003'
    }
    if(fire.onclick === true){
        document.getElementById('pokeName').innerHTML = 'Charizard';
        document.getElementById('pokeNumber').innerHTML = '#006'
    }
    if(water.onclick === true){
        document.getElementById('pokeName').innerHTML = 'Marill';
        document.getElementById('pokeNumber').innerHTML = '#183'
    }
    if(best.onclick === true){
        document.getElementById('pokeName').innerHTML = 'Arceus';
        document.getElementById('pokeNumber').innerHTML = '#493'
    }
}