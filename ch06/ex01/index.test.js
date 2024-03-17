import { newHashTable } from ".";

test("hashTable", () => {
    const hashTable = newHashTable();
    const [key1, key2, value1, value2] = ["key1", "key2", "value1", { value: "value2" }];

    hashTable.put(key1, value1);
    hashTable.put(key2, value2);
    expect(hashTable.size).toBe(2);
    expect(hashTable.get(key1)).toBe(value1);
    expect(hashTable.get(key2)).toBe(value2);

    const newValue = "new value";
    hashTable.put(key2, newValue);
    expect(hashTable.get(key2)).toBe(newValue);

    hashTable.remove(key2);
    expect(hashTable.get(key2)).toBe(undefined);
    expect(hashTable.size).toBe(1);
});