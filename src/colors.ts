const chalk = require("chalk");

export function applyColor(
  text: string,
  color: string | undefined,
  backgroundColor: string | undefined,
  bold: boolean | undefined
): string {
  let coloredText = text;
  if (color) {
    if (chalk[color]) {
      coloredText = chalk[color](coloredText);
    } else if (color.startsWith("#")) {
      coloredText = chalk.hex(color)(coloredText);
    }
  }
  if (bold) {
    coloredText = chalk.bold(coloredText);
  }
  if (backgroundColor && backgroundColor !== "none") {
    if (chalk[backgroundColor]) {
      coloredText = chalk[
        `bg${backgroundColor[0].toUpperCase()}${backgroundColor.slice(1)}`
      ](` ${coloredText} `);
    } else if (backgroundColor.startsWith("#")) {
      coloredText = chalk.bgHex(backgroundColor)(` ${coloredText} `);
    }
  }
  return coloredText;
}