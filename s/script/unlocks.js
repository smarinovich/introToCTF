let unlocks;

function initUnlocks() {
    unlocks = new Map();
    // Setting up the unlocks systems\
    // Cryptography
    unlocks.set("cry1", "cry2");
    unlocks.set("cry2", "cry3");
    unlocks.set("cry3", "cry4");
}

function getUnlocks(flag) {
    if (unlocks.has(flag)) {
        return unlocks.get(flag);
    }
    return "";
}

export { initUnlocks, getUnlocks };

