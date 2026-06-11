const character = {
    name: 'Don',
    class: 'average monkey',
    level: 5,
    health: 100,
    image: 'monkey-thinking-monkey.gif',

    attacked: function(){
        this.health -= 20;
        if(this.health <= 0){
            this.health = 0;
            alert(`${this.name} has died`)
        }

        document.querySelector('#health').textContent = this.health;
    },
    
    levelUp: function(level){
        this.level++;
        document.querySelector('#level').textContent = this.level;
    }

}

document.querySelector("#attackBtn").addEventListener("click", function () {
    character.attacked();
});

document.querySelector("#levelUpBtn").addEventListener("click", function () {
    character.levelUp();
});