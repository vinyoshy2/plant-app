export function getEntryFromID(id, json) {
    var proj;
    var entry;
    for (entry of json["entries"]) {
        if (entry["id"] === id) {
            proj = entry
        }
    }
    return proj;
}
