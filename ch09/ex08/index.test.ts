import { Action, AlarmClock, State } from ".";

// State
const sttNormal: State = "normal";
const sttAlarmSet: State = "alarmSet";
const sttAlarmSounding: State = "alarmSounding";
const sttSnoozing: State = "snoozing";
// Action
const actNone: Action = "none";
const actSoundAlarm: Action = "soundAlarm";
const actStopAlarm: Action = "stopAlarm";

test.each([
  { current: sttNormal, next: sttAlarmSet, action: actNone },
  { current: sttAlarmSet, next: sttAlarmSet, action: actNone },
  { current: sttAlarmSounding, next: sttAlarmSounding, action: actNone },
  { current: sttSnoozing, next: sttSnoozing, action: actNone },
])("setAlarm", ({ current, next, action }) => {
  const clock = createAlarmClockOf(current);
  expect(clock.setAlarm()).toBe(action);
  expect(clock.getState()).toBe(next);
});

test.each([
  { current: sttNormal, next: sttNormal, action: actNone },
  { current: sttAlarmSet, next: sttNormal, action: actNone },
  { current: sttAlarmSounding, next: sttNormal, action: actStopAlarm },
  { current: sttSnoozing, next: sttNormal, action: actNone },
])("cancelAlarm", ({ current, next, action }) => {
  const clock = createAlarmClockOf(current);
  expect(clock.cancelAlarm()).toBe(action);
  expect(clock.getState()).toBe(next);
});

test.each([
  { current: sttNormal, next: sttNormal, action: actNone },
  { current: sttAlarmSet, next: sttAlarmSounding, action: actSoundAlarm },
  { current: sttAlarmSounding, next: sttAlarmSounding, action: actNone },
  { current: sttSnoozing, next: sttSnoozing, action: actNone },
])("reachedToAlarmTime", ({ current, next, action }) => {
  const clock = createAlarmClockOf(current);
  expect(clock.reachedToAlarmTime()).toBe(action);
  expect(clock.getState()).toBe(next);
});

test.each([
  { current: sttNormal, next: sttNormal, action: actNone },
  { current: sttAlarmSet, next: sttAlarmSet, action: actNone },
  { current: sttAlarmSounding, next: sttSnoozing, action: actStopAlarm },
  { current: sttSnoozing, next: sttSnoozing, action: actNone },
])("snooze", ({ current, next, action }) => {
  const clock = createAlarmClockOf(current);
  expect(clock.snooze()).toBe(action);
  expect(clock.getState()).toBe(next);
});

test.each([
  { current: sttNormal, next: sttNormal, action: actNone },
  { current: sttAlarmSet, next: sttAlarmSet, action: actNone },
  { current: sttAlarmSounding, next: sttAlarmSounding, action: actNone },
  { current: sttSnoozing, next: sttAlarmSounding, action: actSoundAlarm },
])("elapseSnoozeTime%p.next", ({ current, next, action }) => {
  const clock = createAlarmClockOf(current);
  expect(clock.elapseSnoozeTime()).toBe(action);
  expect(clock.getState()).toBe(next);
});

/**
 * stateの状態のAlarmClockを生成します。
 * @param state
 * @returns AlarmClock
 */
function createAlarmClockOf(state: State): AlarmClock {
  const clock = new AlarmClock();
  switch (state) {
    case "normal":
      return clock;
    case "alarmSet":
      clock.setAlarm();
      return clock;
    case "alarmSounding":
      clock.setAlarm();
      clock.reachedToAlarmTime();
      return clock;
    case "snoozing":
      clock.setAlarm();
      clock.reachedToAlarmTime();
      clock.snooze();
      return clock;
  }
}
