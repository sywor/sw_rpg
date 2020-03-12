const init = {
    isFetching: false,
    didInvalidate: true,
    lastUpdated: 0,
    inventory: {
        weapons: [],
        armor: []
    },
    skills: {
        characteristics: {
            brawn: 0,
            agility: 0,
            intelect: 0,
            cunning: 0,
            willpower: 0,
            presence: 0
        },
        values: {
            astrogation: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            athletics: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            charm: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            coercion: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            computers: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            cool: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            coordination: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            deception: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            discipline: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            leadership: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            mechanics: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            medicine: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            negotiation: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            perception: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            piloting_planetery: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            piloting_space: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            resilience: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            skullduggery: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            stealth: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            streetwise: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            survival: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            vigilance: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            core_worlds: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            education: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            lore: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            outer_rim: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            underworld: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            warfare: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            xenology: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            brawl: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            gunnery: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            lightsaber: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            melee: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            ranged_heavy: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            ranged_light: {
                career: false,
                pool: [
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        }
    },
    combat: {
        combat_stats: {
            soak: 0,
            wounds: {
                threshold: 0,
                current: 0
            },
            defense: {
                melee: 0,
                range: 0
            },
            strain: {
                threshold: 0,
                current: 0
            }
        },
        critical_injuries: []
    },
    character: {
        description: {
            avatar: undefined,
            name: undefined,
            species: undefined,
            career: undefined,
            gender: undefined,
            height: undefined,
            hair: undefined,
            age: undefined,
            build: undefined,
            eyes: undefined,
            motivation: undefined
        },
        obligations: [],
        morality: {
            strength: undefined,
            weakness: undefined,
            conflict: undefined,
            value: 0
        },
        experience: {
            total: 0,
            available: 0
        },
        background: undefined
    }
}

export default init;