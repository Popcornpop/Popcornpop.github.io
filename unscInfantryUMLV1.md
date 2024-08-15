```mermaid
    classDiagram

    class UNSCInfantry{
        numLegs int 
        class string
        type string
        hasArmor boolean
        eat()
        hasWeapon()
        die()
    }

    class Marine{
        walk()
        sprint()
        shooting()
        reloading()
        class string
        numOfAmmo int
        class string
        hasGrenade boolean
        health int
    }

    UNSCInfantry <|-- Marine

    class FlamerMarine{
        hasFlamer boolean
        hasFlashbang boolean
        usingFlamer()
    }
    Marine <|--FlamerMarine

        class SniperMarine{
        hasSniper boolean
        activeInfaredMarker()
        usingSniper()
    }
    Marine <|--SniperMarine

    class Mech{
        marching()
        shooting()
        reloading()
        shieldHealth Int
        health int
        class string
    }
    UNSCInfantry<|--Mech

    class MantisMech{
        has2PrimaryCannons boolean
        hasMinigun boolean
        shieldStrength int
        coolingCannons()
        coolingGattlingGun()
    }
    Mech<|--MantisMech

    class CyclopsMech{
        has2Miniguns boolean
        shieldStrength int
        coolingCannons()
        coolingGattlingGun()
    }
    Mech<|--CyclopsMech