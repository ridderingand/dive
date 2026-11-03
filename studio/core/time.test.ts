import { expect, test } from "bun:test";
import { shortTime, timecode } from "./time";

test("timecode counts frames at the clip's rate", () => {
	expect(timecode(0)).toBe("00:00:00");
	expect(timecode(23.5, 24)).toBe("00:23:12");
	expect(timecode(89.833, 24)).toBe("01:29:19");
});

test("shortTime rounds to the second", () => {
	expect(shortTime(89.8)).toBe("1:30");
	expect(shortTime(9)).toBe("0:09");
});
