import fs from 'fs';
import os from 'os';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { cmd } from './cmd_process.mjs';
import { getAppDir } from './dirname.mjs';
import { selectPackages } from './package_selector.mjs';
import PowerShell from './powershell.mjs';

const __dirname = getAppDir();

selectPackages()
    .then((selectedPackages) => {
        let command = '';
        let args = [];
        if (os.platform() === 'win32') {
            const ps = new PowerShell();
            for (const p of selectedPackages) {
                if (p) {
                    ps.addCommand(p.installCommand);
                }
            }
            ps.addCommand('refreshenv\n'); // for powershell to refresh environment variables

            if (selectedPackages.some((p) => p && p.packageName.startsWith('Python'))) {
                ps.addEnvironment('$HOME\\AppData\\Roaming\\Python\\Scripts');
                ps.addCommand('python.exe -m pip install --upgrade pip'); // for pip
                ps.addCommand('(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | python -'); // for poetry
                ps.addCommand('poetry config virtualenvs.in-project true'); // for poetry
                const pipSetup = fs.readFileSync(path.join(__dirname, 'scripts/pip.setup'), 'utf8').trim();
                ps.addCommand(pipSetup);
            }
            if (selectedPackages.some((p) => p && p.packageName.startsWith('Rust'))) {
                ps.addEnvironment('$HOME\\leoli\\.cargo\\bin');
            }
            ps.addCommand('refreshenv\n'); // for powershell to refresh environment variables

            if (selectedPackages.some((p) => p && p.packageName.startsWith('Node.js'))) {
                const npmSetup = fs.readFileSync(path.join(__dirname, 'scripts/npm.setup'), 'utf8').trim();
                ps.addCommand(npmSetup);
                ps.addCommand('npx @leoli0605/git-setup'); // for git
            }
            ps.addCommand('refreshenv\n'); // for powershell to refresh environment variables

            if (selectedPackages.some((p) => p && p.packageName.startsWith('Sublime Text'))) {
                let sublimeSetup = fs.readFileSync(path.join(__dirname, 'scripts/windows/SublimeSetup.ps1'), 'utf8').trim();
                sublimeSetup = sublimeSetup.replace('${PATH}', path.join(__dirname, 'scripts/windows/Preferences.sublime-settings'));
                ps.addCommand(sublimeSetup);
            }
            ps.addCommand('refreshenv\n'); // for powershell to refresh environment variables

            const psScript = ps.getScripts();
            // fs.writeFileSync(path.join(__dirname, 'scripts.ps1.log'), psScript);

            const encodedPsScript = Buffer.from(psScript, 'utf16le').toString('base64');
            command = 'powershell.exe';
            args = ['-NoProfile', '-EncodedCommand', encodedPsScript];
        } else if (os.platform() === 'darwin') {
            console.log('MacOS detected');
        } else if (os.platform() === 'linux') {
            const distro = os
                .release()
                .split('.')
                .map((v) => parseInt(v));
            console.log('Linux distribution version:', distro);
            if (distro[0] >= 20 /* && distro[1] === 4 */) {
                console.log('Ubuntu 20.04 detected');
            } else {
                console.log('Ubuntu 20.04 not detected');
            }
        }

        console.log(`command: ${command}`);
        console.log(`args: ${args}`);
        cmd(command, args)
            .then(() => {
                console.log('Success executing scripts');
            })
            .catch((error) => {
                console.error('Error executing scripts:', error);
            });
    })
    .catch((error) => {
        console.error('Error selecting packages:', error);
    });