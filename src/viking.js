// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        super.receiveDamage(damage);

        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else{
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {

    constructor(health,strength){
        super(health, strength);
    }
    receiveDamage(damage){
        super.receiveDamage(damage);

            if(this.health > 0){
                return `A Saxon has received ${damage} points of damage`;
            }
            else{
                return `A Saxon has died in combat`;
            }
        }
    }

// War
class War {
    constructor(){
        this.vikingArmy = [];

        this.saxonArmy = [];
    }

    addViking(vikingObject){
        this.vikingArmy.push(vikingObject);
    }

    addSaxon(saxonObject){
        this.saxonArmy.push(saxonObject);
    }

    vikingAttack(){
        for(let i = 0; i < this.saxonArmy.length ; i++){

            if(this.saxonArmy[i].receiveDamage(this.vikingArmy[i].strength) === "A Saxon has died in combat"){
                
                let saxonDeath = "A Saxon has died in combat";
                this.saxonArmy.pop();
                return saxonDeath;
            }
            else{
                return this.saxonArmy[i].receiveDamage(this.vikingArmy.strength);
            }
        }
    }

    saxonAttack(){
        for(let i = 0; i < this.vikingArmy.length ; i++){

            if(this.vikingArmy[i].receiveDamage(this.saxonArmy[i].strength) === `${this.vikingArmy[i].name} has died in act of combat`){
                
                let vikingDeath = `${this.vikingArmy[i].name} has died in act of combat`;
                this.vikingArmy.pop();
                return vikingDeath;
            }
            else{
                 return `${this.vikingArmy[i].name} has received ${this.saxonArmy[i].strength} points of damage`;
            }
        }
    }
    showStatus(){
        if (!this.saxonArmy.length){
            return "Vikings have won the war of the century!";
        }
        else if(!this.vikingArmy.length){
            return "Saxons have fought for their lives and survived another day...";
        }
        else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
