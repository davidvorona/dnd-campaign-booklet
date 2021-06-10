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
        },
        description: string
    }
    
    interface PlayerCharacter extends Character {
        [key: string]: unknown,

        playerName: string,
        createDate: string
    }
    
    interface Location {
        [key: string]: unknown,

        type: string,
        name: string,
        description: string
    }
    
    interface Setting {
        [key: string]: unknown,

        createDate: string,
        setupStep?: number,

        name: string,
        magicLevel?: number,
        pcs?: PlayerCharacter[],
        npcs?: Character[],
        locations?: Location[]
    }
}
