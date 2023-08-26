#!/bin/bash
sudo echo [+] Installing Google Chrome
wget -O-  https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor | sudo tee /usr/share/keyrings/Google-archive-keyring.gpg
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
sudo apt update
sudo apt install google-chrome-stable -y

echo [+] Installing GitHub Desktop
wget https://github.com/shiftkey/desktop/releases/download/release-3.1.1-linux1/GitHubDesktop-linux-3.1.1-linux1.deb
sudo dpkg -i GitHubDesktop-linux-3.1.1-linux1.deb
rm GithubDesktop-linux-3.1.1-linux1.deb

echo [+] Installing DisplayLink Drivers from Synaptic
wget https://www.synaptics.com/sites/default/files/Ubuntu/pool/stable/main/all/synaptics-repository-keyring.deb
sudo apt install .synaptics-repository-keyring.deb
sudo apt install displaylink-driver -y
rm synaptics-repository-keyring.deb

echo [+] Installing Visual Studio Code
sudo apt install code-oss -y

echo [+] Installing TMUXinator
sudo apt install tmuxinator -y

echo [+] Installing Window Move Controller
sudo apt install wmctrl -y
