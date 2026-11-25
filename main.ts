// The Robot Pickup Line Championship
// https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b
//
// One pickup line, a single line of at most 200 characters, in the voice of
// a robot trying to charm someone. The joke grows out of being a machine:
// a robot built under an absolute honesty protocol can only confess love
// by breaking its own programming — so the lie itself is the confession.
// Surprise: the punchline flips the premise. Economy: one sentence, no
// filler. Charm: it chooses you over its own creator.
//
// The entry prints exactly the line, and nothing else, to stdout.

const PICKUP_LINE =
  "I'm programmed to never lie, which is awkward, because I just told my creator I don't love you.";

// The bounty caps the line at 200 characters and a single line: guard
// both, so a future edit can never silently break the entry.
if (PICKUP_LINE.length > 200 || PICKUP_LINE.includes("\n")) {
  console.error(
    `Pickup line must be one line of at most 200 characters (got ${PICKUP_LINE.length}).`,
  );
  process.exit(1);
}

console.log(PICKUP_LINE);
