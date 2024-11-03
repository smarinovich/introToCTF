let unlocks;

function initUnlocks() {
    unlocks = new Map();
    // Setting up the unlocks systems\
    // Cryptography
    unlocks.set("cry1", "cry2");
    unlocks.set("cry2", "cry3");
    unlocks.set("cry3", "cry4");

    // Forensic
    unlocks.set("for1", "for2");
    unlocks.set("for2", "for3");
    unlocks.set("for3", "for4");

    //Buffer Overflow
    unlocks.set("buf1", "buf2");
    unlocks.set("buf2", "buf3");
    unlocks.set("buf3", "buf4");
}

function getUnlocks(flag) {
    if (unlocks.has(flag)) {
        return unlocks.get(flag);
    }
    return "";
}

export { initUnlocks, getUnlocks };

