import chalk from 'chalk';
import gradient from 'gradient-string';
import makeWASocket from './Socket/index.js';

const rgb = {
    purple: chalk.hex('#a855f7'),
    indigo: chalk.hex('#6366f1'),
    cyan  : chalk.hex('#06b6d4'),
    amber : chalk.hex('#f59e0b'),
    green : chalk.hex('#10b981'),
};

const logoGradient = gradient(['#a855f7', '#6366f1', '#06b6d4']);

const line = rgb.indigo('═'.repeat(60));

const logo = logoGradient.multiline([
    '  _  _ _  _   _ ___   _   ',
    ' | || | || | | | _ \\ /_\\  ',
    ' | __ | || |_| |   // _ \\ ',
    ' |_||_|_| \\___/|_|_/_/ \\_\\',
].join('\n'));

const banner = [
    '',
    line,
    logo,
    line,
    chalk.bold(rgb.purple('  ⬡  HIURA BAILEYS  ')) + rgb.indigo('v1.5.3'),
    rgb.cyan('  ◈  By       : ') + chalk.bold.white('Nimzz') + chalk.dim(' · github.com/Nimzz-pemboy'),
    rgb.cyan('  ◈  GitHub   : ') + chalk.bold.cyan('github.com/Nimzz-pemboy/hiura-baileys'),
    line,
    rgb.green('  ✦  Thanks for using Hiura Baileys! Keep building~ 🚀'),
    line,
    '',
].join('\n');

console.log(banner);

export * from '../WAProto/index.js';
export { proto } from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { Hiura } from './Socket/hiura.js';
export * from './Utils/rich-messages.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
