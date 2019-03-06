// created by emerson
//
//players
var maul = {
    name: "Darth Maul",
    nickname: "maul",
    attackPower: 6,
    counterAttack: 10,
    healthPoints: 120,
    picture: '<img id="theImg" src="https://vignette.wikia.nocookie.net/starwarstcw/images/c/c8/Asky.png />',
    background: 'url("https://vignette.wikia.nocookie.net/theclonewiki/images/0/0e/Darthmaul_detail-4.png/revision/latest?cb=20131101112413")'


}

var ahsoka = {
    name: "Ahsoka Tano",
    nickname: "ahsoka",
    attackPower: 6,
    counterAttack: 10,
    healthPoints: 120,
    picture: '<img src="https://vignette2.wikia.nocookie.net/fusionfallfanonsite/images/d/d7/Ahsoka_Tano.png/revision/latest?cb=20140518104855" />',
    background: 'url("https://vignette2.wikia.nocookie.net/fusionfallfanonsite/images/d/d7/Ahsoka_Tano.png/revision/latest?cb=20140518104855)"'

}

var sidious = {
    name: "Darth Sidious",
    nickname: "sidious",
    attackPower: 6,
    counterAttack: 10,
    healthPoints: 120,
    background: 'url("https://us.v-cdn.net/6025735/uploads/editor/6t/79mi3alq1c0i.png"'

}

var anakin = {
    name: "Anakin Skywalker",
    nickname: "anakin",
    attackPower: 6,
    counterAttack: 10,
    healthPoints: 120,
    background: 'url("https://vignette.wikia.nocookie.net/theclonewiki/images/c/ca/Anakin_skywalker_tcws03.png/revision/latest?cb=20120310130032"'
}

var obi = {
    name: "Obi-Wan Kenobi",
    nickname: "obi",
    attackPower: 6,
    counterAttack: 10,
    healthPoints: 180,
    background: 'url("https://vignette.wikia.nocookie.net/nanohaclonewars/images/9/95/Obi_wan_kenobi.png/revision/latest?cb=20160131023954"'
}


function character(player) {
    $('section').append('<div class="circle" id="' + player.nickname + '">');
    $('#' + player.nickname).append('<h1 class="name" id="name' + player.nickname + '">');
    $('#name' + player.nickname).append(player.name);
    $('#' + player.nickname).css("background-image", player.background);

    $('#' + player.nickname).append('<h2 class="hp" id="hp' + player.nickname + '">');
    $('#hp' + player.nickname).append(player.healthPoints);
    $('#' + player.nickname).click(function () {
        $('#' + player.nickname).attr('data-state', "selected");
        console.log("you selected " + player.name);
        //distributingCharacters();
    })
}


// function distributingCharacters(){
//     var state = $(this).attr('data-state');
//     if(state === "selected"){
        
//     }
// }




var attacking = 0;

function attack(player) {

    if (attacking === 0) {
        attacking = player.attackPower;
    }
    player.attackPower = player.attackPower + attacking;
}

character(ahsoka);

character(obi);

character(sidious);

character(anakin);

character(maul);

console.log("=======----------=============-----------");
console.log("=======----------=============-----------");
console.log(obi.attackPower);
attack(obi);
console.log(obi.attackPower);
attack(obi);
console.log(obi.attackPower);
attack(obi);
console.log(obi.attackPower);