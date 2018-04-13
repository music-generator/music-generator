Vue.component('music-player', {
    name: 'music-player',
    template: `
    <audio controls autoplay loop>
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg" type="audio/ogg">
    </audio>
    `
})