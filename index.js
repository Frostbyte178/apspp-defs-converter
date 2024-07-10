const fs = require('fs');
const path = require('path');

const replacementMap = {
    // gunvals

    // Spammers
    double: 'doubleTwin',
    hewn: 'hewnDouble',
    bent: 'tripleShot',
    spreadmain: 'spreadshotMain',
    spread: 'spreadshot',
    triple: 'triplet',

    // Snipers
    assass: 'assassin',
    hunter2: 'hunterSecondary',
    preda: 'predator',

    // Machine guns
    mach: 'machineGun',
    mini: 'minigun',
    stream: 'streamliner',
    nail: 'nailgun',
    gunner: 'pelleter',
    puregunner: 'gunner',
    machgun: 'machineGunner',
    chain: 'focal',

    // Flanks
    flank: 'flankGuard',
    hurricane: 'cyclone',
    tri: 'triAngle',
    trifront: 'triAngleFront',

    // Autos
    auto: 'autoTurret',

    // Drones
    protectorswarm: 'baseProtector',
    battle: 'battleship',
    bees: 'bee',
    minion: 'minionGun',
    bigdrone: 'bigCheese',

    // Heavy cannons
    pound: 'pounder',
    destroy: 'destroyer',
    anni: 'annihilator',
    arty: 'artillery',
    
    // Missiles
    skim: 'skimmer',
    sidewind: 'sidewinder',
    
    // Traps and blocks
    block: 'setTrap',
    nest_keeper: 'nestKeeper',
    hexatrap: 'hexaTrapper',

    // Recoil
    tonsmorrecoil: '{ recoil: 4 }',
    lotsmorrecoil: '{ recoil: 1.8 }',
    muchmorerecoil: '{ recoil: 1.35 }',
    morerecoil: '{ recoil: 1.15 }',
    halfrecoil: '{ recoil: 0.5 }',

    // Reload
    halfreload: '{ reload: 2 }',
    lessreload: '{ reload: 1.5 }',
    one_third_reload: '{ reload: 1.333 }',
    morereload: '{ reload: 0.75 }',
    doublereload: '{ reload: 0.5 }',

    // Speed
    fast: '{ speed: 1.2 }',
    veryfast: '{ speed: 2.5 }',
    morespeed: '{ speed: 1.3, maxSpeed: 1.3 }',
    bitlessspeed: '{ speed: 0.93, maxSpeed: 0.93 }',
    slow: '{ speed: 0.7, maxSpeed: 0.7 }',
    halfspeed: '{ speed: 0.5, maxSpeed: 0.5 }',

    // Misc
    small: '{ size: 0.8 }',
    micro: '{ size: 0.4 }',
    closer: 'arenaCloser',
    celeslower: '{ size: 0.5 }',
    notdense: '{ density: 0.1 }',
    halfrange: '{ range: 0.5 }',
    acc: '{ shudder: 0.1 }',
    noRandom: 'noSpread',

    // other things
    'exports.': 'Class.',
}
