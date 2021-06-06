declare namespace dnd {
    interface Character {
        [key: string]: unknown,

        name: string,
        race: string,
        class: string,
        lvl: number,
        abilityScores: {
            strength: number,
            dexterity: number,
            constitution: number,
            intelligence: number,
            wisdom: number,
            charisma: number
        }
    }
    
    interface PlayerCharacter extends Character {
        [key: string]: unknown,

        playerName: string,
        createDate: string
    }
    
    interface Location {
        [key: string]: unknown,

        type: string,
        name: string
    }
    
    interface Setting {
        [key: string]: unknown,

        name: string,
        createDate: string,
        location?: string,
        pcs: PlayerCharacter[],
        npcs: Character[],
        locations: Location[]
    }
}
